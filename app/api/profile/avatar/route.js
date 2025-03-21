import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { commonModuleMessages } from "@/locale";
import { profileModuleMessages } from "@/locale/profile";
import { getServerSession } from "next-auth";

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    const formData = await request.formData();
    const avatar = formData.get("avatar");
    const buffer = Buffer.from(await avatar.arrayBuffer()).toString("base64");

    const profile = await db.profile.update({
      data: { avatar: buffer },
      where: {
        user_id: session.user.id,
      },
    });

    return Response.json({
      message: profileModuleMessages.avatarUpdated,
      data: profile.avatar,
    });
  } catch (error) {
    console.error(error);
    // TODO: Throw error about existing national_id
    return Response.json(
      { message: commonModuleMessages.serverError },
      { status: 500 }
    );
  }
}
