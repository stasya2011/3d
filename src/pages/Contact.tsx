import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import useAlert from "../hooks/useAlert";
import emailjs from "@emailjs/browser";
import Fox from "../models/Fox";
import Alert from "../components/Alert";

interface IForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState<IForm>({ name: "", email: "", message: "" });
  const [isLoading, setIsLaoding] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleBlur = () => setCurrentAnimation("hit");
  const handleFocus = () => setCurrentAnimation("walk");
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
      .then(() => {
        setIsLaoding(false);
        showAlert({ text: "Thank you for your message 😃", type: "success" });

        setTimeout(() => {
          setForm({ name: "", email: "", message: "" });
          setCurrentAnimation("idle");
          hideAlert();
        }, 3000);
      })
      .catch((err: React.ErrorInfo) => {
        setIsLaoding(false);
        console.log(err);
        showAlert({ text: "I didn't recive your message.", type: "danger" });
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.isShow && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          ref={formRef}
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
          onFocus={handleFocus}
          onBlur={handleBlur}
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
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Fox
            position={[0.5, 0.35, 0]}
            rotation={[12.629, -0.6, 0]}
            scale={[0.5, 0.5, 0.5]}
            currentAnimation={currentAnimation}
          />
          <Suspense fallback={<Loader />} />
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
