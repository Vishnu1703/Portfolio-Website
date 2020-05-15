function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"logo-container\">\n  <div class=\"logo\">\n    <img\n      style=\"height:inherit; float: right;margin-right: 5px;\"\n      src=\"../../../assets/Artboard3.png\"\n    />\n  </div>\n</div>\n\n<app-home-page></app-home-page>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/about-me/about-me.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/about-me/about-me.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentAboutMeAboutMeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ml-5per\">\n  <h3 class=\"page-title zoomEl\">About Me</h3>\n\n  <div class=\"tab\">\n    <div style=\"background-color:#00000096; padding:15px\">\n      <div style=\"\">\n        <img style=\"width:100%\" src=\"assets/profile.jpg\" />\n      </div>\n    </div>\n  </div>\n\n  <div\n    class=\"tabcontent active contentOverflow\"\n  >\n    <div>\n      <div style=\"font-size:15px\">\n        <p>Hello,</p>\n        <p>\n          I'm Vishnu, a software engineer based in New Delhi, MA. I enjoy\n          creating things that live on the internet, whether that be websites,\n          applications, or anything in between. My goal is to always build\n          products that provide pixel-perfect, performant experiences.\n        </p>\n        <p>\n          Just after completing MCA from\n          <a target=\"_blank\">NIT Kurukshetra</a>, I joined the engineering team\n          at\n          <a target=\"_blank\" rel=\"nofollow noopener noreferrer\">Nagarro</a>\n          where I work on a wide variety of interesting and meaningful projects\n          on a daily basis.\n        </p>\n        <p>Here are a few technologies I've been working with recently:</p>\n      </div>\n      <ul class=\"about__SkillsContainer-sc-1ownso9-3 dbgkCk\">\n        <li class=\"about__Skill-sc-1ownso9-4 ibWQpd\">JavaScript (ES6+)</li>\n        <li class=\"about__Skill-sc-1ownso9-4 ibWQpd\">HTML &amp; (S)CSS</li>\n        <li class=\"about__Skill-sc-1ownso9-4 ibWQpd\">React</li>\n        <li class=\"about__Skill-sc-1ownso9-4 ibWQpd\">Vue</li>\n        <li class=\"about__Skill-sc-1ownso9-4 ibWQpd\">Node.js</li>\n        <li class=\"about__Skill-sc-1ownso9-4 ibWQpd\">WordPress</li>\n      </ul>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/experience-details/experience-details.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/experience-details/experience-details.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentExperienceDetailsExperienceDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ml-5per\">\n  <h3 class=\"page-title zoomEl\">Where I've Worked</h3>\n  <div class=\"tab\">\n    <button\n      class=\"tablinks\"\n      (click)=\"openCity($event, 'London')\"\n      id=\"first_tab\"\n    >\n      <div class=\"circle\"></div>\n      <span style=\"margin-left:10px\">Amplus Solar</span>\n    </button>\n    <button class=\"tablinks\" (click)=\"openCity($event, 'Paris')\">\n      <div class=\"circle\"></div>\n      <span style=\"margin-left:10px\">Nagarro Software</span>\n    </button>\n  </div>\n\n  <div id=\"London\" class=\"tabcontent active\">\n    <div class=\"profile-title\">\n      <h4>Senior Software Engineer</h4>\n      &nbsp;\n      <h4 class=\"secondary-color\">@Amplus</h4>\n    </div>\n    <p style=\"float:right\">Dec 2018 - Present</p>\n    <div style=\"margin-top:10%\">\n      <ul class=\"set-list\">\n        <li class=\"set-item\">\n          Developed and maintained code for in-house and client websites\n          primarily using HTML, CSS, Sass, JavaScript, and jQuery\n        </li>\n        <li class=\"set-item\">\n          Manually tested sites in various browsers and mobile devices to ensure\n          cross-browser compatibility and responsiveness\n        </li>\n        <li class=\"set-item\">\n          Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of\n          Defense, and more\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div id=\"Paris\" class=\"tabcontent\">\n    <div class=\"profile-title\">\n      <h4>Associate Technology</h4>\n      &nbsp;\n      <h4 class=\"secondary-color\">@Nagarro Software</h4>\n    </div>\n    <p style=\"float:right\">Jan 2016 - Dec 2018</p>\n    <div style=\"margin-top:10%\">\n      <ul class=\"set-list\">\n        <li class=\"set-item\">\n          Developed and maintained code for in-house and client websites\n          primarily using HTML, CSS, Sass, JavaScript, and jQuery\n        </li>\n        <li class=\"set-item\">\n          Manually tested sites in various browsers and mobile devices to ensure\n          cross-browser compatibility and responsiveness\n        </li>\n        <li class=\"set-item\">\n          Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of\n          Defense, and more\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/get-in-touch/get-in-touch.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/get-in-touch/get-in-touch.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentGetInTouchGetInTouchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section style=\"margin:10%\">\n  <h1 class=\"f-50 zoomEl\" style=\"transition-delay: 200ms;\">\n    Get In Touch\n  </h1>\n\n  <div style=\"transition-delay: 400ms;margin-top:40px\">\n    <p class=\"f-20\">\n      Although I'm not currently looking for any new opportunities, my inbox is\n      always open. Whether you have a question or just want to say hi, I'll try\n      my best to get back to you!\n    </p>\n  </div>\n  <div style=\"transition-delay: 500ms; margin-top: 60px\">\n    <a class=\"mail-button zoomEl\" href=\"mailto:vishnukhandelwal93@gmail.com\"\n      >Say Hello</a\n    >\n  </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home-page/home-page.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home-page/home-page.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"side-container\">\n    <ul class=\"accounts-list\">\n      <li class=\"account\">\n        <a\n          href=\"https://github.com/Vishnu1703\"\n          target=\"_blank\"\n          aria-label=\"GitHub\"\n          ><svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            role=\"img\"\n            viewBox=\"0 0 438.549 438.549\"\n          >\n            <title>GitHub</title>\n            <path\n              d=\"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z\"\n            ></path>\n          </svg>\n        </a>\n      </li>\n      <li class=\"account\">\n        <a\n          href=\"https://www.linkedin.com/in/vishnu-todwal-02353a3a/\"\n          target=\"_blank\"\n          aria-label=\"Linkedin\"\n          ><svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            role=\"img\"\n            viewBox=\"0 0 430.117 430.117\"\n          >\n            <title>LinkedIn</title>\n            <path\n              d=\"M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z\"\n            ></path>\n          </svg>\n        </a>\n      </li>\n      <li class=\"account\">\n        <a\n          href=\"https://www.instagram.com/_vishnutodwal_/\"\n          target=\"_blank\"\n          rel=\"nofollow noopener noreferrer\"\n          aria-label=\"Instagram\"\n          class=\"social__StyledLink-anu6nt-1 jZDtYm\"\n          ><svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            role=\"img\"\n            viewBox=\"0 0 512 512\"\n          >\n            <title>Instagram</title>\n            <g>\n              <g>\n                <path\n                  d=\"M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z\"\n                ></path>\n              </g>\n            </g>\n            <g>\n              <g>\n                <path\n                  d=\"M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z\"\n                ></path>\n              </g>\n            </g>\n            <g>\n              <g><circle cx=\"393.6\" cy=\"118.4\" r=\"17.056\"></circle></g>\n            </g>\n          </svg>\n        </a>\n      </li>\n      <li class=\"account\">\n        <a\n          href=\"https://twitter.com/vishnukhandelw1\"\n          target=\"_blank\"\n          aria-label=\"Twitter\"\n          ><svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            role=\"img\"\n            viewBox=\"0 0 612 612\"\n          >\n            <title>Twitter</title>\n            <path\n              d=\"M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z\"\n            ></path>\n          </svg>\n        </a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"m-container\">\n    <ng-container *ngComponentOutlet=\"componentName\"></ng-container>\n  </div>\n</div>\n<div class=\"full-page\">\n  <nav>\n    <ul>\n      <li (click)=\"changeTab('4')\">\n        <a>\n          <svg><use xlink:href=\"#plus-icon\"></use></svg>\n        </a>\n      </li>\n    </ul>\n    <ul>\n      <li (click)=\"changeTab('2')\">\n        <a>\n          <svg><use xlink:href=\"#user-icon\"></use></svg>\n        </a>\n      </li>\n    </ul>\n    <ul>\n      <li (click)=\"changeTab('1')\">\n        <a class=\"active\">\n          <svg><use xlink:href=\"#home-icon\"></use></svg>\n        </a>\n      </li>\n    </ul>\n    <ul>\n      <li (click)=\"changeTab('3')\">\n        <a>\n          <svg><use xlink:href=\"#bookmark-icon\"></use></svg>\n        </a>\n      </li>\n    </ul>\n    <ul>\n      <li (click)=\"changeTab('5')\">\n        <a>\n          <svg><use xlink:href=\"#settings-icon\"></use></svg>\n        </a>\n      </li>\n    </ul>\n\n    <div class=\"tubelight\">\n      <div class=\"light-ray\"></div>\n    </div>\n  </nav>\n\n  <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display: none;\">\n    <symbol\n      xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox=\"0 0 16 16\"\n      id=\"home-icon\"\n    >\n      <path\n        d=\"M13.1428571,14.5 C13.6571429,14.5 14,14.175507 14,13.6887676 L14,6.38767551 C14,6.14430577 13.9142857,5.90093604 13.6571429,5.73868955 L8.51428571,1.6825273 C8.17142857,1.43915757 7.74285714,1.43915757 7.4,1.6825273 L2.25714286,5.73868955 C2.08571429,5.90093604 2,6.14430577 2,6.38767551 L2,13.6887676 C2,14.175507 2.34285714,14.5 2.85714286,14.5 L13.1428571,14.5 Z M5.42857143,12.8775351 L3.71428571,12.8775351 L3.71428571,6.79329173 L8,3.38611544 L12.2857143,6.79329173 L12.2857143,12.8775351 L10.5714286,12.8775351 L5.42857143,12.8775351 Z\"\n      ></path>\n    </symbol>\n    <symbol\n      xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox=\"0 0 16 16\"\n      id=\"favorites-icon\"\n    >\n      <path\n        d=\"M7.5125,14.3196446 C6.8625,13.7292662 1.5,9.09057902 1.5,5.54830881 C1.5,3.27113511 3.2875,1.5 5.4,1.5 C6.375,1.5 7.26875,1.92169883 8,2.5120772 C8.73125,1.83735907 9.625,1.5 10.6,1.5 C12.79375,1.5 14.5,3.35547487 14.5,5.54830881 C14.5,9.09057902 9.1375,13.7292662 8.4875,14.2353048 C8.24375,14.5726639 7.75625,14.5726639 7.5125,14.3196446 Z M5.4,3.18679534 C4.18125,3.18679534 3.125,4.28321231 3.125,5.54830881 C3.125,7.40378368 5.96875,10.6086948 8,12.4641697 C9.70625,10.8617141 12.875,7.57246322 12.875,5.54830881 C12.875,4.19887254 11.81875,3.18679534 10.6,3.18679534 C9.86875,3.18679534 9.1375,3.60849417 8.73125,4.28321231 C8.40625,4.78925091 7.675,4.78925091 7.35,4.28321231 C6.8625,3.60849417 6.2125,3.18679534 5.4,3.18679534 Z\"\n      ></path>\n    </symbol>\n    <symbol\n      xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox=\"0 0 512 568\"\n      id=\"settings-icon\"\n    >\n      <path\n        d=\"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z\"\n      />\n    </symbol>\n    <symbol\n      xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox=\"0 0 24 24\"\n      id=\"plus-icon\"\n    >\n      <path\n        fill-rule=\"evenodd\"\n        clip-rule=\"evenodd\"\n        d=\"M12 2C6.48 2 2 6.48001 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48001 17.52 2 12 2ZM11 7V11H7V13H11V17H13V13H17V11H13V7H11ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z\"\n      />\n    </symbol>\n    <symbol\n      xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox=\"0 0 24 24\"\n      id=\"bookmark-icon\"\n    >\n      <path\n        fill-rule=\"evenodd\"\n        clip-rule=\"evenodd\"\n        d=\"M7 3H17C18.1 3 19 3.89999 19 5V21L12 18L5 21V5C5 3.89999 5.90002 3 7 3ZM12 15.82L17 18V5H7V18L12 15.82Z\"\n      />\n    </symbol>\n    <symbol\n      xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox=\"0 0 448 570\"\n      id=\"user-icon\"\n    >\n      <path\n        d=\"M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z\"\n      />\n    </symbol>\n  </svg>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/profile-details/profile-details.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/profile-details/profile-details.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentProfileDetailsProfileDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section style=\"margin:10%\">\n  <h4 class=\"f-15\" style=\"transition-delay: 100ms;\">\n    Hi, my name is\n  </h4>\n  <h1 class=\"f-50 zoomEl\" style=\"transition-delay: 200ms;\">\n    Vishnu Todwal;\n  </h1>\n  <h3 class=\"f-50 zoomEl\" style=\"transition-delay: 300ms;\">\n    I build things for the web;\n  </h3>\n  <div style=\"transition-delay: 400ms;margin-top:40px\">\n    <p class=\"f-20\">\n      I'm a software engineer based in New Delhi, MA specializing in building\n      (and occasionally designing) exceptional websites, applications, and\n      everything in between.\n    </p>\n  </div>\n  <div style=\"transition-delay: 500ms; margin-top: 60px\">\n    <a class=\"mail-button zoomEl\" href=\"mailto:vishnukhandelwal93@gmail.com\"\n      >Get In Touch</a\n    >\n    <a\n      style=\"margin-left:20px\"\n      class=\"mail-button zoomEl\"\n      href=\"mailto:vishnukhandelwal93@gmail.com\"\n    >\n      Download Resume\n    </a>\n  </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'portfolio';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _component_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./component/home-page/home-page.component */
    "./src/app/component/home-page/home-page.component.ts");
    /* harmony import */


    var _component_experience_details_experience_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./component/experience-details/experience-details.component */
    "./src/app/component/experience-details/experience-details.component.ts");
    /* harmony import */


    var _component_profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component/profile-details/profile-details.component */
    "./src/app/component/profile-details/profile-details.component.ts");
    /* harmony import */


    var _component_get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./component/get-in-touch/get-in-touch.component */
    "./src/app/component/get-in-touch/get-in-touch.component.ts");
    /* harmony import */


    var _component_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./component/about-me/about-me.component */
    "./src/app/component/about-me/about-me.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _component_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"], _component_experience_details_experience_details_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceDetailsComponent"], _component_profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_7__["ProfileDetailsComponent"], _component_get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_8__["GetInTouchComponent"], _component_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__["AboutMeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      entryComponents: [_component_profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_7__["ProfileDetailsComponent"], _component_experience_details_experience_details_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceDetailsComponent"], _component_get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_8__["GetInTouchComponent"], _component_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__["AboutMeComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/component/about-me/about-me.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/component/about-me/about-me.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentAboutMeAboutMeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/about-me/about-me.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/component/about-me/about-me.component.ts ***!
    \**********************************************************/

  /*! exports provided: AboutMeComponent */

  /***/
  function srcAppComponentAboutMeAboutMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function () {
      return AboutMeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutMeComponent = /*#__PURE__*/function () {
      function AboutMeComponent() {
        _classCallCheck(this, AboutMeComponent);
      }

      _createClass(AboutMeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutMeComponent;
    }();

    AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-about-me",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-me.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/about-me/about-me.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-me.component.scss */
      "./src/app/component/about-me/about-me.component.scss"))["default"]]
    })], AboutMeComponent);
    /***/
  },

  /***/
  "./src/app/component/experience-details/experience-details.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/component/experience-details/experience-details.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentExperienceDetailsExperienceDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9leHBlcmllbmNlLWRldGFpbHMvZXhwZXJpZW5jZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/experience-details/experience-details.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/component/experience-details/experience-details.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ExperienceDetailsComponent */

  /***/
  function srcAppComponentExperienceDetailsExperienceDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceDetailsComponent", function () {
      return ExperienceDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExperienceDetailsComponent = /*#__PURE__*/function () {
      function ExperienceDetailsComponent() {
        _classCallCheck(this, ExperienceDetailsComponent);
      }

      _createClass(ExperienceDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var tabEl = document.getElementById("first_tab");
          tabEl.click();
        }
      }, {
        key: "openCity",
        value: function openCity(evt, cityName) {
          var i, tabcontent, tablinks;
          tabcontent = document.getElementsByClassName("tabcontent");

          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }

          tablinks = document.getElementsByClassName("tablinks");

          for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
          }

          document.getElementById(cityName).style.display = "block";
          evt.currentTarget.className += " active";
        }
      }]);

      return ExperienceDetailsComponent;
    }();

    ExperienceDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-experience-details",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./experience-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/experience-details/experience-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./experience-details.component.scss */
      "./src/app/component/experience-details/experience-details.component.scss"))["default"]]
    })], ExperienceDetailsComponent);
    /***/
  },

  /***/
  "./src/app/component/get-in-touch/get-in-touch.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/component/get-in-touch/get-in-touch.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentGetInTouchGetInTouchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9nZXQtaW4tdG91Y2gvZ2V0LWluLXRvdWNoLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/get-in-touch/get-in-touch.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/component/get-in-touch/get-in-touch.component.ts ***!
    \******************************************************************/

  /*! exports provided: GetInTouchComponent */

  /***/
  function srcAppComponentGetInTouchGetInTouchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetInTouchComponent", function () {
      return GetInTouchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GetInTouchComponent = /*#__PURE__*/function () {
      function GetInTouchComponent() {
        _classCallCheck(this, GetInTouchComponent);
      }

      _createClass(GetInTouchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GetInTouchComponent;
    }();

    GetInTouchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-get-in-touch',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./get-in-touch.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/get-in-touch/get-in-touch.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./get-in-touch.component.scss */
      "./src/app/component/get-in-touch/get-in-touch.component.scss"))["default"]]
    })], GetInTouchComponent);
    /***/
  },

  /***/
  "./src/app/component/home-page/home-page.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/component/home-page/home-page.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentHomePageHomePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --background: #cecece;\n  --scale: 1;\n  --icon-size: 10px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.full-page {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  background: var(--background);\n  overflow: hidden;\n}\n\nnav {\n  position: fixed;\n  top: 80%;\n  min-width: 350px;\n  min-height: 70px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  border-radius: 10px;\n  padding: 0 15px;\n  background: black;\n  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.12), 0 22.3px 17.9px rgba(0, 0, 0, 0.08), 0 100px 80px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n}\n\nnav ul {\n  height: 100%;\n  display: flex;\n  height: inherit;\n  justify-content: center;\n  align-items: center;\n}\n\nnav ul li {\n  list-style: none;\n  height: inherit;\n  width: 30px;\n  height: 30px;\n}\n\nnav ul li a {\n  display: block;\n  height: inherit;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n\nnav ul li a svg {\n  fill: #fff;\n  width: 100%;\n  height: 100%;\n  opacity: 0.4;\n  transition: opacity 100ms ease;\n  pointer-events: none;\n}\n\nnav ul li a.active svg {\n  opacity: 1;\n}\n\nnav .tubelight {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  margin-left: 3px;\n  transform: translateX(-50%);\n  width: 45px;\n  height: 5px;\n  border-radius: 5px;\n  background: #ffffff;\n  transition: left 400ms ease;\n  z-index: 10;\n}\n\nnav .tubelight .light-ray {\n  position: absolute;\n  left: -30%;\n  top: 5px;\n  width: 160%;\n  height: 80px;\n  -webkit-clip-path: polygon(5% 100%, 25% 0px, 75% 0px, 95% 100%);\n          clip-path: polygon(5% 100%, 25% 0px, 75% 0px, 95% 100%);\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3) -50%, rgba(255, 255, 255, 0) 90%);\n  pointer-events: none;\n}\n\n.support {\n  position: fixed;\n  right: 10px;\n  bottom: 10px;\n  padding: 10px;\n  display: flex;\n}\n\n.support a {\n  margin: 0 10px;\n  color: #222;\n  font-size: 1.8rem;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: all 150ms ease;\n}\n\n.support a:hover {\n  transform: scale(1.1);\n}\n\n.accounts-list {\n  transform: translateY(50%);\n  /* top: 50%; */\n  position: fixed;\n  right: 0%;\n  bottom: 50%;\n}\n\n.side-container {\n  position: fixed;\n  width: 20%;\n  height: 100%;\n  right: 0%;\n  top: 50%;\n  z-index: 1;\n  bottom: 50%;\n}\n\n.accounts-list > li {\n  margin: 40px 20px 40px 0px !important;\n  list-style: none;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNobnV0b2R3YWwvRG9jdW1lbnRzL0xlYXJuaW5nL3BvcnRmb2xpby9wb3J0Zm9saW8vc3JjL2FwcC9jb21wb25lbnQvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvSEFBQTtFQUVBLGdCQUFBO0FDREY7O0FERUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FEQ0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NOOztBREFNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNFUjs7QUREUTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FDR1Y7O0FEQVU7RUFDRSxVQUFBO0FDRVo7O0FESUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREdJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0RBQUE7VUFBQSx1REFBQTtFQUNBLGlHQUFBO0VBS0Esb0JBQUE7QUNMTjs7QURVQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDUEY7O0FEUUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDBCQUFBO0FDTko7O0FET0k7RUFDRSxxQkFBQTtBQ0xOOztBRFVBO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDUEY7O0FEU0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDTkY7O0FEUUE7RUFDRSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgLS1iYWNrZ3JvdW5kOiAjY2VjZWNlO1xuICAtLXNjYWxlOiAxO1xuICAtLWljb24tc2l6ZTogMTBweDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ1bGwtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbm5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA4MCU7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XG4gIGJveC1zaGFkb3c6IDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHVsIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsaSB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBhIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBzdmcge1xuICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zIGVhc2U7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAudHViZWxpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHRyYW5zaXRpb246IGxlZnQgNDAwbXMgZWFzZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICAubGlnaHQtcmF5IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IC0zMCU7XG4gICAgICB0b3A6IDVweDtcbiAgICAgIHdpZHRoOiAxNjAlO1xuICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUlIDEwMCUsIDI1JSAwcHgsIDc1JSAwcHgsIDk1JSAxMDAlKTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gYm90dG9tLFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgLTUwJSxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA5MCVcbiAgICAgICk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLnN1cHBvcnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGEge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB9XG4gIH1cbn1cblxuLmFjY291bnRzLWxpc3Qge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgLyogdG9wOiA1MCU7ICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDAlO1xuICBib3R0b206IDUwJTtcbn1cbi5zaWRlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICByaWdodDogMCU7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDUwJTtcbn1cbi5hY2NvdW50cy1saXN0ID4gbGkge1xuICBtYXJnaW46IDQwcHggMjBweCA0MHB4IDBweCAhaW1wb3J0YW50O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCI6cm9vdCB7XG4gIC0tYmFja2dyb3VuZDogI2NlY2VjZTtcbiAgLS1zY2FsZTogMTtcbiAgLS1pY29uLXNpemU6IDEwcHg7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5mdWxsLXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogODAlO1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICBtaW4taGVpZ2h0OiA3MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBib3gtc2hhZG93OiAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbm5hdiB1bCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbm5hdiB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbm5hdiB1bCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubmF2IHVsIGxpIGEgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMC40O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zIGVhc2U7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxubmF2IHVsIGxpIGEuYWN0aXZlIHN2ZyB7XG4gIG9wYWNpdHk6IDE7XG59XG5uYXYgLnR1YmVsaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogbGVmdCA0MDBtcyBlYXNlO1xuICB6LWluZGV4OiAxMDtcbn1cbm5hdiAudHViZWxpZ2h0IC5saWdodC1yYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0zMCU7XG4gIHRvcDogNXB4O1xuICB3aWR0aDogMTYwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNSUgMTAwJSwgMjUlIDBweCwgNzUlIDBweCwgOTUlIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgLTUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA5MCUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnN1cHBvcnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc3VwcG9ydCBhIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbn1cbi5zdXBwb3J0IGE6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5hY2NvdW50cy1saXN0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gIC8qIHRvcDogNTAlOyAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwJTtcbiAgYm90dG9tOiA1MCU7XG59XG5cbi5zaWRlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICByaWdodDogMCU7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDUwJTtcbn1cblxuLmFjY291bnRzLWxpc3QgPiBsaSB7XG4gIG1hcmdpbjogNDBweCAyMHB4IDQwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/component/home-page/home-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/component/home-page/home-page.component.ts ***!
    \************************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppComponentHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../profile-details/profile-details.component */
    "./src/app/component/profile-details/profile-details.component.ts");
    /* harmony import */


    var _experience_details_experience_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../experience-details/experience-details.component */
    "./src/app/component/experience-details/experience-details.component.ts");
    /* harmony import */


    var _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../get-in-touch/get-in-touch.component */
    "./src/app/component/get-in-touch/get-in-touch.component.ts");
    /* harmony import */


    var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../about-me/about-me.component */
    "./src/app/component/about-me/about-me.component.ts");

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent() {
        _classCallCheck(this, HomePageComponent);

        this.expierenceDetails = false;
        this.componentName = _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_2__["ProfileDetailsComponent"];
      }

      _createClass(HomePageComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          console.clear();
          var uls = document.querySelectorAll("nav ul");
          var links = document.querySelectorAll("nav a");
          var light = document.querySelector("nav .tubelight");
          var activeIndex = 0;
          var currentIndex = 0;
          var increment = 1;
          links.forEach(function (link, index) {
            if (links[index].classList.contains("active")) {
              light.style.left = "".concat(links[index].offsetLeft + light.offsetWidth / 4, "px");
            }

            link.addEventListener("click", function (e) {
              activeIndex = index;
              var t = setInterval(function () {
                if (activeIndex > currentIndex) increment = 1;else if (activeIndex < currentIndex) increment = -1;
                currentIndex += increment;
                links[currentIndex].classList.add("active");
                if (currentIndex != -1) links[currentIndex - increment].classList.remove("active");

                if (currentIndex == activeIndex) {
                  e.target.classList.add("active");
                  increment = 0;
                  clearInterval(t);
                }
              }, 50);
              light.style.left = "".concat(e.target.offsetLeft + light.offsetWidth / 4, "px");
            });
          });
        }
      }, {
        key: "changeTab",
        value: function changeTab(id) {
          switch (id) {
            case "1":
              this.componentName = _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_2__["ProfileDetailsComponent"];
              break;

            case "2":
              this.componentName = _experience_details_experience_details_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceDetailsComponent"];
              break;

            case "3":
              this.componentName = _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"];
              break;

            case "5":
              this.componentName = _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_4__["GetInTouchComponent"];
              break;
          }
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home-page",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home-page/home-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.scss */
      "./src/app/component/home-page/home-page.component.scss"))["default"]]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/component/profile-details/profile-details.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/component/profile-details/profile-details.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentProfileDetailsProfileDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcm9maWxlLWRldGFpbHMvcHJvZmlsZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/profile-details/profile-details.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/component/profile-details/profile-details.component.ts ***!
    \************************************************************************/

  /*! exports provided: ProfileDetailsComponent */

  /***/
  function srcAppComponentProfileDetailsProfileDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileDetailsComponent", function () {
      return ProfileDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProfileDetailsComponent = /*#__PURE__*/function () {
      function ProfileDetailsComponent() {
        _classCallCheck(this, ProfileDetailsComponent);
      }

      _createClass(ProfileDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileDetailsComponent;
    }();

    ProfileDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/profile-details/profile-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-details.component.scss */
      "./src/app/component/profile-details/profile-details.component.scss"))["default"]]
    })], ProfileDetailsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/vishnutodwal/Documents/Learning/portfolio/portfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map