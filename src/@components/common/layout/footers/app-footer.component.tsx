/* eslint-disable react/no-unescaped-entities */
import {
	AiOutlineHome,
	AiOutlineMail,
	AiOutlineMenu,
	AiOutlineProfile,
	AiOutlineSearch,
	AiOutlineUser,
} from "react-icons/ai"
import { Col, Row } from "antd"
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"

import { ImYoutube } from "react-icons/im"
import Link from "next/link"
import { Paths } from "@shared/constant/routes.constant"
import React from "react"

const AppFooter = () => {
	return (
		<>
			<footer>
				<div className="w-full xl:px-0">
					<div className="mx-auto container">
						<Row className="footer-top">
							<Col xs={24} sm={24} md={12} lg={12} xl={12}>
								<div className="flex justify-center lg:justify-start">
									<div className="footer-logo">
										<img src="/images/poshapets-logo.png" alt="" />
									</div>
									<div className="ml-6">
										<p>
											Copyright & By
											<br />{" "}
											<span className="text-white font-bold">
												Poshapets - {new Date().getFullYear()}
											</span>
										</p>
									</div>
								</div>
							</Col>
							<Col xs={24} sm={24} md={12} lg={12} xl={12}>
								<Row className="about-icon-wrapper" justify="end">
									<div className="about-social-icon">
										<a style={{ backgroundColor: "#3b5999" }} href="#">
											<FaFacebookF />
										</a>
										<a style={{ backgroundColor: "#55acee" }} href="#">
											<FaTwitter />
										</a>
										<a style={{ background: "#cd201f" }} href="#">
											<ImYoutube />
										</a>
										<a style={{ backgroundColor: "#0077B5" }} href="#">
											<FaLinkedinIn />
										</a>
									</div>
								</Row>
							</Col>
						</Row>
						<Row
							className="footer-content"
							gutter={[
								{ xs: 8, sm: 16, md: 24, lg: 32 },
								{ xs: 8, sm: 16, md: 24, lg: 32 },
							]}>
							<Col xs={24} sm={24} md={24} lg={8} xl={8}>
								<Row
									gutter={[
										{ xs: 8, sm: 16, md: 24, lg: 32 },
										{ xs: 8, sm: 16, md: 24, lg: 32 },
									]}>
									<Col xs={24} sm={12} md={12} lg={12} xl={12}>
										<div>
											<h3 className="text-xl text-white font-bold pb-2 lg:pb-5">
												Our Pages
											</h3>
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
														<Link href={Paths.awardsRecognition}>
															<a>Award & Recognition</a>
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
									<Col xs={24} sm={12} md={12} lg={12} xl={12}>
										<div>
											<h3 className="text-xl text-white font-bold pb-2 lg:pb-5">
												Our Pages
											</h3>
											<div className="footer-links">
												<ul>
													<li>
														<Link href={Paths.ourTeam}>
															<a>Our Team</a>
														</Link>
													</li>
													<li>
														<Link href={Paths.services}>
															<a>Services</a>
														</Link>
													</li>
													<li>
														<Link href={Paths.productShop}>
															<a>Product Shop</a>
														</Link>
													</li>
													<li>
														<Link href={Paths.myOrders}>
															<a>My Order</a>
														</Link>
													</li>
													<li>
														<Link href={Paths.awardsRecognition}>
															<a>Award & Recognition</a>
														</Link>
													</li>
													<li>
														<Link href={Paths.dashboard}>
															<a>User Dashboard</a>
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</Col>
								</Row>
							</Col>
							<Col xs={24} sm={12} md={12} lg={8} xl={8}>
								<div className="">
									<h3 className="text-3xl text-white font-bold pb-2 lg:pb-5">
										PoshaPets
									</h3>
									<p className="lg:text-base break-words">
										Poshapets is an organization working <br /> as a one stop
										solution for pet services.
										<br /> It aims to be a 360 degree solution <br />
										platform.
									</p>
								</div>
							</Col>
							<Col xs={24} sm={12} md={12} lg={8} xl={8}>
								<div className="w-full xl:w-10/12 float-right">
									<h3 className="text-white text-2xl font-bold lg:pb-5">
										Newsletter
									</h3>
									<div className="flex flex-col gap-y-3">
										<div className="flex justify-center items-center rounded relative">
											<input
												type="text"
												required
												placeholder="Enter Full Name"
												id="fullName"
												aria-label="fullName"
												className="bg-white h-12 pl-4 rounded-lg  text-black focus:outline-none w-full"
											/>
											<button className="bg-white mr-5 p-2 rounded-lg absolute right-0 focus:outline-none">
												<AiOutlineUser className="text-orange w-4 h-4" />
											</button>
										</div>
										<div className="flex justify-center items-center rounded relative">
											<input
												type="email"
												required
												placeholder="Enter email address"
												id="email"
												aria-label="email"
												className="bg-white h-12 pl-4 rounded-lg focus:outline-none w-full"
											/>
											<button className="bg-white mr-5 p-2 rounded-lg absolute right-0 focus:outline-none">
												<AiOutlineMail className="text-orange w-4 h-4" />
											</button>
										</div>
										<button
											type="submit"
											className="bg-orange h-12 rounded-lg text-white font-lg font-bold w-full">
											Submit Now
										</button>
									</div>
								</div>
							</Col>
						</Row>
					</div>
					<div className="footer-bottom">
						<div className="container">
							<div className="py-6 w-full flex lg:flex-row flex-col justify-between items-center text-white lg:text-base">
								<div>
									<ul className="flex mb-0 gap-3 items-center">
										<li>
											<a
												className="text-white font-bold"
												href={Paths.privacyPolicy}>
												Privacy Policy
											</a>
										</li>
										<li>
											<a
												className="text-white font-bold"
												href={Paths.termsConditions}>
												Terms & Condition
											</a>
										</li>
									</ul>
								</div>
								<div className="lg:w-2/4 mt-4 lg:mt-0 ">
									<img src="/images/shurjopay-brands-2-1-1536x61.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div className="ftr-app-btm-navs">
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
		</>
	)
}

export default AppFooter
