import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import database from '../../backend/Firebase';

function AccountDetail() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phoneNumber: '',
    companyName: '',
    title: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the data object
    const userDetails = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      companyName: formData.companyName,
      title: formData.title,
    };

    // Assuming cardDetails come from another component, you would merge them here
    const cardDetails = {}; // Replace with actual card details data

    const emailRef = formData.email.replace('@', '_').replace('.', '_'); // Using email as the unique key
    const userRef = ref(database, `users/${emailRef}`);

    // Push to Firebase
    set(userRef, {
      userDetails,
      cardDetails,
    })
      .then(() => {
        console.log('Data saved successfully!');
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <div className="w-full p-3 border border-gray-300 rounded-lg shadow-md">
      <div className="text-2xl font-semibold mb-4">Enter Account Details</div>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="text-base font-medium mb-1">First Name</div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full lg:h-12 h-10 px-3 border rounded-md bg-[#E5E5E5]"
          />
        </div>

        <div className="flex flex-col">
          <div className="text-base font-medium mb-1">Last Name</div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full lg:h-12 h-10 px-3 border rounded-md bg-[#E5E5E5]"
          />
        </div>

        <div className="flex flex-col">
          <div className="text-base font-medium mb-1">Email Address</div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full lg:h-12 h-10 px-3 border rounded-md bg-[#E5E5E5]"
          />
        </div>

        <div className="flex flex-col">
          <div className="text-base font-medium mb-1">Confirm Email Address</div>
          <input
            type="email"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
            required
            className="w-full lg:h-12 h-10 px-3 border rounded-md bg-[#E5E5E5]"
          />
          <div className="text-xs text-gray-500 mt-1">We won't spam you in any way</div>
        </div>

        <div className="flex flex-col">
          <div className="text-base font-medium mb-1">Mobile Phone Number</div>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full lg:h-12 h-10 px-3 border rounded-md bg-[#E5E5E5]"
          />
        </div>

        <div className="flex flex-col">
          <div className="text-base font-medium mb-1">Company Name</div>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full lg:h-12 h-10 px-3 border rounded-md bg-[#E5E5E5]"
          />
        </div>

        <div className="flex flex-col">
          <div className="text-base font-medium mb-1">Title</div>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full lg:h-12 h-10 px-3 border rounded-md bg-[#E5E5E5]"
          />
        </div>

        <div className="text-xs text-gray-600 mt-4 text-center">
          By entering my contact information above, I authorize WellBuilt to contact me about this request and WellBuilt Updates including other WellBuilt products, services, and events. This is not a purchase requirement.
        </div>

        <div className="w-full flex justify-start">
          <button
            type="submit"
            className="py-3 px-5 bg-blue-500 text-white text-xl rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AccountDetail;
