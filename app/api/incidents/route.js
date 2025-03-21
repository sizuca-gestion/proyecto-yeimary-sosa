import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { commonModuleMessages, incidentModuleMessages } from "@/locale";
import { addIncidentFormSchema } from "@/modules/incidents/schemas";
import { getServerSession } from "next-auth";

export async function PATCH(request) {
  try {
    const session = await getServerSession(authOptions);
    const body = await request.json();
    const parsedBody = addIncidentFormSchema.parse(body);

    const incident = await db.incident.create({
      data: { ...parsedBody, user_id: session.user.id },
    })

    return Response.json({
      message: incidentModuleMessages.created,
      data: incident,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: commonModuleMessages.serverError },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    const incidents = await db.incident.findMany({ 'where': { 'user_id': session.user.id } });

    return Response.json({
      message: commonModuleMessages.ok,
      data: incidents,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: commonModuleMessages.serverError },
      { status: 500 }
    );
  }
}
