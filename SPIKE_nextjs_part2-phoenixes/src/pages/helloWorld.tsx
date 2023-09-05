import Head from "next/head";
import React from "react";
import style from "@/styles/helloWorld.module.css";
import style2 from "@/styles/helloWorld2.module.css";
import { Button } from "react-bootstrap";

type Props = {};

export default function helloworld({}: Props) {
  console.log("process.env.API_KEY :>> ", process.env.API_KEY);
  console.log("process.env.NEXT_PUBLIC_SECRET", process.env.NEXT_PUBLIC_SECRET);
  return (
    <>
      <Head>
        <title key="title">Hello World</title>
      </Head>

      <div>
        <h1 className={style.myH1}>Hello Next JS</h1>
        <h1 className={style2.myH1}>this is blue</h1>
        <Button>button</Button>
      </div>
    </>
  );
}
