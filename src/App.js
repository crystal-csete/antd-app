import React from "react";
import "./App.css";
import {
  Layout,
  Typography,
  Avatar,
  Image,
  Menu,
  Breadcrumb,
  Card,
} from "antd";
import {
  HeartOutlined,
  UserOutlined,
  GithubOutlined,
  MediumWorkmarkOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import user from "./assets/user.jpg";

const App = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const { Title } = Typography;
  const { SubMenu } = Menu;

  return (
    <div className="app__container">
      <Layout>
        <Header style={{ padding: 10 }}>
          <Title style={{ color: "rgb(194, 57, 164)" }} level={3}>
            <Avatar style={{ float: "right" }} icon={<HeartOutlined />} />

            {/* <Avatar src={<Image src={user} />} /> */}
          </Title>
        </Header>
        <Layout>
          <Sider>
            <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
              <Menu.Item key="Dashboard">Dashboard</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <UserOutlined />
                    <span>About Me</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="aboutme" title="Portfolio">
                  <Menu.Item key="portfolio1">Portfolio Item 1</Menu.Item>
                  <Menu.Item key="portfolio2">Portfolio Item 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content className="app__content" style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div className="app__card__container">
                <Card className="app__card image">
                  <Avatar
                    shape="square"
                    size={200}
                    src={<Image src={user} />}
                  />
                </Card>
                <Card className="app__card">
                  <Title level={3}>Crystal Csete</Title>

                  <p>
                    Welcome to my page! I am a Full Stack Web Developer. I
                    graduated from Lambda School in April 2021. I am excited to
                    start my developer career!
                  </p>
                </Card>
                <Card className="app__card">
                  <a
                    href="https://github.com/crystal-csete"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubOutlined />
                  </a>
                  <a
                    href="https://jeannecc13.medium.com/adding-design-to-an-existing-application-738c08eb3140"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MediumWorkmarkOutlined />
                  </a>
                  <a
                    href="www.linkedin.com/in/crystal-csete"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedinOutlined />
                  </a>
                </Card>
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
