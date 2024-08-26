"use client";
import React, { useState } from "react";
import styles from "@/app/hellothere/hello.module.css";

function HelloPage() {
  console.log("WHERE ARE YOU SEEING THIS");
  const [number, setNumber] = useState(0);
  // await new Promise((resolve) => {
  //   return setTimeout(resolve, 3000);
  // });
  // throw new Error("SOMETING WENT WRONG");
  return (
    <div>
      <h1>Hello Nextjs world</h1>
      <h2 className={styles.h2Color}>This is Blue</h2>
    </div>
  );
}

export default HelloPage;
