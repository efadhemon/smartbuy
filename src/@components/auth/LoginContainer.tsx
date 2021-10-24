import AuthFrom from "./elements/AuthFrom";
import Link from "next/link";
import { Paths } from "@shared/constant/routes.constant";
// import { useAuth } from "@shared/hooks/useAuth"

export const LoginContainer = () => {
  // const { loginFn } = useAuth()
  // if (loginFn.isSuccess) {
  //     window.location.pathname = '/'
  // }
  return (
    <div className="auth">
      <div className="login-form">
        <div className="auth-title">
          <img className="brand-logo" src="/images/logo.png" alt="logo" />
          <h1 className="text-3xl font-bold">Log In</h1>
        </div>

        <AuthFrom
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
