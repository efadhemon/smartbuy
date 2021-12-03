import { Button, Form, Input } from "antd"
import { selectCartItems, selectTotal } from "@shared/redux/cart/cart-selector"

import AppLayout from "@modules/common/layout/AppLayout"
import { createStructuredSelector } from "reselect"
import { useSelector } from "react-redux"


const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
		number: "${label} is not a valid number!",
	},
	number: {
		range: "${label} must be between ${min} and ${max}",
	},
}

const ProceedCheckout = () => {
	const { Item } = Form

	const onFinish = (values: any) => {}

	const { cartItems, total } = useSelector(
		createStructuredSelector({
			cartItems: selectCartItems,
			total: selectTotal,
		})
	)

	return (
		<AppLayout>
			<div className="container py-10">
				<Form
					labelCol={{ span: 24 }}
					wrapperCol={{ span: 22 }}
					name="nest-messages"
					onFinish={onFinish}
					validateMessages={validateMessages}
					className="proceed-cart-form"
					// style={{ display: "flex", flexWrap: "wrap" }}
				>
					<div className="flex-auto">
						<p className="text-xl md:text-3xl text-gray-700 font-bold">
							Billing Details
						</p>

						<Item
							name={["user", "firstName"]}
							label="First Name"
							rules={[{ required: true }]}>
							<Input />
						</Item>
						<Item
							name={["user", "lastName"]}
							label="Last Name"
							rules={[{ required: true }]}>
							<Input />
						</Item>
						<Item name={["company", "companyName"]} label="Company Name">
							<Input />
						</Item>
						<Item name={["country", "country"]} label="Country/Origin">
							<Input />
						</Item>
						<Item
							name={["address", "stAddress"]}
							label="Street address"
							rules={[{ required: true }]}>
							<Input placeholder="House number and street name" />
							<span className="block py-2"></span>
							<Input placeholder="Apartment, suite, unit, etc. (optional)" />
						</Item>
						<Item name={["address", "city"]} label="Town / City">
							<Input />
						</Item>
						<Item
							name={["address", "district"]}
							label="District"
							rules={[{ required: true }]}>
							<Input />
						</Item>
						<Item
							name={["address", "postCode"]}
							label="Post Code"
							rules={[{ required: true }]}>
							<Input />
						</Item>
						<Item
							name={["contact", "phone"]}
							label="Phone"
							rules={[{ required: true }]}>
							<Input style={{ width: "100%" }} />
						</Item>
						<Item
							name={["user", "email"]}
							label="Email"
							rules={[{ type: "email" }]}>
							<Input />
						</Item>
						<p className="text-xl md:text-3xl text-gray-700 font-bold">
							Additional Information
						</p>
						<Item name={["user", "comment"]} label="Order Notes (Optional)">
							<Input.TextArea placeholder="Notes about your order, e.g. special notes for delivery." />
						</Item>
					</div>
					<div className="flex-auto">
						<p className="text-xl md:text-3xl text-gray-700 font-bold">
							Your Order
						</p>
						<div className="my-4">
							<table className="checkout-table table-auto w-full border">
								<thead>
									<tr>
										<th className="text-sm uppercase">Product</th>
										<th className="text-sm uppercase lg:w-2/4">Subtotal</th>
									</tr>
								</thead>
								<tbody>
									{cartItems.map((item: any) => (
										<tr key={item.id}>
											<td className="text-sm">{item.title}</td>
											<td className="text-sm font-bold">{item.price}</td>
										</tr>
									))}
									<tr>
										<td className="text-sm font-bold uppercase">Subtotal</td>
										<td className="text-sm font-bold">{total}</td>
									</tr>
									<tr>
										<td className="text-sm font-bold uppercase">Total</td>
										<td className="text-sm font-bold">{total}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<Item wrapperCol={{ span: 24 }}>
							<Button
								style={{ width: "100%", margin: "15px 0" }}
								size="large"
								type="primary"
								htmlType="submit">
								Submit
							</Button>
						</Item>
					</div>
				</Form>
			</div>
		</AppLayout>
	)
}

export default ProceedCheckout
