import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import MainHeader from "../headers/MainHeader";

const { Content, Footer } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <MainHeader />
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;
