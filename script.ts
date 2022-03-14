import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const users = await prisma.user.findMany({
        include: {
            posts: true,
        }
    })
    

    return console.log(JSON.stringify(users, null, 1))
};

main().catch((e) => {
    throw e;
}).finally(async () => {
    await prisma.$disconnect();
});