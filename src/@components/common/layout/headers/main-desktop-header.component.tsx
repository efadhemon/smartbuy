import { FiPhone, FiShoppingBag } from "react-icons/fi"
import React, { useEffect, useState } from "react"

import { AiOutlineHeart } from "react-icons/ai"
import { FaRegUserCircle } from "react-icons/fa"
import Link from "next/link"
import { Paths } from "@shared/constant/routes.constant"
import { Select } from "antd"
import { useRouter } from "next/dist/client/router"

const { Option } = Select

interface IFProps {
	onClickShoppingBag: () => void
	onClickWishlist: () => void
}
const MainDesktopHeader: React.FC<IFProps> = ({
	onClickShoppingBag,
	onClickWishlist,
}) => {
	const router = useRouter()
	const [isFixed, setIsFixed] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 50) {
				setIsFixed(true)
			} else {
				setIsFixed(false)
			}
		})
		return () => {
			window.removeEventListener("scroll", () => {})
		}
	}, [])

	function handleChange(value) {}

	return (
		<>
			<div
				className={
					isFixed
						? "app-header sticky top-0 left-0 right-0 shadow-sm"
						: "app-header relative"
				}>
				<div className="container">
					<div className="app-hdr-inr">
						<div className="app-logo-blk">
							<Link href={Paths.root}>
								<a>
									<img src="/images/poshapets-logo.png" alt="" />
								</a>
							</Link>
						</div>
						<div className="app-search-blk">
							<Select
								defaultValue="All"
								style={{ width: 85 }}
								onChange={handleChange}>
								<Option value="cat">Cat</Option>
								<Option value="dog">Dog</Option>
								<Option value="bird">Bird</Option>
							</Select>
							<input type="search" name="header_search" id="" />
							<button>Search</button>
						</div>
						<div className="app-nav-blk">
							<ul>
								<li className="hot-line">
									<a href="#">
										<FiPhone />
										<div>
											<p>Hotline</p>
											<p>+88018312312321</p>
										</div>
									</a>
								</li>
								<li onClick={onClickWishlist}>
									<AiOutlineHeart />
								</li>
								<li onClick={onClickShoppingBag}>
									<FiShoppingBag />
								</li>
								<li onClick={() => router.push(Paths.authLogin)}>
									<FaRegUserCircle />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="app-hdr-dwn-menu">
				<div className="container">
					<div className="app-hdr-dwn-inr">
						<div className="category-menu">
							<Select
								defaultValue="Shop By Pets"
								style={{ width: 280 }}
								bordered={false}
								disabled={router.pathname === "/shop" && true}>
								<Option
									style={{ padding: "10px 22px" }}
									className="ant-list-item-border"
									value="cat">
									Cat
								</Option>
								<Option
									style={{ padding: "10px 22px" }}
									className="ant-list-item-border"
									value="dog">
									Dog
								</Option>
								<Option
									style={{ padding: "10px 22px" }}
									className="ant-list-item-border"
									value="bird">
									Bird
								</Option>
								<Option
									style={{ padding: "10px 22px" }}
									className="ant-list-item-border"
									value="fish">
									Fish
								</Option>
								<Option
									style={{ padding: "10px 22px" }}
									className="ant-list-item-border"
									value="rabbit">
									Rabbit
								</Option>
								<Option style={{ padding: "10px 22px" }} value="littlePet">
									Little Pet
								</Option>
							</Select>
						</div>
						<div className="primary-menu">
							<ul>
								<li>
									<Link href={Paths.shopLanding}>Shop</Link>
								</li>
								<li>
									<a>Vets</a>
								</li>
								<li>
									<a>Groomers</a>
								</li>
								<li>
									<a>Trainers</a>
								</li>
								<li>
									<a>Pet Hotel</a>
								</li>
								<li>
									<a>Pet Passport</a>
								</li>
							</ul>
						</div>
						<div className="crt-profile-btn">
							<Link href={Paths.creatProfile}>
								<button>
									<FiPhone /> Create Pet Profile
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default MainDesktopHeader
