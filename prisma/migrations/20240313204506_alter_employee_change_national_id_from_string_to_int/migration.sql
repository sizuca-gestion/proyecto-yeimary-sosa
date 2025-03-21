/*
  Warnings:

  - Changed the type of `national_id` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "national_id",
ADD COLUMN     "national_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Employee_national_id_key" ON "Employee"("national_id");
