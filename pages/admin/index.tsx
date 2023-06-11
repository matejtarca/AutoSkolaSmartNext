import React from "react";
import AdminPortal, {
  AdminPortalProps,
} from "../../workspaces/web-client/src/scenes/AdminPortal/AdminPortal";
import prisma from "../../workspaces/web-client/src/db/db";
import { Applications } from "../../workspaces/web-client/src/services/types";
import { NextApiRequest, NextPage } from "next";
import { verify } from "jsonwebtoken";
import { defaultConfig } from "../../workspaces/web-client/src/services/consts";

const Page: NextPage<AdminPortalProps> = (props) => {
  return <AdminPortal {...props} />;
};

export const getServerSideProps = async ({ req }: { req: NextApiRequest }) => {
  const token = req.cookies?.token;
  if (!token) {
    return {
      redirect: {
        destination: "/admin/login",
      },
    };
  }

  try {
    const { username } = verify(
      token,
      process.env.NEXT_AUTH_SECRET as string
    ) as { username: string };
    if (username !== process.env.ADMIN_USERNAME) {
      return {
        redirect: {
          destination: "/admin/login",
        },
      };
    }
  } catch (e) {
    return {
      redirect: {
        destination: "/admin/login",
      },
    };
  }

  const applicationsFull = await prisma.application.findMany();
  const applications: Applications = applicationsFull.map((application) => ({
    ...application,
    birthdate: application.birthdate.toLocaleDateString("sk-SK"),
    createdAt: application.createdAt.toLocaleDateString("sk-SK"),
  }));

  const configData = await prisma.configuration.findFirst({ where: { id: 1 } });
  const config = configData
    ? {
        bannerText: configData.bannerText,
        prices: {
          standard: configData.priceStandard,
          quick: configData.priceQuick,
          superQuick: configData.priceExtraQuick,
          individual: configData.priceIndividual,
          condDrive: configData.priceCondDrive,
          addDrive: configData.priceAddDrive,
          theoryLesson: configData.priceTheoryLesson,
          standingInstructor: configData.priceStandingInstructor,
          examFee: configData.priceExamFee,
          examRepeatFee: configData.priceExamRepeatFee,
        },
      }
    : defaultConfig;
  const props: AdminPortalProps = {
    applications,
    currentConfig: config,
  };
  return {
    props,
  };
};

export default Page;
