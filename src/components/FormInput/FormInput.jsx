import styles from "./FormInput.module.css";

const FormInput = ({
  fieldName,
  name,
  type = "text",
  value,
  isMessage,
  handleChange,
}) => {
  return (
    <div className={styles.FormInput}>
      <label htmlFor={name}>{fieldName}</label>
      {isMessage
        ? (
          <textarea
            type="text"
            id={name}
            name={name}
            className={styles.input}
            value={value}
            onChange={handleChange}
          />
        )
        : (
          <input
            type={type}
            id={name}
            name={name}
            className={styles.input}
            value={value}
            onChange={handleChange}
          />
        )}
    </div>
  );
};

export default FormInput;
