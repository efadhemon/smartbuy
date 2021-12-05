import { AxiosResponse } from "axios";
import { notification, PageHeader } from "antd";
import { Paths } from "@shared/enums";
import CreateUserForm from "../components/CreateUserForm";
import { useNavigate } from "react-router-dom";
import { Authorization } from "@modules/auth";
import { useCreateUser } from "@shared/hooks";

export const CreateUserPage = () => {
    const navigate = useNavigate();

    const createUserMutation = useCreateUser({
        config: {
            onSuccess: (data: AxiosResponse) => {
                if (data?.data?.success) {
                    navigate(Paths.Users);
					notification.success({
                        type: "success",
                        message: "User created successfully",
                    });
                } else {
                    notification.error({
                        type: "error",
                        message: data?.data?.message,
                    });
                }
            },
        },
    });

    return (
        <Authorization allowedAccess={["UserCreate"]}>
            <PageHeader onBack={() => navigate(-1)} title="Create User" />
            <CreateUserForm
                isLoading={createUserMutation.isLoading}
                onFinish={(values) => createUserMutation.mutateAsync(values)}
            />
        </Authorization>
    );
};
