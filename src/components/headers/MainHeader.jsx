import { Layout, Menu } from "antd";

const { Header } = Layout;
const items = [
  { key: "1", label: "nav1" },
  { key: "2", label: "nav2" },
  { key: "3", label: "nav3" },
];

const MainHeader = () => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src="/cardinai-w.svg" alt="Logo" className="w-16 h-auto" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </Header>
  );
};

export default MainHeader;
