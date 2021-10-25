import { Button, Checkbox, Form, Input } from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"

import Link from "next/link"
import { Paths } from "@shared/constant/routes.constant"
import React from "react"

interface IInitialValues {
	phoneNumber?: string
	password?: string
}
interface IFProps {
	initialValues?: IInitialValues
	onFinish?: (val: IInitialValues) => void
}
const AuthFrom: React.FC<IFProps> = ({ initialValues, onFinish }) => {
	return (
		<>
			<Form
				name="login-form"
				layout="vertical"
				initialValues={initialValues}
				onFinish={onFinish}>
				<Form.Item
					label="Phone Number"
					name="phoneNumber"
					rules={[{ required: true, message: "Please input your username!" }]}>
					<Input
						placeholder="Phone Number"
						prefix={<UserOutlined className="site-form-item-icon" />}
						size="large"
					/>
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: "Please input your password!" }]}>
					<Input.Password
						placeholder="Enter your password"
						prefix={<LockOutlined className="site-form-item-icon" />}
						size="large"
					/>
				</Form.Item>
				<div className="remember-me">
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Link href={Paths.forgotPassword}>
						<a>Forgot password</a>
					</Link>
				</div>

				<Form.Item>
					<Button
						className="text-center w-full"
						size="large"
						type="primary"
						htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

export default AuthFrom
