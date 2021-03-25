import contactStyles from "styles/Contact.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  function getRequestParams(name, email, subject, message) {
    const Portal_ID = "19542633";
    const Form_ID = "df44df7c-6b86-4387-9bcf-ca970558ae24";

    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${Portal_ID}/${Form_ID}`;
    const data = {
      fields: [
        {
          name: "email",
          value: email,
        },
        {
          name: "firstname",
          value: name,
        },
        {
          name: "subject",
          value: subject,
        },
        {
          name: "message",
          value: message,
        },
      ],
    };

    const headers = {
      "Content-Type": "application/json",
    };

    return {
      url,
      data,
      headers,
    };
  }

  async function sendToHubSpot(data) {
    const { name, email, subject, message } = data;

    let response = "";
    try {
      const { url, data, headers } = getRequestParams(
        name,
        email,
        subject,
        message
      );

      const response = await axios.post(url, data, { headers });

      return response;
    } catch (error) {
      return response;
    }
  }

  const onSubmitForm = async (evt) => {
    evt.preventDefault;
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await sendToHubSpot({
        name,
        email,
        subject,
        message,
      });
      setState("SUCCESS");
    } catch (error) {
      setErrorMessage(error);
      setState("ERROR");
    }
  };

  return (
    <form className={contactStyles.form} onSubmit={handleSubmit(onSubmitForm)}>
      <label className={contactStyles.label}>
        Your Name
        <div className={contactStyles.container}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={register({ required: true })}
          />
          <span className={contactStyles.error}>
            {errors?.name && <p> Name is required</p>}
          </span>
        </div>
      </label>

      <label className={contactStyles.label}>
        Your Email
        <div className={contactStyles.container}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={register({ required: true })}
          />
          <span className={contactStyles.error}>
            {errors?.email && <p> Email is required</p>}
          </span>
        </div>
      </label>

      <label className={contactStyles.label}>
        Subject
        <div className={contactStyles.container}>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            ref={register({ required: true })}
          />
          <span className={contactStyles.error}>
            {errors?.subject && <p> Subject is required</p>}
          </span>
        </div>
      </label>

      <label className={contactStyles.label}>
        Your Message
        <div className={contactStyles.container}>
          <textarea
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ref={register({ required: true })}
          />
          <span className={contactStyles.error}>
            {errors?.message && <p> Message is required</p>}
          </span>
        </div>
      </label>

      <button
        className={contactStyles.button}
        type="submit"
        disabled={state === "LOADING"}
      >
        Send Message
      </button>

      <div>
        {state === "ERROR" && <p style={{ color: "red" }}>{errorMessage}</p>}
        {state === "SUCCESS" && <p style={{ color: "green" }}>Message Sent!</p>}
      </div>
    </form>
  );
};

export default ContactForm;
