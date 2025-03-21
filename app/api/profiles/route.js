import { db } from "@/lib/db";
import { commonModuleMessages } from "@/locale";

export async function GET(request) {
  try {
    const searchTerm = request.nextUrl.searchParams.get("searchTerm");

    const profiles = await db.profile.findMany({
      include: {
        history: {
          select: {
            position: true,
            organizational_unit: true,
          },
          orderBy: {
            integration_date: "desc",
          },
        },
      },
      where: {
        AND: [{ name: { not: null } }],
        OR: [
          { name: { contains: String(searchTerm), mode: "insensitive" } },
          { national_id: { equals: Number(searchTerm) } },
        ],
      },
    });

    const data = profiles.map((profile) => {
      const latestJobHistory = profile.history[0];
      return {
        ...profile,
        position: latestJobHistory?.position ?? null,
        organizational_unit: latestJobHistory?.organizational_unit ?? null,
      };
    });

    return Response.json({
      message: commonModuleMessages.ok,
      data,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: commonModuleMessages.serverError },
      { status: 500 }
    );
  }
}
