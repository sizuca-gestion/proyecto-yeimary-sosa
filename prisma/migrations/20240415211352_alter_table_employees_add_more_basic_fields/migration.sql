-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "education_level" TEXT,
ADD COLUMN     "has_commercial_relationship" BOOLEAN,
ADD COLUMN     "has_own_business" BOOLEAN,
ADD COLUMN     "has_relative_working" BOOLEAN,
ADD COLUMN     "has_volunteered" BOOLEAN,
ADD COLUMN     "last_employer" TEXT,
ADD COLUMN     "second_to_last_employer" TEXT;
