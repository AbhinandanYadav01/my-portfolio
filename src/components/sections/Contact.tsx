"use client";

import { Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import { useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/actions";

const initialState: ContactFormState = {
  message: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="w-full rounded-md border border-black/20 bg-white/35 px-4 py-3 text-sm uppercase tracking-[0.25em] text-zinc-900 transition-colors hover:bg-white/55 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "abhinan888@gmail.com";
  const [state, formAction] = useActionState(submitContactForm, initialState);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-24" id="contact">
      <div className="mb-16 text-center">
        <h2 className="section-title">Contact Me</h2>
        <div className="section-rule" />
      </div>
      <div className="rounded-[2.5rem] bg-transparent">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h3 className="font-serif text-4xl font-semibold text-zinc-900">
              Get In Touch
            </h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-800">
              If you want to work together, need a portfolio site, or have a product
              idea to shape, send a message and I&apos;ll get back to you.
            </p>
            <div className="mt-10 space-y-5 text-zinc-900">
              <a href={`mailto:${email}`} className="flex items-center gap-4 text-sm">
                <Mail className="h-4 w-4" />
                {email}
              </a>
              <p className="flex items-center gap-4 text-sm">
                <Phone className="h-4 w-4" />
                +91 XX XX XX XX
              </p>
              <p className="flex items-center gap-4 text-sm">
                <MapPin className="h-4 w-4" />
                Alot, India
              </p>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 text-sm text-zinc-700 transition-colors hover:text-black"
                aria-label="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-700" />
                    Email copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy email
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="panel-card p-6 md:p-8">
            <form action={formAction} className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full rounded-md border border-black/20 bg-black/80 px-4 py-3 text-sm text-white placeholder:text-zinc-400 focus:outline-none"
                  required
                />
                {state.errors?.name && (
                  <p className="mt-1 text-sm text-red-700">{state.errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full rounded-md border border-black/20 bg-black/80 px-4 py-3 text-sm text-white placeholder:text-zinc-400 focus:outline-none"
                  required
                />
                {state.errors?.email && (
                  <p className="mt-1 text-sm text-red-700">{state.errors.email}</p>
                )}
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Your Message"
                  className="w-full rounded-md border border-black/20 bg-black/80 px-4 py-3 text-sm text-white placeholder:text-zinc-400 focus:outline-none"
                  required
                ></textarea>
                {state.errors?.message && (
                  <p className="mt-1 text-sm text-red-700">{state.errors.message}</p>
                )}
              </div>
              <SubmitButton />
              {state.message && (
                <p className="mt-2 text-sm text-green-700">{state.message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
