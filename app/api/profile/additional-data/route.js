import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { commonModuleMessages } from "@/locale";
import { profileModuleMessages } from "@/locale/profile";
import { updateProfileAdditionalDataFormSchema } from "@/modules/profile/schemas";
import { getServerSession } from "next-auth";

export async function PATCH(request) {
  try {
    const session = await getServerSession(authOptions);
    const body = await request.json();
    const parsedBody = updateProfileAdditionalDataFormSchema.parse(body);

    const profile = await db.profile.update({
      data: parsedBody,
      where: {
        user_id: session.user.id,
      },
    });

    return Response.json({
      message: profileModuleMessages.additionalDataUpdated,
      data: profile,
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
