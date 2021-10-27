/* eslint-disable react/no-unescaped-entities */
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProfile,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { Col, Row } from "antd";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { ImYoutube } from "react-icons/im";
import Link from "next/link";
import { Paths } from "@shared/constant/routes.constant";
import { MdLocationPin } from "react-icons/md";
import { BsEnvelopeOpen, BsTelephone } from "react-icons/bs";

const AppFooter = () => {
  return (
    <footer>
      <div className="container">
        <Row
          className="footer-content"
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 8, sm: 16, md: 24, lg: 32 },
          ]}
        >
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <div className="footer-info-area">
              <div className="footer-logo">
                <Link href={Paths.root} passHref>
                  <img src="/images/logo.png" alt="footer logo" />
                </Link>
              </div>
              <div className="text">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  saepe explicabo velit odit beatae unde voluptas a illum sed
                  aperiam?
                </p>
              </div>
              <div className="social-links">
                <ul>
                  <li style={{ backgroundColor: "#3b5999" }}>
                    <a href="#" target="_blank">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li style={{ backgroundColor: "#55acee" }}>
                    <a href="#" target="_blank">
                      <FaTwitter />
                    </a>
                  </li>
                  <li style={{ background: "#cd201f" }}>
                    <a href="#" target="_blank">
                      <ImYoutube />
                    </a>
                  </li>
                  <li style={{ backgroundColor: "#0077B5" }}>
                    <a href="#" target="_blank">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <div className="footer-widget">
              <h3>Our Pages</h3>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link href={Paths.aboutUs}>
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={Paths.contact}>
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={Paths.faq}>
                      <a>FAQ's</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={Paths.termsConditions}>
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={Paths.privacyPolicy}>
                      <a>Privacy & Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={Paths.shippingDelivery}>
                      <a>Shipping & Delivery</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <div className="footer-widget">
              <h3>Our Pages</h3>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link href={Paths.aboutUs}>
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={Paths.contact}>
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={Paths.faq}>
                      <a>FAQ's</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={Paths.termsConditions}>
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={Paths.privacyPolicy}>
                      <a>Privacy & Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={Paths.shippingDelivery}>
                      <a>Shipping & Delivery</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <div className="footer-widget">
              <h3>Our Pages</h3>
              <div className="contact-info">
                <ul>
                  <li>
                    <MdLocationPin />
                    <p>
                      Address: 6/10, Akhi Nahar Goli, Tajmahal Road,
                      Mohammadpur, Dhaka - 1207
                    </p>
                  </li>
                  <li>
                    <BsEnvelopeOpen />
                    <a href="mailto:info@airmoll.com">info@airmoll.com</a>
                  </li>
                  <li>
                    <BsTelephone />
                    <p>09678789191</p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        <div className="copyright-text">
          <p>
            Copyright © {new Date().getFullYear()} sharifmart.com | All rights
            reserved.
          </p>
        </div>
      </div>

      <div className="ftr-app-btm-nav">
        <div className="ftr-btn-nav-itm">
          <Link href={Paths.root}>
            <a>
              <AiOutlineHome />
              <h6>Home</h6>
            </a>
          </Link>
        </div>
        <div className="ftr-btn-nav-itm">
          <Link href={Paths.root}>
            <a>
              <AiOutlineMenu />
              <h6>Category</h6>
            </a>
          </Link>
        </div>
        <div className="ftr-btn-nav-itm">
          <Link href={Paths.root}>
            <a>
              <AiOutlineSearch />
              <h6>Search</h6>
            </a>
          </Link>
        </div>
        <div className="ftr-btn-nav-itm">
          <Link href={Paths.root}>
            <a>
              <AiOutlineProfile />
              <h6>Account</h6>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
