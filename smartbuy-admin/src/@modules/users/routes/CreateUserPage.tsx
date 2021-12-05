import { AxiosResponse } from "axios"
import { PageHeader } from "antd"
import { Paths } from "@shared/enums"
import { UserForm } from "../components/elements/UserForm"
import { useNavigate } from "react-router-dom"
import { Authorization } from "@modules/auth"
import { useCreateUser } from "@shared/hooks"

export const CreateUserPage = () => {
	const navigate = useNavigate()
	const createUserMutation = useCreateUser({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.Users)
			},
		},
	})
	return (
		<Authorization allowedAccess={["UserCreate"]}>
			<PageHeader onBack={() => navigate(-1)} title="Create User" />
			<UserForm
				initialValues={{
					name: "",
					email: "",
					phoneNumber: "",
					password: "",
					gender: "",
					address: "",
					type: "",
				}}
				isLoading={createUserMutation.isLoading}
				onFinish={(values) => createUserMutation.mutateAsync(values)}
			/>
		</Authorization>
	)
}
