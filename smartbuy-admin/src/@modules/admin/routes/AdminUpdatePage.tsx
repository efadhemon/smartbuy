import { Paths } from "@shared/enums";
import { useAdmin, useUpdateAdmin } from "@shared/hooks";
import { Purify } from "@shared/utils";
import { notification, PageHeader } from "antd";
import { AxiosResponse } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import UpdateAdminForm from "../components/UpdateAdminForm";

const AdminUpdatePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading } = useAdmin({ id });
    const updateAdmin = useUpdateAdmin({
        config: {
            onSuccess: (data: AxiosResponse) => {
                if (data?.data?.success) {
                    navigate(Paths.AdminList);
                    notification.success({
                        type: "success",
                        message: "Admin update successfully",
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
        <Purify loading={isLoading} empty={false}>
            <PageHeader onBack={() => navigate(-1)} title="Update Admin">
                <UpdateAdminForm
                    initialValues={data?.data?.payload}
                    isLoading={updateAdmin.isLoading}
                    onFinish={(values) =>
                        updateAdmin.mutateAsync({ ...values, id })
                    }
                />
            </PageHeader>
        </Purify>
    );
};

export default AdminUpdatePage;
