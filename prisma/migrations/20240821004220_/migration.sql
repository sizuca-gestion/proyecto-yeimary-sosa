/*
  Warnings:

  - The `area_of_interest` column on the `Profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "area_of_interest",
ADD COLUMN     "area_of_interest" TEXT[];
