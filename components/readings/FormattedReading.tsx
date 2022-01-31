import * as React from "react";

export interface IFormattedReadingProps {
  isTorah: boolean;
  passageReference: string;
  readingText: string;
  verseTotal: number;
  torahTitle?: string;
}

export default function FormattedReading(props: IFormattedReadingProps) {
  return (
    <section className="bg-white">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          {props.isTorah ? (
            <span className="block text-green text-base">TORAH READING</span>
          ) : (
            <span className="block text-green text-base">GOSPEL READING</span>
          )}

          <span className="block text-black">
           
            {props.passageReference}{" "}
            <div className="font-thin text-gray-400 text-base tracking-wide">
            {props.torahTitle ? (
              props.torahTitle+" | "
            ): null} ({props.verseTotal} verses)
            </div>
          </span>
        </h2>
        <p className="text-xl mt-4 max-w-prose text-left mx-auto text-black font-light leading-10">
          {props.readingText}
        </p>
      </div>
    </section>
  );
}
