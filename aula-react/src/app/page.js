"use client"

import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {
  const myUrl = "/users";


  return (
    <>
      <div>
        Elemento 1
        <button onClick={()=>{console.log("ola mundo")}}>Meu evt</button>
      </div>
      <div className={styles.link}>
        Elemento 2
      </div>
      <Link className="link" href={myUrl} >users</Link>
    </>
  );
}
