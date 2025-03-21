import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import {
  commonModuleMessages,
  profileCertificationsModuleMessages,
} from "@/locale";
import { updateProfileCertificationFormSchema } from "@/modules/profile/schemas";
import { getServerSession } from "next-auth";

export async function GET(request, route) {
  try {
    const session = await getServerSession(authOptions);

    const id = request.nextUrl.searchParams.get("id");

    const where = {};

    if (id) {
      where.id = Number(id);
    } else {
      where.user_id = session.user.id;
    }

    const profile = await db.profile.findUnique({
      select: {
        id: true,
        certifications: {
          orderBy: {
            start_date: "desc",
          },
        },
      },
      where,
    });

    return Response.json({
      message: commonModuleMessages.ok,
      data: profile.certifications,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: commonModuleMessages.serverError },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    const body = await request.json();
    const parsedBody = updateProfileCertificationFormSchema.parse(body);

    const profile = await db.profile.findUnique({
      select: {
        id: true,
      },
      where: {
        user_id: session.user.id,
      },
    });

    const certifications = await db.profileCertifications.create({
      data: { ...parsedBody, profile_id: profile.id },
    });

    return Response.json({
      message: profileCertificationsModuleMessages.created,
      data: certifications,
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
