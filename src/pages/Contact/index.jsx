import { useState } from "react";
import styles from "./Contact.module.css";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import MailIcon from "../../assets/icons/MailIcon";
import MapIcon from "../../assets/icons/MapIcon";
import FindMeIcon from "../../assets/icons/FindMeIcon";
import FormInput from "../../components/FormInput";
import { Button } from "../../components/Button";
import { ContactInfo } from "../../components/Card";
import SendIcon from "../../assets/icons/SendIcon";

const ContactForm = ({ inputs, handleChange, handleSubmit }) => {
  return (
    <div className={styles.ContactForm}>
      <form action="">
        <FormInput
          fieldName="Name"
          name="name"
          value={inputs.name}
          handleChange={handleChange}
        />
        <FormInput
          fieldName="Email"
          name="email"
          type="email"
          value={inputs.email}
          handleChange={handleChange}
        />
        <FormInput
          fieldName="Message"
          name="message"
          value={inputs.message}
          isMessage={true}
          handleChange={handleChange}
        />

        <div className={styles.button}>
          <Button handleClick={handleSubmit}>
            <span>Send</span>
            <SendIcon />
          </Button>
        </div>
      </form>
    </div>
  );
};

const Contact = ({ contactRef }) => {
  const [inputs, setInputs] = useState({
    name: "",
    message: "",
    email: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    name = name.toLowerCase();

    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted", inputs);
  };

  const contactInfo = [
    {
      icon: <PhoneIcon size={40} />,
      title: "Call me",
      link: "tel:+9779762875880",
      linkText: "+977-9762875880",
    },
    {
      icon: <MailIcon size={40} />,
      title: "Email me",
      link: "mailto:drarabin@gmail.com",
      linkText: "drarabin@gmail.com",
    },
    {
      icon: <FindMeIcon size={40} />,
      title: "Find me on",
      link: "https://www.linkedin.com/in/rabindra-baisnab/",
      linkText: "Linkedin",
    },
    {
      icon: <MapIcon size={40} />,
      title: "Address",
      link: "https://goo.gl/maps/N9qLMN2MeFWjK5UF6",
      linkText: "Chundevi, Bhaktapur",
    },
  ];

  return (
    <div className={styles.Contact} ref={contactRef}>
      <div className={styles.wrapper}>
        <div className={styles.connectInfo}>
          <h1>Let's connect</h1>
          <div className={styles.infos}>
            {contactInfo.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
        </div>

        <div className={styles.form}>
          <h2>Get in touch</h2>

          <ContactForm
            inputs={inputs}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
