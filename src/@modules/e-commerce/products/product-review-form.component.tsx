import { Button, Form, Input } from "antd"

import { AiFillStar } from "react-icons/ai"
import React from "react"

const layout = {
	labelCol: { span: 24 },
}

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

const ProductReviewForm = () => {
	const { Item } = Form
	const onFinish = (values: any) => {}
	return (
		<div className="review-form-section">
			<div className="shop-page-title">
				<p className="title">Add Your Comments</p>
				<p>
					Your email address will not be published. Required fields are marked{" "}
					<b>*</b>
				</p>
			</div>
			<div>
				<Form
					{...layout}
					name="reviewMessages"
					onFinish={onFinish}
					validateMessages={validateMessages}
					className="review-form">
					<Item className="user-info">
						<Item
							name={["user", "name"]}
							label="Name"
							rules={[{ required: true }]}
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							style={{ display: "inline-block", width: "50%" }}>
							<Input />
						</Item>
						<Item
							name={["user", "email"]}
							label="Email"
							rules={[{ type: "email", required: true }]}
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							style={{ display: "inline-block", width: "50%" }}>
							<Input />
						</Item>
					</Item>
					<Item>
						<div className="review-box">
							<p>Your Rating</p>
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
						</div>
					</Item>
					<Item name={["user", "introduction"]} label="Introduction">
						<Input.TextArea rows={4} />
					</Item>
					<Item>
						<Button className="btn-one" type="primary" htmlType="submit">
							Submit
						</Button>
					</Item>
				</Form>
			</div>
		</div>
	)
}

export default ProductReviewForm
