"use client";

import { useEffect } from "react";

export default function SiteDown() {
  useEffect(() => {
    document.title = "Service Suspended - Unresolved Internship Dispute";
    document.addEventListener("contextmenu", (e) => e.preventDefault());
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg border-2 border-red-600 shadow-lg p-8 text-center">
        <div className="mb-4 flex justify-center">
          <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-red-600 mb-4">Service Suspended</h1>
        <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>

        <p className="text-gray-800 mb-4">
          This website has been taken down due to a breach of internship commitments by <strong>Sagar</strong>, the owner of <strong>Astu Creative</strong>, a company based in Pune, Maharashtra.
        </p>

        <p className="text-gray-800 mb-4">
          As interns working remotely as full-stack developers since <strong>March 12, 2025</strong>, we were promised a certificate and a stipend upon completion of our first month. As of today, <strong>May 18, 2025</strong>, these have not been provided.
        </p>

        <p className="text-gray-800 mb-4">
          Multiple follow-ups through messages and calls have been ignored. The lack of communication and non-fulfillment of promises made has forced us to take this action to protect others from similar experiences.
        </p>

        <p className="text-red-700 font-semibold mb-4">
          We strongly advise caution to anyone planning to engage professionally with <strong>Sagar or Astu Creative</strong>.
        </p>

        <p className="text-sm text-gray-600 mb-6">
          Location of the organization: Pune, Maharashtra, India
        </p>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-lg text-red-400">You harvest what you plant—if you expect respect, fairness, and loyalty, then start by giving others what they rightfully deserve.</p>
          
        </div>
      </div>
    </div>
  );
}
