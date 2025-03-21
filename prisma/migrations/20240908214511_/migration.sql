/*
  Warnings:

  - You are about to drop the column `user_id` on the `History` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profile_id]` on the table `History` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profile_id` to the `History` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "History" DROP CONSTRAINT "History_user_id_fkey";

-- DropIndex
DROP INDEX "History_user_id_key";

-- AlterTable
ALTER TABLE "History" DROP COLUMN "user_id",
ADD COLUMN     "profile_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "History_profile_id_key" ON "History"("profile_id");

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
