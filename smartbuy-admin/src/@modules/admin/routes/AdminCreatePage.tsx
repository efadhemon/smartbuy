import { AxiosResponse } from "axios";
import { notification, PageHeader } from "antd";
import { Paths } from "@shared/enums";
import CreateAdminForm from "../components/CreateAdminForm";
import { useNavigate } from "react-router-dom";
import { useCreateAdmin } from "@shared/hooks";

const AdminCreatePage = () => {
    const navigate = useNavigate();

    const createAdmin = useCreateAdmin({
        config: {
            onSuccess: (data: AxiosResponse) => {
                if (data?.data?.success) {
                    navigate(Paths.AdminList);
                    notification.success({
                        type: "success",
                        message: "Admin created successfully",
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
        <PageHeader onBack={() => navigate(-1)} title="Create Admin">
            <CreateAdminForm
                isLoading={createAdmin.isLoading}
                onFinish={(values) => createAdmin.mutateAsync(values)}
            />
        </PageHeader>
    );
};

export default AdminCreatePage;
