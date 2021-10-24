import {
	AiOutlineAlignRight,
	AiOutlineGift,
	AiOutlineShopping,
	AiOutlineTag,
	AiOutlineUnorderedList,
} from "react-icons/ai"
import { Button, Card, Drawer, Input, Menu } from "antd"
import { FaRegHandshake, FaUserCircle } from "react-icons/fa"
import React, { useEffect, useState } from "react"

import Link from "next/link"
import { MdPayment } from "react-icons/md"
import { Paths } from "@shared/constant/routes.constant"
import { RiShoppingBag2Line } from "react-icons/ri"
import { SearchOutlined } from "@ant-design/icons"
import { useRouter } from "next/router"

interface IFProps {
	onClickShoppingBag: () => void
}
const MainMobileHeader: React.FC<IFProps> = ({ onClickShoppingBag }) => {
	const user: boolean = false

	const route = useRouter()
	const [uiState, setUiState] = useState({
		sidebar: false,
	})

	const [scroll, setScroll] = useState(0)

	const isScrollHeder = scroll > 100

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])
	const { sidebar } = uiState
	const handleScroll = () => {
		setScroll(window?.scrollY)
	}

	return (
		<>
			<header
				className={
					isScrollHeder
						? "app-mobile-header fixed left-0 right-0"
						: "app-mobile-header"
				}>
				{!isScrollHeder ? (
					<div className="container">
						<div className="app-mbl-top-hd-blk">
							<div className="lft-blk">
								<button
									onClick={() => setUiState({ ...uiState, sidebar: true })}>
									<AiOutlineAlignRight />
								</button>
								<div className="logo">
									<img src="/images/p-icon.png" alt="" />
								</div>
							</div>
							<div className="rht-blk">
								<button
									onClick={() => setUiState({ ...uiState, sidebar: true })}>
									<AiOutlineShopping />
								</button>

								<button onClick={() => route.push(Paths.authLogin)}>
									<FaUserCircle />
								</button>
							</div>
						</div>
						<div className="app-mbl-btm-hd-blk ">
							<Input
								style={{ borderRadius: 5 }}
								size="large"
								placeholder="Search for Products,Brands and more"
								prefix={<SearchOutlined className="site-form-item-icon" />}
							/>
						</div>
					</div>
				) : (
					<div className="container">
						<div className="app-mobile-scroll-header">
							<button onClick={() => setUiState({ ...uiState, sidebar: true })}>
								<AiOutlineAlignRight />
							</button>
							<div className="app-mobile-sc-src">
								<Input
									style={{ borderRadius: 5 }}
									size="large"
									placeholder="Search for Products,Brands and more"
									prefix={<SearchOutlined className="site-form-item-icon" />}
								/>
							</div>

							<button onClick={onClickShoppingBag}>
								<AiOutlineShopping />
							</button>
						</div>
					</div>
				)}

				{/* scroll header */}

				{/* scroll header */}
			</header>

			<Drawer
				placement="left"
				closable={false}
				bodyStyle={{ padding: 0 }}
				onClose={() => setUiState({ ...uiState, sidebar: false })}
				visible={sidebar}
				key="left">
				<Card
					style={{
						marginBottom: 25,
						marginTop: 0,
						borderTop: 0,
						textAlign: "center",
					}}>
					<img
						src="/images/poshapets-logo.png"
						style={{ maxWidth: 150, margin: "0 auto", paddingBottom: 20 }}
						alt="logo"
					/>
					{user ? (
						<Button size="middle" style={{ width: "100%" }} type="primary">
							Logout
						</Button>
					) : (
						<Link href={"/test"}>
							<Button size="middle" style={{ width: "100%" }} type="primary">
								Sign In
							</Button>
						</Link>
					)}
				</Card>
				<Menu
					defaultSelectedKeys={[String(route.pathname)]}
					defaultOpenKeys={[String(route.pathname)]}
					mode="inline">
					<Menu.Item
						onClick={() => route.push("/test")}
						icon={<AiOutlineUnorderedList />}
						key={String("/test")}>
						Order
					</Menu.Item>
					<Menu.Item
						onClick={() => route.push("/test")}
						icon={<AiOutlineGift />}
						key={String("/test")}>
						Gift Card
					</Menu.Item>
					<Menu.Item
						onClick={() => route.push("/test")}
						icon={<AiOutlineTag />}
						key={String("/test")}>
						Offer Zone
					</Menu.Item>
					<Menu.Item
						onClick={() => route.push("/test")}
						icon={<RiShoppingBag2Line />}
						key={String("/test")}>
						Shops
					</Menu.Item>
					<Menu.Item
						onClick={() => route.push("/test")}
						icon={<FaRegHandshake />}
						key={String("/test")}>
						Career
					</Menu.Item>
					<SubMenu key="sub4" icon={<MdPayment />} title="Payment">
						<Menu.Item
							onClick={() => route.push("/test")}
							key={String("/test")}>
							Option 9
						</Menu.Item>
						<Menu.Item
							onClick={() => route.push("/test")}
							key={String("/test")}>
							Option 10
						</Menu.Item>
						<Menu.Item
							onClick={() => route.push("/test")}
							key={String("/test")}>
							Option 11
						</Menu.Item>
						<Menu.Item
							onClick={() => route.push("/test")}
							key={String("/test")}>
							Option 12
						</Menu.Item>
					</SubMenu>
				</Menu>
			</Drawer>
		</>
	)
}

export default MainMobileHeader
const { SubMenu } = Menu
const { Search } = Input
