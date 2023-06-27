import React from "react";
import { useParams } from "react-router-dom";

export default function EachOrder() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-xl font-bold mt-4 ">Order Details</h1>
      <p>{id}</p>
    </div>
  );
}
