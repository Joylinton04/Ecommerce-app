import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import React from "react";

const AccordianSec = () => {
  const accordion = [
    { text: "What payment methods do you accept?" },
    { text: " How long does delivery take?" },
    { text: "Can I track my order?" },
    { text: "What is your return or refund policy?" },
    { text: " Do you ship internationally?" },
  ];

  return (
    <div className="w-1/2 flex flex-col justify-between">
      {accordion.map((info, index) => (
        <Accordion
          type="single"
          collapsible
          className="w-full bg-[#B6B09F]/80 backdrop-blur-md shadow-md border border-[#b6b09f]/40"
        >
          <AccordionItem
            value="item-1"
            className="w-full px-6 py-4 border-b border-[#b6b09f]/30 transition-all duration-300"
          >
            <AccordionTrigger className="text-start w-full font-semibold text-lg text-[#2F2F2F] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black">
              {info.text}
            </AccordionTrigger>
            <AccordionContent className="py-3 text-sm text-gray-700 leading-relaxed">
              We accept Visa, Mastercard, PayPal, American Express, and most
              major credit cards. All payments are securely processed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordianSec;
