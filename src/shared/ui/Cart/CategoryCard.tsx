import { compactDate } from "@/shared/lib/compactDate";
import { CategoryData } from "@/shared/types/types";
import { Avatar, Card } from "antd";
import React from "react";

interface IProps {
   item: CategoryData;
   actions: React.ReactNode[];
}

export const CategoryCard: React.FC<IProps> = React.memo(({ item, actions }) => {
   return (
      <Card key={item.id} actions={actions} style={{ minWidth: 300 }}>
         <Card.Meta
            avatar={
               <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
            }
            title={item.name}
            description={
               <div>
                  <p>создано: {compactDate(item.created_at)}</p>
               </div>
            }
         />
      </Card>
   );
});
