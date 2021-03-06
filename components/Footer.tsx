import * as React from "react";

export interface IFooterProps {}

export default function Footer() {
  return (
    <footer className="flex w-full relative bg-blue pt-8 pb-6" id="footerlinks">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Coming soon, Find us on multiple social media platforms
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/mishnah/"
                    >
                      Mishnah Method
                    </a>
                  </li>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <a
                    href="https://www.youtube.com/channel/UCGp8pFe132gzI6YvnAxHOXw"
                    target="_blank"
                  >
                    Watch
                  </a>
                  <li>
                    <a href="/publicreading">Public Reading</a>
                  </li>
                  <li>
                    <a href="/bibleinbits">Bible-in-Bits</a>
                  </li>
                  <li>
                    <a href="/questions">Questions</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  {/* <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
              </li> */}
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                    >
                      Coming Soon...
                    </a>
                  </li>
                  {/* <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
              </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-7 border-white" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full text-center">
            <a
              className="flex items-center justify-center text-white"
              href="/"
              rel="noopener noreferrer"
            >
              Welcome to{" "}
              <img src="/logo.png" alt="Vercel Logo" className="footer-link" />
            </a>
          </div>
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright ?? <span id="get-current-year">2021</span>
              <a
                href="https://www.youtube.com/channel/UCGp8pFe132gzI6YvnAxHOXw"
                className="text-blueGray-500 hover:text-blueGray-800"
              >
                {" "}
                How Church Works
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
