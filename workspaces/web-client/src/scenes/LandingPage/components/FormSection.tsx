import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useMutation } from "react-query";

export type FormFields = {
  name: string;
  birthdate: Date;
  address: string;
  psc: string;
  city: string;
  email: string;
  phone: string;
  message: string;
};

type FormSectionProps = {
  onSave?: () => void;
};

const FormSection = ({ onSave }: FormSectionProps) => {
  const { register, handleSubmit, reset } = useForm<FormFields>();
  const { mutateAsync } = useMutation((data: FormFields) => {
    return fetch("/api/save-application", {
      method: "POST",
      body: JSON.stringify(data),
    });
  });
  const onSubmit = async (data: FormFields) => {
    await mutateAsync(data);
    reset();
    if (onSave) {
      onSave();
    }
  };
  return (
    <section className="services section-bg" id="services">
      <div className="container">
        <div className="section-title">
          <h2>E-prihláška</h2>
        </div>
        <div className="content">
          <ul>
            <li>
              <i className="ri-check-double-line"></i> Vyplňte online prihlášku
              a odošlite, my Vás budeme kontaktovať s ďalšími podrobnosťami.
            </li>
            <li>
              <i className="ri-check-double-line"></i> E-prihláška je nezáväzná.
            </li>
            <li>
              <i className="ri-check-double-line"></i> Odoslaním prihlášky
              súhlasíte so spracovaním osobných údajov.
            </li>
          </ul>
          <br />
          <div className="contact">
            <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" name="type" value="eprihlaska" />
              <h2>Základné údaje</h2>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Meno a priezvisko</label>
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="birthdate">Dátum narodenia</label>
                  <input
                    className="form-control"
                    id="birthdate"
                    type="date"
                    {...register("birthdate", { required: true })}
                  />
                </div>
              </div>
              <h3>Adresa</h3>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="address">Adresa</label>
                  <input
                    className="form-control"
                    id="address"
                    type="text"
                    {...register("address", { required: true })}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="psc">PSČ</label>
                  <input
                    className="form-control"
                    id="psc"
                    type="text"
                    {...register("psc", { required: true })}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="city">Mesto</label>
                  <input
                    className="form-control"
                    id="city"
                    type="text"
                    {...register("city", { required: true })}
                  />
                </div>
              </div>
              <h3>Kontaktné údaje</h3>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="email">Váš email</label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="telephone">Telefónne číslo</label>
                  <input
                    className="form-control"
                    id="telephone"
                    type="tel"
                    {...register("phone", { required: true })}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Poznámka</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={10}
                  {...register("message", { required: false })}
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Vaša prihláška bola odoslaná!
                </div>
              </div>
              <div
                className="g-recaptcha"
                data-sitekey="6Lc8xvkdAAAAAHE_6o-X_Q3AshnhXPtlgpZKmvcZ"
              ></div>
              <br />
              <p>
                Odoslaním e-prihlášky súhlasíte so spracovaním osobných údajov.
                Informácie o spracúvaní osobných údajov nájdete{" "}
                <Link href="/terms" style={{ textDecoration: "underline" }}>
                  na tejto stránke
                </Link>
              </p>
              <br />
              <div className="text-center">
                <button type="submit">Odoslať prihlášku</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
