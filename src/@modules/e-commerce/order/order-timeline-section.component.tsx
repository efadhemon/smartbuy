import { BsCheck } from "react-icons/bs"
import Link from "next/link"
import { Paths } from "@shared/constant/routes.constant"

const OrderTimeline = ({ singleOrderInfo }) => {
	return (
		<div className="order-timeline">
			<div className="mb-10 md:mb-4">
				<h2 className="text-lg font-semibold">Timeline</h2>
			</div>
			<div className="h-full px-2 pt-8 pb-2 bg-white rounded-lg shadow md:px-8">
				<div className="flex px-4">
					<div className=" timeline-step w-20 pr-4 text-center active">
						<BsCheck className="rounded-full bg-orange w-16 h-16 p-5 block text-white m-auto" />
					</div>
					<div className="w-full">
						<h4 className="mb-2 font-semibold uppercase">cancel</h4>
						<p className="mb-2 text-sm text-gray-600">
							Ordered by mistake by - customer
						</p>
						<p className="mb-4 text-sm text-gray-600">
							<time>15 Jul 2021, 06:40 PM</time>
						</p>
					</div>
				</div>
				<div className="flex px-4">
					<div className=" timeline-step w-20 pr-4 text-center active">
						<BsCheck className="rounded-full border border-solid border-orange bg-white text-orange w-12 h-12 block p-3 m-auto" />
					</div>
					<div className="w-full">
						<h4 className="mb-2 font-semibold uppercase">pending</h4>
						<p className="mb-2 text-sm text-gray-600">
							Thank you for placing your order at Evaly. We will start
							processing your order after payment is complete - Evaly
						</p>
						<p className="mb-4 text-sm text-gray-600">
							<time>15 Jul 2021, 06:40 PM</time>
						</p>
					</div>
				</div>
				<div className="flex px-4">
					<div className="w-20 pr-4 text-center active">
						<BsCheck className="rounded-full border border-solid border-orange bg-white text-orange w-12 h-12 block p-3 m-auto" />
					</div>
					<div className="w-full">
						<h4 className="mb-2 font-semibold uppercase">pending</h4>
						<p className="mb-2 text-sm text-gray-600">
							<Link href={Paths.privacyPolicy}>
								<a>Purchasing Policy </a>
							</Link>
							and{" "}
							<Link href={Paths.termsConditions}>
								<a>Terms &amp; Conditions </a>
							</Link>
							accepted. {singleOrderInfo.orderNo} has been marked as{" "}
							<strong>
								Pending<strong> by - customer</strong>
							</strong>
						</p>
						<p className="mb-4 text-sm text-gray-600">
							<time>15 Jul 2021, 06:40 PM</time>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OrderTimeline
