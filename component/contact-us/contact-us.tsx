"use client";
import { postContacts } from "@/actions/property.action";
import React, { useState } from "react";

const ContactUs = ( ) => {
  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const { data, error } = await postContacts(firstName, email);
    
    if (error) {
      setMessage("Error submitting form.");
    } else {
      setMessage("Form submitted successfully!");
      setName("");
      setEmail("");
      console.log("Submitted:", data);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-3 p-8 bg-gray-100 text-black *:border *:w-full w-1/2 *:py-2 *:block"
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={firstName}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="bg-blue-400">Submit</button>

        {message && <p className="text-green-700">{message}</p>}
     
 </form>


    </div>
  );
};

export default ContactUs;
