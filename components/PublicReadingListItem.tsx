import * as React from "react";
// import Link from "next/link";
import { format } from "date-fns";

import { PublicReadingInterfaceProps } from "../interfaces/publicreading";
// import RightArrow from "./RightArrow";

export interface IPublicReadingListItemProps {
  reading: PublicReadingInterfaceProps;
  key: number;
}

export default function PublicReadingListItem({ reading,key }: IPublicReadingListItemProps) {
  // console.log(reading);
  return (
    
    <tr
    className="
  relative
  transform
  scale-100
  text-xs
  py-1
  border-b-2 border-blue-100
  cursor-default
  reading-list-row
"
    key={reading.date.toString() + key}
>
    <td className="pl-5 pr-3 whitespace-no-wrap">
        <div className="text-green text-base"> {format(new Date(reading.date), "EEEE")}</div>
        <div className="text-black text-lg"> {format(new Date(reading.date), "MMMM do, yyyy ")}</div>
    </td>

    <td className="px-2 py-2 whitespace-no-wrap">
        <div className="leading-5 text-base py-2 text-green font-medium">
            <small>TORAH</small>
        </div>
        <div className="leading-5 text-3xl text-black">
            {reading.torahPassage}
        </div>
        <div className="leading-5 text-base py-2 text-green font-medium">
            <small>GOSPEL</small>
        </div>
        <div className="leading-5 text-3xl text-black">
            {reading.gospelPassage}
        </div>
        
          {/* <RightArrow/> */}
       

    </td>
</tr>
       

  );
}
