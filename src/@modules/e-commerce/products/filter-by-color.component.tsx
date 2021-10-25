import { Checkbox, Form } from "antd"

import React from "react"

const FilterByColor = () => {
	const onCheck = (values: any) => {}

	const { Item } = Form
	return (
		<section>
			<div className="border p-8">
				<h5 className="font-bold text-lg">Filter By Color</h5>
				<div className="pt-4">
					<Form
						name="filterByColor"
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 24 }}
						onClick={onCheck}>
						<Item className="my-2" name="red" valuePropName="checked">
							<Checkbox>
								<span className=" text-black">Red</span>
							</Checkbox>
						</Item>
						<Item name="blue" valuePropName="checked">
							<Checkbox>
								<span className=" text-black">Blue</span>
							</Checkbox>
						</Item>
						<Item name="white" valuePropName="checked">
							<Checkbox>
								<span className=" text-black">White</span>
							</Checkbox>
						</Item>
						<Item name="green" valuePropName="checked">
							<Checkbox>
								<span className=" text-black">Green</span>
							</Checkbox>
						</Item>
						<Item name="yellow" valuePropName="checked">
							<Checkbox>
								<span className=" text-black">Yellow</span>
							</Checkbox>
						</Item>
						<Item name="violet" valuePropName="checked">
							<Checkbox>
								<span className=" text-black">Violet</span>
							</Checkbox>
						</Item>
						<Item name="orange" valuePropName="checked">
							<Checkbox>
								<span className=" text-black">Orange</span>
							</Checkbox>
						</Item>
					</Form>
				</div>
			</div>
		</section>
	)
}

export default FilterByColor
