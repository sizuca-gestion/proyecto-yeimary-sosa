/*
  Warnings:

  - Added the required column `employee_id` to the `EmployeeJobHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmployeeJobHistory" ADD COLUMN     "employee_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "EmployeeJobHistory" ADD CONSTRAINT "EmployeeJobHistory_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
