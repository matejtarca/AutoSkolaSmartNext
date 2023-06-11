import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const config = await prisma.configuration.findFirst({ where: { id: 1 } });
  if (!config) {
    await prisma.configuration.create({
      data: {
        id: 1,
        bannerText: null,
        priceStandard: 0,
        priceQuick: 0,
        priceExtraQuick: 0,
        priceIndividual: 0,
        priceAddDrive: 0,
        priceCondDrive: 0,
        priceExamRepeatFee: 0,
        priceExamFee: 0,
        priceTheoryLesson: 0,
        priceStandingInstructor: 0,
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
