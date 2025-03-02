import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import database from '../../backend/Firebase';
import useSectionsStore from '@/stores/SectionStore';
import Image from 'next/image';

function AccountDetail() {
  const { nextSection, prevSection } = useSectionsStore();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phoneNumber: '',
    companyName: '',
    title: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email !== formData.confirmEmail) {
      alert("Emails do not match");
      return;
    }

    setIsSubmitting(true);

    const userDetails = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      companyName: formData.companyName,
      title: formData.title,
    };

    const emailRef = formData.email.replace('@', '_').replace('.', '_');
    const userRef = ref(database, `users/${emailRef}`);

    try {
      await set(userRef, { userDetails });
      alert('Submited successfully!');
      nextSection();
    } catch (error) {
      console.error('Error saving data:', error);
      alert("Error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full p-3 border border-gray-300 rounded-lg relative">
      <div className="text-2xl font-semibold mb-4">Enter Account Details</div>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
        <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
        <InputField label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} required />
        <InputField label="Confirm Email Address" type="email" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} required />
        <InputField label="Mobile Phone Number" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        <InputField label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} />
        <InputField label="Title" name="title" value={formData.title} onChange={handleChange} />
        <div className="text-xs text-gray-600 mt-4 text-center">
          By entering my contact information above, I authorize WellBuilt to contact me about this request and WellBuilt Updates including other WellBuilt products, services, and events. This is not a purchase requirement.
        </div>
        <div className='w-full mt-20 h-[7vh] flex items-end'>
          <Footer isSubmitting={isSubmitting} prevSection={prevSection} />
        </div>
      </form>
    </div>
  );
}

const InputField = ({ label, name, type = "text", value, onChange, required }) => (
  <div className="flex flex-col">
    <div className="text-base font-medium mb-1">{label}</div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full lg:h-12 h-10 px-3 border rounded-md bg-[#E5E5E5]"
    />
  </div>
);

const Footer = ({ isSubmitting, prevSection }) => (
  <div className="flex w-full justify-between">
    <button
      className="bg-black font-bold rounded-full shadow shadow-black/40 flex items-center justify-center p-2"
      onClick={prevSection}
      type="button"
    >
      <Image src="/icons/left.svg" width={30} height={30} alt="navigation icon" className="translate-x-1" />
    </button>
    <button
      type="submit"
      className="py-2 px-6 bg-black text-white text-xl rounded-2xl disabled:opacity-50"
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>
  </div>
);

export default AccountDetail;
