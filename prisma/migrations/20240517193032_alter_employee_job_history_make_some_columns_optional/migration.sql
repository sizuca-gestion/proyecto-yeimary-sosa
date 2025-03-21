-- AlterTable
ALTER TABLE "EmployeeJobHistory" ALTER COLUMN "contract_reason" DROP NOT NULL,
ALTER COLUMN "contract_type" DROP NOT NULL,
ALTER COLUMN "contract_start_date" DROP NOT NULL,
ALTER COLUMN "contract_end_date" DROP NOT NULL,
ALTER COLUMN "comment" DROP NOT NULL,
ALTER COLUMN "medical_condition" DROP NOT NULL;
