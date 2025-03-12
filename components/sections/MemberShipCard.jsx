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
  const { setMembership } = useExtrasStore();

  const MemberShipHandler = (index) => {
    setActiveIndex(index);
    setMembership(memberships[index]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white py-4 px-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Membership</h2>

      <div className="flex flex-col gap-4">
        {memberships.map((membership, index) => (
          <div
            key={index}
            onClick={() => MemberShipHandler(index)}
            className={`p-5 border-4 rounded-2xl cursor-pointer transition-all w-full 
            ${activeIndex === index ? "bg-blue-100 border-blue-500 scale-105" : "bg-gray-200 border-gray-600"}
            hover:scale-105 hover:border-blue-400 focus:ring focus:ring-blue-300`}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
              <h3 className="font-bold text-lg sm:text-xl">{membership.title}</h3>
              <span className="text-black font-semibold sm:text-lg">{membership.price}</span>
            </div>
            <p className="mt-2 text-sm text-gray-700">
              <span className="font-bold text-black/60">{membership.highlight}</span>
              <br />
              {membership.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-base text-black font-bold text-center mt-4">
        Monthly membership payments will begin upon delivery of your trailer.
      </p>
    </div>
  );
};

export default MemberShipCard;
