-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "has_relative_working" DROP NOT NULL,
ALTER COLUMN "has_relative_working" DROP DEFAULT,
ALTER COLUMN "has_relative_working" SET DATA TYPE TEXT,
ALTER COLUMN "has_commercial_relationship" DROP NOT NULL,
ALTER COLUMN "has_commercial_relationship" DROP DEFAULT,
ALTER COLUMN "has_commercial_relationship" SET DATA TYPE TEXT,
ALTER COLUMN "has_volunteered" DROP NOT NULL,
ALTER COLUMN "has_volunteered" DROP DEFAULT,
ALTER COLUMN "has_volunteered" SET DATA TYPE TEXT,
ALTER COLUMN "has_own_business" DROP NOT NULL,
ALTER COLUMN "has_own_business" DROP DEFAULT,
ALTER COLUMN "has_own_business" SET DATA TYPE TEXT;
