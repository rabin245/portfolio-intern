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
      <span>{fieldName}</span>
      {isMessage ? (
        <textarea
          type="text"
          name={name}
          className={styles.input}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
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
