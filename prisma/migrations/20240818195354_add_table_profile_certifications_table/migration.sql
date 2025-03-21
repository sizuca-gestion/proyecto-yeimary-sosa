-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "area_of_interest" TEXT;

-- CreateTable
CREATE TABLE "ProfileCertifications" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "issuer" TEXT NOT NULL,
    "start_date" DATE NOT NULL,
    "duration" INTEGER NOT NULL,
    "profile_id" INTEGER,

    CONSTRAINT "ProfileCertifications_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProfileCertifications" ADD CONSTRAINT "ProfileCertifications_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
