import * as React from "react";
import { PublicReadingInterfaceProps } from "../interfaces/publicreading";
import useSWR from "swr";

export interface IWeeklyReadingProps {
  reading: PublicReadingInterfaceProps;
}
//https://api.biblia.com/v1/RegisteredApplications/Details/15087
//biblia api key
//7166e434ad5dd762b8c721209c878d5d
const url =
  "https://api.biblia.com/v1/bible/content/LEB.html?passage=John3.16&key=7166e434ad5dd762b8c721209c878d5d";
const fetcher = (url: any) => fetch(url).then((res) => {
  console.log('i am response')
  console.log(res)
  res.json()
});

export default function WeeklyReading({ reading }: IWeeklyReadingProps) {
  const { data, error } = useSWR(
   url,
    fetcher
  );

  if(error){
    console.log(error)
  }
  if(data){
    console.log(data)
  }
  // if (error) return "An error has occurred."+{error};
  // if (!data) return "Loading...";
  return (
    <div>
      <h1>weekly reading</h1>
      <h2>{reading.date}</h2>
      
    </div>
  );
}
