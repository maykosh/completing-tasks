import { TbCategory } from "react-icons/tb";
import { BiTask } from "react-icons/bi";
import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const items = [
   {
      key: "/tasks",
      icon: <BiTask />,
      label: <Link to="/tasks">Список задач</Link>,
   },
   {
      key: "/categories",
      icon: <TbCategory />,
      label: <Link to="/categories">Список Категории</Link>,
   },
];

interface IProps{
   children: React.ReactNode
}

export const AppLayout: React.FC<IProps> = ({children}) => {
   const [collapsed, setCollapsed] = React.useState(false);
   const loaction = useLocation();
   const {
      token: { colorBgContainer, borderRadiusLG },
   } = theme.useToken();

   return (
      <Layout className="h-[100lvh]">
         <Sider theme="dark" trigger={null} collapsible collapsed={collapsed} width={"250px"}>
            <div className="demo-logo-vertical text-amber-100 flex justify-center p-[20px]">
               Comlete Tasks
            </div>
            <Menu
               theme="dark"
               mode="inline"
               selectedKeys={[loaction.pathname]}
               className="flex  flex-col"
               items={items}
            />
         </Sider>
         <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
               <Button
                  type="text"
                  icon={
                     collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                     fontSize: "16px",
                     width: 64,
                     height: 64,
                  }}
               />
            </Header>
            <Content
               style={{
                  margin: "20px 10px",
                  padding: 20,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
               }}
            >
               {children}
            </Content>
         </Layout>
      </Layout>
   );
};
