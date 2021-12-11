import { Authorization } from "@modules/auth";
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
            onSuccess: (data: AxiosResponse) => {
                if (data?.data?.success) {
                    navigate(Paths.ProductList);
                    notification.success({
                        type: "success",
                        message: "Product successfully updated",
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
        <Authorization allowedAccess={["ProductModify"]}>
            <Purify loading={isLoading} empty={false}>
                <PageHeader
                    onBack={() => navigate(-1)}
                    title="Product Update"
                />
                <ProductUpdateForm
                    initialValues={data?.data?.payload}
                    isLoading={productUpdateMutation.isLoading}
                    onFinish={(values) =>
                        productUpdateMutation.mutateAsync({ ...values, id })
                    }
                />
            </Purify>
        </Authorization>
    );
};

export default ProductUpdatePage;
