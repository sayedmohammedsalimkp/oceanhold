"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "./FadeIn";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim() || undefined,
      company: String(data.get("company") || "").trim() || undefined,
      message: String(data.get("message") || "").trim(),
      website: String(data.get("website") || ""),
    };

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

    try {
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        const msg =
          body?.message && Array.isArray(body.message)
            ? body.message.join(", ")
            : body?.message || "Something went wrong. Please try again.";
        throw new Error(typeof msg === "string" ? msg : "Request failed");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send inquiry");
    }
  }

  return (
    <section id="contact" className="section-pad bg-sand-light py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.22em] text-gold">Contact us</p>
          <h2 className="font-display mt-3 text-3xl text-ocean md:text-4xl">
            We&apos;d love to hear from you.
          </h2>
          <p className="text-muted mt-4 max-w-md leading-relaxed">
            Reach out for partnerships, inquiries or export solutions.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="uppercase tracking-wider text-gold">Address</dt>
              <dd className="mt-1 text-ocean leading-relaxed">
                Oceanhold Exports LLP
                <br />
                Caterzone Building, Kizhayur Nambram
                <br />
                Pattambi, Palakkad, Kerala 679303
                <br />
                India
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider text-gold">Email</dt>
              <dd className="mt-1">
                <a
                  href="mailto:oceanholdexports@gmail.com"
                  className="text-ocean underline-offset-2 hover:underline"
                >
                  oceanholdexports@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider text-gold">Mobile</dt>
              <dd className="mt-1 text-ocean">
                <a href="tel:+918848538567" className="hover:underline">
                  +91 88485 38567
                </a>
                <br />
                <a href="tel:+919207196130" className="hover:underline">
                  +91 92071 96130
                </a>
              </dd>
            </div>
          </dl>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="relative bg-white p-6 shadow-[0_20px_50px_-30px_rgba(11,58,92,0.35)] md:p-8"
            noValidate
          >
            {/* honeypot */}
            <div className="absolute -left-[9999px]" aria-hidden>
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name *" name="name" required />
              <Field label="Email *" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Company" name="company" />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="text-muted mb-1.5 block text-sm">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                className="w-full border border-ocean/15 bg-foam/50 px-3 py-2.5 text-ocean outline-none focus:border-gold"
              />
            </div>

            {status === "success" && (
              <p className="mt-4 text-sm text-ocean" role="status">
                Thank you — your inquiry was sent. Check your inbox for a confirmation.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-red-700" role="alert">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-ocean hover:bg-ocean-deep mt-6 w-full px-6 py-3 text-sm font-medium text-white transition disabled:opacity-60 sm:w-auto"
            >
              {status === "loading" ? "Sending…" : "Send inquiry"}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-muted mb-1.5 block text-sm">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-ocean/15 bg-foam/50 px-3 py-2.5 text-ocean outline-none focus:border-gold"
      />
    </div>
  );
}
