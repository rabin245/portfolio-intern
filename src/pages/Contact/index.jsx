import { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import FormInput from "../../components/FormInput";
import { Button } from "../../components/Button";
import { ContactInfo } from "../../components/Card";
import SendIcon from "../../assets/icons/SendIcon";
import data from "../../assets/data/data.json";

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

  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    const loadContactInfo = async () => {
      const contactInfo = await Promise.all(
        data.contact.map(async (info, index) => {
          const IconComponent = (
            await import(`../../assets/icons/${info.icon}.jsx`)
          ).default;
          return {
            ...info,
            icon: <IconComponent key={index} />,
          };
        })
      );
      setContactInfo(contactInfo);
    };

    loadContactInfo();
  }, []);
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
