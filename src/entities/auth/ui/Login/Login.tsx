import React from "react";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

export const Login: React.FC = () => {
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
              Вход
            </Button>
            <div className="mt-[10px] ">если нет аккаунта: <Link className=" text-blue-500 "  to="/auth">Авторизация!</Link></div>
         </Form.Item>
      </Form>
   );
};
