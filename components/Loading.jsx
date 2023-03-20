import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 loading z-[2]">
      <Spinner animation="border" variant="light" />
    </div>
  );
}

export default Loading;
