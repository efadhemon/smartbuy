import { Paths } from "@shared/enums";
import { Button, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";

const ProductListPage = () => {
    const navigate = useNavigate();
    return (
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
        >
            <ProductList />
        </PageHeader>
    );
};

export default ProductListPage;
