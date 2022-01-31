import axios from "axios"
export default async function handler(req, res) {
    //7166e434ad5dd762b8c721209c878d5d
    //http://api.biblia.com/v1/bible/content/LEB.txt.txt?passage=John3.16&key=7166e434ad5dd762b8c721209c878d5d

    //http://api.biblia.com/v1/bible/search/LEB.txt?query=bread&mode=verse&start=0&limit=20&key=fd37d8f28e95d3be8cb4fbc37e15e18e
    const { scripture } = req.query;
    const data = await fetch('http://api.biblia.com/v1/bible/content/LEB.js?passage='+scripture+'&key=7166e434ad5dd762b8c721209c878d5d')
    try{
         
         await res.status(200).json(data.body)
      } catch (error) {
         console.error(error)
         return res.status(error.status || 500).end(error.message)
       }
    }


   //  export default function handler(req, res) {
   //    const { pid } = req.query
   //    res.end(`Post: ${pid}`)
   //  }