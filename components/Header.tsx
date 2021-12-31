import * as React from 'react';

export interface IHeaderProps {
}

export default function Header () {
  return (
    <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="uppercase text-blue dark:text-white font-black text-3xl">
                Howchurch.works
            </div>
            <div className="flex items-center">
                <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                    <a href="/" className="py-2 px-6 flex">
                        Home
                    </a>
                    <a href="https://www.youtube.com/channel/UCGp8pFe132gzI6YvnAxHOXw" target="_blank" className="py-2 px-6 flex">
                        Watch
                    </a>
                    <a href="/bibleinbits" className="py-2 px-6 flex">
                        Bible-in-Bits
                    </a>
                    <a href="/questions" className="py-2 px-6 flex">
                        Questions
                    </a>
                    <a href="#" className="py-2 px-6 flex">
                        Contact
                    </a>
                </nav>
                <a type='button' href='#footerlinks' className="lg:hidden flex flex-col ml-4">
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                </a>
            </div>
        </div>
    </header>
  );
}
