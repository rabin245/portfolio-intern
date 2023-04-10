import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.Card}>
      <div className={styles.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-browser"
          width={34}
          height={34}
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"></path>
          <path d="M4 8l16 0"></path>
          <path d="M8 4l0 4"></path>
        </svg>
      </div>
      <h2 className={styles.title}>Web Designer</h2>
      <p className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        molestiae consequuntur voluptatum doloremque
      </p>
    </div>
  );
};

export default Card;
