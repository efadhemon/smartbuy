import { Button, Typography } from "antd"
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"

import { MdClear } from "react-icons/md"
import React from "react"

const { Title, Text } = Typography
interface IFProps {
	image?: string
	title?: string
	quantity?: string
	price?: string
	onIncrement: () => void
	onDecrement: () => void
	onDelete: () => void
}
const CartDrawerProductItem: React.FC<IFProps> = ({
	image,
	title,
	quantity,
	price,
	onIncrement,
	onDecrement,
	onDelete,
}) => {
	return (
		<>
			<div className="flex my-4">
				<div className="w-3/12 px-2">
					<img src={image} className="" alt="" />
				</div>
				<div className="w-9/12">
					<p className="text-sm text-black">{title}</p>
					<div className="flex justify-between items-center w-full">
						<div className="flex justify-between">
							<Button
								size="middle"
								onClick={onIncrement}
								type="text"
								icon={<FiPlusCircle className="mx-auto w-5 h-5" />}
							/>
							<Title
								style={{ marginBottom: "0px", alignSelf: "center" }}
								level={5}>
								{quantity}
							</Title>
							<Button
								size="middle"
								type="text"
								onClick={onDecrement}
								icon={<FiMinusCircle className="mx-auto w-5 h-5" />}
							/>
						</div>
						<div>
							<button onClick={onDelete}>
								<MdClear className="font-bold" />
							</button>
						</div>
					</div>
					<Text className="text-orange">{price}</Text>
				</div>
			</div>
		</>
	)
}

export default CartDrawerProductItem
