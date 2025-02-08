import { compactDate } from "@/shared/lib/compactDate";
import { TaskPayload } from "@/shared/types/types";
import { Avatar, Card } from "antd";
import React from "react";

interface IProps {
   item: TaskPayload;
   actions: React.ReactNode[];
}

export const TaskCard: React.FC<IProps> = React.memo(({ item, actions }) => {
   return (
      <Card key={item.id} actions={actions} style={{ minWidth: 300 }}>
         <Card.Meta
            avatar={
               <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
            }
            title={item.task}
            description={
               <div>
                  <p>
                     описание:
                     <span className="font-bold">{item.description}</span>
                  </p>
                  <p className="mt-[10px]">категория: {item.category.name}</p>
                  <p>создано: {compactDate(item.category.created_at)}</p>
                  <p>изменен: {compactDate(item.category.updated_at)}</p>
               </div>
            }
         />
      </Card>
   );
});
