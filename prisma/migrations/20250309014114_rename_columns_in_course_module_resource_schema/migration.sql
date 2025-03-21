/*
  Warnings:

  - You are about to drop the column `resource_id` on the `CourseModuleResource` table. All the data in the column will be lost.
  - Added the required column `module_id` to the `CourseModuleResource` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CourseModuleResource" DROP CONSTRAINT "CourseModuleResource_resource_id_fkey";

-- AlterTable
ALTER TABLE "CourseModuleResource" DROP COLUMN "resource_id",
ADD COLUMN     "module_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "CourseModuleResource" ADD CONSTRAINT "CourseModuleResource_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "CourseModule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
