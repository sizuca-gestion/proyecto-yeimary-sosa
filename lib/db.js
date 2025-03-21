import { PrismaClient } from "@prisma/client";

let globalForPrisma = undefined;

const prisma = globalForPrisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma = prisma;

export const db = prisma;
