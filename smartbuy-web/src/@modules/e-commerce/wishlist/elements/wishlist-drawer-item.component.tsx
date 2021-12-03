import React from "react";
import { Typography } from "antd";
import { useDispatch } from "react-redux";
import { MdClear } from "react-icons/md";

interface IFProps {
  img?: string;
  title?: string;
  price?: string;
  onDelete: () => void;
}

const WishListDrawerItem: React.FC<IFProps> = ({
  img,
  title,
  onDelete,
}) => {

  const dispatch = useDispatch();

  return (
    <>
      <div className="flex my-4">
        <div className="w-3/12 px-2">
          <img src={img} className="" alt="" />
        </div>
        <div>
          <p className="text-sm text-black">{title}</p>
          <button
            onClick={onDelete}
            className="h-7 w-7 rounded-full text-center text-white bg-orange"
          >
            <MdClear className="inline-block font-bold" />
          </button>
        </div>
      </div>
    </>
  );
};

export default WishListDrawerItem;
