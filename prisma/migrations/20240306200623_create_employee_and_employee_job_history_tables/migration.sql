-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "national_id" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "birth_date" DATE NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeJobHistory" (
    "id" SERIAL NOT NULL,
    "position" TEXT NOT NULL,
    "admission_date" DATE NOT NULL,
    "contract_reason" TEXT NOT NULL,
    "contract_type" TEXT NOT NULL,
    "contract_start_date" DATE NOT NULL,
    "contract_end_date" DATE NOT NULL,
    "organizational_unit" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "additional_comment_1" TEXT NOT NULL,
    "additional_comment_2" TEXT NOT NULL,
    "medical_condition" TEXT NOT NULL,

    CONSTRAINT "EmployeeJobHistory_pkey" PRIMARY KEY ("id")
);
