import * as React from 'react';
import Link from 'next/link';

import { BibVideoInterfaceProps } from '../interfaces/bibvideo';

export interface IBibVideoListItemProps {
    video: BibVideoInterfaceProps
}

export default function BibVideoListItem ({video}: IBibVideoListItemProps) {
  console.log(video)
  return (
    <div>
      <div key={video.timestamp} className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
      <Link href="/bibleinbitsvideo/[youtube]" as={`/bibleinbitsvideo/${video.youtube}`}>
                <a className="w-full block h-full">
                    <img alt="blog photo" src={"https://i.ytimg.com/vi/"+video.youtube+"/0.jpg"} className="max-h-40 w-full object-cover"/>
                    
                    
                    <div className="bg-white dark:bg-gray-800 w-full p-4">
                        <p className="text-purple text-md font-medium mb-3">
                            <strong><small>CATEGORY</small></strong> <br />
                            <span className="text-black">#{(video.category).replace(/ /g, '')}</span>
                        </p>
                        <p className="text-purple dark:text-white text-2xl font-medium mb-2">
                            {video.passageReference}
                        </p>
                        <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                            {video.tldr}
                        </p>
                        <div className="flex items-center mt-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="https://lh3.googleusercontent.com/a-/AOh14Gho5YK2yVvF9gdv12O0QEdU_KN7kEcaDg-SkxsfHyk=s96-c-rg-br100" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 dark:text-white">
                                    Joshua Linog
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    {video.timestamp}
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                </Link>
            </div>
    <li>
    
    </li>
    </div>
    
  );
}
