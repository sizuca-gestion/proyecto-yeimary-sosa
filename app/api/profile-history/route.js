import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { commonModuleMessages, profileHistoryModuleMessages } from "@/locale";
import {
  addProfileHistorySchema,
  updateProfileHistorySchema,
} from "@/modules/profile-history/schemas";
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
        history: {
          orderBy: {
            integration_date: "desc",
          },
        },
      },
      where,
    });

    return Response.json({
      message: commonModuleMessages.ok,
      data: profile.history,
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
    const body = await request.json();
    const parsedBody = addProfileHistorySchema.parse(body);

    const history = await db.history.create({
      data: parsedBody,
      include: {
        profile: true,
      },
    });

    return Response.json({
      message: profileHistoryModuleMessages.created,
      data: history.id,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: commonModuleMessages.serverError },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const parsedBody = updateProfileHistorySchema.parse(body);

    const history = await db.history.create({
      data: {
        profile_id: parsedBody.profile_id,
        position: parsedBody.new_position,
        organizational_unit: parsedBody.new_organizational_unit,
        integration_date: parsedBody.integration_date,
        reclassification_date: parsedBody.reclassification_date,
        movement_type: parsedBody.movement_type,
      },
    });

    return Response.json({
      message: profileHistoryModuleMessages.updated,
      data: history.id,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: commonModuleMessages.serverError },
      { status: 500 }
    );
  }
}
