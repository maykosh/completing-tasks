import React from "react";
import { LockOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

export const Auth: React.FC = () => {
   const onFinish = (values: any) => {
      console.log("Received values of form: ", values);
   };

   return (
      <Form
         name="login"
         initialValues={{ remember: true }}
         style={{ maxWidth: 360 }}
         onFinish={onFinish}
         className="flex flex-col gap-[10px] w-[100%]"
      >
         <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
         >
            <Input prefix={<UserOutlined />} placeholder="имя пользователя" />
         </Form.Item>
         <Form.Item
            name="phone"
            rules={[{ required: true, message: "Please input your phone number!" }]}
         >
            <Input prefix={<PhoneOutlined />} placeholder="телефон номер" />
         </Form.Item>
         <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
         >
            <Input
               prefix={<LockOutlined />}
               type="password"
               placeholder="пароль"
            />
         </Form.Item>

         <Form.Item>
            <Button block type="primary" htmlType="submit">
               Регистрация
            </Button>
            <div className="mt-[10px] ">если есть аккаунта: <Link className=" text-blue-500 "  to="/login">Логин!</Link></div>
         </Form.Item>
      </Form>
   );
};
