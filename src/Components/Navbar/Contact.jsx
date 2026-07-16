import React from "react";
import { GiPositionMarker } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { useForm, ValidationError } from "@formspree/react";
import Reveal from "../Reveal/Reveal";

const content = {
  FR: {
    label: "05",
    title: "Contact",
    subtitle: "Discutons de votre projet",
    infoTitle: "Informations de contact",
    availability:
      "Je suis disponible pour des opportunités en entreprise, des collaborations freelance ou des projets innovants.",
    name: "Nom",
    namePh: "Votre nom",
    email: "Email",
    emailPh: "Votre email",
    message: "Message",
    messagePh: "Votre message",
    send: "Envoyer le message",
    sending: "Envoi en cours...",
    successTitle: "Merci pour votre message !",
    successText: "Je vous répondrai dans les plus brefs délais.",
  },
  EN: {
    label: "05",
    title: "Contact",
    subtitle: "Let's talk about your project",
    infoTitle: "Contact Information",
    availability:
      "I am available for job opportunities, freelance collaborations and innovative projects.",
    name: "Name",
    namePh: "Your name",
    email: "Email",
    emailPh: "Your email",
    message: "Message",
    messagePh: "Your message",
    send: "Send Message",
    sending: "Sending...",
    successTitle: "Thank you for reaching out!",
    successText: "I will get back to you shortly.",
  },
};

const Contact = ({ language }) => {
  const [state, handleSubmit] = useForm("xldlbawd");
  const t = content[language];

  return (
    <section id="contact" className="min-h-screen bg-ink-900 px-6 md:px-10 py-24">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">{t.label}</p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white">{t.title}</h1>
          <p className="text-gray-400 mt-3">{t.subtitle}</p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <Reveal>
            <div className="h-full bg-ink-800 border border-ink-600 rounded-xl p-7 text-gray-300">
              <p className="text-xl font-semibold text-white">{t.infoTitle}</p>
              <p className="text-sm mt-5 leading-6 text-gray-400">{t.availability}</p>

              <div className="mt-7 space-y-4">
                <p className="text-sm font-medium flex items-center">
                  <IoIosMail className="mr-3 text-accent text-2xl" />
                  mamadoukabadiagne@gmail.com
                </p>
                <p className="text-sm font-medium flex items-center">
                  <GiPositionMarker className="mr-3 text-accent text-2xl" />
                  Dakar, Sénégal
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-ink-800 border border-ink-600 rounded-xl p-7">
              {state.succeeded ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <p className="text-accent font-semibold text-lg">✅ {t.successTitle}</p>
                  <p className="text-gray-400 mt-2 text-sm">{t.successText}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      {t.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full py-2.5 mt-2 px-4 bg-ink-900 border border-ink-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
                      placeholder={t.namePh}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full py-2.5 mt-2 px-4 bg-ink-900 border border-ink-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
                      placeholder={t.emailPh}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      {t.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="4"
                      className="w-full py-2.5 mt-2 px-4 bg-ink-900 border border-ink-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
                      placeholder={t.messagePh}
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-3 mt-2 bg-accent text-ink-950 font-semibold rounded-lg hover:bg-accent-light transition duration-300 disabled:opacity-60"
                  >
                    {state.submitting ? t.sending : t.send}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
