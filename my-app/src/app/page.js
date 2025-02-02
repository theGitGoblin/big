"use client"
import React from "react";

import { useRouter } from "next/navigation"; 
import styles from "./stylesheet.module.css";

export default function Home() {
  const router = useRouter(); 

  const redirectToDashboard = () => {
    router.push("/dashboard"); 
  };

  return (
    <main>
      <div className={styles.container}>
        <video className={styles.backgroundVideo} autoPlay loop muted>
          <source src="/background.mp4" type="video/mp4" />
        </video>

        <h1 className={styles.title} onClick={redirectToDashboard}>
          HILLPOINTE OS
        </h1>

        <div className={styles.loginBox}>
          <form onSubmit={(e) => { e.preventDefault(); redirectToDashboard(); }}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </main>
  );
}
