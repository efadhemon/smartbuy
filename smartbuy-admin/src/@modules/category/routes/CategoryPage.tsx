import { Authorization } from "@modules/auth";
import { Paths } from "@shared/enums";
import { Button, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import CategoryList from "../components/CategoryList";

const CategoryPage = () => {
    const navigate = useNavigate();
    return (
        <Authorization allowedAccess={["CategoryView"]}>
            <PageHeader
                onBack={() => navigate(-1)}
                title="Category List"
                extra={[
                    <Button
                        onClick={() => navigate(Paths.CategoryCreate)}
                        type="primary"
                    >
                        Create
                    </Button>,
                ]}
            />
            <CategoryList />
        </Authorization>
    );
};

export default CategoryPage;
