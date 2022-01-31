import useSWR from 'swr'
import {getPublicReading} from './index'
import { parseISO, parse } from 'date-fns';
import { format, formatISO } from "date-fns";

import _ from "lodash";



export default async function WeeklyReadingHandler({ query: { date } }, res) {
  let data = await getPublicReading();
  //>> now remove the header row so the string 'date' doesn't create an invalid date error in date-fns
  data = data.slice(1, data.length)
  // console.log('&&&&&&&&&&&&&&&&&&&&&&&&')
  // console.log('i am the data inside api/bib/id.js')
  // console.log(data)

  console.log('i am date in api page')
  console.log(date)
  
  const dFormated = formatISO(new Date(date), "M-dd-yy");
  console.log('i am dFormatted, the date formatted after sending it to the api',dFormated)
  
//--> yeshua  i need to account for the lack of zero in single digit dates between 1-9
//--> another note: i am datestring [ 'date' ] = the first column header needs to be skipped
  

  const filtered = _.filter(data, function(r) {
    
    let rDate = format(new Date(r.date), "M-dd-yy")
    
    if(rDate === date){
    //  console.log('i equal!',date, rDate)
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