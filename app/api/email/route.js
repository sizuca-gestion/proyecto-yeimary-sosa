import { commonModuleMessages } from "@/locale";
import { sendEmailSchema } from "@/modules/email/schemas/send-email";
import { createTransporter } from "@/modules/email/utils/send-email";

export async function POST(request) {
  try {
    const body = await request.json();
    const parsedBody = sendEmailSchema.parse(body);

    const transporter = createTransporter();

    const options = {
      from: process.env.SMTP_EMAIL,
      to: parsedBody.email,
      subject: parsedBody.subject,
      text: parsedBody.text,
    };

    const result = await transporter.sendMail(options);

    return Response.json({
      message: commonModuleMessages.emailSent,
      data: result.response,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: commonModuleMessages.serverError },
      { status: 500 }
    );
  }
}
