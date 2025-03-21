/*
  Warnings:

  - You are about to drop the `CourseModelResource` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CourseModelResource" DROP CONSTRAINT "CourseModelResource_resource_id_fkey";

-- DropTable
DROP TABLE "CourseModelResource";

-- CreateTable
CREATE TABLE "CourseModuleResource" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT,
    "resource_id" INTEGER NOT NULL,

    CONSTRAINT "CourseModuleResource_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CourseModuleResource" ADD CONSTRAINT "CourseModuleResource_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "CourseModule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
