import { Authorization } from "@modules/auth";
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
            onSuccess: (data: AxiosResponse) => {
                if (data?.data?.success) {
                    navigate(Paths.Users);
                    notification.success({
                        type: "success",
                        message: "User update successfully",
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
        <Authorization allowedAccess={["UserModify"]}>
            <Purify loading={isLoading} empty={false}>
                <PageHeader onBack={() => navigate(-1)} title="Update User" />
                <UpdateUserForm
                    initialValues={data?.data?.payload}
                    isLoading={updateUserMutation.isLoading}
                    onFinish={(values) =>
                        updateUserMutation.mutateAsync({ ...values, id })
                    }
                />
            </Purify>
        </Authorization>
    );
};
