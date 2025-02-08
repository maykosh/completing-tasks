import { Status } from "@/shared/types/types";
import { Flex, Spin } from "antd";
import React from "react";

interface IProps {
   children: React.ReactNode;
   status: Status;
}

export const CartLayout: React.FC<IProps> = ({ children, status }) => {
   return (
      <Flex gap="middle" align="start" className="relative" wrap>
         <Spin
            className="mx-auto w-[100%] flex align-center justify-center  absolute"
            spinning={status === Status.Loading}
            size="large"
         />
         {children}
      </Flex>
   );
};
