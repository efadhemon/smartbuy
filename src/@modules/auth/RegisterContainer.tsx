import AuthFrom from "./elements/AuthFrom";
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
            <div className="title">
                <h1>Register</h1>
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
    );
};

export default RegisterContainer;
