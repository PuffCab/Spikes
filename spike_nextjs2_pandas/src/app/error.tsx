"use client";

import React from "react";
import { Button } from "react-bootstrap";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

function Error({ error, reset }: ErrorPageProps) {
  console.log("error :>> ");
  return (
    <div>
      <h1>Custom Error Page</h1>
      <Button variant="warning" onClick={reset}>
        Reset Error
      </Button>
    </div>
  );
}

export default Error;
