import { Paths } from "@shared/enums";
import { useProduct, useUpdateProduct } from "@shared/hooks";
import { Purify } from "@shared/utils";
import { notification, PageHeader } from "antd";
import { AxiosResponse } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ProductUpdateForm from "../components/ProductUpdateForm";

const ProductUpdatePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading } = useProduct({ id });

    const productUpdateMutation = useUpdateProduct({
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
        <Purify loading={isLoading} empty={false}>
            <PageHeader onBack={() => navigate(-1)} title="Product Update">
                <ProductUpdateForm
                    initialValues={data?.data?.payload}
                    isLoading={productUpdateMutation.isLoading}
                    onFinish={(values) =>
                        productUpdateMutation.mutateAsync({ ...values, id })
                    }
                />
            </PageHeader>
        </Purify>
    );
};

export default ProductUpdatePage;
