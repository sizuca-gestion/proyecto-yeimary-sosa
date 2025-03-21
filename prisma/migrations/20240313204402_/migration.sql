/*
  Warnings:

  - A unique constraint covering the columns `[national_id]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Employee_national_id_key" ON "Employee"("national_id");
