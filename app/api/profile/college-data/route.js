import fsAsync from "fs/promises";
import path from "path";

import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { commonModuleMessages } from "@/locale";
import { profileModuleMessages } from "@/locale/profile";
import { updateProfileCollegeDataFormSchema } from "@/modules/profile/schemas";
import { fileTypes } from "@/src/constants";
import { getServerSession } from "next-auth";

export async function PATCH(request) {
  try {
    const session = await getServerSession(authOptions);
    const formData = await request.formData();

    const body = {
      college_major: formData.get("college_major"),
      college_name: formData.get("college_name"),
      college_plan: formData.get("college_plan"),
      project_name: formData.get("project_name"),
      project_plan: formData.get("project_plan"),
      project_slides: formData.get("project_slides"),
    };

    const parsedBody = updateProfileCollegeDataFormSchema.parse(body);

    const profile = await db.profile.findUnique({
      select: {
        id: true,
        files: {
          select: {
            id: true,
            type: true,
          },
        },
      },
      where: {
        user_id: session.user.id,
        files: {
          every: {
            type: {
              in: [
                fileTypes.PROJECT_PLAN,
                fileTypes.COLLEGE_PLAN,
                fileTypes.PROJECT_SLIDES,
              ],
            },
          },
        },
      },
    });

    const baseDirectory = `files/profiles/${session.user.id}`;

    await fsAsync.mkdir(baseDirectory, { recursive: true });

    if (parsedBody.college_plan) {
      const collegePlanArrayBuffer =
        await parsedBody.college_plan.arrayBuffer();
      const collegePlanBuffer = new Uint8Array(collegePlanArrayBuffer);

      const collegePlanFileExtension = path.extname(
        parsedBody.project_plan.name
      );

      const collegePlanPath = `${baseDirectory}/plan_de_proyecto_universidad${collegePlanFileExtension}`;
      await fsAsync.writeFile(collegePlanPath, collegePlanBuffer);

      const collegePlan = profile.files.find(
        (f) => f.type === fileTypes.COLLEGE_PLAN
      );

      if (collegePlan) {
        await db.file.update({
          data: {
            path: collegePlanPath,
          },
          where: {
            id: collegePlan.id,
          },
        });
      } else {
        await db.file.create({
          data: {
            path: collegePlanPath,
            type: fileTypes.COLLEGE_PLAN,
            profile_id: profile.id,
          },
        });
      }
    }
    if (parsedBody.project_plan) {
      const projectPlanArrayBuffer =
        await parsedBody.project_plan.arrayBuffer();
      const projectPlanBuffer = new Uint8Array(projectPlanArrayBuffer);

      const projectPlanFileExtension = path.extname(
        parsedBody.project_plan.name
      );

      const projectPlanPath = `${baseDirectory}/plan_de_proyecto_sizuca${projectPlanFileExtension}`;
      await fsAsync.writeFile(projectPlanPath, projectPlanBuffer);

      const projectPlan = profile.files.find(
        (f) => f.type === fileTypes.PROJECT_PLAN
      );

      if (projectPlan) {
        await db.file.update({
          data: {
            path: projectPlanPath,
          },
          where: {
            id: projectPlan.id,
          },
        });
      } else {
        await db.file.create({
          data: {
            path: projectPlanPath,
            type: fileTypes.PROJECT_PLAN,
            profile_id: profile.id,
          },
        });
      }
    }
    if (parsedBody.project_slides) {
      const projectSlidesArrayBuffer =
        await parsedBody.project_slides.arrayBuffer();
      const projectSlidesBuffer = new Uint8Array(projectSlidesArrayBuffer);

      const projectSlidesFileExtension = path.extname(
        parsedBody.project_slides.name
      );

      const projectSlidesPath = `${baseDirectory}/presentacion_de_proyecto_sizuca${projectSlidesFileExtension}`;
      await fsAsync.writeFile(projectSlidesPath, projectSlidesBuffer);

      const projectSlides = profile.files.find(
        (f) => f.type === fileTypes.PROJECT_SLIDES
      );

      if (projectSlides) {
        await db.file.update({
          data: {
            path: projectSlidesPath,
          },
          where: {
            id: projectSlides.id,
          },
        });
      } else {
        await db.file.create({
          data: {
            path: projectSlidesPath,
            type: fileTypes.PROJECT_SLIDES,
            profile_id: profile.id,
          },
        });
      }
    }

    const updatedProfile = await db.profile.update({
      data: {
        college_name: parsedBody.college_name,
        college_major: parsedBody.college_major,
        project_name: parsedBody.project_name,
      },
      where: {
        user_id: session.user.id,
      },
    });

    return Response.json({
      message: profileModuleMessages.collegeDataUpdated,
      data: updatedProfile,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: commonModuleMessages.serverError },
      { status: 500 }
    );
  }
}
