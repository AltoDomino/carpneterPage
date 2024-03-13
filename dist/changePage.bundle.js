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

/***/ "./changePage.ts":
/*!***********************!*\
  !*** ./changePage.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst gallery_1 = __webpack_require__(/*! ./src/gallery */ \"./src/gallery.ts\");\nconst contact_1 = __webpack_require__(/*! ./src/contact */ \"./src/contact.ts\");\nconst main_1 = __webpack_require__(/*! ./src/main */ \"./src/main.ts\");\nlet currentView = null;\nconst root = document.getElementById(\"whole\");\nconst renderMainView = () => {\n    const mainView = (0, main_1.Main)(() => renderMainView());\n    renderView(mainView);\n};\nconst renderShopView = () => {\n    const contactView = (0, contact_1.Contact)(() => renderShopView());\n    renderView(contactView);\n};\nconst renderExpView = () => {\n    const GalleryView = (0, gallery_1.Gallery)(() => renderExpView());\n    renderView(GalleryView);\n};\nconst renderView = (newView) => {\n    if (root && currentView) {\n        root.replaceChild(newView, currentView);\n        currentView = newView;\n    }\n    else if (root) {\n        root.appendChild(newView);\n        currentView = newView;\n    }\n};\nconst topContainer = document.createElement(\"div\");\nconst buttonContainer = document.createElement(\"div\");\nconst mailPhone = document.createElement(\"div\");\nconst mail = document.createElement(\"a\");\nconst phone = document.createElement(\"a\");\nconst wood = document.createElement(\"img\");\nwood.src = \"./daddy/woood.png\";\nmail.href = \"mailto:zygmuntduraj@wp.pl\";\nphone.href = \"tel:+48501780726\";\nmail.innerHTML = \"zygmuntduraj@wp.pl\";\nphone.innerHTML = \"501 780 726\";\ntopContainer.style.display = \"flex\";\ntopContainer.style.justifyContent = \"space-between\";\ntopContainer.style.flexDirection = \"row\";\nmailPhone.appendChild(mail);\nmailPhone.appendChild(phone);\nmailPhone.style.display = \"flex\";\nmailPhone.style.flexDirection = \"column\";\nmailPhone.style.gap = \"5px\";\nconst galleryButton = document.createElement(\"button\");\ngalleryButton.classList.add(\"GALERIA\");\ngalleryButton.innerHTML = \"GALERIA\";\ngalleryButton.onclick = renderExpView;\nconst contactButton = document.createElement(\"button\");\ncontactButton.classList.add(\"KONTAKT\");\ncontactButton.innerHTML = \"O FIRMIE\";\ncontactButton.onclick = renderMainView;\nconst aboutButton = document.createElement(\"button\");\naboutButton.classList.add(\"OFIRMIE\");\naboutButton.innerHTML = \"KONTAKT\";\naboutButton.onclick = renderShopView;\nbuttonContainer.appendChild(galleryButton);\nbuttonContainer.appendChild(contactButton);\nbuttonContainer.appendChild(aboutButton);\ntopContainer.appendChild(buttonContainer);\ntopContainer.appendChild(mailPhone);\nroot === null || root === void 0 ? void 0 : root.appendChild(topContainer);\nroot === null || root === void 0 ? void 0 : root.appendChild(wood);\nrenderMainView();\n\n\n//# sourceURL=webpack://carpneterpage/./changePage.ts?");

/***/ }),

/***/ "./src/contact.ts":
/*!************************!*\
  !*** ./src/contact.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\n// import \"./contact.css\"\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Contact = void 0;\nconst Contact = (changePage) => {\n    const stayInTouch = document.createElement(\"div\");\n    const contactView = document.createElement(\"div\");\n    const form = document.createElement(\"form\");\n    const inputName = document.createElement(\"textArea\");\n    const inputMail = document.createElement(\"input\");\n    const to = document.createElement(\"input\");\n    const subject = document.createElement(\"input\");\n    const submit = document.createElement(\"input\");\n    inputName.name = \"text\";\n    inputName.id = \"text\";\n    inputName.placeholder = \"WIADOMOŚĆ\";\n    inputName.style.height = \"100px\";\n    inputName.style.width = \"500px\";\n    inputMail.type = \"email\";\n    inputMail.name = \"myEmail\";\n    inputMail.placeholder = \"MÓJ MAIL \";\n    inputMail.style.width = \"300px\";\n    subject.name = \"topic\";\n    subject.placeholder = \"TEMAT\";\n    subject.style.width = \"300px\";\n    to.type = \"email\";\n    to.name = \"emailTo\";\n    to.placeholder = \"ODBIORCA\";\n    to.style.width = \"300px\";\n    submit.type = \"submit\";\n    submit.innerHTML = \"wyślij\";\n    form.action = \"/send-mail\";\n    form.method = \"POST\";\n    form.style.display = \"flex\";\n    form.style.justifyContent = \"space-evenly\";\n    form.style.flexDirection = \"column\";\n    form.style.gap = \"30px\";\n    form.style.alignItems = \"center\";\n    stayInTouch.innerHTML = \"SKONTAKTUJ SIĘ Z NAMI\";\n    stayInTouch.style.fontSize = \"50px\";\n    form.appendChild(stayInTouch);\n    form.appendChild(subject);\n    form.appendChild(inputName);\n    form.appendChild(inputMail);\n    form.appendChild(to);\n    form.appendChild(submit);\n    contactView.appendChild(form);\n    const send = () => __awaiter(void 0, void 0, void 0, function* () {\n        const sendRespone = fetch(\"http://send-mail\");\n        const mail = (yield sendRespone).json();\n    });\n    send(form);\n    return contactView;\n};\nexports.Contact = Contact;\n\n\n//# sourceURL=webpack://carpneterpage/./src/contact.ts?");

/***/ }),

/***/ "./src/gallery.ts":
/*!************************!*\
  !*** ./src/gallery.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n// import \"./gallery.css\"\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Gallery = void 0;\nconst Gallery = (changePage) => {\n    const GalleryView = document.createElement(\"div\");\n    const stairs = document.createElement(\"img\");\n    const kitchen = document.createElement(\"img\");\n    const floor = document.createElement(\"img\");\n    const wardrobe = document.createElement(\"img\");\n    stairs.src = \"./daddy/schody.jpg\";\n    stairs.alt = \"stairs\";\n    stairs.style.height = \"450px\";\n    stairs.style.width = \"450px\";\n    kitchen.src = \"./daddy/kuchnia.jpg\";\n    kitchen.alt = \"kitchen\";\n    kitchen.style.height = \"450px\";\n    kitchen.style.width = \"450px\";\n    kitchen.style.paddingLeft = \"950px\";\n    floor.src = \"./daddy/podloga.jpg\";\n    floor.alt = \"floor\";\n    floor.style.height = \"450px\";\n    floor.style.width = \"450px\";\n    wardrobe.src = \"./daddy/meble.jpg\";\n    wardrobe.alt = \"wardrobe\";\n    wardrobe.style.height = \"450px\";\n    wardrobe.style.width = \"450px\";\n    wardrobe.style.paddingLeft = \"950px\";\n    GalleryView.appendChild(stairs);\n    GalleryView.appendChild(kitchen);\n    GalleryView.appendChild(floor);\n    GalleryView.appendChild(wardrobe);\n    GalleryView.style.display = \"flex\";\n    GalleryView.style.flexDirection = \"column\";\n    GalleryView.style.justifyContent = \"space-evenly\";\n    GalleryView.style.gap = \"30px\";\n    GalleryView.style.paddingTop = \"50px\";\n    return GalleryView;\n};\nexports.Gallery = Gallery;\n\n\n//# sourceURL=webpack://carpneterpage/./src/gallery.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n// import \"./main.css\"\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Main = void 0;\nconst Main = (changePage) => {\n    const mainView = document.createElement(\"div\");\n    const description = document.createElement(\"div\");\n    const logo = document.createElement(\"img\");\n    logo.style.height = \"280px\";\n    logo.style.width = '280px';\n    logo.src = \"./daddy/logo.jpg\";\n    logo.alt = \"logo\";\n    logo.style.paddingLeft = \"550px\";\n    description.innerHTML = \"Usługi Stolarskie Zygmunta Duraja\\nTwoim partnerem w realizacji marzeń o doskonałym wnętrzu.\\nJesteśmy doświadczoną firmą stolarską z ponad 30-letnim doświadczeniem,\\nspecjalizującą się w rzemieślniczym kunszcie oraz najwyższej jakości materiałach.\\n\\nZapewniamy kompleksową obsługę – od koncepcji po realizację, zawsze z dbałością o Twoje potrzeby i oczekiwania.\\nDzięki naszemu zaangażowaniu i perfekcjonizmowi, każdy detal staje się elementem wyjątkowego designu.\";\n    description.style.whiteSpace = \"pre-line\";\n    description.style.textAlign = \"center\";\n    description.style.fontSize = \"22px\";\n    description.style.paddingTop = \"30px\";\n    mainView.appendChild(logo);\n    mainView.appendChild(description);\n    return mainView;\n};\nexports.Main = Main;\n\n\n//# sourceURL=webpack://carpneterpage/./src/main.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./changePage.ts");
/******/ 	
/******/ })()
;