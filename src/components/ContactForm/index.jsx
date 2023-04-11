import FormInput from "../FormInput";
import Button from "../Button";
import styles from "./ContactForm.module.css";

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
          <Button handleClick={handleSubmit}>Send</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
