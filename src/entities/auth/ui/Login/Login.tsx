import React, { useEffect } from "react";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {  useAppDispatch, useAppSelector } from "@/shared";
import { login } from "../../api/authThunk";

export const Login: React.FC = () => {
   const [isLoading, setIsLoading] = React.useState(false)
   const { isAuth } = useAppSelector((state) => state.auth);
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const onFinish = (values: { password: string; phone: string }) => {
      setIsLoading(true)
      dispatch(login(values));
   };
   useEffect(() => {
      if (isAuth) {
         navigate("/");
         setIsLoading(false)
      }
   }, [isAuth, navigate]);

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
            rules={[
               { required: true, message: "Please input your phone number!" },
            ]}
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
            <Button
               block
               type="primary"
               htmlType="submit"
               loading={isLoading}
            >
               Вход
            </Button>
            <div className="mt-[10px] ">
               если нет аккаунта:{" "}
               <Link className=" text-blue-500 " to="/auth">
                  Авторизация!
               </Link>
            </div>
         </Form.Item>
      </Form>
   );
};
