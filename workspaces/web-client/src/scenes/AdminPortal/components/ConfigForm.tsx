import React from "react";
import { Config } from "../../../services/types";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useRouter } from "next/router";

type ConfigFormProps = { currentConfig: Config };
type ConfigFormFields = {
  bannerText: string;
  priceStandard: string;
  priceQuick: string;
  priceExtraQuick: string;
  priceIndividual: string;
};
const ConfigForm = ({ currentConfig }: ConfigFormProps) => {
  const { register, handleSubmit } = useForm<ConfigFormFields>({
    defaultValues: {
      bannerText: currentConfig.bannerText ?? "",
      priceStandard: currentConfig.prices.standard.toString(),
      priceQuick: currentConfig.prices.quick.toString(),
      priceExtraQuick: currentConfig.prices.superQuick.toString(),
      priceIndividual: currentConfig.prices.individual.toString(),
    },
  });
  const { mutateAsync } = useMutation(async (data: Config) => {
    const res = await fetch("/api/save-config", {
      method: "POST",
      body: JSON.stringify(data),
    });
    return res.json();
  });
  const { push } = useRouter();
  const onSubmit = async (data: ConfigFormFields) => {
    await mutateAsync({
      bannerText: data.bannerText === "" ? null : data.bannerText,
      prices: {
        standard: Number(data.priceStandard),
        quick: Number(data.priceQuick),
        superQuick: Number(data.priceExtraQuick),
        individual: Number(data.priceIndividual),
      },
    });
    push("/");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "50vw",
      }}
    >
      <div className="form-group">
        <label htmlFor="bannerText">Text na banneri</label>
        <textarea
          rows={5}
          id="bannerText"
          className="form-control"
          {...register("bannerText")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priceStandard">Cena Štandardný kurz</label>
        <input
          type="number"
          id="priceStandard"
          className="form-control"
          {...register("priceStandard")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priceQuick">Cena Zrýchlený kurz</label>
        <input
          type="number"
          id="priceQuick"
          className="form-control"
          {...register("priceQuick")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priceExtraQuick">Cena Extra zrýchlený kurz</label>
        <input
          type="number"
          id="priceExtraQuick"
          className="form-control"
          {...register("priceExtraQuick")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priceIndividual">Cena Individuálny kurz</label>
        <input
          type="number"
          id="priceIndividual"
          className="form-control"
          {...register("priceIndividual")}
        />
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        style={{ backgroundColor: "#0d6efd", width: "fit-content" }}
      >
        Uložiť
      </button>
    </form>
  );
};

export default ConfigForm;
