/*
  Warnings:

  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_user_id_fkey";

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "college_major" TEXT,
ADD COLUMN     "college_name" TEXT,
ADD COLUMN     "project_name" TEXT;

-- DropTable
DROP TABLE "Student";
