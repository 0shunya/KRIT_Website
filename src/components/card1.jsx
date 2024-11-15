import React from "react";
import "./styles/card1.css"; // Import your CSS for styling if needed

export const Card1 = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="logo">
          {/* <span className="circle circle1"></span> */}
          {/* <span className="circle circle2"></span>
          <span className="circle circle3"></span>
          <span className="circle circle4"></span> */}
          <span className="circle circle5">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29.667 31.69"
              className="svg"
            >
              <path
                id="Path_6"
                d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"
              ></path>
              <path
                id="Path_7"
                d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z"
                transform="translate(-45.91 0)"
              ></path>
              <path
                id="Path_8"
                d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z"
                transform="translate(0 -51.963)"
              ></path>
            </svg> */}
          </span>
        </div>
        <div className="glass"></div>
        <div className="content">
          <span className="title">Software Diploma</span>
          <span className="text">
            Create, share, and use beautiful custom elements made with CSS
          </span>
        </div>
        <div className="bottom">
          <div className="social-buttons-container">
            <button className="social-button social-button1">
              <svg
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
              >
                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
              </svg>
            </button>
            <button className="social-button social-button2">
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </button>
            <button className="social-button social-button3">
              <svg
                viewBox="0 0 640 512"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
              >
                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.256,487.256,0,0,0,133.6,480.178a1.87,1.87,0,0,0,1.987-.627c37.1-50.276,69.311-103.506,96.3-158.129a1.811,1.811,0,0,0-.272-2.057A321.568,321.568,0,0,1,170.4,209.6a1.818,1.818,0,0,1,.116-2.009,386.309,386.309,0,0,1,27.236-33.1,1.878,1.878,0,0,1,2.015-.472,356.68,356.68,0,0,0,184.065,49.794 356.64,356.64,0,0,0,184.005-49.8,1.874,1.874,0,0,1,2.015.476 377.6,377.6,0,0,1,27.248,33.1,1.818,1.818,0,0,1,.116,2.009,321.674,321.674,0,0,1-61.05,110.38,1.809,1.809,0,0,0-.27,2.057c27.02,54.623,59.233,107.853,96.331,158.129a1.869,1.869,0,0,0,1.987.627 487.3,487.3,0,0,0,104.4-74.452,2,2,0,0,0,.765-1.375C621.155,294.69,600.283,183.651,524.531,69.836Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
