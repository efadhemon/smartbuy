import { Paths } from "@shared/enums";
import { useCreateProduct } from "@shared/hooks";
import { ICreateProduct } from "@shared/interfaces";
import { notification, PageHeader } from "antd";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import ProductCreateForm from "../components/ProductCreateForm";

const ProductCreatePage = () => {
    const navigate = useNavigate();

    const createProductMutation = useCreateProduct({
        config: {
            onSuccess: (res: AxiosResponse) => {
                if (res?.data?.success) {
                    navigate(Paths.ProductList);
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
        <PageHeader onBack={() => navigate(-1)} title="Create Product">
            <ProductCreateForm
                isLoading={createProductMutation.isLoading}
                onFinish={(values: ICreateProduct) => createProductMutation.mutateAsync(values)}
            />
        </PageHeader>
    );
};

export default ProductCreatePage;
