import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import TiltWrapper from "../constants/TiltWrapper";

import { styles } from "../styles";
import { MenCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const newErrors = { name: "", message: "", email: "" };
    let isValid = true;
    const specialCharRegex = /[^a-zA-Z0-9\s]/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (form.name.trim() === "") {
      newErrors.name = "Name is required.";
      isValid = false;
    } else if (specialCharRegex.test(form.name)) {
      newErrors.name = "Name should not contain special characters.";
      isValid = false;
    }

    if (form.message.trim() === "") {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    if (form.email.trim() === "") {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ayush Agarwal",
          from_email: form.email,
          to_email: "ayushagarwal8126@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  useEffect(() => {
    if (form.name) setErrors((prev) => ({ ...prev, name: "" }));
    if (form.email) setErrors((prev) => ({ ...prev, email: "" }));
    if (form.message) setErrors((prev) => ({ ...prev, message: "" }));
  }, [form.name, form.email, form.message]);

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">*Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.name && <p className="text-red-500 text-lg">{errors.name}</p>}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">*Your email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.email && <p className="text-red-500 text-lg">{errors.email}</p>}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">*Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.message && (
              <p className="text-red-500 text-lg">{errors.message}</p>
            )}
          </label>

          <TiltWrapper
            options={{
              max: 20,
              scale: 1,
              speed: 450,
            }}
            className="flex justify-end"
          >
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </TiltWrapper>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="hidden md:block xl:flex-1 xl:h-auto md:h-[550px] h-[400px]"
      >
        <MenCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
