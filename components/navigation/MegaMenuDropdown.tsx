import * as React from 'react';

export interface IMegaMenuDropdownProps {
    text: string;
}

export default function MegaMenuDropdown(props: IMegaMenuDropdownProps) {
    return (
        <li className="nav-item dropdown static">
            <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonZ" data-bs-toggle="dropdown"
                aria-expanded="false">{props.text}
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
            </a>
            <div className="dropdown-menu w-full mt-0 hidden shadow-lg bg-white absolute left-0 top-full" aria-labelledby="dropdownMenuButtonZ">
                <div className="px-6 lg:px-8 py-5">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white text-gray-600">
                            <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">Lorem ipsum</p>
                            <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                    <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                                </svg>
                                Dolor sit
                            </a>
                            <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                    <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                                </svg>
                                Amet consectetur
                            </a>
                            <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                    <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                                </svg>
                                Cras justo odio
                            </a>
                            <a href="#!" aria-current="true" className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                    <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                                </svg>
                                Adipisicing elit
                            </a>
                        </div>
                        <div className="bg-white text-gray-600">
                            <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">Explit voluptas</p>
                            <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                    <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                                </svg>
                                Perspiciatis quo
                            </a>
                            <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                    <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                                </svg>
                                Cras justo odio
                            </a>
                            <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                    <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                                </svg>
                                Laudant maiores
                            </a>
                            <a href="#!" aria-current="true" className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                    <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                                </svg>
                                Provident dolor
                            </a>
                        </div>
                        <div className="bg-white text-gray-600">
                            <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">Iste quaerato</p>
                            <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                    <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                                </svg>
                                Cras justo odio
                            </a>
                            <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                    <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                                </svg>
                                Est iure
                            </a>
                            <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                    <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                                </svg>
                                Praesentium
                            </a>
                            <a href="#!" aria-current="true" className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                    <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                                </svg>
                                Laboriosam
                            </a>
                        </div>
                        <div className="bg-white text-gray-600">
                            <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">Cras justo odio</p>
                            <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                    <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                                </svg>
                                Saepe
                            </a>
                            <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                    <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                                </svg>
                                Vel alias
                            </a>
                            <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                    <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                                </svg>
                                Sunt doloribus
                            </a>
                            <a href="#!" aria-current="true" className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                    <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                                </svg>
                                Cum dolores
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
