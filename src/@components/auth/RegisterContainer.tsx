import AuthFrom from "./elements/AuthFrom"
import Link from "next/link"
import { Paths } from "@shared/constant/routes.constant"
// import { useAuth } from "@shared/hooks/useAuth"

export const RegisterContainer = () => {
	// const { registerFn } = useAuth()F
	// if (registerFn.isSuccess) {
    //     window.location.pathname = '/'
    // }
	return (
		<div className="auth">
			<div className="login-form">
				<div className="auth-title">
					<img className="brand-logo" src="/images/logo.png" alt="logo" />
					<h1 className="text-3xl font-bold">Register</h1>
				</div>

				<AuthFrom
					initialValues={{ password: "", phoneNumber: "" }}
					onFinish={async (val: any) => {
						// await registerFn.mutateAsync(val)
					}}
				/>
				<div className="bottom-link">
					<span>
						<b>*</b> Already have an account
					</span>
					<Link href={Paths.authLogin}>
						<a> Login now </a>
					</Link>
				</div>
			</div>
		</div>
	)
}
