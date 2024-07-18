import prisma from "@/app/_lib/prisma";

export async function findCategory(id) {
    return prisma.category.findFirst({ where: { id } })
}
