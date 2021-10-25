import React from "react";
import { Button } from "antd";

const FilterByTags = () => {
  return (
    <section id="filterByTags">
      <div className="border p-8">
        <h5 className="font-bold text-lg">Filter By Tags</h5>
        <div className="pt-4">
          <Button type="text">#Accessories,</Button>
          <Button type="text">#Clothing,</Button>
          <Button type="text">#Fashion,</Button>
          <Button type="text">#Footwear,</Button>
          <Button type="text">#Good,</Button>
          <Button type="text"> #Kid,</Button>
          <Button type="text">#Men,</Button>
          <Button type="text">#Wear,</Button>
          <Button type="text">#Wm.</Button>
        </div>
      </div>
    </section>
  );
};

export default FilterByTags;
