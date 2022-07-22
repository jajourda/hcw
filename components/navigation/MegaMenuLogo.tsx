import * as React from 'react';

export interface IMegaMenuLogoProps {
}

export default function MegaMenuLogo() {
    return (
        <a className="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mr-1
      " href="#">
            <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" style={{ height: "30px" }} alt=""
                loading="lazy" />
        </a>
    );
}
