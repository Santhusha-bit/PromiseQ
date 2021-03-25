import Meta from "components/Meta";
import ContactForm from "components/ContactForm";

const contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <h2>Contact Us</h2>
      <p>
        Do you have any questions? Please do not hesitate to contact us
        directly.
      </p>
      <ContactForm />
    </>
  );
};

export default contact;
