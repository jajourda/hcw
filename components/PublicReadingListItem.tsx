import * as React from "react";
// import Link from "next/link";
import { format } from "date-fns";
import Link from "next/link";


import { PublicReadingInterfaceProps } from "../interfaces/publicreading";
// import RightArrow from "./RightArrow";

export interface IPublicReadingListItemProps {
  reading: PublicReadingInterfaceProps;
  key: number;
}

export default function PublicReadingListItem({
  reading,
  key,
}: IPublicReadingListItemProps) {
  // console.log(reading);
  const dateUrl = format(new Date(reading.date), "M-dd-yy");
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
        <div className="text-green text-base">
          {" "}
          {format(new Date(reading.date), "EEEE")}
        </div>
        <div className="text-black text-lg">
          {" "}
          {format(new Date(reading.date), "MMMM do, yyyy ")}
        </div>
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
      <td>
      <Link
          href="/publicreading/weeklyreading/[date]"
          as={`/publicreading/weeklyreading/${dateUrl}`}
        >
        <a
          type="button"
          className=" font-thin py-2 px-4 mr-3 flex justify-center items-center  bg-green hover:bg-white hover:text-green focus:ring-green focus:ring-offset-green text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg "
        >
        Read
        </a>
        </Link>
      </td>
    </tr>
  );
}
