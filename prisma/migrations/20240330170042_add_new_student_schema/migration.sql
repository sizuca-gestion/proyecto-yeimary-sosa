-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "student_id" INTEGER;

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "national_id" INTEGER NOT NULL,
    "sex" TEXT NOT NULL,
    "birth_date" DATE NOT NULL,
    "address" TEXT NOT NULL,
    "college_name" TEXT,
    "college_major" TEXT,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_national_id_key" ON "Student"("national_id");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
