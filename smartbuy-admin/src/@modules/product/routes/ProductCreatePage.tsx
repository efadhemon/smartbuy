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
            onSuccess: (data: AxiosResponse) => {
                if (data?.data?.success) {
                    navigate(Paths.ProductList);
                    notification.success({
                        type: "success",
                        message: "Product successfully created",
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
        <PageHeader onBack={() => navigate(-1)} title="Create Product">
            <ProductCreateForm
                isLoading={createProductMutation.isLoading}
                onFinish={(values: ICreateProduct) => createProductMutation.mutateAsync(values)}
            />
        </PageHeader>
    );
};

export default ProductCreatePage;
