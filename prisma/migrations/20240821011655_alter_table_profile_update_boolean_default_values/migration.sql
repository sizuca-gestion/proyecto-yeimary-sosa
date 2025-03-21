/*
  Warnings:

  - Made the column `has_relative_working` on table `Profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `has_commercial_relationship` on table `Profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `has_volunteered` on table `Profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `has_own_business` on table `Profile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "has_relative_working" SET NOT NULL,
ALTER COLUMN "has_relative_working" SET DEFAULT false,
ALTER COLUMN "has_commercial_relationship" SET NOT NULL,
ALTER COLUMN "has_commercial_relationship" SET DEFAULT false,
ALTER COLUMN "has_volunteered" SET NOT NULL,
ALTER COLUMN "has_volunteered" SET DEFAULT false,
ALTER COLUMN "has_own_business" SET NOT NULL,
ALTER COLUMN "has_own_business" SET DEFAULT false;
