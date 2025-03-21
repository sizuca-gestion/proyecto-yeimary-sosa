import { db } from "@/lib/db";
import { commonModuleMessages } from "@/locale";

export async function GET(request) {
  try {
    const searchTerm = request.nextUrl.searchParams.get("searchTerm");

    const courses = await db.course.findMany({
      where: {
        OR: [
          {
            title: { contains: String(searchTerm), mode: "insensitive" },
          },
          {
            description: { contains: String(searchTerm), mode: "insensitive" },
          },
        ],
      },
    });

    return Response.json({
      message: commonModuleMessages.ok,
      data: courses,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: commonModuleMessages.serverError },
      { status: 500 }
    );
  }
}
