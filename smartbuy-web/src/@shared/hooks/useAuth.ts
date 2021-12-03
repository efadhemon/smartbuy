import { useDispatch } from 'react-redux';
import { AuthService } from "@shared/services"
import { notification } from "antd"
import { storage } from "@shared/utils"
import { useMutation } from "react-query"
import { addToken } from '@shared/redux/auth/auth-slice';

export const useAuth = () => {
	// const navigation = useNavigate()

	const dispatch = useDispatch();

	const loginFn = useMutation({
		mutationFn: AuthService.login,
		onSuccess: (val) => {
			if (val?.data?.success === true) {
				dispatch(addToken(val?.data?.payload?.token))
				notification.success({ message: "Auth Login Success" })
			}
		},
	})
	const registerFn = useMutation({
		mutationFn: AuthService.register,
		onSuccess: (val) => {
			if (val?.data?.success === true) {
				dispatch(addToken(val?.data?.payload?.token))
				notification.success({ message: "Auth Register Success" })
			}
		},
	})
	const logoutFn = () => {
		storage.clear()
		window.location.assign(window.location.origin as unknown as string)
	}
	const loadUserFn = () => {}
	const isAuthenticated = storage.getToken() ? true : false
	return {
		loginFn,
		logoutFn,
		loadUserFn,
		isAuthenticated,
		registerFn,
	}
}
