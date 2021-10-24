import AppLayout from "@modules/common/layout/AppLayout";
import { Button } from "antd";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <Button type="primary">Primary Button</Button>
      <h1 className="text-2xl">Hello World</h1>
    </AppLayout>
  );
};

export default Home;
