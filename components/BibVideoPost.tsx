import * as React from "react";

import { BibVideoInterfaceProps } from "../interfaces/bibvideo";
export interface IBibVideoPostProps {
  video: BibVideoInterfaceProps;
}

export default function BibVideoPost({ video }: IBibVideoPostProps) {
  let questionList = video.questions.split(/[?!.]/g);
  questionList = questionList.slice(0, -1);
  return (
    <div className="w-full">
      <div className="bg-white w-full dark:bg-gray-800 overflow-hidden relative mb-10">
        <div className="text-start w-full lg:w-1/2 lg:text-left py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block text-1xl">
              Bible-in-Bits
            </span>
            <span className="block sm:text-8xl lg:text-7xl text-purple">{video.passageReference}</span>
          </h2>
          <p className="text-xl mt-4 text-gray-400">{video.tldr}</p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <a
                href={"https://www.youtube.com/watch?v=" + video.youtube}
                target="_blank"
                type="button"
                className="py-4 px-6  bg-purple hover:bg-purple focus:ring-purple focus:ring-offset-purple text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Watch on Youtube
              </a>
            </div>
          </div>
        </div>
        <img
          src={"https://i.ytimg.com/vi/" + video.youtube + "/0.jpg"}
          className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0"
        />
      </div>

      <section className="bg-purple w-full px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className=" text-l leading-7  text-white">
            {video.passageContent}
          </p>
          <h2 className="mt-3 sm:mt-4 text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10">
            {video.passageReference}
          </h2>
        </div>

        <div className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div>
            <h5 className="text-5xl font-bold text-white">
              <span className="inline text-white">{video.timestamp}</span>
            </h5>
            <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
              Date
            </p>
          </div>

          <div>
            <h5 className="text-5xl font-bold text-white">
              <span className="inline text-white">
                {video.category.substring(0, 15)}...
              </span>
            </h5>
            <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
              Category
            </p>
          </div>
          <div>
            <h5 className="text-5xl font-bold text-white">
              <span className="inline text-white">{video.youtube}</span>
            </h5>
            <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
              Video ID
            </p>
          </div>
        </div>
        <div className="w-52 mx-auto mt-4 p-4 flex">
          <a
            type="button"
            target="_blank"
            className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-purple focus:ring-offset-purple text-purple text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            href={"https://www.youtube.com/watch?v=" + video.youtube}
          >
            Watch on Youtube
          </a>
        </div>
      </section>

      <section className="aspect-w-16 aspect-h-9">
        <iframe
          src={"https://www.youtube.com/embed/" + video.youtube}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <div className="bg-lightblue py-20 px-4">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
          <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
            Passage Breakdown
          </h2>
          <dl className="w-full md:w-2/3">
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">EXPLANATION</h3>
            </dt>
            <dd className="mb-16">
              <p>{video.explanation}</p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">QUESTIONS</h3>
            </dt>
            <dd className="mb-16">
              <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
                <ul>
                  {questionList.map((question: string, i: any) => (
                    <li
                      key={question + i}
                      className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800"
                    >
                      <div className="flex items-center justify-start text-sm">
                        <span className="mx-4">{i + 1}</span>
                        <span>{question}?</span>
                      </div>
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="mx-4 text-gray-400 dark:text-gray-300"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">Who</h3>
            </dt>
            <dd className="mb-16">

              <div className="bg-gradient-to-b from-blue-500 w-full md:w-60 to-blue-600 w-full rounded-lg p-4 mb-6 shadow sm:inline-block">
                <div className="flex items-start text-left">
                  <div className="flex-shrink-0">
                    <div className="inline-block relative">
                      <a href="#" className="block relative">
                        <img alt="profil" src="/images/person/4.jpg" className="mx-auto object-cover rounded-full h-16 w-16 " />
                      </a>
                    </div>
                  </div>
                  <div className="ml-6">
                    <p className="flex items-baseline">
                      <span className="text-white text-xl">
                        Who?:


                      </span>
                    </p>
                    <div className="flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 1792 1792">
                        <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                        </path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 1792 1792">
                        <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                        </path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 1792 1792">
                        <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                        </path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 1792 1792">
                        <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                        </path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 1792 1792">
                        <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <small className="text-white">People, Adam, Roles, Identity, Actors - what does this passage say about people? adam? community? roles? little finger, most important</small>
                </div>
                <div className="mt-3">
                  <p className="mt-1 max-w-xs font-light text-white">
                    My first job of scanning photos at the Memories 2 Digital Photo Scanning was fantastic. She completed the work quickly while I was waiting. Thanks for a great service..
                  </p>
                </div>
                <div className="flex items-start text-gray-100 mt-6">
                  <button className="mr-4 hover:text-white">
                    <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z">
                      </path>
                    </svg>
                  </button>
                  <button className="hover:text-white">
                    <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1344 1024q133 0 226.5 93.5t93.5 226.5-93.5 226.5-226.5 93.5-226.5-93.5-93.5-226.5q0-12 2-34l-360-180q-92 86-218 86-133 0-226.5-93.5t-93.5-226.5 93.5-226.5 226.5-93.5q126 0 218 86l360-180q-2-22-2-34 0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5-93.5 226.5-226.5 93.5q-126 0-218-86l-360 180q2 22 2 34t-2 34l360 180q92-86 218-86z">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>

            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">Notes</h3>
            </dt>
            <dd className="mb-16">
              <p>{video.notes}</p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
