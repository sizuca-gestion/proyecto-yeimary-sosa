import { db } from "@/lib/db";
import { commonModuleMessages } from "@/locale";

export async function GET(request, { params }) {
  try {
    const course = await db.course.findUnique({
      where: {
        id: parseInt(params.id),
      },
      include: {
        course_module: {
          include: {
            course_module_resource: true,
          },
        },
      },
    });

    return Response.json({
      message: commonModuleMessages.ok,
      data: course,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: commonModuleMessages.serverError },
      { status: 500 }
    );
  }
}
