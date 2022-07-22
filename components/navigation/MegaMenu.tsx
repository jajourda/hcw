import * as React from 'react';
import MegaMenuDropdown from './MegaMenuDropdown';
import MegaMenuLogo from './MegaMenuLogo';
import HeaderSearch from './HeaderSearch';
import IconDropDown from './IconDropdown';



export interface ITopNavProps {
}

export default function TopNav(props: ITopNavProps) {
    return (
        <nav className="navbar navbar-expand-lg shadow-lg py-2 bg-gray-50 relative flex flex-wrap items-center w-full justify-between">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentZ" aria-controls="navbarSupportedContentZ" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                    </svg>
                </button>
                <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentZ">
                    <MegaMenuLogo />
                    <ul className="navbar-nav mr-auto flex flex-row">
                        <MegaMenuDropdown text="TRAIN" />
                        <MegaMenuDropdown text="SHARE" />
                        <MegaMenuDropdown text="GATHER" />
                        <MegaMenuDropdown text="PRAY" />
                    </ul>
                    {/* <!-- Left links --> */}
                    <HeaderSearch placeholder='Search' />
                </div>
                {/* <!-- Collapsible wrapper --> */}

                {/* <!-- Right elements --> */}
                <div className="flex items-center relative">
                    <IconDropDown />
                </div>
            </div>
        </nav>
    );
}
