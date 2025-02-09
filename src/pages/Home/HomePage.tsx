import { useAppSelector } from "@/shared";
import { message } from "antd";
import React, { useEffect } from "react";

export const HomePage: React.FC = () => {
   const { isAuth } = useAppSelector((state) => state.auth);
   const [messageApi, contextHolder] = message.useMessage();
   useEffect(() => {
      if (isAuth) {
         messageApi.success("добро пожаловать!");
      }
   }, [isAuth, messageApi]);
   return (
      <>
         {contextHolder}
         <div>HomePage</div>
      </>
   );
};
