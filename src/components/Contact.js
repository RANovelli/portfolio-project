import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_eVwC3nAw3UvHg3axsE65W";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };
  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form sent successfully! I'll contact you as soon as possible."
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <div id="contact" className="contact">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Please fill out the form and describe your project needs; I'll contact
          you as soon as possible.
        </p>
        <span className="success-message">{successMessage}</span>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                {/* NAME INPUT */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: {
                      value: 20,
                      message:
                        "Please enter a name with fewer than 20 characters",
                    },
                  })}
                />
                <div className="line"></div>
                <div className="text-start">
                  <span className="error-message">
                    {errors.name && errors.name.message}
                  </span>
                </div>
                {/* PHONE INPUT */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  {...register("phone", {
                    required: "Please provide your phone number",
                  })}
                />
                <div className="line"></div>
                <div className="text-start">
                  <span className="error-message">
                    {errors.phone && errors.phone.message}
                  </span>
                </div>
                {/* EMAIL INPUT */}
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...register("email", {
                    required: "Please provide your email address",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email",
                    },
                  })}
                />
                <div className="line"></div>
                <div className="text-start">
                  <span className="error-message">
                    {errors.email && errors.email.message}
                  </span>
                </div>
                {/* SUBJECT INPUT */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register("subject", {
                    required: "OOPS, you forgot to add the subject",
                  })}
                />
                <div className="line"></div>
                <div className="text-start">
                  <span className="error-message">
                    {errors.subject && errors.subject.message}
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                {/* DESCRIPTION */}
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Please briefly describe your project"
                  name="description"
                  {...register("description", {
                    required: "Please briefly describe your project needs",
                  })}
                ></textarea>
                <div className="line"></div>
                <div className="text-start">
                  <span className="error-message">
                    {errors.description && errors.description.message}
                  </span>
                </div>
                <button className="btn-main-offer contact-btn" type="submit">
                  contact me
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
