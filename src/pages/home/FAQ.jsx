import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="flex w-full">
      <div className="basis-1/2">
        <h2 className="text-4xl font-bold mb-4">FAQs</h2>
        <p className="mb-8">
          Find answers to common questions about PRP's services and usage
        </p>
        <Link to="/" className="text-blue-500">
          Contact
        </Link>
      </div>
      <div className="basis-1/2">
        <div>
          <div className="mb-6">
            <h3 className="font-semibold text-xl mb-2">How do I sign up?</h3>
            <p className="text-lg mb-2">To sign up, follow these steps...</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-xl mb-2">
              How much does it cost?
            </h3>
            <p className="text-lg mb-2">The cost varies depending on...</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-xl mb-2">
              How do I submit a press release?
            </h3>
            <p className="text-lg mb-2">
              Submitting a press release involves...
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-xl mb-2">
              How can I track the performance of my press release?
            </h3>
            <p className="text-lg mb-2">You can track the performance by...</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-xl mb-2">
              How can I contact customer support?
            </h3>
            <p className="text-lg mb-2">To contact customer support...</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-xl mb-2">How do I sign up?</h3>
            <p className="text-lg mb-2">To sign up, follow these steps...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
