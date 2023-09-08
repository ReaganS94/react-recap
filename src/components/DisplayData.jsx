import { useState } from "react";
import DisplayAdditionalData from "./DisplayAdditionalData";

export default function DisplayData({ user }) {
  console.log(user);

  return (
    <>
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <DisplayAdditionalData user={user} />
    </>
  );
}
