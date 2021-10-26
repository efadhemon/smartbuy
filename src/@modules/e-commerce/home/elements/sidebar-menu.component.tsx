import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const SidebarMenu = () => {
  return (
    <div className="sidebar-menu-wrapper">
      <ul>
        <li>
          <Link href="#">
            <a>
              Link
              <IoIosArrowForward />
            </a>
          </Link>
        </li>

        <li>
          <Link href="#">
            <a>
              Link
              <IoIosArrowForward />
            </a>
          </Link>
        </li>

        <li>
          <Link href="#">
            <a>
              Link
              <IoIosArrowForward />
            </a>
          </Link>
        </li>

        <li>
          <Link href="#">
            <a>
              Link
              <IoIosArrowForward />
            </a>
          </Link>
        </li>

        <li>
          <Link href="#">
            <a>
              Link
              <IoIosArrowForward />
            </a>
          </Link>
        </li>

        <li>
          <Link href="#">
            <a>
              Link
              <IoIosArrowForward />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
