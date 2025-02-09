import React from "react";
import { Login, login } from "@/entities";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";

const LoginPage: React.FC = () => {
   const dispatch = useAppDispatch();
   React.useEffect(() => {
      dispatch(
         login({
            phone: "+998910965455",
            password: "1234",
         })
      );
   }, []);
   return (
      <div className="flex items-center justify-center w-[100%] h-[100%]">
         <Login />
      </div>
   );
};
export default LoginPage;
