import * as React from 'react';

export interface IColoredBgSectionProps {
    color: string;
    lead: string;
    leadRef:string;
    col1Big: string;
    col2Big: string;
    col3Big: string;
    col1Small: string;
    col2Small: string;
    col3Small: string;
}

export default function ColoredBgSection (props: IColoredBgSectionProps) {
  return (
    <section className={"bg-"+props.color+" w-full px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8 lg:py-20"}>
    <div className="max-w-4xl mx-auto text-center">
      <p className=" text-l leading-7  text-white">
       {props.lead}
      </p>
      <h2 className="mt-3 sm:mt-4 text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10">
        {props.leadRef}
      </h2>
    </div>

    <div className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
      <div>
        <h5 className="text-5xl font-bold text-white">
          <span className="inline text-white">{props.col1Big}</span>
        </h5>
        <p className={"text-white tracking-wide text-xs font-medium uppercase"}>
          {props.col1Small}
        </p>
      </div>
      
      <div>
        <h5 className="text-5xl font-bold text-white">
        <span className="inline text-white">{props.col2Big}</span>
        </h5>
        <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
        {props.col2Small}
        </p>
      </div>
      <div>
        <h5 className="text-5xl font-bold text-white">
          <span className="inline text-white">{props.col3Big}</span>
        </h5>
        <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
          {props.col3Small}
        </p>
      </div>
    </div>
    <div className="w-52 mx-auto mt-4 p-4 flex">
      <a
        type="button"
        target="_blank"
        className={"py-2 px-4  bg-white hover:bg-gray-100 focus:ring-"+props.color+" focus:ring-offset-"+props.color+" text-"+props.color+" text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "}
        href="/"
      >
        Read more...
      </a>
    </div>
  </section>
  );
}
