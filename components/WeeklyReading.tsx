import * as React from "react";
import { PublicReadingInterfaceProps } from "../interfaces/publicreading";
import useSWR from "swr";
import FormattedReading from "./readings/FormattedReading";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export interface IWeeklyReadingProps {
  reading: PublicReadingInterfaceProps;
}
//https://api.biblia.com/v1/RegisteredApplications/Details/15087
//biblia api key
//7166e434ad5dd762b8c721209c878d5d

export default function WeeklyReading({ reading }: IWeeklyReadingProps) {
  const { data: torahReading, error: torahError } = useSWR(
    "/api/getScripture/" + reading.torahPassage,
    fetcher
  );

  const { data: gospelReading, error: gospelError } = useSWR(
    "/api/getScripture/" + reading.gospelPassage,
    fetcher
  );

  if (torahError || gospelError) return <h1>"An error has occurred."</h1>;
  if (!torahReading || !gospelReading) return <h1>"Loading..."</h1>;
  console.log("i am torahReading", torahReading);
  console.log("i am gospelReading", gospelReading);
  var match = /\r|\n/.exec(torahReading.text);
  if (match) {
    // Found one, look at `match` for details, in particular `match.index`
    console.log('i am new line detected', match)
  }
  // torahReading.text = torahReading.text.replace(/\r/gm, <br />);
  torahReading.text = torahReading.text.split(/\r?\n/)
  gospelReading.text = gospelReading.text.split(/\r?\n/)
  console.log('i am text', torahReading.text)

  return (
    <div className="w-full">
      <h1 className="text-3xl py-10 bg-green w-full font-extrabold text-black sm:text-4xl">
        <span className="block  text-white  font-normal text-1xl">Weekly Public Reading</span>
        <span className="block sm:text-8xl lg:text-8xl text-white mt-3">
          {reading.date}
        </span>
      </h1>

      <FormattedReading
        isTorah={true}
        passageReference={reading.torahPassage}
        readingText={torahReading.text}
        verseTotal={parseInt(reading.torahVerseTotal)}
        torahTitle={reading.torahTitle}
      />
      <FormattedReading
        isTorah={false}
        passageReference={reading.gospelPassage}
        readingText={gospelReading.text}
        verseTotal={parseInt(reading.gospelVerseTotal)}
      />
    </div>
  );
}
