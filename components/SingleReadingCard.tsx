import * as React from "react";
import Link from "next/link";
import { format } from "date-fns";

export interface ISingleReadingCardProps {
  reading: PublicReadingInterfaceProps;
}
import { PublicReadingInterfaceProps } from "../interfaces/publicreading";

export default function SingleReadingCard({
  reading,
}: ISingleReadingCardProps) {
  console.log("i am props in single reading card");
  console.log(reading);
  
  
  const dateUrl = format(new Date(reading.date), "M-dd-yy");
  console.log('i am reading.date')
  console.log(reading.date)
  console.log('i am dateUrl')
  console.log(dateUrl)
  return (
    <div className="flex bg-white rounded-lg shadow">
      <div className="flex-none w-24 md:w-48  relative">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/K%C3%B6ln-Tora-und-Innenansicht-Synagoge-Glockengasse-040.JPG/1200px-K%C3%B6ln-Tora-und-Innenansicht-Synagoge-Glockengasse-040.JPG"
          alt="shopping image"
          className="absolute rounded-lg inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex-auto p-6">
        <div className="flex flex-wrap">
        <strong className="flex-auto text-6xl text-black font-semibold ">
            {reading.date}
          </strong>
          <strong className="flex-auto text-3xl text-green font-semibold ">
            <div className="text-xl text-black">TORAH</div>
            {reading.torahPassage}
            <div className="text-base text-gray-400 font-thin">
              {reading.torahVerseTotal} verses
            </div>
          </strong>

          <strong className="flex-auto text-3xl text-green font-semibold ">
            <div className="text-xl text-black">GOSPEL</div>
            {reading.gospelPassage}
            <div className="text-base text-gray-400 font-thin">
              {reading.gospelVerseTotal} verses
            </div>
          </strong>

          <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
            {reading.torahTitle}
          </div>
        </div>
        <div className="flex w-full items-baseline mt-4 mb-6 text-gray-700 ">
          <div className="space-x-2 w-full flex-none">
            
          
          </div>
        
        </div>
        <div className="flex mb-4 text-sm font-medium">
          {/* link construction is part of the problem */}
          {/* {format(new Date(reading.date), "MM-dd-y ")} */}

          {/* parse(r.date, 'MM/dd/yyyy', new Date()) */}
        <Link
          href="/publicreading/weeklyreading/[date]"
          as={`/publicreading/weeklyreading/${dateUrl}`}
        >
          <a
            type="button"
            className="py-2 px-4  bg-green hover:bg-green focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
           See Reading
          </a>
          </Link>
        </div>
        
      </div>
    </div>
  );
}
