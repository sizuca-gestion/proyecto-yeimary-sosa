import { db } from "@/lib/db";
import { commonModuleMessages } from "@/locale";
import { studentModuleMessages } from "@/locale/students";
import { addStudentFormSchema } from "@/modules/students/schemas/add-student";

export async function POST(request) {
  try {
    const body = await request.json();
    const parsedBody = addStudentFormSchema.parse(body);

    const student = await db.student.create({
      data: parsedBody,
    });

    return Response.json({
      message: studentModuleMessages.created,
      data: student.id,
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
    const students = await db.student.findMany();

    return Response.json({
      message: commonModuleMessages.ok,
      data: students,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: commonModuleMessages.serverError },
      { status: 500 }
    );
  }
}
