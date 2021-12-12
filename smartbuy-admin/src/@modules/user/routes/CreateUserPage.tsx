import { AxiosResponse } from "axios";
import { notification, PageHeader } from "antd";
import { Paths } from "@shared/enums";
import CreateUserForm from "../components/CreateUserForm";
import { useNavigate } from "react-router-dom";
import { useCreateUser } from "@shared/hooks";

export const CreateUserPage = () => {
    const navigate = useNavigate();

    const createUserMutation = useCreateUser({
        config: {
            onSuccess: (data: AxiosResponse) => {
                if (data?.data?.success) {
                    navigate(Paths.UserList);
                    notification.success({
                        type: "success",
                        message: "User created successfully",
                    });
                } else {
                    notification.error({
                        type: "error",
                        message: data?.data?.message || "Something is wrong",
                    });
                }
            },
        },
    });

    return (
        <PageHeader onBack={() => navigate(-1)} title="Create User">
            <CreateUserForm
                isLoading={createUserMutation.isLoading}
                onFinish={(values) => createUserMutation.mutateAsync(values)}
            />
        </PageHeader>
    );
};
