import { useState } from "react";
import useExtrasStore from "@/stores/ExtrasStore";

const memberships = [
  {
    title: "Well Me",
    price: "$2,000/month",
    highlight: "3 months free",
    description:
      "Includes a limited license agreement to use our trademarks. This membership includes unlimited access to our workout library, group classes, a public performance license, marketing materials, and SaaS support.",
  },
  {
    title: "Well You",
    price: "$1,500/month",
    highlight: "1 month free",
    description:
      "This is a whole-building package where you can use your own fitness area. It includes full membership for staff and teams, high-speed WiFi, facility management, and an option to purchase a performance license add-on.",
  },
  {
    title: "Well Us",
    price: "$2,500/month",
    highlight: "3 months free",
    description:
      "This package combines everything in Well Me and Well You. It includes branding and partnerships, business-level access, and post-delivery activation support.",
  },
];

const MemberShipCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const {setMembership , activeMeberShip}=useExtrasStore();



  const MemberShipHandler=(index)=>{
    setActiveIndex(index)
    setMembership(memberships[index])
    // console.log(activeMeberShip)
  }

  return (
    <div className="w-full h-full bg-white py-2 px-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center mb-2">Membership</h2>
      {memberships.map((membership, index) => (
        <div
          key={index}
          onClick={()=>MemberShipHandler(index)}
          className={`p-4 mb-2 border-4 border-gray-600 rounded-2xl cursor-pointer transition w-full h-[28%] ${
            activeIndex === index ? "bg-blue-100 border-blue-500" : "bg-gray-200"
          }`}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold">{membership.title}</h3>
            <span className="text-black font-semibold">{membership.price}</span>
          </div>
          <p className="mt-2 text-sm text-gray-700 flex flex-col gap-2">
            <span className="font-bold text-black/40">{membership.highlight}</span>
            <span>{membership.description}</span>
          </p>
        </div>
      ))}
      <p className="text-base text-black font-bold text-center">
        Monthly membership payments will begin upon delivery of your Trailer.
      </p>
    </div>
  );
};

export default MemberShipCard;
