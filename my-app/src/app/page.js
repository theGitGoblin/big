import styles from "./stylesheet.module.css"; // Use CSS Modules for styling

export default function Home() {
  return (
    <div className={styles.container}>
      
      <video className={styles.backgroundVideo} autoPlay loop muted>
        <source src="/background.mp4" type="video/mp4" />
      </video>

      
      <h1 className={styles.title}>HILLPOINTE OS</h1>

      
      <div className={styles.loginBox}>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
