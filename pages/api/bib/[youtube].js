import useSWR from 'swr'
import {getBibleInBits} from './index'



export default async function bibVidHandler({ query: { youtube } }, res) {
  const data = await getBibleInBits()
  console.log('&&&&&&&&&&&&&&&&&&&&&&&&')
  console.log('i am the data inside api/bib/id.js')
  console.log(data)

  
  
    
  const filtered = data.filter((v) => v.youtube === youtube)

  // User withyoutube exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User withyoutube: ${youtube} not found.` })
  }
}