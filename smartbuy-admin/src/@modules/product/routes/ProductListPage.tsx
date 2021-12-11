import { Authorization } from "@modules/auth";
import { Paths } from "@shared/enums";
import { Button, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";

const ProductListPage = () => {
    const navigate = useNavigate();
    return (
        <Authorization allowedAccess={["ProductView"]}>
            <PageHeader
                onBack={() => navigate(-1)}
                title="Product List"
                extra={[
                    <Button
                        onClick={() => navigate(Paths.ProductCreate)}
                        type="primary"
                    >
                        Create
                    </Button>,
                ]}
            />
            <ProductList />
        </Authorization>
    );
};

export default ProductListPage;
