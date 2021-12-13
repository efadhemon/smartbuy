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
            onSuccess: (res: AxiosResponse) => {
                if (res?.data?.success) {
                    navigate(Paths.AdminList);
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
