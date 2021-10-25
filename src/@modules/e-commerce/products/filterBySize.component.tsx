import { Button } from "antd"
import React from "react"

const FilterBySize = () => {
	const onCheck = (values: any) => {}
	return (
		<section>
			<div className="border p-8">
				<h5 className="font-bold text-lg">Filter By Size</h5>
				<div className="flex flex-col items-start pt-4">
					<Button type="text">
						<span className="text-black">{`> XS(56)`}</span>
					</Button>
					<Button type="text">
						<span className="text-black">{`> S(284)`}</span>
					</Button>
					<Button type="text">
						<span className="text-black">{`> M(284)`}</span>
					</Button>
					<Button type="text">
						<span className="text-black">{`> L(284)`}</span>
					</Button>
					<Button type="text">
						<span className="text-black">{`> XL(38)`}</span>
					</Button>
				</div>
			</div>
		</section>
	)
}

export default FilterBySize
