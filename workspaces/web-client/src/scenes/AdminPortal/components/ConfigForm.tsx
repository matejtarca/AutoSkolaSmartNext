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
  priceCondDrive: string;
  priceAddDrive: string;
  priceTheoryLesson: string;
  priceStandingInstructor: string;
  priceExamFee: string;
  priceExamRepeatFee: string;
};
const ConfigForm = ({ currentConfig }: ConfigFormProps) => {
  const { register, handleSubmit } = useForm<ConfigFormFields>({
    defaultValues: {
      bannerText: currentConfig.bannerText ?? "",
      priceStandard: currentConfig.prices.standard.toString(),
      priceQuick: currentConfig.prices.quick.toString(),
      priceExtraQuick: currentConfig.prices.superQuick.toString(),
      priceIndividual: currentConfig.prices.individual.toString(),
      priceCondDrive: currentConfig.prices.condDrive.toString(),
      priceAddDrive: currentConfig.prices.addDrive.toString(),
      priceTheoryLesson: currentConfig.prices.theoryLesson.toString(),
      priceStandingInstructor:
        currentConfig.prices.standingInstructor.toString(),
      priceExamFee: currentConfig.prices.examFee.toString(),
      priceExamRepeatFee: currentConfig.prices.examRepeatFee.toString(),
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
        condDrive: Number(data.priceCondDrive),
        addDrive: Number(data.priceAddDrive),
        theoryLesson: Number(data.priceTheoryLesson),
        standingInstructor: Number(data.priceStandingInstructor),
        examFee: Number(data.priceExamFee),
        examRepeatFee: Number(data.priceExamRepeatFee),
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
      <div className="form-group">
        <label htmlFor="priceIndividual">Cena Kondičná jazda</label>
        <input
          type="number"
          id="priceIndividual"
          className="form-control"
          {...register("priceCondDrive")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priceIndividual">Cena Doplnková jazda</label>
        <input
          type="number"
          id="priceIndividual"
          className="form-control"
          {...register("priceAddDrive")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priceIndividual">
          Cena Náhradná vyučovacia hodina teórie
        </label>
        <input
          type="number"
          id="priceIndividual"
          className="form-control"
          {...register("priceTheoryLesson")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priceIndividual">Cena Stojné inštruktora</label>
        <input
          type="number"
          id="priceIndividual"
          className="form-control"
          {...register("priceStandingInstructor")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priceIndividual">Cena Skúška na VP skupiny B</label>
        <input
          type="number"
          id="priceIndividual"
          className="form-control"
          {...register("priceExamFee")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priceIndividual">
          Cena Opakovaná skúška na VP skupiny B
        </label>
        <input
          type="number"
          id="priceIndividual"
          className="form-control"
          {...register("priceExamRepeatFee")}
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
