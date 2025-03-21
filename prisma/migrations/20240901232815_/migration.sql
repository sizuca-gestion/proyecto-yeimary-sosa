/*
  Warnings:

  - You are about to drop the column `college_plan_url` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `project_plan_url` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "college_plan_url",
DROP COLUMN "project_plan_url";

-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "profile_id" INTEGER,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
