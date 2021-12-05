import { Authorization } from "@modules/auth"
import { Paths } from "@shared/enums"
import { useUpdateUser, useUser } from "@shared/hooks"
import { Purify } from "@shared/utils"
import { PageHeader } from "antd"
import { AxiosResponse } from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { UpdateForm } from "../components/elements/UpdateForm"


export const UpdateUserPage = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const { data, isLoading } = useUser({ id })
	const updateUserMutation = useUpdateUser({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.Users)
			},
		},
	})


	return (
		<Authorization allowedAccess={["UserModify"]}>
			<Purify loading={isLoading} empty={false}>
				<PageHeader onBack={() => navigate(-1)} title="Update User" />
				<UpdateForm
					initialValues={{
						name: data?.data?.payload?.name,
						email: data?.data?.payload?.email,
						phoneNumber: data?.data?.payload.phoneNumber,
						password: data?.data?.payload.password,
						gender: data?.data?.payload.gender,
						address: data?.data?.payload.address,
						type: data?.data?.payload.type,
					}}
					isLoading={updateUserMutation.isLoading}
					onFinish={(values) =>
						updateUserMutation.mutateAsync({ ...values, id })
					}
				/>
			</Purify>
		</Authorization>
	)
}
