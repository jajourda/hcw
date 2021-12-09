import * as React from 'react';
import Link from "next/link";   //import this

export interface IWatchCtaProps {
    watchUrl:string;
}

export default function WatchCta (props: IWatchCtaProps) {
  return (
    <div className="w-full">
      
<div className="bg-gray-100 dark:bg-gray-800 ">
    <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
                Want to watch some videos?
            </span>
            <span className="block text-green">
                Check em' out.
            </span>
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className=" inline-flex rounded-md shadow">
                <Link href={props.watchUrl}>
                <button type="button" className="py-4 px-6  bg-green hover:bg-green focus:ring-green focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Watch on Youtube
                </button></Link>
            </div>
        </div>
    </div>
</div>

    </div>
  );
}
