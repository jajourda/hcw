import useSWR from 'swr'
import {getPublicReading} from './index'
import { parseISO, parse } from 'date-fns';
import { format, formatISO } from "date-fns";

import _ from "lodash";



export default async function WeeklyReadingHandler({ query: { date } }, res) {
  const data = await getPublicReading()
  // console.log('&&&&&&&&&&&&&&&&&&&&&&&&')
  // console.log('i am the data inside api/bib/id.js')
  // console.log(data)

  console.log('i am date in api page')
  console.log(date)
  
  

  
  // {format(new Date(reading.date), "MM-dd-y ")}
    
  // const filtered = data.filter((r) => {(
  //   format(parseISO(r.date), "MM-dd-y ")) === date
  // })

  const filtered = _.filter(data, function(r) {
    // let rDate = format(new Date(r.date), "MM-dd-yy");
    let dateString = r.date;
    dateString = dateString.split('/')
    
    let rDate = dateString[0]+"-"+dateString[1]+"-"+dateString[2];
    // console.log('i am datestring', rDate,date)
    
    if(rDate === date){
     // console.log('i equal!',date, rDate)
      return r;
    }
    

    
  });

  // console.log('i am filtered!!!!!!!!!!!!!!!!!!!!!!')
  // console.log(filtered)

  // reading with date exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `reading with date: ${date} not found.` })
  }
}