import React from "react";
import LandingPage, {
  LandingProps,
} from "../workspaces/web-client/src/scenes/LandingPage/LandingPage";
import prisma from "../workspaces/web-client/src/db/db";
import { GetServerSideProps, NextPage } from "next";
import { Config } from "../workspaces/web-client/src/services/types";
import { defaultConfig } from "../workspaces/web-client/src/services/consts";

const Landing: NextPage<LandingProps> = (props) => {
  return <LandingPage {...props} />;
};

export const getServerSideProps: GetServerSideProps<
  LandingProps
> = async () => {
  const data = await prisma.configuration.findFirst({ where: { id: 1 } });
  if (data) {
    const config: Config = {
      bannerText: data.bannerText,
      prices: {
        standard: data.priceStandard,
        quick: data.priceQuick,
        superQuick: data.priceExtraQuick,
        individual: data.priceIndividual,
      },
    };
    return {
      props: { config },
    };
  }
  return {
    props: {
      config: defaultConfig,
    },
  };
};

export default Landing;
