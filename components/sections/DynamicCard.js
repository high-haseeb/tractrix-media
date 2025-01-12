"use client";

import React from "react";
import useVariantStore from "@/stores/VariantStore";
import useExtrasStore from "@/stores/ExtrasStore";
import useColorStore from "@/stores/ColorStore";
import { useMovementStore } from "@/stores/stateStore";

const DynamicCard = () => {
  const { activeVariantName, variants, activeFinanceOption } = useVariantStore();
  const { activeColor, activeWoodColor } = useColorStore();
  const {
    extraItems,
    activeExtraItems,
    totalpriceExtra,
    totalPriceWeight,
    activeWeights,
    pullyPrice,
    activePully,
    barbellWeightPrice,
    activeBarbell,
    activeMats,   
    matPrice,     
  } = useExtrasStore();
  const { totalMovementPrice, movementArray, activeMovement } = useMovementStore();


  let total = 0;
  const activeVariant = variants.find(
    (variant) => variant.name.toLowerCase() === activeVariantName.toLowerCase()
  );

  if (activeFinanceOption === "cash") {
    total =
      Number(activeVariant.value.cash.replace(/,/g, "")) +
      totalMovementPrice +
      totalpriceExtra +
      totalPriceWeight * activeWeights +
      pullyPrice * activePully +
      barbellWeightPrice * activeBarbell +
      matPrice * activeMats; 
  } else {
    total = Math.round(
      Number(activeVariant.value.finance.replace(/,/g, "")) +
      totalMovementPrice / 72 +
      totalpriceExtra / 72 +
      (totalPriceWeight * activeWeights) / 72 +
      (pullyPrice * activePully) / 72 +
      (barbellWeightPrice * activeBarbell) / 72 +
      (matPrice * activeMats) / 72 
    );
  }

  const selectedExtras = extraItems.filter((item) =>
    activeExtraItems.has(item.title)
  );

  const trailerExtras = [
    "Trailer Jack",
    "Trailer Dolly",
    "Trailer Valet",
  ].filter((item) => activeExtraItems.has(item));

  const selectedMovementAccessories = movementArray.filter((item) =>
    activeMovement.has(item.title)
  );






  return (
    <div> 
      <div className="p-6 border border-black bg-[#E8E8E8] rounded-2xl w-full max-w-md mx-auto shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-bold">{activeVariant.name}</div>
          <div className="text-xl font-semibold">
            ${activeFinanceOption === "finance" ? `${activeVariant.value.finance.replace(/,/g, "")} /mo` : activeVariant.value.cash.replace(/,/g, "")}
          </div>
        </div>

        <div className="lg:text-lg text-base mb-4">
          <p>
            <span className="font-bold">Exterior Color:</span> {activeColor}
          </p>
          <p>
            <span className="font-bold">Interior Finish:</span> {activeWoodColor}
          </p>
        </div>

        {selectedExtras.length > 0 && (
          <div className="lg:text-lg text-base mb-4">
            <p className="font-bold">+ Accessories:</p>
            <ul>
              {selectedExtras.map((extra, index) => (
                <li key={index}>- {extra.title}</li>
              ))}
            </ul>
          </div>
        )}

        {selectedMovementAccessories.length > 0 && (
          <div className="lg:text-lg text-base mb-4">
            <p className="font-bold">+ Movement Accessories:</p>
            <ul>
              {selectedMovementAccessories.map((accessory, index) => (
                <li key={index}>- {accessory.title}</li>
              ))}
            </ul>
          </div>
        )}

        {trailerExtras.length > 0 && (
          <div className="lg:text-base text-sm mb-4">
            <p className="font-bold">+ Trailer Extras:</p>
            <ul>
              {trailerExtras.map((extra, index) => (
                <li key={index}>- {extra}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="lg:text-lg text-base mb-4">
          <p className="font-bold">+ Equipment:</p>
          <ul>
            {activeWeights > 0 && (
              <li>
                {activeWeights === 1
                  ? "Weight 1 (Set of 4)"
                  : `Weights ${activeWeights} (Set of 4)`}
              </li>
            )}
            {activePully > 0 && (
              <li>
                {activePully === 1
                  ? "Pulley 1 (Set of 2)"
                  : `Pullies ${activePully} (Set of 2)`}
              </li>
            )}
            {activeBarbell > 0 && (
              <li>Barbell {activeBarbell}</li>
            )}
            {activeMats > 0 && (
              <li>
                {activeMats === 1
                  ? "Mat 1"
                  : `Mats ${activeMats}`}
              </li>
            )}
          </ul>
        </div>

        <div className="mb-4 flex justify-between">
          <div className="flex flex-col lg:text-lg text-base">
            <div className="font-bold">Total:</div>
            <div className="text-sm lg:text-base">Production Time: 3-6 Months</div>
          </div>
          <div className="flex flex-col">
            <div className="lg:text-3xl text-xl font-bold">${total}</div>
            <div>Sales Tax Not Included</div>
          </div>
        </div>
      </div>

      <div className="border-t pt-4 mt-4 flex justify-between">
        <div className="flex flex-col justify-start items-start">
          <p className="font-bold text:text-xl text:lg text-right">Due Today:</p>
          <p className="lg:text-base text-right text-sm">Non Refundable</p>
          <div>{activeFinanceOption === "finance" ? '6% APR, 72 months' : ''}</div>
        </div>
        <div className="lg:text-xl text-lg font-bold">$3,000</div>
      </div>
    </div>
  );
};


export default DynamicCard;
