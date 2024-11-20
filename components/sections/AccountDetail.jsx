import React from 'react';

function AccountDetail() {
  return (
    <div className="w-full p-5 border border-gray-300 rounded-lg shadow-md">
      <div className="text-xl font-semibold mb-4">Enter Account Details</div>
      <form className="space-y-3">
        <div className="flex flex-col">
          <div className="text-sm font-medium mb-1">First Name</div>
          <input type="text" className="w-full h-10 px-3 border rounded-md bg-gray-100" />
        </div>
        
        <div className="flex flex-col">
          <div className="text-sm font-medium mb-1">Last Name</div>
          <input type="text" className="w-full h-10 px-3 border rounded-md bg-gray-100" />
        </div>

        <div className="flex flex-col">
          <div className="text-sm font-medium mb-1">Email Address</div>
          <input type="email" className="w-full h-10 px-3 border rounded-md bg-gray-100" />
        </div>

        <div className="flex flex-col">
          <div className="text-sm font-medium mb-1">Confirm Email Address</div>
          <input type="email" className="w-full h-10 px-3 border rounded-md bg-gray-100" />
          <div className="text-xs text-gray-500 mt-1">We won't spam you in any way</div>
        </div>

        <div className="flex flex-col">
          <div className="text-sm font-medium mb-1">Mobile Phone Number</div>
          <input type="tel" className="w-full h-10 px-3 border rounded-md bg-gray-100" />
        </div>

        <div className="flex flex-col">
          <div className="text-sm font-medium mb-1">Company Name</div>
          <input type="text" className="w-full h-10 px-3 border rounded-md bg-gray-100" />
        </div>

        <div className="flex flex-col">
          <div className="text-sm font-medium mb-1">Title</div>
          <input type="text" className="w-full h-10 px-3 border rounded-md bg-gray-100" />
        </div>

        <div className="text-xs text-gray-600 mt-4">
          By entering my contact information above, I authorize WellBuilt to contact me about this request and WellBuilt Updates including other WellBuilt products, services, and events. This is not a purchase requirement.
        </div>
      </form>
    </div>
  );
}

export default AccountDetail;
