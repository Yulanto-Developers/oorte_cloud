"use client";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

export const Home2Accordion = () => {
  const faqData = [
    {
      id: "faq1",
      question: "How to Create a Chatbot to Fit Your Needs?",
      answer:
        "We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall.",
      delay: ".3s",
    },
    {
      id: "faq2",
      question: "What is off page SEO link building?",
      answer:
        "We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall.",
      delay: ".7s",
    },
    {
      id: "faq3",
      question: "How to Create a Chatbot to Fit Your Needs?",
      answer:
        "We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall.",
      delay: ".7s",
    },
    {
      id: "faq4",
      question: "How can I order web design for my website?",
      answer:
        "We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall.",
      delay: ".7s",
    },
    {
      id: "faq5",
      question: "How To Choose A Good QA Consultant?",
      answer:
        "We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall.",
      delay: ".5s",
    },
  ];

  return (
    <Accordion defaultActiveKey="faq1" className="accordion">
      {faqData.map(({ id, question, answer, delay }) => (
        <Accordion.Item
          key={id}
          eventKey={id}
          className="accordion-item wow fadeInUp"
          data-wow-delay={delay}
        >
          <Accordion.Header className="accordion-header">
            {question}
          </Accordion.Header>
          <Accordion.Body className="accordion-body">
            {answer}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
