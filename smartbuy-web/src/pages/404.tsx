import Link from "next/link"
import { Paths } from "@shared/constant/routes.constant"
import AppLayout from "@modules/common/layout/AppLayout"

const Custom404 = () => {
	return (
		<AppLayout>
			<div className="error-page">
				<div className="container">
					<div className="error-content">
						<h4>page not found</h4>
						<h1>404</h1>
						<p>
							We’re unable to find a page you are looking for, Try later or
							click the button.
						</p>
						<Link href={Paths.root}>
							<a>Back to Home</a>
						</Link>
					</div>
				</div>
			</div>
		</AppLayout>
	)
}

export default Custom404
