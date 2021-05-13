import React from "react";
import "./App.css";
import { Layout, Typography, Avatar, Menu, Breadcrumb } from "antd";
import { HeartOutlined, MailOutlined } from "@ant-design/icons";

const App = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const { Title } = Typography;
  const { SubMenu } = Menu;

  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: "right" }} icon={<HeartOutlined />} />
          <Title style={{ color: "#fff" }} level={3}>
            Crystal
          </Title>
        </Header>
        <Layout>
          <Sider>
            <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
              <Menu.Item key="Dashboard">Dashboard</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <MailOutlined />
                    <span>About Us</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="aboutus" title="Country">
                  <Menu.Item key="location1">Location 1</Menu.Item>
                  <Menu.Item key="location2">Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: 24,
                  minHeight: "100vh",
                }}
              >
                Content
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2021 Created by Crystal's Pages
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
