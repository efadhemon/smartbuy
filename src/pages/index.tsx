import AppLayout from "@modules/common/layout/AppLayout";
import { Empty } from "antd";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <div style={{padding: "200px 0"}}>
        <Empty />
      </div>
    </AppLayout>
  );
};

export default Home;
