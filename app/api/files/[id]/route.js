import { db } from "@/lib/db";
import { commonModuleMessages } from "@/locale";

export async function GET(request, route) {
  try {
    const file = await db.file.findUnique({
      where: {
        id: route.params.id,
      },
    });

    const readStream = fileSystem.createReadStream(file.path);
    readStream.pipe(response);
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: commonModuleMessages.serverError },
      { status: 500 }
    );
  }
}
