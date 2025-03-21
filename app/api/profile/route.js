import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { commonModuleMessages } from "@/locale";
import { profileModuleMessages } from "@/locale/profile";
import { updateProfileFormSchema } from "@/modules/profile/schemas";
import { getServerSession } from "next-auth";

export async function PATCH(request) {
  try {
    const session = await getServerSession(authOptions);
    const body = await request.json();
    const parsedBody = updateProfileFormSchema.parse(body);

    const profile = await db.profile.update({
      data: parsedBody,
      where: {
        user_id: session.user.id,
      },
    });

    return Response.json({
      message: profileModuleMessages.updated,
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

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);

    const id = request.nextUrl.searchParams.get("id");

    const params = {
      where: {},
    };

    if (id) {
      params.where.id = Number(id);
    } else {
      params.where.user_id = session.user.id;
    }

    const profile = await db.profile.findUnique(params);

    return Response.json({
      message: commonModuleMessages.ok,
      data: profile,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: commonModuleMessages.serverError },
      { status: 500 }
    );
  }
}
