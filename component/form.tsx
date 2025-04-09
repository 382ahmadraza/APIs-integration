"use client";
import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData ={
        title:title,
        price:price
    }
    console.log(newData);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col text-black p-11 space-y-3"
      >
        <label>Title:</label>
        <input
          type="text"
          className="bg-gray-300 w-1/2 py-3"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Price:</label>
        <input
          type="number"
          className="bg-gray-300 w-1/2 py-3"
          onChange={(e) => setPrice((e.target as HTMLInputElement).value)}
        />

        <button className="bg-blue-400 text-white w-fit py-3">save</button>
      </form>
    </div>
  );
};

export default Form;
