import React from 'react';
import '../cssfiles/Contact.css'
import OnlyHeader from '@/app/OnlyHeader';

const Contact = ({ randomNumber }) => {
  return (
    <div>
    <OnlyHeader />
    <div className="contact-container">
      <h1>Contact Information</h1>
      <p>For inquiries and assistance, please contact us:</p>
      <div className="contact-details">
        <p>Phone Number: +1 984 123 1245</p>
      </div>
    </div>
    </div>
  );
};





export default Contact;

