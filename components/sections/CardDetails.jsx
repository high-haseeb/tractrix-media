import React from 'react'

function CardDetails() {
  return (
    <div className="w-full p-5 border border-gray-300 rounded-lg shadow-md">
    <div className="text-xl font-semibold mb-4">Card Information</div>
    <form className="space-y-4">
      <div className="flex flex-col">
        <div className="text-base font-medium mb-2">Name on Card</div>
        <input type="text" className="w-full h-10 px-3 border rounded-md bg-gray-100" />
      </div>
      
      <div className="flex flex-col">
        <div className="text-base font-medium mb-2">Card Number</div>
        <input type="text" className="w-full h-10 px-3 border rounded-md bg-gray-100" />
      </div>

      <div className="flex flex-col">
        <div className="text-base font-medium mb-2">Expiration Month</div>
        <select className="w-full h-10 px-3 border rounded-md bg-gray-100">
          <option value="">Select Month</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>

      <div className="flex flex-col">
        <div className="text-base font-medium mb-2">Expiration Year</div>
        <select className="w-full h-10 px-3 border rounded-md bg-gray-100">
          <option value="">Select Year</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
        </select>
      </div>

      <div className="flex flex-col">
        <div className="text-base font-medium mb-2">Security Code</div>
        <input type="text" className="w-full h-10 px-3 border rounded-md bg-gray-100" />
      </div>

      <div className="flex flex-col">
        <div className="text-base font-medium mb-2">ZIP Code</div>
        <input type="text" className="w-full h-10 px-3 border rounded-md bg-gray-100" />
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-base font-medium">Due Today:</div>
        <div className="text-lg font-semibold">$3,000</div>
      </div>
      <div className="text-xs text-gray-600">Non Refundable</div>
    </form>
  </div>
);
}
export default CardDetails

