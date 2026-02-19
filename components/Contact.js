"use client";

import { useState } from "react";

export const Contact2 = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(formData);


    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          country: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
  
  );
};
