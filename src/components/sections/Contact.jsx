import { useMemo, useState } from "react";
import { RotateCcw, Send } from "lucide-react";
import { contactMethods, profile } from "../../data/portfolio.js";
import GlassCard from "../ui/GlassCard.jsx";
import GlowButton from "../ui/GlowButton.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const initialState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const next = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email.";
    if (!values.subject.trim()) next.subject = "Add a subject.";
    if (values.message.trim().length < 20) next.message = "Write at least 20 characters.";
    return next;
  }, [values]);

  const update = (event) => {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const reset = () => {
    setValues(initialState);
    setSubmitted(false);
  };

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (Object.keys(errors).length) return;

    const body = encodeURIComponent(
      `${values.message.trim()}\n\n---\nName: ${values.name.trim()}\nReply email: ${values.email.trim()}`,
    );
    const subject = encodeURIComponent(`[Portfolio] ${values.subject.trim()}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-shell" aria-labelledby="contact-title">
      <SectionHeading
        eyebrow="Contact"
        title="Start with a useful problem, then ship the interface."
        text="This form validates locally and opens your email client through a mailto fallback because no backend email service is configured yet."
      />
      <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <GlassCard className="h-full p-6">
            <h3 className="text-xl font-semibold text-white">Contact channels</h3>
            <div className="mt-6 grid gap-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a key={method.label} className="soft-surface focus-ring flex items-center gap-4 rounded-2xl border p-4 transition hover:-translate-y-1" href={method.href}>
                    <span className="soft-icon grid size-11 place-items-center rounded-2xl">
                      <Icon aria-hidden="true" size={18} />
                    </span>
                    <span>
                      <span className="block text-sm text-slate-400">{method.label}</span>
                      <span className="block text-sm font-medium text-white">{method.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.08}>
          <GlassCard as="form" className="p-5 md:p-7" onSubmit={submit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" value={values.name} error={submitted && errors.name} onChange={update} />
              <Field label="Email" name="email" type="email" value={values.email} error={submitted && errors.email} onChange={update} />
            </div>
            <Field label="Subject" name="subject" value={values.subject} error={submitted && errors.subject} onChange={update} />
            <Field label="Message" name="message" value={values.message} error={submitted && errors.message} onChange={update} multiline />
            {submitted && Object.keys(errors).length === 0 ? (
              <p className="success-note mt-4 rounded-2xl border p-3 text-sm">
                Opening your email client with the completed message.
              </p>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-3">
              <GlowButton type="submit" icon={Send}>Open email draft</GlowButton>
              <GlowButton type="button" variant="secondary" icon={RotateCcw} onClick={reset}>
                Reset
              </GlowButton>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, value, error, onChange, type = "text", multiline = false }) {
  const id = `field-${name}`;
  const controlClass =
    "soft-input focus-ring mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition";

  return (
    <label className="mt-4 block text-sm font-medium text-slate-200" htmlFor={id}>
      {label}
      {multiline ? (
        <textarea id={id} name={name} value={value} onChange={onChange} className={`${controlClass} min-h-36 resize-y`} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} />
      ) : (
        <input id={id} name={name} type={type} value={value} onChange={onChange} className={controlClass} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} />
      )}
      {error ? <span id={`${id}-error`} className="mt-2 block text-xs text-rose-200">{error}</span> : null}
    </label>
  );
}
