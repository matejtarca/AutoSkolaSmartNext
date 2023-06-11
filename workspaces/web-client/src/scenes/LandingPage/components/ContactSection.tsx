import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Message } from "../../../services/types";

type ContactFormFields = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const { register, handleSubmit, reset } = useForm<ContactFormFields>({});
  const { mutateAsync } = useMutation((data: Message) => {
    return fetch("/api/send-message", {
      method: "POST",
      body: JSON.stringify(data),
    });
  });
  const onSubmit = async (data: ContactFormFields) => {
    await mutateAsync(data);
    reset();
  };
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Kontakt</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Nájdete nás na:</h4>
                <p>
                  Osloboditeľov 16, 040 17 Košice - Barca (oproti čerpacej
                  stanici Slovnaft)
                </p>
              </div>
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>rudolf.zjara@gmail.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Tel.:</h4>
                <p style={{ marginBottom: 0 }}>0903 747 877</p>
                <p>0917 976 016</p>
              </div>
              <div className="address">
                <i className="bi bi-map"></i>
                <h4>Ako sa k nám dostať?</h4>
                <p style={{ marginBottom: 0 }}>
                  Električka č. 4 (smer Socha Jána Pavla II): zastávka Socha
                  Jána Pavla II (konečná)
                </p>
                <p style={{ marginBottom: 0 }}>
                  Autobus č. 24 (smer Spaľovňa): zastávka Socha Jána Pavla II
                </p>
                <p style={{ marginBottom: 0 }}>
                  Autobus č. 12 (smer Šebastovce): zastávka Barca, Základná
                  škola
                </p>
                <p style={{ marginBottom: 0 }}>
                  <a
                    href="https://www.dpmk.sk/cestovanie/schema-siete-mhd"
                    target="blank_"
                  >
                    Schéma siete MHD v Košiciach
                  </a>
                </p>
                <p style={{ marginBottom: 0 }}>
                  <a
                    href="https://www.mhdspoje.cz/jrw50/kosice.php?page=4"
                    target="blank_"
                  >
                    Online plánovač spojenia MHD
                  </a>
                </p>
              </div>
              <iframe
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.google.com/maps/embed/v1/place?q=place_id:EitPc2xvYm9kaXRlxL5vdiAxNiwgMDQwIDE3IEtvxaFpY2UsIFNsb3Zha2lhIlASTgo0CjIJybINCA0gP0cR3MNMxuRHpDYaHgsQ7sHuoQEaFAoSCdlscrkXID9HEeD27wvV9wAcDBAQKhQKEgmnrlvRbCA_RxFap2VF0sRUYw&amp;key=AIzaSyBdhrhBTbjl9LLh0TYchjc80i7twbJ-vPA"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              className="php-email-form"
              role="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Meno</label>
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Váš email</label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Správa</label>
                <textarea
                  className="form-control"
                  rows={10}
                  {...register("message", { required: true })}
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Poslať správu</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
