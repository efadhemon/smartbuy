import { Paths } from "@shared/enums";
import { useCategory, useUpdateCategory } from "@shared/hooks";
import { Purify } from "@shared/utils";
import { notification, PageHeader } from "antd";
import { AxiosResponse } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import CategoryUpdateForm from "../components/CategoryUpdateForm";

const CategoryUpdatePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading } = useCategory({ id });

    const updateCategory = useUpdateCategory({
        config: {
            onSuccess: (res: AxiosResponse) => {
                if (res?.data?.success) {
                    navigate(Paths.CategoryList);
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
            <PageHeader onBack={() => navigate(-1)} title="Update Category">
                <CategoryUpdateForm
                    initialValues={data?.data?.payload}
                    isLoading={updateCategory.isLoading}
                    onFinish={(values) =>
                        updateCategory.mutateAsync({ ...values, id })
                    }
                />
            </PageHeader>
        </Purify>
    );
};

export default CategoryUpdatePage;
