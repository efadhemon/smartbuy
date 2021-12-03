import React from "react";
import { Slider } from "antd";
import { takaCurrencySign } from "@shared/constant/preference";
import { useState } from "react";

const FilterByPrice = () => {
  const [priceRange, setPriceRange] = useState(0);
  const handleChange = (value: any) => {
    setPriceRange(value);
  };
  return (
    <section>
      <div className="border p-8">
        <h5 className="font-bold text-lg">Filter By Price</h5>
        <div className="pt-4">
          <Slider onChange={handleChange} range defaultValue={[20, 50]} />
          <div>
            <p>
              <span className="price-range-number">
                {`${takaCurrencySign}
                ${priceRange ? priceRange[0] : 0}   -   ${takaCurrencySign}
                ${priceRange ? priceRange[1] : 100}`}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterByPrice;
