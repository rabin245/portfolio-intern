import { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import FormInput from "../../components/FormInput";
import { Button } from "../../components/Button";
import { ContactInfo } from "../../components/Card";
import SendIcon from "../../assets/icons/SendIcon";
import data from "../../assets/data/data.json";
import loader from "../../utils/IconLoader";

const ContactForm = ({ formInputs, handleChange, handleSubmit }) => {
  return (
    <div className={styles.ContactForm}>
      <form action="">
        {formInputs.map((input) => (
          <FormInput key={input.name} handleChange={handleChange} {...input} />
        ))}

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
    loader(data.contact).then((data) => setContactInfo(data));
  }, []);

  const formInputs = [
    {
      fieldName: "Name",
      name: "name",
      value: inputs.name,
    },
    {
      fieldName: "Email",
      name: "email",
      type: "email",
      value: inputs.email,
    },
    {
      fieldName: "Message",
      name: "message",
      value: inputs.message,
      isMessage: true,
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
            formInputs={formInputs}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
