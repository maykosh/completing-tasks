import moment from "moment";
import "moment/dist/locale/ru"; 

moment.locale("ru"); 

export const compactDate = (date: string) => {
   return moment(date, moment.ISO_8601, true).isValid() 
      ? moment(date).format("LLLL") 
      : "Некорректная дата";
};
