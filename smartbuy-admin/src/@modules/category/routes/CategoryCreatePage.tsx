import { Authorization } from "@modules/auth";
import { Paths } from "@shared/enums";
import { useCreateCategory } from "@shared/hooks";
import { notification, PageHeader } from "antd";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import CategoryCreateForm from "../components/CategoryCreateForm";

const CategoryCreatePage = () => {
    const navigate = useNavigate();

    const createCategoryMutation = useCreateCategory({
        config: {
            onSuccess: (data: AxiosResponse) => {
                if (data?.data?.success) {
                    navigate(Paths.CategoryList);
                    notification.success({
                        type: "success",
                        message: "Category successfully created",
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
        <Authorization allowedAccess={["CategoryCreate"]}>
            <PageHeader onBack={() => navigate(-1)} title="Create Category" />
            <CategoryCreateForm
                isLoading={createCategoryMutation.isLoading}
                onFinish={(values) =>
                    createCategoryMutation.mutateAsync(values)
                }
            />
        </Authorization>
    );
};

export default CategoryCreatePage;
