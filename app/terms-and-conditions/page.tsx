import React from "react";

export const metadata = {
  title: "Terms & Conditions | SRI RUKHAMINII",
  description: "Terms and conditions for SRI RUKHAMINII Naturopathy & Yoga Wellness Centre",
};

export default function TermsAndConditions() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Terms & Conditions</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">SRI RUKHAMINII Naturopathy & Yoga Wellness Centre</h2>
        
        <div className="my-8">
          <h3 className="text-xl font-bold mb-4 text-center">DECLARATION</h3>
          
          <p className="text-gray-700 leading-relaxed">
            I Understand That Yoga Is Not A Substitute For Medical Attention, Examination, Diagnosis, Or Treatment. 
            I Recognize That It Is My Responsibility To Notify My Teacher Of Any Serious Illness Or Injury Before 
            Every Yoga Class. I Will Not Perform Any Postures To The Extent Of Strain Or Pain. (If At Any Time 
            During The Class You Feel Discomfort Or Strain Gently Come Out Of The Posture. You May Rejoin Any 
            Time During The Class.)
          </p>
        </div>
      </div>
    </div>
  );
}
