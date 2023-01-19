/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_benefitsSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/benefitsSlider */ \"./modules/benefitsSlider.js\");\n/* harmony import */ var _modules_ourServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ourServices */ \"./modules/ourServices.js\");\n\r\n\r\n\r\n(0,_modules_benefitsSlider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_ourServices__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/benefitsSlider.js":
/*!***********************************!*\
  !*** ./modules/benefitsSlider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst benefitsSlider = () => {\r\n    const sliderBlock = document.querySelector('.benefits-wrap'); //контейнер, для отображения \r\n    const slides = document.querySelectorAll('.benefits__item');\r\n    const buttonsBlock = document.querySelector('.benefits-arrows');\r\n    const windowOuterWidth = window.outerWidth;  //размере внешнего окна \r\n    let slidetoShow;// видимое количество изображений\r\n    let slidesToScroll; // сколько слайдев прибавлять\r\n    let itemWidth;\r\n    let movePosition;\r\n    let setPosition;\r\n    let position = 0; // положение ленты прокрутки\r\n\r\n    sliderBlock.length = '';\r\n    const track = document.createElement('div'); //блок, который будет перемещаться.\r\n    track.style.display = 'flex';\r\n    track.style.transition = 'ease .2s';\r\n    sliderBlock.append(track);\r\n\r\n    sliderBlock.style.overflow = 'hidden';\r\n\r\n    slides.forEach(slide => {\r\n        track.append(slide);\r\n    })\r\n\r\n    const slider = () => {\r\n        itemWidth = sliderBlock.clientWidth / slidetoShow;// ширина картинки  itemWidth\r\n        movePosition = slidesToScroll * itemWidth;\r\n        slides.forEach(slide => {\r\n            slide.style.minWidth = `${itemWidth}px`;\r\n        })\r\n        setPosition = () => {\r\n            track.style.transform = `translateX(${position}px)`\r\n        }\r\n    };\r\n\r\n    if (windowOuterWidth > 576) {\r\n        slidetoShow = 3;\r\n        slidesToScroll = 3;\r\n        slider();\r\n\r\n        buttonsBlock.addEventListener('click', function (e) {\r\n            if (e.target.closest('.benefits__arrow--right')) {\r\n                if (position >= 0) {\r\n                    const itemsLeft = slides.length - (Math.abs(position) + slidetoShow * itemWidth) / itemWidth;\r\n                    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\r\n                    setPosition();\r\n                } else {\r\n                    const itemsLeft = Math.abs(position) / itemWidth;\r\n                    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\r\n                    setPosition();\r\n                }\r\n            }\r\n\r\n            if (e.target.closest('.benefits__arrow--left')) {\r\n                if (position < 0) {\r\n                    const itemsLeft = Math.abs(position) / itemWidth;\r\n                    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\r\n                    setPosition();\r\n\r\n                } else {\r\n                    const itemsLeft = slides.length - (Math.abs(position) + slidetoShow * itemWidth) / itemWidth;\r\n                    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\r\n                    setPosition();\r\n                }\r\n            }\r\n        })\r\n\r\n\r\n    } else if (windowOuterWidth < 576) {\r\n        slidetoShow = 1;\r\n        slidesToScroll = 1;\r\n        slider();\r\n\r\n        buttonsBlock.addEventListener('click', function (e) {\r\n            if (e.target.closest('.benefits__arrow--right')) {\r\n                const itemsLeft = slides.length - (Math.abs(position) + slidetoShow * itemWidth) / itemWidth;\r\n                position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\r\n                setPosition();\r\n            }\r\n\r\n            if (e.target.closest('.benefits__arrow--left')) {\r\n                const itemsLeft = Math.abs(position) / itemWidth;\r\n                position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\r\n                setPosition();\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (benefitsSlider);\n\n//# sourceURL=webpack:///./modules/benefitsSlider.js?");

/***/ }),

/***/ "./modules/ourServices.js":
/*!********************************!*\
  !*** ./modules/ourServices.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ourServices = () => {\r\n    const slides = document.querySelectorAll('.col-md-12.col-lg-6');\r\n    const buttonsBlock = document.querySelector('.services-arrows');\r\n    const windowOuterWidth = window.outerWidth;\r\n    let showSlideAmount; //количество слайдов в зависимости от размера экрана\r\n    const timeInterval = 2000;\r\n    let interval;\r\n\r\n    const showSlides = () => {\r\n        slides.forEach((slide, index) => {\r\n            // slide.style.transition = '2s';\r\n            if (index >= showSlideAmount) {\r\n                slide.style.display = \"none\"\r\n            } else {\r\n                slide.style.display = \"block\"\r\n            }\r\n        })\r\n    }\r\n\r\n    const changeSlides = () => {\r\n        slides.forEach((slide) => {\r\n            if (slide.style.display == 'block') {\r\n                slide.style.display = 'none'\r\n            } else if (slide.style.display == 'none') {\r\n                slide.style.display = 'block'\r\n            }\r\n        });\r\n    }\r\n\r\n    if (windowOuterWidth > 576) {\r\n        showSlideAmount = 2;\r\n        showSlides();\r\n\r\n        const startSlide = (timer = 1500) => {\r\n            interval = setInterval(changeSlides, timer)\r\n        }\r\n\r\n        const stoptSlide = () => {\r\n            clearInterval(interval)\r\n        }\r\n\r\n        buttonsBlock.addEventListener('click', (e) => {\r\n            if (e.target.closest('.services__arrow--right')) {\r\n                changeSlides();\r\n            }\r\n\r\n            if (e.target.closest('.services__arrow--left')) {\r\n                changeSlides();\r\n            }\r\n        });\r\n\r\n        //останавливаем таймер при наведении курсора на стрелки\r\n        buttonsBlock.addEventListener('mouseenter', (e) => {\r\n            if (e.target.matches('.services__arrow ')) {\r\n                stoptSlide()\r\n            }\r\n        }, true)\r\n\r\n        //запускаем таймер при наведении курсора на стрелки\r\n        buttonsBlock.addEventListener('mouseleave', (e) => {\r\n            if (e.target.matches('.services__arrow ')) {\r\n                startSlide(timeInterval)\r\n            }\r\n        }, true)\r\n\r\n        startSlide(timeInterval) //запускаем таймер\r\n\r\n    } else if (windowOuterWidth < 576) {\r\n        showSlideAmount = 1\r\n        showSlides()\r\n        let currentSlide = 0;\r\n\r\n        const prevSlide = (elems, index) => {\r\n            elems[index].style.display = 'none'\r\n        }\r\n\r\n        const nextSlide = (elems, index) => {\r\n            elems[index].style.display = 'block'\r\n        }\r\n\r\n        const autoSlide = () => {\r\n            prevSlide(slides, currentSlide)\r\n            currentSlide++\r\n\r\n            if (currentSlide >= slides.length) {\r\n                currentSlide = 0\r\n            }\r\n\r\n            nextSlide(slides, currentSlide)\r\n        }\r\n\r\n        const startSlide = (timer = 1500) => {\r\n            interval = setInterval(autoSlide, timer)\r\n        }\r\n\r\n        buttonsBlock.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            prevSlide(slides, currentSlide)\r\n            if (e.target.closest('.services__arrow--right')) {\r\n                currentSlide++\r\n\r\n            } else if (e.target.closest('.services__arrow--left')) {\r\n                currentSlide--\r\n            }\r\n\r\n            if (currentSlide >= slides.length) {\r\n                currentSlide = 0\r\n            }\r\n\r\n            if (currentSlide < 0) {\r\n                currentSlide = slides.length - 1\r\n            }\r\n\r\n            nextSlide(slides, currentSlide)\r\n        })\r\n\r\n        startSlide(timeInterval)\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ourServices); \n\n//# sourceURL=webpack:///./modules/ourServices.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;