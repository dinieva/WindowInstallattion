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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_requestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/requestCall */ \"./modules/requestCall.js\");\n/* harmony import */ var _modules_benefitsSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/benefitsSlider */ \"./modules/benefitsSlider.js\");\n/* harmony import */ var _modules_ourServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ourServices */ \"./modules/ourServices.js\");\n/* harmony import */ var _modules_requireMaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/requireMaster */ \"./modules/requireMaster.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_requestCall__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_benefitsSlider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_ourServices__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_requireMaster__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('22 january 2023 21:00:00')\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/benefitsSlider.js":
/*!***********************************!*\
  !*** ./modules/benefitsSlider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst benefitsSlider = () => {\r\n\r\n    const sliderBlock = document.querySelector('.benefits-wrap'); //контейнер, для отображения \r\n    const slides = document.querySelectorAll('.benefits__item');\r\n    const buttonsBlock = document.querySelector('.benefits-arrows');\r\n    let windowOuterWidth = window.outerWidth;  //размере внешнего окна \r\n    let slidetoShow;// видимое количество изображений\r\n    let slidesToScroll; // сколько слайдев прибавлять\r\n    let itemWidth;\r\n    let movePosition;\r\n    let setPosition;\r\n    let position = 0; // положение ленты прокрутки\r\n\r\n    sliderBlock.length = '';\r\n    const track = document.createElement('div'); //блок, который будет перемещаться.\r\n    track.style.display = 'flex';\r\n    track.style.transition = 'ease .2s';\r\n    sliderBlock.append(track);\r\n\r\n    sliderBlock.style.overflow = 'hidden';\r\n\r\n    slides.forEach(slide => {\r\n        track.append(slide);\r\n    })\r\n\r\n    const slider = () => {\r\n        itemWidth = sliderBlock.clientWidth / slidetoShow;// ширина картинки  itemWidth\r\n        movePosition = slidesToScroll * itemWidth;\r\n        slides.forEach(slide => {\r\n            slide.style.minWidth = `${itemWidth}px`;\r\n        })\r\n        setPosition = () => {\r\n            track.style.transform = `translateX(${position}px)`\r\n        }\r\n    };\r\n\r\n    if (windowOuterWidth > 576) {\r\n        slidetoShow = 3;\r\n        slidesToScroll = 3;\r\n        slider();\r\n\r\n        buttonsBlock.addEventListener('click', function (e) {\r\n            if (e.target.closest('.benefits__arrow--right')) {\r\n                if (position >= 0) {\r\n                    const itemsLeft = slides.length - (Math.abs(position) + slidetoShow * itemWidth) / itemWidth;\r\n                    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\r\n                    setPosition();\r\n                } else {\r\n                    const itemsLeft = Math.abs(position) / itemWidth;\r\n                    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\r\n                    setPosition();\r\n                }\r\n            }\r\n\r\n            if (e.target.closest('.benefits__arrow--left')) {\r\n                if (position < 0) {\r\n                    const itemsLeft = Math.abs(position) / itemWidth;\r\n                    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\r\n                    setPosition();\r\n\r\n                } else {\r\n                    const itemsLeft = slides.length - (Math.abs(position) + slidetoShow * itemWidth) / itemWidth;\r\n                    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\r\n                    setPosition();\r\n                }\r\n            }\r\n        })\r\n\r\n\r\n    } else if (windowOuterWidth < 576) {\r\n        slidetoShow = 1;\r\n        slidesToScroll = 1;\r\n        slider();\r\n\r\n        buttonsBlock.addEventListener('click', function (e) {\r\n            if (e.target.closest('.benefits__arrow--right')) {\r\n                const itemsLeft = slides.length - (Math.abs(position) + slidetoShow * itemWidth) / itemWidth;\r\n                position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\r\n                setPosition();\r\n            }\r\n\r\n            if (e.target.closest('.benefits__arrow--left')) {\r\n                const itemsLeft = Math.abs(position) / itemWidth;\r\n                position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\r\n                setPosition();\r\n            }\r\n        })\r\n    }\r\n\r\n    window.addEventListener('resize', (e) => {\r\n        e.preventDefault();\r\n        benefitsSlider();\r\n    });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (benefitsSlider);\n\n//# sourceURL=webpack:///./modules/benefitsSlider.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n\r\nconst animate = ({ timing, draw, duration }) => { // передается объект с настройками duration- длительность анимации\r\n    let start = performance.now(); //отработка метода, который возвращает время начала(старта) анимации на данный момент\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration; // (текущее время - время начала анимации) / продолжительность\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n    });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/ourServices.js":
/*!********************************!*\
  !*** ./modules/ourServices.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ourServices = () => {\r\n    const slides = document.querySelectorAll('.col-md-12.col-lg-6');\r\n    const buttonsBlock = document.querySelector('.services-arrows');\r\n    const windowOuterWidth = window.outerWidth;\r\n    let showSlideAmount; //количество слайдов в зависимости от размера экрана\r\n    const timeInterval = 2000;\r\n    let interval;\r\n\r\n    const showSlides = () => {\r\n        slides.forEach((slide, index) => {\r\n            // slide.style.transition = '2s';\r\n            if (index >= showSlideAmount) {\r\n                slide.style.display = \"none\"\r\n            } else {\r\n                slide.style.display = \"block\"\r\n            }\r\n        })\r\n    }\r\n\r\n    const changeSlides = () => {\r\n        slides.forEach((slide) => {\r\n            if (slide.style.display == 'block') {\r\n                slide.style.display = 'none'\r\n            } else if (slide.style.display == 'none') {\r\n                slide.style.display = 'block'\r\n            }\r\n        });\r\n    }\r\n\r\n    if (windowOuterWidth > 576) {\r\n        showSlideAmount = 2;\r\n        showSlides();\r\n\r\n        const startSlide = (timer = 1500) => {\r\n            interval = setInterval(changeSlides, timer)\r\n        }\r\n\r\n        const stoptSlide = () => {\r\n            clearInterval(interval)\r\n        }\r\n\r\n        buttonsBlock.addEventListener('click', (e) => {\r\n            if (e.target.closest('.services__arrow--right')) {\r\n                changeSlides();\r\n            }\r\n\r\n            if (e.target.closest('.services__arrow--left')) {\r\n                changeSlides();\r\n            }\r\n        });\r\n\r\n        //останавливаем таймер при наведении курсора на стрелки\r\n        buttonsBlock.addEventListener('mouseenter', (e) => {\r\n            if (e.target.matches('.services__arrow ')) {\r\n                stoptSlide()\r\n            }\r\n        }, true)\r\n\r\n        //запускаем таймер при наведении курсора на стрелки\r\n        buttonsBlock.addEventListener('mouseleave', (e) => {\r\n            if (e.target.matches('.services__arrow ')) {\r\n                startSlide(timeInterval)\r\n            }\r\n        }, true)\r\n\r\n        startSlide(timeInterval) //запускаем таймер\r\n\r\n    } else if (windowOuterWidth < 576) {\r\n        showSlideAmount = 1\r\n        showSlides()\r\n        let currentSlide = 0;\r\n\r\n        const prevSlide = (elems, index) => {\r\n            elems[index].style.display = 'none'\r\n        }\r\n\r\n        const nextSlide = (elems, index) => {\r\n            elems[index].style.display = 'block'\r\n        }\r\n\r\n        const autoSlide = () => {\r\n            prevSlide(slides, currentSlide)\r\n            currentSlide++\r\n\r\n            if (currentSlide >= slides.length) {\r\n                currentSlide = 0\r\n            }\r\n\r\n            nextSlide(slides, currentSlide)\r\n        }\r\n\r\n        const startSlide = (timer = 1500) => {\r\n            interval = setInterval(autoSlide, timer)\r\n        }\r\n\r\n        buttonsBlock.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            prevSlide(slides, currentSlide)\r\n            if (e.target.closest('.services__arrow--right')) {\r\n                currentSlide++\r\n\r\n            } else if (e.target.closest('.services__arrow--left')) {\r\n                currentSlide--\r\n            }\r\n\r\n            if (currentSlide >= slides.length) {\r\n                currentSlide = 0\r\n            }\r\n\r\n            if (currentSlide < 0) {\r\n                currentSlide = slides.length - 1\r\n            }\r\n\r\n            nextSlide(slides, currentSlide)\r\n        })\r\n\r\n        startSlide(timeInterval)\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ourServices); \n\n//# sourceURL=webpack:///./modules/ourServices.js?");

/***/ }),

/***/ "./modules/requestCall.js":
/*!********************************!*\
  !*** ./modules/requestCall.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst requestCall = () => {\r\n    const btn = document.querySelector('.requestCall')\r\n    const modal = document.querySelector('.header-modal')\r\n    const overlay = document.querySelector('.overlay')\r\n    const closeBtn = modal.querySelector('.header-modal__close')\r\n\r\n\r\n    btn.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        setTimeout(() => {\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 1000,\r\n                timing(timeFraction) {\r\n                    return 1 - Math.sin(Math.acos(timeFraction));\r\n                },\r\n\r\n                draw(progress) {\r\n                    overlay.style.display = 'block'\r\n                    modal.style.display = 'block';\r\n                }\r\n            });\r\n        }, 300);\r\n    })\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        setTimeout(() => {\r\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 100,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    overlay.style.display = 'none'\r\n                    modal.style.display = 'none'\r\n                }\r\n            });\r\n        }, 500);\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requestCall);\n\n//# sourceURL=webpack:///./modules/requestCall.js?");

/***/ }),

/***/ "./modules/requireMaster.js":
/*!**********************************!*\
  !*** ./modules/requireMaster.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst requireMaster = () => {\r\n    const btns = document.querySelectorAll('.service-button')\r\n    const modal = document.querySelector('.services-modal')\r\n    const overlay = document.querySelector('.overlay')\r\n    const closeBtn = modal.querySelector('.services-modal__close ')\r\n\r\n    btns.forEach(btn => {\r\n        btn.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            setTimeout(() => {\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 1000,\r\n                    timing(timeFraction) {\r\n                        return 1 - Math.sin(Math.acos(timeFraction));\r\n                    },\r\n\r\n                    draw(progress) {\r\n                        overlay.style.display = 'block'\r\n                        modal.style.display = 'block';\r\n                    }\r\n                });\r\n            }, 300);\r\n        })\r\n    })\r\n    closeBtn.addEventListener('click', () => {\r\n        setTimeout(() => {\r\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 100,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    overlay.style.display = 'none'\r\n                    modal.style.display = 'none'\r\n                }\r\n            });\r\n        }, 500);\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requireMaster);\n\n//# sourceURL=webpack:///./modules/requireMaster.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = () => {\r\n    const forms = document.querySelectorAll('.order-form.rf');\r\n    const statusBlock = document.createElement('div');\r\n    const loadText = 'Загрузка';\r\n    const errorText = 'Ошибка';\r\n    const successText = 'Спасибо! Наш менеджер с вами свяжется';\r\n    let userName;\r\n    let userPhone;\r\n\r\n    forms.forEach(form => {\r\n        form.addEventListener('click', (e) => {\r\n            if (e.target.name === 'fio') {\r\n                e.target.addEventListener('change', () => {\r\n                    const reg = /^[а-яА-ЯёЁa-zA-Z]+$/g;\r\n                    if (reg.test(e.target.value) && e.target.value !== '') {\r\n                        e.target.classList.add('success')\r\n                        userName = e.target.value\r\n                    } else {\r\n                        e.target.classList.remove('success')\r\n                    }\r\n                })\r\n            }\r\n\r\n            if (e.target.name === 'phone') {\r\n                e.target.addEventListener('change', () => {\r\n                    const reg = /\\+?[\\s]*\\d{3}[\\s]*\\d{3}([\\s*-]*\\d{2}){2}/g;\r\n                    if (e.target.value != '' && reg.test(e.target.value)) {\r\n                        e.target.classList.add('success')\r\n                        userPhone = e.target.value\r\n                    } else {\r\n                        e.target.classList.remove('success')\r\n                    }\r\n                })\r\n            }\r\n        })\r\n    })\r\n\r\n    const validate = (list) => {\r\n        let success;\r\n\r\n        list.forEach(input => {\r\n            if (input.type == 'text') {\r\n                if (!input.classList.contains('success')) {\r\n                    success = false\r\n                } else {\r\n                    success = true\r\n                }\r\n            }\r\n        })\r\n        return success\r\n    }\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    forms.forEach(form => {\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault()\r\n            const formElements = form.querySelectorAll('input');\r\n\r\n            const user = {\r\n                login: userName,\r\n                phone: userPhone\r\n            }\r\n\r\n            statusBlock.textContent = loadText\r\n            form.append(statusBlock)\r\n\r\n            if (validate(formElements)) {\r\n                sendData(user)\r\n                    .then(data => {\r\n                        statusBlock.textContent = successText\r\n\r\n                        formElements.forEach(input => {\r\n                            input.value = ''\r\n                        })\r\n                    })\r\n                    .catch(error => {\r\n                        statusBlock.textContent = errorText\r\n                        console.log(error);\r\n                    })\r\n            } else {\r\n                alert('Данные не валидны!!!')\r\n                statusBlock.textContent = errorText\r\n            }\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.querySelectorAll('.count_1 > span');\r\n    const timerHours = document.querySelectorAll('.count_2 > span');\r\n    const timerMinutes = document.querySelectorAll('.count_3 > span');\r\n    const timerSeconds = document.querySelectorAll('.count_4 > span');\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return { timeRemaining, days, hours, minutes, seconds }\r\n    };\r\n\r\n    let addZero = function (num) {\r\n        if (num < 10) {\r\n            return '0' + num;\r\n        }\r\n        return num;\r\n    };\r\n\r\n    const changeTime = (elems, newtext) => {\r\n        elems.forEach(elem => {\r\n            elem.textContent = newtext;\r\n        })\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        getTime.hours = addZero(getTime.hours);\r\n        getTime.minutes = addZero(getTime.minutes);\r\n        getTime.seconds = addZero(getTime.seconds);\r\n        if (getTime.timeRemaining > 0) {\r\n            changeTime(timerDays, getTime.days)\r\n            changeTime(timerHours, getTime.hours)\r\n            changeTime(timerMinutes, getTime.minutes)\r\n            changeTime(timerSeconds, getTime.seconds)\r\n\r\n            /* timerDays.textContent = getTime.days;\r\n            timerHours.textContent = getTime.hours;\r\n            timerMinutes.textContent = getTime.minutes;\r\n            timerSeconds.textContent = getTime.seconds; */\r\n        }\r\n    };\r\n\r\n    setInterval(updateClock, 1000);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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