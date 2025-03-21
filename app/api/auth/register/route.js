import { hash } from "bcrypt";
import { db } from "@/lib/db";
import { addUserSchema } from "@/modules/users/schemas/add-user";
import { commonModuleMessages } from "@/locale";
import { createTransporter } from "@/modules/email/utils/send-email";

export async function POST(request) {
  try {
    const body = await request.json();

    const { email, username, password } = addUserSchema.parse(body);

    const existingEmail = await db.user.findUnique({
      where: { email },
    });

    const existingUsername = await db.user.findUnique({
      where: { username },
    });

    if (existingEmail || existingUsername) {
      return Response.json(
        { message: "This user already exists" },
        { status: 409 }
      );
    }

    const encryptedPassword = await hash(password, 10);

    const user = await db.user.create({
      data: {
        email,
        username,
        password: encryptedPassword,
      },
    });

    await db.profile.create({
      data: {
        user_id: user.id,
      },
    });

    const transporter = createTransporter();

    const options = {
      ...transporter.options,
      to: email,
      subject: "Bienvenido a Siderúrgica Zuliana C.A.",
      html: `
        <p>Bienvenido a Siderúgica Zuliana C.A, Espero que tu paso por la empresa sea muy gratificante tanto para ti como para nosotros. Estamos listos para trabajar hacia un objetivo en común. Hacemos posible nuevos comienzos, creando oportunidades para transformar la historia. Estamos para generar valor y empoderar a las personas que transforman el futuro. Éxitos.</p>
        <div style="text-align:center; margin-top:32px;">
          <img src="https://www.sizuca.com.ve/wp-content/uploads/2021/06/siderurgica-zuliana-sizuca-logo.png" height="100px" />
        </div>
      `,
    };

    await transporter.transporter.sendMail(options);

    return Response.json({
      message: "User registered successfuly",
      data: user,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: commonModuleMessages.serverError },
      { status: 500 }
    );
  }
}
