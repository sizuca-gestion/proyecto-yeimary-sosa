-- AlterTable
ALTER TABLE "EmployeeJobHistory" ADD COLUMN     "integration_date" DATE,
ADD COLUMN     "movement_type" TEXT,
ADD COLUMN     "reclassification_date" DATE;
