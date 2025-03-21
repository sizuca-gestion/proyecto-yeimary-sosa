-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cover" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseModule" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "course_id" INTEGER NOT NULL,

    CONSTRAINT "CourseModule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseModelResource" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT,
    "resource_id" INTEGER NOT NULL,

    CONSTRAINT "CourseModelResource_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CourseModule" ADD CONSTRAINT "CourseModule_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseModelResource" ADD CONSTRAINT "CourseModelResource_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "CourseModule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
