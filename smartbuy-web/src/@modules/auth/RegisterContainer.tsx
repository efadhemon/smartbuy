import AuthForm from "./elements/AuthForm";
import Link from "next/link";
import { Paths } from "@shared/constant/routes.constant";
// import { useAuth } from "@shared/hooks/useAuth"

const RegisterContainer = () => {
    // const { registerFn } = useAuth()F
    // if (registerFn.isSuccess) {
    //     window.location.pathname = '/'
    // }
    return (
        <div className="auth-container">
            <div className="auth-form">
                <div className="title">
                    <h1>Register</h1>
                </div>

                <AuthForm
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
    );
};

export default RegisterContainer;
