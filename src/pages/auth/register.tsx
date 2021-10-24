import AppFooter from "@modules/common/layout/footers/app-footer.component"
import AppMainHeader from "@modules/common/layout/headers/app-main-header.component"
import { MoreOutlined } from "@ant-design/icons"
import { PageHeader } from "antd"
import PureResponsive from "@modules/common/container/pure-responsive-container.component"
import React from "react"
import { RegisterContainer } from "@modules/auth/RegisterContainer"

const Login = () => {
	return (
		<>
			<PureResponsive show="desktop">
				<AppMainHeader />
			</PureResponsive>
			<PureResponsive show="mobile">
				<PageHeader
					ghost={false}
					className="mobile-inner-header"
					onBack={() => window.history.back()}
					title="Sign In"
					extra={[<MoreOutlined key="1" style={{ fontSize: 24 }} />]}
				/>
			</PureResponsive>
			<RegisterContainer />
			<AppFooter />
		</>
	)
}

export default Login
