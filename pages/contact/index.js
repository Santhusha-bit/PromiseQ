import Meta from "components/Meta";
import ContactForm from "components/ContactForm";
import Header from "components/Header";

const contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <Header title ="Contact Us"/>
      <p>
        Do you have any questions? Please do not hesitate to contact us
        directly.
      </p>
      <ContactForm />
    </>
  );
};

export default contact;
