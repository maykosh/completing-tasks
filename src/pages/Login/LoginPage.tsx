import React from "react";
import { login } from "@/entities";
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
   return <div>LoginPage</div>;
};
export default LoginPage;
