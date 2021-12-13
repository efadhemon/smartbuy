import { Paths } from "@shared/enums";
import { useUpdateUser, useUser } from "@shared/hooks";
import { Purify } from "@shared/utils";
import { notification, PageHeader } from "antd";
import { AxiosResponse } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import UpdateUserForm from "../components/UpdateUserForm";

export const UpdateUserPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading } = useUser({ id });
    const updateUserMutation = useUpdateUser({
        config: {
            onSuccess: (res: AxiosResponse) => {
                if (res?.data?.success) {
                    navigate(Paths.UserList);
                    notification.success({
                        message: res.data?.message,
                    });
                } else {
                    notification.error({
                        message: res?.data?.message || "Something is wrong",
                    });
                }
            },
        },
    });

    return (
        <Purify loading={isLoading} empty={false}>
            <PageHeader onBack={() => navigate(-1)} title="Update User">
                <UpdateUserForm
                    initialValues={data?.data?.payload}
                    isLoading={updateUserMutation.isLoading}
                    onFinish={(values) =>
                        updateUserMutation.mutateAsync({ ...values, id })
                    }
                />
            </PageHeader>
        </Purify>
    );
};
