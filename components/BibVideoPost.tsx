import * as React from 'react';

import { BibVideoInterfaceProps } from '../interfaces/bibvideo';
export interface IBibVideoPostProps {
    video: BibVideoInterfaceProps
}

export default function BibVideoPost ({video}: IBibVideoPostProps) {
    
    let questionList = video.questions.split(/[?!.]/g);
    questionList = questionList.slice(0, -1);
  return (
    <div className='w-full'>
      
<div className="bg-white w-full dark:bg-gray-800 overflow-hidden relative mb-10">
    <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
                <small>Bible-in-Bits</small>
            </span>
            <span className="block text-purple">
                {video.passageReference}
            </span>
        </h2>
        <p className="text-xl mt-4 text-gray-400">
            {video.tldr}
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
                <a href={'https://www.youtube.com/watch?v='+video.youtube} target="_blank" type="button" className="py-4 px-6  bg-purple hover:bg-purple focus:ring-purple focus:ring-offset-purple text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Watch on Youtube
                </a>
            </div>
        </div>
    </div>
    <img src={"https://i.ytimg.com/vi/"+video.youtube+"/0.jpg"} className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0"/>
</div>

<section className="bg-purple w-full">
    <div className="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 py-8 text-center">
        <div>
            <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                   {video.timestamp}
                </span>
               
            </h5>
            <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
                Date
            </p>
        </div>
        <div>
            <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                    {video.passageReference}
                </span>
               
            </h5>
            <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
                Passage Reference
            </p>
        </div>
        <div>
            <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                    {video.category.substring(0,15)}...
                </span>
               
            </h5>
            <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
                Category
            </p>
        </div>
        <div>
            <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                    {video.youtube}
                </span>
            </h5>
            <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
                Video ID
            </p>
        </div>
    </div>
    <div className="w-52 mx-auto mt-4 p-4 flex">
        <a type="button" target="_blank" className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-purple focus:ring-offset-purple text-purple text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " href={'https://www.youtube.com/watch?v='+video.youtube}>
            Watch on Youtube
        </a>
    </div>
</section>


<section className="aspect-w-16 aspect-h-9">
  <iframe src={"https://www.youtube.com/embed/"+video.youtube} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>


<div className="bg-lightblue py-20 px-4">
    <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
        <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
            Passage Breakdown
        </h2>
        <dl className="w-full md:w-2/3">
            <dt className="mb-4">
                <h3 className="text-xl font-semibold">
                    EXPLANATION
                </h3>
            </dt>
            <dd className="mb-16">
                <p>
                    {video.explanation}
                </p>
            </dd>
            <dt className="mb-4">
                <h3 className="text-xl font-semibold">
                    QUESTIONS
                </h3>      

            </dt>
            <dd className="mb-16">
            <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
                                   
                                    <ul>
                                        {questionList.map((question:string, i:any)=>(
                                             <li key={question+i} className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                             <div className="flex items-center justify-start text-sm">
                                                 <span className="mx-4">
                                                     {i+1}
                                                 </span>
                                                 <span>
                                                     {question}?
                                                 </span>
                                             </div>
                                             <svg width="20" height="20" fill="currentColor" className="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                 <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                 </path>
                                                 <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                 </path>
                                             </svg>
                                         </li>
                                        ))}
                                        
                                    </ul>
                                </div>
            </dd>
            <dt className="mb-4">
                <h3 className="text-xl font-semibold">
                    Notes
                </h3>
            </dt>
            <dd className="mb-16">
                <p>
                    {video.notes}
                </p>
            </dd>
        </dl>
    </div>
</div>


    </div>
  );
}
