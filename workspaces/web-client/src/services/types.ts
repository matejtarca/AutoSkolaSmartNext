import { Application } from "@prisma/client";

export type Prices = {
  standard: number;
  quick: number;
  superQuick: number;
  individual: number;
  condDrive: number;
  addDrive: number;
  theoryLesson: number;
  standingInstructor: number;
  examFee: number;
  examRepeatFee: number;
};

export type Config = {
  bannerText: string | null;
  prices: Prices;
};

export type Applications = (Omit<Application, "createdAt" | "birthdate"> & {
  birthdate: string;
  createdAt: string;
})[];
