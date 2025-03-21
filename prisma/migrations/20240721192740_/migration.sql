/*
  Warnings:

  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `birth_date` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `education_level` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `has_commercial_relationship` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `has_own_business` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `has_relative_working` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `has_volunteered` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_employer` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `national_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `second_to_last_employer` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `sex` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `UserHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserHistory" DROP CONSTRAINT "UserHistory_user_id_fkey";

-- DropIndex
DROP INDEX "User_national_id_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
DROP COLUMN "birth_date",
DROP COLUMN "education_level",
DROP COLUMN "has_commercial_relationship",
DROP COLUMN "has_own_business",
DROP COLUMN "has_relative_working",
DROP COLUMN "has_volunteered",
DROP COLUMN "last_employer",
DROP COLUMN "name",
DROP COLUMN "national_id",
DROP COLUMN "second_to_last_employer",
DROP COLUMN "sex";

-- DropTable
DROP TABLE "UserHistory";

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "national_id" INTEGER,
    "sex" TEXT,
    "birth_date" DATE,
    "address" TEXT,
    "education_level" TEXT,
    "profession" TEXT,
    "has_relative_working" BOOLEAN,
    "has_commercial_relationship" BOOLEAN,
    "has_volunteered" BOOLEAN,
    "has_own_business" BOOLEAN,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "History" (
    "id" SERIAL NOT NULL,
    "position" TEXT NOT NULL,
    "contract_reason" TEXT,
    "contract_type" TEXT,
    "contract_start_date" DATE,
    "contract_end_date" DATE,
    "organizational_unit" TEXT NOT NULL,
    "comment" TEXT,
    "additional_comment_1" TEXT,
    "additional_comment_2" TEXT,
    "medical_condition" TEXT,
    "movement_type" TEXT,
    "reclassification_date" DATE,
    "integration_date" DATE,
    "shift" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_national_id_key" ON "Profile"("national_id");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_user_id_key" ON "Profile"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "History_user_id_key" ON "History"("user_id");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
