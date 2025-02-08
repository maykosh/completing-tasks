import React, { useCallback } from "react";
import { DeleteFilled } from "@ant-design/icons";
import { DeleteCreateAsyncThunkTypes, useAppDispatch } from "@/shared";
import { message, Popconfirm, PopconfirmProps } from "antd";
import { deleteTaskAndCategories } from "../api/fetchToDo";
interface IProps {
   params: number;
   path: DeleteCreateAsyncThunkTypes;
}

export const Delete: React.FC<IProps> = ({ params, path }) => {
   const dispatch = useAppDispatch();

   const confirm: PopconfirmProps["onConfirm"] = useCallback(() => {
      dispatch(deleteTaskAndCategories({ type: path, params }));
      message.success("успешно");
   }, [dispatch, params, path]);

   return (
      <>
         <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
         >
            <DeleteFilled />
         </Popconfirm>
      </>
   );
};
