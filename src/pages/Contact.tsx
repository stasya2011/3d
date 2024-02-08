import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface IForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState<IForm>({ name: "", email: "", message: "" });
  const [isLoading, setIsLaoding] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLaoding(true);

    emailjs
      .send(
        import.meta.env.VITE_KEY_SERVICE_ID,
        import.meta.env.VITE_KEY_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Stasya",
          from_email: form.email,
          to_email: "s.geleisha@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_KEY_PUBLIC_KEY
      )
      .then(() => setIsLaoding(false))
      .catch((err: React.ErrorInfo) => {
        setIsLaoding(false);
        console.log(err);
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          ref={formRef}
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@email.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              rows={4}
              name="message"
              className="textarea"
              placeholder="Your Message."
              value={form.message}
              required
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? "Loading..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
