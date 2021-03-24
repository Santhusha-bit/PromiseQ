import contactStyles from '../styles/Contact.module.css'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'

const ContactForm = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmitForm = async (evt) => {
    evt.preventDefault
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/contact", { name, email, subject, message });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  }

  return (
    <form className={contactStyles.form} onSubmit={handleSubmit(onSubmitForm)}>
      <label className= {contactStyles.label}>Your Name 
        <div className={contactStyles.container}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            ref={register({ required: true })}
          />
          <span className = {contactStyles.error}>{errors?.name && <p> Name is required</p>}</span>
        </div>
      </label>

      <label className= {contactStyles.label}>Your Email
            <div className={contactStyles.container}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            ref={register({ required: true })}
          />
          <span className = {contactStyles.error}>{errors?.email && <p> Email is required</p>}</span>
        </div>
      </label>

      <label className= {contactStyles.label}>Subject
            <div className={contactStyles.container}>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            ref={register({ required: true })}
          />
          <span className = {contactStyles.error}>{errors?.subject && <p> Subject is required</p>}</span>
        </div>
      </label>

      <label className= {contactStyles.label}>Your Message
            <div className={contactStyles.container}>
          <textarea
            type="text"
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            ref={register({ required: true })}
          />
          <span className = {contactStyles.error}>{errors?.message && <p> Message is required</p>}</span>
        </div>
      </label>

      <button className={contactStyles.button} 
        type='submit' 
        disabled={state === "LOADING"}>Send Message
      </button>

      <div>
        {state === "ERROR" && (
          <p style={{ color: 'red' }}>{errorMessage}</p>
        )}
        {state === "SUCCESS" && (
          <p style={{ color: 'green' }}>Message Sent!</p>
        )}
      </div>
      
    </form>
  )
}

export default ContactForm
