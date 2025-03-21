/*
  Warnings:

  - You are about to drop the column `address` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `birth_date` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `national_id` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `sex` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmployeeJobHistory` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[national_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_user_id_fkey";

-- DropForeignKey
ALTER TABLE "EmployeeJobHistory" DROP CONSTRAINT "EmployeeJobHistory_employee_id_fkey";

-- DropIndex
DROP INDEX "Student_national_id_key";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "address",
DROP COLUMN "birth_date",
DROP COLUMN "name",
DROP COLUMN "national_id",
DROP COLUMN "sex";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" TEXT,
ADD COLUMN     "birth_date" DATE,
ADD COLUMN     "education_level" TEXT,
ADD COLUMN     "has_commercial_relationship" BOOLEAN,
ADD COLUMN     "has_own_business" BOOLEAN,
ADD COLUMN     "has_relative_working" BOOLEAN,
ADD COLUMN     "has_volunteered" BOOLEAN,
ADD COLUMN     "last_employer" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "national_id" INTEGER,
ADD COLUMN     "second_to_last_employer" TEXT,
ADD COLUMN     "sex" TEXT;

-- DropTable
DROP TABLE "Employee";

-- DropTable
DROP TABLE "EmployeeJobHistory";

-- CreateTable
CREATE TABLE "UserHistory" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "contract_reason" TEXT,
    "contract_type" TEXT,
    "contract_start_date" DATE,
    "contract_end_date" DATE,
    "organizational_unit" TEXT NOT NULL,
    "comment" TEXT,
    "additional_comment_1" TEXT,
    "additional_comment_2" TEXT,
    "medical_condition" TEXT,
    "movement_type" TEXT,
    "reclassification_date" DATE,
    "integration_date" DATE,
    "shift" TEXT,

    CONSTRAINT "UserHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserHistory_user_id_key" ON "UserHistory"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_national_id_key" ON "User"("national_id");

-- AddForeignKey
ALTER TABLE "UserHistory" ADD CONSTRAINT "UserHistory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
