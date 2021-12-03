import AuthForm from "./elements/AuthForm";
import Link from "next/link";
import { Paths } from "@shared/constant/routes.constant";
// import { useAuth } from "@shared/hooks/useAuth"

const LoginContainer = () => {
    // const { loginFn } = useAuth()
    // if (loginFn.isSuccess) {
    //     window.location.pathname = '/'
    // }
    return (
        <div className="auth-container">
            <div className="auth-form">
                <div className="title">
                    <h2>Log In</h2>
                </div>

                <AuthForm
                    initialValues={{ password: "", phoneNumber: "" }}
                    onFinish={async (val: any) => {
                        // await loginFn.mutateAsync(val)
                    }}
                />
                <div className="bottom-link">
                    <span>
                        <b>*</b> Don{"'"}t have an account
                    </span>
                    <Link href={Paths.authRegister}>
                        <a> Register now </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginContainer;
