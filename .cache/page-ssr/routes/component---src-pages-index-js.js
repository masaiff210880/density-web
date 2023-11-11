"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/Components/Backed.jsx":
/*!***********************************!*\
  !*** ./src/Components/Backed.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_backed1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/backed1.png */ "./src/images/backed1.png");
/* harmony import */ var _images_backed2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/backed2.png */ "./src/images/backed2.png");
/* harmony import */ var _images_backed3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/backed3.png */ "./src/images/backed3.png");
/* harmony import */ var _images_backed4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/backed4.png */ "./src/images/backed4.png");
/* harmony import */ var _images_backed5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/backed5.png */ "./src/images/backed5.png");
/* harmony import */ var _images_backed6_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/backed6.png */ "./src/images/backed6.png");
/* harmony import */ var _images_backed7_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/backed7.png */ "./src/images/backed7.png");
/* harmony import */ var _images_avatar1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/avatar1.png */ "./src/images/avatar1.png");
/* harmony import */ var _images_avatar2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/avatar2.png */ "./src/images/avatar2.png");
/* harmony import */ var _images_avatar3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/avatar3.png */ "./src/images/avatar3.png");
/* harmony import */ var _images_avatar4_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/avatar4.png */ "./src/images/avatar4.png");
/* harmony import */ var _images_avatar5_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/avatar5.png */ "./src/images/avatar5.png");
/* harmony import */ var _images_avatar6_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/avatar6.png */ "./src/images/avatar6.png");
/* harmony import */ var _images_avatar7_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/avatar7.png */ "./src/images/avatar7.png");
/* harmony import */ var _images_avatar8_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/avatar8.png */ "./src/images/avatar8.png");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

















const Mainsection = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].div.withConfig({
  displayName: "Backed__Mainsection"
})(["width:60%;margin:auto;display:flex;flex-direction:column;row-gap:80px;margin-top:200px;"]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].div.withConfig({
  displayName: "Backed__Heading"
})(["color:var(--White,#fff);text-align:center;font-family:Neurial Grotesk;font-size:72px;font-style:normal;font-weight:700;line-height:76.882px;letter-spacing:-2.097px;"]);
const ChildSection1 = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].div.withConfig({
  displayName: "Backed__ChildSection1"
})(["display:flex;justify-content:center;align-items:center;column-gap:80px;"]);
const ChildSection2 = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].div.withConfig({
  displayName: "Backed__ChildSection2"
})(["display:flex;justify-content:center;align-items:center;column-gap:80px;"]);
const AvatarSection = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].div.withConfig({
  displayName: "Backed__AvatarSection"
})(["width:60%;margin:auto;"]);
const AvatarCard = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].div.withConfig({
  displayName: "Backed__AvatarCard"
})(["display:flex;justify-content:center;column-gap:40px;"]);
const AvatarBody = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].div.withConfig({
  displayName: "Backed__AvatarBody"
})(["width:135;height:205;"]);
const AvatarName = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].div.withConfig({
  displayName: "Backed__AvatarName"
})(["color:var(--White,#fff);font-family:Neurial Grotesk;font-size:20.48px;font-style:normal;font-weight:700;line-height:normal;text-align:center;width:180px;margin-top:10px;"]);
const AvatarPosition = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].div.withConfig({
  displayName: "Backed__AvatarPosition"
})(["color:var(--neutrals-grey-7,#808090);font-family:Neurial Grotesk;font-size:12.8px;font-style:normal;font-weight:500;line-height:160%;text-align:center;"]);
const CenteredDiv = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].div.withConfig({
  displayName: "Backed__CenteredDiv"
})(["text-align:center;"]);
const CenteredImage = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].img.withConfig({
  displayName: "Backed__CenteredImage"
})(["display:inline-block;"]);
const Backed = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mainsection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Heading, null, "Backed by the Best."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChildSection1, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_backed1_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "backed1",
    width: "10%"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_backed2_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "backed2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_backed3_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "backed3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_backed4_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "backed4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChildSection2, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_backed5_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "backed5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_backed6_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: "backed6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_backed7_png__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: "backed7"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredImage, {
    src: _images_avatar1_png__WEBPACK_IMPORTED_MODULE_8__["default"],
    alt: "avatar1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarName, null, "Utsav Somani"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredImage, {
    src: _images_avatar2_png__WEBPACK_IMPORTED_MODULE_9__["default"],
    alt: "avatar2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarName, null, "Aditya Nagarsheth"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarPosition, null, "Perpetual Value Partners"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredImage, {
    src: _images_avatar3_png__WEBPACK_IMPORTED_MODULE_10__["default"],
    alt: "avatar3"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarName, null, "Gokul Rajaram"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredImage, {
    src: _images_avatar4_png__WEBPACK_IMPORTED_MODULE_11__["default"],
    alt: "avatar4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarName, null, "Sajid Rehman"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarPosition, null, "My Asia VC"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredImage, {
    src: _images_avatar5_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    alt: "avatar5"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarName, null, "Arjun Sethi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarPosition, null, "Tribe Capital"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredImage, {
    src: _images_avatar6_png__WEBPACK_IMPORTED_MODULE_13__["default"],
    alt: "avatar6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarName, null, "Kunal Shah"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredImage, {
    src: _images_avatar7_png__WEBPACK_IMPORTED_MODULE_14__["default"],
    alt: "avatar7"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarName, null, "Sandeep Nailawal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarPosition, null, "Polygon Labs"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredImage, {
    src: _images_avatar8_png__WEBPACK_IMPORTED_MODULE_15__["default"],
    alt: "avatar8"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AvatarName, null, "Karn Vivek Nagpal"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Backed);

/***/ }),

/***/ "./src/Components/Darivates.jsx":
/*!**************************************!*\
  !*** ./src/Components/Darivates.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_mobile_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/mobile.png */ "./src/images/mobile.png");
/* harmony import */ var _images_tradeimg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/tradeimg.png */ "./src/images/tradeimg.png");
/* harmony import */ var _images_depoimg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/depoimg.png */ "./src/images/depoimg.png");
/* harmony import */ var _images_accountimg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/accountimg.png */ "./src/images/accountimg.png");
/* harmony import */ var _images_depositimg_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/depositimg.png */ "./src/images/depositimg.png");
/* harmony import */ var _images_traderimg_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/traderimg.png */ "./src/images/traderimg.png");








const Mainsection = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Darivates__Mainsection"
})(["width:100%;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].h1.withConfig({
  displayName: "Darivates__Title"
})(["color:var(--White,#fff);text-align:center;font-family:Neurial Grotesk;font-size:96px;font-style:normal;font-weight:700;line-height:100px;letter-spacing:-4.19px;"]);
const FutureText = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].span.withConfig({
  displayName: "Darivates__FutureText"
})(["background:linear-gradient(97deg,#78e65d 47.68%,#d5fa39 70.85%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-family:Neurial Grotesk;font-size:96px;font-style:normal;font-weight:700;line-height:100px;letter-spacing:-4.19px;"]);
const Imagesection = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Darivates__Imagesection"
})(["width:100%;display:flex;align-items:center;justify-content:center;padding:20px;flex:2;"]);
const LeftDiv = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Darivates__LeftDiv"
})(["margin:50px 150px;"]);
const RightDiv = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Darivates__RightDiv"
})([""]);
const CenteredImage = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].img.withConfig({
  displayName: "Darivates__CenteredImage"
})(["display:block;"]);
const InformationText = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].p.withConfig({
  displayName: "Darivates__InformationText"
})(["color:var(--neutrals-grey-4,#e7e7ea);font-family:Neurial Grotesk;font-size:24px;font-style:normal;font-weight:400;line-height:normal;text-transform:capitalize;"]);
const NavButton = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].button.withConfig({
  displayName: "Darivates__NavButton"
})(["display:flex;height:48px;padding:24px 48px;justify-content:center;align-items:center;gap:10px;border-radius:8px;background:linear-gradient(86deg,#d4f938 23.09%,#32d875 108.69%);box-shadow:0px 0px 16px 0px rgba(168,239,156,0.8);backdrop-filter:blur(5px);color:#000;font-family:Neurial Grotesk;font-size:13px;font-style:normal;font-weight:700;line-height:normal;text-transform:uppercase;border:none;cursor:pointer;"]);
const StyledDepositText = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].span.withConfig({
  displayName: "Darivates__StyledDepositText"
})(["color:var(--White,#fff);font-family:Neurial Grotesk;font-size:40px;font-style:normal;font-weight:500;line-height:normal;"]);
const DescriptionText = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].p.withConfig({
  displayName: "Darivates__DescriptionText"
})(["color:#a9a9a9;font-family:Neurial Grotesk;font-size:24px;font-style:normal;font-weight:400;line-height:32px;"]);
const AccountImage = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].img.withConfig({
  displayName: "Darivates__AccountImage"
})(["width:100px;height:100px;"]);
const HorizontalLine = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].hr.withConfig({
  displayName: "Darivates__HorizontalLine"
})(["width:40%;height:0;border:none;border-top:1px solid rgba(255,255,255,0.4);"]);
const Darivates = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mainsection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, "Derivates made simple", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "in ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FutureText, null, "3 Easy "), " Steps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Imagesection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LeftDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredImage, {
    src: _images_mobile_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "Description of the left image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RightDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AccountImage, {
    src: _images_accountimg_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "Description of the left image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InformationText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledDepositText, null, "Create an Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, " ", "Register & Complete your  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " Verification in less than 2 minutes", " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavButton, null, "TRADE NOW"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HorizontalLine, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Imagesection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LeftDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredImage, {
    src: _images_depoimg_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "Description of the left image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RightDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AccountImage, {
    src: _images_depositimg_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "Description of the left image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InformationText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledDepositText, null, "Deposit Funds")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, " ", "Add funds quickly using a variety ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " of payment methods", " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavButton, null, "TRADE NOW"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HorizontalLine, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Imagesection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LeftDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredImage, {
    src: _images_tradeimg_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "Description of the left image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RightDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AccountImage, {
    src: _images_traderimg_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: "Description of the left image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InformationText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledDepositText, null, "Become a Trader")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, " ", "Choose Your Trading Pair & Trade", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "  Seamlessly ", " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavButton, null, "TRADE NOW"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HorizontalLine, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Darivates);

/***/ }),

/***/ "./src/Components/Donttake.jsx":
/*!*************************************!*\
  !*** ./src/Components/Donttake.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_dotted_bg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/dotted_bg.png */ "./src/images/dotted_bg.png");
/* harmony import */ var _images_person1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/person1.png */ "./src/images/person1.png");
/* harmony import */ var _images_person2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/person2.png */ "./src/images/person2.png");
/* harmony import */ var _images_person3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/person3.png */ "./src/images/person3.png");






const MainSection = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Donttake__MainSection"
})(["width:100%;height:100%;margin:auto;background-color:white;"]);
const Dotted = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Donttake__Dotted"
})(["background-image:url(", ");height:237px;width:300px;margin-left:30px;position:absolute;"], _images_dotted_bg_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
const MainCard = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Donttake__MainCard"
})(["display:flex;justify-content:center;align-items:center;column-gap:20px;margin-top:80px;"]);
const CardSecond = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Donttake__CardSecond"
})(["width:335px;height:384px;margin-bottom:30px;position:relative;padding:50px;padding-right:0px;background:#eeefee;"]);
const CardSecond2 = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Donttake__CardSecond2"
})(["width:335px;height:384px;margin-bottom:30px;position:relative;padding:50px;padding-right:0px;background:#eeefee;"]);
const CardSecond3 = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Donttake__CardSecond3"
})(["width:335px;height:384px;margin-bottom:30px;position:relative;padding:50px;padding-right:0px;background:#eeefee;"]);
const HeadingFirst = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h1.withConfig({
  displayName: "Donttake__HeadingFirst"
})(["text-align:center;color:var(--Black,#0E0E0F);font-family:'Neurial Grotesk',sans-serif;font-size:72px;font-style:normal;font-weight:700;padding-top:70px;line-height:76.882px;letter-spacing:-2.097px;"]);
const ParaHead = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "Donttake__ParaHead"
})(["color:var(--neutrals-grey-8,#32333A);text-align:center;font-family:'Neurial Grotesk',sans-serif;font-size:22.366px;font-style:normal;font-weight:400;line-height:32.849px;"]);
const Asome = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "Donttake__Asome"
})(["color:var(--neutrals-grey-6,#666673);font-family:'Neurial Grotesk',sans-serif;font-size:20px;margin-right:44px;font-style:normal;flex-wrap:nowrap;font-weight:400;width:100%;"]);
const Asome2 = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "Donttake__Asome2"
})(["color:var(--neutrals-grey-6,#666673);font-family:'Neurial Grotesk',sans-serif;font-size:17px;margin-right:44px;font-style:normal;flex-wrap:nowrap;font-weight:400;width:100%;"]);
const NamePerson = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "Donttake__NamePerson"
})(["color:var(--White,#0E0E0F);font-family:'Neurial Grotesk',sans-serif;font-size:28px;font-style:normal;margin-top:66px;font-weight:700;line-height:30px;letter-spacing:-1px;"]);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img.withConfig({
  displayName: "Donttake__Image"
})(["margin-top:58px;"]);
const Image2 = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img.withConfig({
  displayName: "Donttake__Image2"
})(["margin-top:17px;"]);
const Image3 = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img.withConfig({
  displayName: "Donttake__Image3"
})(["margin-top:10px;margin-left:30px;"]);
const FirstDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Donttake__FirstDiv"
})(["display:flex;"]);
const Donttake = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeadingFirst, null, "Don\u2019t take our word for it."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ParaHead, null, "Hear it from our expert community of traders who have made ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "insane amounts in a short amount of time")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardSecond, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FirstDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Asome, null, "As someone who's always looking for the next big thing, I was really excited to try out Density\u2019s crypto futures trading platform. And I have to say, it definitely lived up to my expectations."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Dotted, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FirstDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NamePerson, null, "Prakash Jamatia."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Asome2, null, "Founder Tradeshala")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image, {
    src: _images_person1_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardSecond2, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FirstDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Asome, null, "As someone who's always looking for the next big thing, I was really excited to try out Density\u2019s crypto futures trading platform. And I have to say, it definitely lived up to my expectations."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Dotted, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FirstDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NamePerson, null, "Shambhavi Nayak."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Asome2, null, "Commodity Trader")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image2, {
    src: _images_person2_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardSecond3, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FirstDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Asome, null, "As someone who's always looking for the next big thing, I was really excited to try out Density\u2019s crypto futures trading platform. And I have to say, it definitely lived up to my expectations."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Dotted, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FirstDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NamePerson, null, "Arjun", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " Naik."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Asome2, null, "Equity Trader  ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image3, {
    src: _images_person3_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: ""
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Donttake);

/***/ }),

/***/ "./src/Components/Earnmoney.jsx":
/*!**************************************!*\
  !*** ./src/Components/Earnmoney.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_notification_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/notification.png */ "./src/images/notification.png");
/* harmony import */ var _images_Frame_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Frame.png */ "./src/images/Frame.png");
/* harmony import */ var _images_doubletradeimg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/doubletradeimg.png */ "./src/images/doubletradeimg.png");
/* harmony import */ var _images_inviteimg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/inviteimg.png */ "./src/images/inviteimg.png");
/* harmony import */ var _images_shareimg_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/shareimg.png */ "./src/images/shareimg.png");







const MainSection = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Earnmoney__MainSection"
})(["width:80%;margin:auto;margin-top:100px;"]);
const Notifiction = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Earnmoney__Notifiction"
})(["width:247.722px;height:228.77px;flex-shrink:0;display:flex;justify-content:center;align-items:center;margin:auto;"]);
const Heading1 = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Earnmoney__Heading1"
})(["color:var(--White,#fff);text-align:center;font-family:Neurial Grotesk;font-size:72px;font-style:normal;font-weight:700;line-height:76.882px;letter-spacing:-2.097px;"]);
const Heading2 = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Earnmoney__Heading2"
})(["color:var(--electric-green-primary,#ebff25);font-family:Neurial Grotesk;font-size:72px;font-style:normal;font-weight:700;line-height:76.882px;letter-spacing:-2.097px;"]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Earnmoney__Heading"
})(["display:flex;justify-content:center;align-items:center;"]);
const Info = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Earnmoney__Info"
})(["color:var(--neutrals-grey-4,#e7e7ea);font-family:Neurial Grotesk;font-size:24px;font-style:normal;font-weight:400;line-height:32.849px;display:flex;justify-content:center;align-items:center;margin-top:20px;"]);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Earnmoney__Card"
})(["width:323px;height:327px;flex-shrink:0;background-color:#19191d;"]);
const MainCard = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Earnmoney__MainCard"
})(["display:flex;justify-content:center;align-items:center;margin-top:80px;column-gap:15px;"]);
const CardBg = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Earnmoney__CardBg"
})(["background-image:url(", ");width:100%;height:60%;"], _images_Frame_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Earnmoney__Text"
})(["width:220px;color:var(--White,#fff);font-family:Neurial Grotesk;font-size:32px;font-style:normal;font-weight:700;line-height:40px;letter-spacing:-1px;position:relative;top:80px;left:40px;"]);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].img.withConfig({
  displayName: "Earnmoney__Image"
})(["position:relative;left:30px;top:25px;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].button.withConfig({
  displayName: "Earnmoney__Button"
})(["color:#000;font-family:Neurial Grotesk;font-size:18px;font-style:normal;font-weight:700;line-height:normal;text-transform:uppercase;border-radius:8px;background:linear-gradient(86deg,#d4f938 23.09%,#32d875 108.69%);box-shadow:0px 0px 16px 0px rgba(168,239,156,0.8);backdrop-filter:blur(5px);display:flex;height:48px;padding:24px 48px;justify-content:center;align-items:center;gap:10px;border:none;margin:auto;margin-top:80px;"]);
const Earnmoney = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Notifiction, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_notification_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Heading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Heading1, null, "Earn Money."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Heading2, null, "The Easy Way.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Info, null, "No Complexity of Trading Fee, generate volume and win")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardBg, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image, {
    src: _images_shareimg_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "",
    width: "40%"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, null, "Share your your referral link")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardBg, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image, {
    src: _images_inviteimg_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "",
    width: "40%"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, null, "Invite Friends to Trade on Density")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardBg, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image, {
    src: _images_doubletradeimg_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "",
    width: "35%"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, null, "Trade and Earn"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, null, "start earning now"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Earnmoney);

/***/ }),

/***/ "./src/Components/ExploreSection.jsx":
/*!*******************************************!*\
  !*** ./src/Components/ExploreSection.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_exploreimg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/exploreimg.png */ "./src/images/exploreimg.png");



const Mainsection = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ExploreSection__Mainsection"
})(["width:100%;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "ExploreSection__Title"
})(["color:var(--White,#fff);text-align:center;font-family:Neurial Grotesk;font-size:96px;font-style:normal;font-weight:700;line-height:100px;letter-spacing:-4.19px;"]);
const FutureText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "ExploreSection__FutureText"
})(["background:linear-gradient(97deg,#78e65d 47.68%,#d5fa39 70.85%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-family:Neurial Grotesk;font-size:96px;font-style:normal;font-weight:700;line-height:100px;letter-spacing:-4.19px;"]);
const InformationText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "ExploreSection__InformationText"
})(["color:var(--neutrals-grey-4,#e7e7ea);text-align:center;font-family:Neurial Grotesk;font-size:24px;font-style:normal;font-weight:400;line-height:normal;text-transform:capitalize;"]);
const CenteredImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "ExploreSection__CenteredImage"
})(["display:block;margin:100px auto;"]);
const NavButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "ExploreSection__NavButton"
})(["display:flex;height:48px;padding:24px 48px;justify-content:center;align-items:center;gap:10px;border-radius:8px;background:linear-gradient(86deg,#d4f938 23.09%,#32d875 108.69%);box-shadow:0px 0px 16px 0px rgba(168,239,156,0.8);backdrop-filter:blur(5px);color:#000;font-family:Neurial Grotesk;font-size:13px;font-style:normal;font-weight:700;line-height:normal;text-transform:uppercase;border:none;cursor:pointer;margin:auto;"]);
const ExploreSection = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mainsection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, "Explore the Markets", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " like it is your ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FutureText, null, "Playground.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InformationText, null, "Search for your favorite coins and stay ahead of the market"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredImage, {
    src: _images_exploreimg_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "Description of the image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavButton, null, "Explore Markets")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreSection);

/***/ }),

/***/ "./src/Components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/Components/Footer.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_FooterLogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/FooterLogo.png */ "./src/images/FooterLogo.png");
/* harmony import */ var _images_facebooklogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/facebooklogo.png */ "./src/images/facebooklogo.png");
/* harmony import */ var _images_twitterlogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/twitterlogo.png */ "./src/images/twitterlogo.png");
/* harmony import */ var _images_linkedinlogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/linkedinlogo.png */ "./src/images/linkedinlogo.png");
/* harmony import */ var _images_instagramlogo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/instagramlogo.png */ "./src/images/instagramlogo.png");







const FooterSection = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Footer__FooterSection"
})(["background-color:#229851;"]);
const InnerDiv = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Footer__InnerDiv"
})(["width:50%;margin:auto;display:flex;padding:63px 0px;flex-direction:column;justify-content:center;align-items:center;gap:40px;align-self:stretch;"]);
const Logoimage = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Footer__Logoimage"
})(["cursor:pointer;width:10%;margin:auto;"]);
const SocialMedia = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Footer__SocialMedia"
})(["display:flex;justify-content:space-between;align-items:center;width:20%;margin:auto;"]);
const Attributres = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Footer__Attributres"
})(["display:flex;justify-content:space-between;width:60%;margin:auto;color:var(--White,#fff);font-family:Neurial Grotesk;font-size:13.998px;font-style:normal;font-weight:400;line-height:normal;"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Footer__Text"
})(["color:#ddd;text-align:center;font-family:Neurial Grotesk;font-size:13.998px;font-style:normal;font-weight:400;line-height:23.996px;"]);
const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InnerDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Logoimage, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_FooterLogo_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "density_logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Attributres, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Fees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Leaderboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Careers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Privacy Policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, null, "L\xF6rem ipsum od ohet dilogi. Bell trabel, samuligt, oh\xF6bel utom diska. Jinesade bel n\xE4r feras redorade i belogi. FAR paratyp i ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " ", "muv\xE5ning, och pesask vyfisat. Viktiga poddradio har un mad och inde."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialMedia, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_facebooklogo_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "faceboklogo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_twitterlogo_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "twitterlogo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_linkedinlogo_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "linkedinlogo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_instagramlogo_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "instagramlogo"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/Components/Frame1.jsx":
/*!***********************************!*\
  !*** ./src/Components/Frame1.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_devider_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/devider.png */ "./src/images/devider.png");



const Community = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Frame1__Community"
})(["width:60%;height:200px;border:1.5px solid rgb(62 95 75 / 96%);background:rgba(0,0,0,0.05);box-shadow:0px 0px 10px 6px rgba(235,255,37,0.20);backdrop-filter:blur(26.25px);margin:auto;margin-bottom:100px;"]);
const Price = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Frame1__Price"
})(["color:var(--electric-green-primary,#EBFF25);font-family:Neurial Grotesk;font-size:32px;font-style:normal;font-weight:700;line-height:normal;"]);
const PricingSection = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Frame1__PricingSection"
})(["display:flex;justify-content:center;align-items:center;column-gap:80px;margin-top:5%;"]);
const PriceCard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Frame1__PriceCard"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
const Traders = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Frame1__Traders"
})(["color:#a9a9a9;font-family:Neurial Grotesk;font-size:16px;font-style:normal;font-weight:400;line-height:26px;"]);
const Frame1 = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Community, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PricingSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PriceCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Price, null, "Same"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Traders, null, "Strategies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_devider_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PriceCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Price, null, "Same"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Traders, null, "Strategies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_devider_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PriceCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Price, null, "Better"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Traders, null, "Strategies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_devider_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PriceCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Price, null, "24x7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Traders, null, "Strategies")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Frame1);

/***/ }),

/***/ "./src/Components/GetStart.jsx":
/*!*************************************!*\
  !*** ./src/Components/GetStart.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_getstarted_bg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/getstarted_bg.png */ "./src/images/getstarted_bg.png");
/* harmony import */ var _images_vector_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/vector_image.png */ "./src/images/vector_image.png");
/* harmony import */ var _images_density_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/density_logo.png */ "./src/images/density_logo.png");





const Header = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "GetStart__Header"
})(["font-family:Neurial Grotesk;font-size:132.195px;font-style:normal;font-weight:700;line-height:normal;letter-spacing:-2.783px;background:linear-gradient( 177deg,#fff 2.77%,rgba(255,255,255,0) 139.85% );background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:flex;justify-content:center;align-items:center;"]);
const MainSection = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "GetStart__MainSection"
})(["position:relative;margin-top:100px;"]);
const MobileSection = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "GetStart__MobileSection"
})(["background-image:url(", ");background-repeat:no-repeat;display:flex;justify-content:center;align-items:center;margin:auto;height:1000px;width:30%;z-index:1;position:relative;bottom:60px;"], _images_getstarted_bg_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "GetStart__Image"
})(["display:flex;justify-content:center;flex-direction:column;align-items:center;position:relative;right:60px;bottom:100px;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "GetStart__Button"
})(["display:flex;width:866.226px;height:134.978px;padding:11.132px 33.397px;justify-content:center;align-items:center;gap:6.958px;flex-shrink:0;background:linear-gradient(269deg,#D4F938 38.89%,rgba(50,216,117,0.96) 103.19%);color:#000;font-family:Neurial Grotesk;font-size:38.267px;font-style:normal;font-weight:700;line-height:normal;margin:auto;z-index:1;position:relative;bottom:280px;"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "GetStart__Logo"
})(["margin-left:100px;margin-bottom:100px;"]);
const GetStart = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, null, "Get started now."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Logo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_density_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_vector_image_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "",
    width: "150%"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, null, "Start Trading!"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetStart);

/***/ }),

/***/ "./src/Components/Hero.jsx":
/*!*********************************!*\
  !*** ./src/Components/Hero.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_heroimg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/heroimg.png */ "./src/images/heroimg.png");



const Mainsection = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Hero__Mainsection"
})(["width:100%;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "Hero__Title"
})(["color:var(--White,#fff);text-align:center;font-family:Neurial Grotesk;font-size:96px;font-style:normal;font-weight:700;line-height:100px;letter-spacing:-4.19px;"]);
const FutureText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Hero__FutureText"
})(["background:linear-gradient(97deg,#78e65d 47.68%,#d5fa39 70.85%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-family:Neurial Grotesk;font-size:96px;font-style:normal;font-weight:700;line-height:100px;letter-spacing:-4.19px;"]);
const InformationText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Hero__InformationText"
})(["color:var(--neutrals-grey-4,#e7e7ea);text-align:center;font-family:Neurial Grotesk;font-size:24px;font-style:normal;font-weight:400;line-height:normal;text-transform:capitalize;"]);
const CenteredImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "Hero__CenteredImage"
})(["display:block;margin:100px auto;position:relative;z-index:3;"]);
const BackgroundCircle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Hero__BackgroundCircle"
})(["position:absolute;width:950px;height:800px;background:radial-gradient(circle,#78e65d,transparent);filter:blur(50px);border-radius:50%;top:96%;left:50%;transform:translate(-50%,-50%);z-index:1;"]);
const Hero = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mainsection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, "It\u2019s time to trade,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FutureText, null, "future")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InformationText, null, "Trade BTC, ETH Futures with 125x leverage and earn rewards."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BackgroundCircle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredImage, {
    src: _images_heroimg_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "Description of the image"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./src/Components/Meet.jsx":
/*!*********************************!*\
  !*** ./src/Components/Meet.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_dotted_bg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/dotted_bg.png */ "./src/images/dotted_bg.png");
/* harmony import */ var _images_Te1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Te1.png */ "./src/images/Te1.png");
/* harmony import */ var _images_p1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/p1.png */ "./src/images/p1.png");
/* harmony import */ var _images_p2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/p2.png */ "./src/images/p2.png");
/* harmony import */ var _images_p3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/p3.png */ "./src/images/p3.png");
/* harmony import */ var _images_link1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/link1.png */ "./src/images/link1.png");








const MainSection = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Meet__MainSection"
})(["width:100%;margin:auto;padding-bottom:140px;padding-top:100px;background:var(--neutrals-grey-9,#19191D);"]);
const Header1 = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Meet__Header1"
})(["color:var(--White,#fff);text-align:center;font-family:Neurial Grotesk;font-size:72px;font-style:normal;font-weight:700;line-height:76.882px;letter-spacing:-2.097px;"]);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].img.withConfig({
  displayName: "Meet__Image"
})(["margin-left:138px;margin-top:-71px;"]);
const Image2 = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].img.withConfig({
  displayName: "Meet__Image2"
})(["margin-left:183px;margin-top:-57px;"]);
const Image3 = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].img.withConfig({
  displayName: "Meet__Image3"
})(["margin-left:168px;margin-top:-46px;"]);
const Header2 = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Meet__Header2"
})(["color:var(--electric-green-primary,#ebff25);font-family:Neurial Grotesk;font-size:72px;font-style:normal;font-weight:700;line-height:76.882px;letter-spacing:-2.097px;"]);
const HeaderMain = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Meet__HeaderMain"
})(["display:flex;justify-content:center;align-items:center;"]);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Meet__Card"
})(["background-image:url(", ");background-color:#19191d;width:368px;height:372px;"], _images_Te1_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
const Dotted = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Meet__Dotted"
})(["background-image:url(", ");height:237px;border:.1px solid #0f0f12;width:282px;"], _images_dotted_bg_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
const CardBody = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Meet__CardBody"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;margin-left:50px;row-gap:50px;margin-top:80px;"]);
const MainCard = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Meet__MainCard"
})(["display:flex;justify-content:center;align-items:center;column-gap:20px;margin-top:80px;"]);
const Asome2 = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].p.withConfig({
  displayName: "Meet__Asome2"
})(["color:var(--neutrals-grey-6,#666673);font-family:'Neurial Grotesk',sans-serif;font-size:17px;margin-left:64px;font-style:normal;flex-wrap:nowrap;font-weight:400;width:100%;"]);
const FirstDiv = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Meet__FirstDiv"
})(["padding:140px 0px display:flex;"]);
const NamePerson = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].p.withConfig({
  displayName: "Meet__NamePerson"
})(["color:white;font-family:'Neurial Grotesk',sans-serif;font-size:28px;font-style:normal;margin-left:64px;margin-top:-31px;font-weight:700;line-height:30px;letter-spacing:-1px;"]);
const Image1 = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].img.withConfig({
  displayName: "Meet__Image1"
})(["margin-left:29px;margin-top:75px;"]);
const Meet = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FirstDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeaderMain, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header1, null, "Meet the"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header2, null, "Visionaries "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header1, null, "behind Density.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Dotted, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FirstDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NamePerson, null, "Aakash Neeraj ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Mittal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Asome2, null, "CEO, Density")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image, {
    src: _images_p1_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: ""
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image1, {
    src: _images_link1_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Dotted, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FirstDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NamePerson, null, "Bhupendra", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Bule"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Asome2, null, "CTO, Density")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image2, {
    src: _images_p2_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: ""
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image1, {
    src: _images_link1_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Dotted, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FirstDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NamePerson, null, "Deepak", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Vasman "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Asome2, null, "CBO, Density")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image3, {
    src: _images_p3_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: ""
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image1, {
    src: _images_link1_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: ""
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Meet);

/***/ }),

/***/ "./src/Components/MobileSection.jsx":
/*!******************************************!*\
  !*** ./src/Components/MobileSection.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_mobile_bg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/mobile_bg.png */ "./src/images/mobile_bg.png");
/* harmony import */ var _images_oneapp_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/oneapp.png */ "./src/images/oneapp.png");
/* harmony import */ var _images_future_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/future.png */ "./src/images/future.png");
/* harmony import */ var _images_isnow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/isnow.png */ "./src/images/isnow.png");






const MainDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "MobileSection__MainDiv"
})(["width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;row-gap:120px;"]);
const ChildDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "MobileSection__ChildDiv"
})(["position:relative;"]);
const Topcontent = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "MobileSection__Topcontent"
})(["position:absolute;top:117px;display:flex;flex-direction:column;justify-content:center;align-items:center;row-gap:60px;left:15px;"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "MobileSection__Text"
})(["color:var(--White,#fff);text-align:center;font-family:Neurial Grotesk;font-size:33.501px;font-style:normal;font-weight:300;line-height:40.201px;letter-spacing:-0.799px;width:60%;"]);
const TextLast = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "MobileSection__TextLast"
})(["color:var(--White,#fff);text-align:center;font-family:Neurial Grotesk;font-size:33.501px;font-style:normal;font-weight:300;line-height:40.201px;letter-spacing:-0.799px;width:60%;"]);
const MobileSection = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChildDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_mobile_bg_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "bg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Topcontent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_oneapp_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "oneapp"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, null, "One App. Endless Possibilities"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChildDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_mobile_bg_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "bg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Topcontent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_future_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "oneapp"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, null, "Future of Derivative Trading."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChildDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_mobile_bg_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "bg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Topcontent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_isnow_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "oneapp",
    width: "120%"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextLast, null, "Is now here for you"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileSection);

/***/ }),

/***/ "./src/Components/Navbar.jsx":
/*!***********************************!*\
  !*** ./src/Components/Navbar.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo.svg */ "./src/images/logo.svg");



const Navheader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Navbar__Navheader"
})(["border-bottom:1px solid rgba(255,255,255,0);background:#09130b;backdrop-filter:blur(20px);width:100%;display:flex;justify-content:space-around;align-items:center;padding:20px 0px;"]);
const Navmenus = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Navbar__Navmenus"
})(["display:flex;justify-content:space-between;width:60%;align-items:center;color:#fcfcfc;font-family:Neurial Grotesk;font-size:14px;font-style:normal;font-weight:400;line-height:normal;cursor:pointer;"]);
const Navmenu = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Navbar__Navmenu"
})(["display:flex;justify-content:space-between;width:30%;align-items:center;"]);
const NavButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "Navbar__NavButton"
})(["display:flex;height:48px;padding:16px 25px;justify-content:center;align-items:center;gap:10px;border-radius:8px;background:linear-gradient(86deg,#d4f938 23.09%,#32d875 108.69%);box-shadow:0px 0px 16px 0px rgba(168,239,156,0.8);backdrop-filter:blur(5px);color:#000;font-family:Neurial Grotesk;font-size:13px;font-style:normal;font-weight:700;line-height:normal;text-transform:uppercase;border:none;cursor:pointer;"]);
const Logoimage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Navbar__Logoimage"
})(["cursor:pointer;"]);
const Navbar = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Navheader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Logoimage, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "density_logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Navmenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Navmenus, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Career"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Blogs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Leaderboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Fees")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavButton, null, "TRADE NOW")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/Components/StartSmall.jsx":
/*!***************************************!*\
  !*** ./src/Components/StartSmall.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_dotted_bg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/dotted_bg.png */ "./src/images/dotted_bg.png");
/* harmony import */ var _images_perImage_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/perImage.svg */ "./src/images/perImage.svg");
/* harmony import */ var _images_profilePic_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/profilePic.svg */ "./src/images/profilePic.svg");





const Mainsection = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "StartSmall__Mainsection"
})(["width:100%;background-color:white;"]);
const HeadingFirst = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1.withConfig({
  displayName: "StartSmall__HeadingFirst"
})(["text-align:center;color:var(--Black,#0E0E0F);font-family:'Neurial Grotesk',sans-serif;font-size:72px;font-style:normal;font-weight:700;padding-top:70px;line-height:76.882px;letter-spacing:-2.097px;"]);
const HeadingFirst1 = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1.withConfig({
  displayName: "StartSmall__HeadingFirst1"
})(["color:var(--Black,#0E0E0F);font-family:'Neurial Grotesk',sans-serif;font-size:32px;font-style:normal;font-weight:700;"]);
const ParaHead = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "StartSmall__ParaHead"
})(["color:var(--neutrals-grey-8,#32333A);text-align:center;font-family:'Neurial Grotesk',sans-serif;font-size:22.366px;font-style:normal;font-weight:400;line-height:32.849px;"]);
const ParaHead1 = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "StartSmall__ParaHead1"
})(["color:var(--neutrals-grey-8,#32333A);font-family:'Neurial Grotesk',sans-serif;font-size:18.366px;height :50%;"]);
const Dotted = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "StartSmall__Dotted"
})(["background-image:url(", ");height:264px;width:354px;position:relative;left:132px;bottom:173px;margin:auto;"], _images_dotted_bg_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
const Dotted1 = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "StartSmall__Dotted1"
})(["background-image:url(", ");height:264px;width:354px;position:relative;left:132px;bottom:159px;margin:auto;"], _images_dotted_bg_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
const MainCard = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "StartSmall__MainCard"
})(["display:flex;justify-content:center;align-items:center;column-gap:20px;margin-top:80px;margin-bottom:20px;"]);
const CardSecond = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "StartSmall__CardSecond"
})(["width:520px;height:567px;padding :50px;margin-right:10px;margin-bottom:30px;background:#eeefee;"]);
const CardSecond1 = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "StartSmall__CardSecond1"
})(["width:520px;height:567px;padding:50px;margin-right:10px;margin-bottom:30px;background:#eeefee;"]);
const DivImg = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "StartSmall__DivImg"
})(["width:20px;"]);
const StartSmall = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mainsection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeadingFirst, null, "Start Small. Earn Big"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ParaHead, null, "Deposity a minimum of 1000 and get a Deposit bonus + ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "dedicagted relationship manager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardSecond, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DivImg, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_perImage_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "perImage"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Dotted, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeadingFirst1, null, "Deposit ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " Bonus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ParaHead1, null, "our assets' liquidity is unmatched in the market , with a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " small bid-ask spread and a well-balanced order book.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardSecond1, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DivImg, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_profilePic_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "profilePic"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Dotted1, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeadingFirst1, null, "Dedicated ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " Relationship Manager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ParaHead1, null, "our assets' liquidity is unmatched in the market , with a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " small bid-ask spread and a well-balanced order book."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartSmall);

/***/ }),

/***/ "./src/Components/TradeSection.jsx":
/*!*****************************************!*\
  !*** ./src/Components/TradeSection.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_dotted_bg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/dotted_bg.png */ "./src/images/dotted_bg.png");
/* harmony import */ var _images_coinCRX_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/coinCRX.png */ "./src/images/coinCRX.png");
/* harmony import */ var _images_black_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/black_logo.png */ "./src/images/black_logo.png");
/* harmony import */ var _images_delta_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/delta.png */ "./src/images/delta.png");






const MainSection = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "TradeSection__MainSection"
})(["width:80%;margin:auto;"]);
const Header1 = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "TradeSection__Header1"
})(["color:var(--White,#fff);text-align:center;font-family:Neurial Grotesk;font-size:72px;font-style:normal;font-weight:700;line-height:76.882px;letter-spacing:-2.097px;"]);
const Header2 = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "TradeSection__Header2"
})(["color:var(--electric-green-primary,#ebff25);font-family:Neurial Grotesk;font-size:72px;font-style:normal;font-weight:700;line-height:76.882px;letter-spacing:-2.097px;"]);
const HeaderMain = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "TradeSection__HeaderMain"
})(["display:flex;justify-content:center;align-items:center;"]);
const Info = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "TradeSection__Info"
})(["color:var(--neutrals-grey-4,#e7e7ea);text-align:center;font-family:Neurial Grotesk;font-size:24px;font-style:normal;font-weight:400;line-height:32.849px;margin-top:20px;"]);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "TradeSection__Card"
})(["width:368px;height:438px;background:var(--neutrals-grey-9,#19191D);"]);
const Dotted = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "TradeSection__Dotted"
})(["background-image:url(", ");height:250px;width:300px;"], _images_dotted_bg_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
const Heading1 = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "TradeSection__Heading1"
})(["color:var(--White,#fff);font-family:Neurial Grotesk;font-size:32px;font-style:normal;font-weight:700;line-height:50.625px;letter-spacing:-1.687px;"]);
const Infos = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "TradeSection__Infos"
})(["color:var(--White,#fff);font-family:Neurial Grotesk;font-size:20px;font-style:normal;font-weight:400;line-height:normal;letter-spacing:-1.687px;"]);
const CardBody = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "TradeSection__CardBody"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;margin-left:50px;row-gap:50px;margin-top:80px;"]);
const MainCard = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "TradeSection__MainCard"
})(["display:flex;justify-content:center;align-items:center;column-gap:20px;margin-top:80px;"]);
const CardSecond = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "TradeSection__CardSecond"
})(["width:368px;height:438px;background:linear-gradient(180deg,rgb(209 245 54 / 92%) 47.68%,rgb(124 251 60 / 95%) 80.80%);box-shadow:0px 0px 10px 10px #434B21;"]);
const HeadingMiddle = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "TradeSection__HeadingMiddle"
})(["color:#000;font-family:Neurial Grotesk;font-size:40px;font-style:normal;font-weight:700;line-height:50.625px;letter-spacing:-1.687px;"]);
const InfosMiddle = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "TradeSection__InfosMiddle"
})(["color:#000;font-family:Neurial Grotesk;font-size:24px;font-style:normal;font-weight:400;line-height:normal;letter-spacing:-1.687px;"]);
const CardBody1 = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "TradeSection__CardBody1"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;margin-left:50px;row-gap:50px;margin-top:20px;"]);
const TradeSection = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeaderMain, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header1, null, "Trade More."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header2, null, "Pay Less.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Info, null, "Our low Fees Supercharge Your Profits")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Dotted, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_coinCRX_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Heading1, null, "0.025"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Infos, null, "Maker Fees")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Heading1, null, "0.025"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Infos, null, "Maker Fees"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardSecond, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Dotted, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardBody1, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_black_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeadingMiddle, null, "0.025"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfosMiddle, null, "Maker Fees")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeadingMiddle, null, "0.025"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfosMiddle, null, "Maker Fees"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Dotted, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_delta_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Heading1, null, "0.025"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Infos, null, "Maker Fees")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Heading1, null, "0.025"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Infos, null, "Maker Fees")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TradeSection);

/***/ }),

/***/ "./src/Components/Tradetogether.jsx":
/*!******************************************!*\
  !*** ./src/Components/Tradetogether.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_bg_image_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/bg_image.png */ "./src/images/bg_image.png");
/* harmony import */ var _images_devider_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/devider.png */ "./src/images/devider.png");




const Mainsection = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Tradetogether__Mainsection"
})(["width:100%;background:linear-gradient( 180deg,rgba(0,0,0,0.4) 25%,rgba(42,93,50,0.4) 92.71% ),url(", "),lightgray 50% / cover no-repeat;box-shadow:0px 4px 4px 0px rgba(0,0,0,0.25);height:650px;margin:0;background-repeat:no-repeat;background-size:cover;background-position:center;margin-top:100px;"], _images_bg_image_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
const Header1 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "Tradetogether__Header1"
})(["color:var(--White,#fff);font-family:Neurial Grotesk;font-size:72px;font-style:normal;font-weight:700;line-height:76.882px;letter-spacing:-2.097px;"]);
const Header2 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "Tradetogether__Header2"
})(["color:var(--electric-green-primary,#ebff25);font-family:Neurial Grotesk;font-size:72px;font-style:normal;font-weight:700;line-height:76.882px;letter-spacing:-2.097px;"]);
const HeaderSection = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Tradetogether__HeaderSection"
})(["display:flex;align-items:center;justify-content:center;"]);
const Info = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "Tradetogether__Info"
})(["color:var(--neutrals-grey-4,#e7e7ea);font-family:Neurial Grotesk;font-size:24px;font-style:normal;font-weight:400;line-height:32.849px;display:flex;justify-content:center;align-items:center;position:relative;bottom:50px;"]);
const Community = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Tradetogether__Community"
})(["width:60%;height:200px;border-radius:8px;border:1px solid rgba(255,255,255,0.25);background:rgba(16,16,16,0.4);backdrop-filter:blur(26.25px);margin:auto;"]);
const Price = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Tradetogether__Price"
})(["color:var(--White,#FFF);font-family:Neurial Grotesk;font-size:32px;font-style:normal;font-weight:700;line-height:normal;"]);
const Traders = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Tradetogether__Traders"
})(["color:#A9A9A9;font-family:Neurial Grotesk;font-size:16px;font-style:normal;font-weight:400;line-height:26px;"]);
const PricingSection = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Tradetogether__PricingSection"
})(["display:flex;justify-content:center;align-items:center;column-gap:80px;margin-top:5%;"]);
const PriceCard = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Tradetogether__PriceCard"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "Tradetogether__Button"
})(["display:flex;height:48px;padding:24px 48px;justify-content:center;align-items:center;gap:10px;border-radius:8px;background:linear-gradient(86deg,#D4F938 23.09%,#32D875 108.69%);box-shadow:0px 0px 16px 0px rgba(168,239,156,0.80);backdrop-filter:blur(5px);color:#000;font-family:Neurial Grotesk;font-size:18px;font-style:normal;font-weight:700;line-height:normal;text-transform:uppercase;margin:auto;border:none;margin-top:80px;"]);
const Tradetogether = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mainsection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeaderSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header1, null, "Trade Together."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header2, null, "Thrive Together.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Info, null, "Join the fun-filled community on our platform.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Community, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PricingSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PriceCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Price, null, "10,000+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Traders, null, "Traders")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_devider_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PriceCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Price, null, "100Mn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Traders, null, "Daily Volume Traded")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_devider_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PriceCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Price, null, "Daily"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Traders, null, "Trade Analysis")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_devider_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PriceCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Price, null, "Live"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Traders, null, "Signals")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, null, "Join community"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tradetogether);

/***/ }),

/***/ "./src/Components/UnlockSection.jsx":
/*!******************************************!*\
  !*** ./src/Components/UnlockSection.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_unlockimg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/unlockimg.png */ "./src/images/unlockimg.png");
/* harmony import */ var _images_devider_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/devider.png */ "./src/images/devider.png");




const Mainsection = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "UnlockSection__Mainsection"
})(["width:100%;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "UnlockSection__Title"
})(["color:var(--White,#fff);text-align:center;font-family:Neurial Grotesk;font-size:96px;font-style:normal;font-weight:700;line-height:100px;letter-spacing:-4.19px;"]);
const FutureText = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "UnlockSection__FutureText"
})(["background:linear-gradient(97deg,#78e65d 47.68%,#d5fa39 70.85%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-family:Neurial Grotesk;font-size:96px;font-style:normal;font-weight:700;line-height:100px;letter-spacing:-4.19px;"]);
const InformationText = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "UnlockSection__InformationText"
})(["color:var(--neutrals-grey-4,#e7e7ea);text-align:center;font-family:Neurial Grotesk;font-size:24px;font-style:normal;font-weight:400;line-height:normal;text-transform:capitalize;"]);
const CenteredImage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "UnlockSection__CenteredImage"
})(["display:block;margin:100px auto;"]);
const Community = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "UnlockSection__Community"
})(["width:60%;height:200px;border-radius:8px;border:1px solid rgba(255,255,255,0.25);background:rgba(16,16,16,0.4);backdrop-filter:blur(26.25px);margin:auto;"]);
const Price = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "UnlockSection__Price"
})(["color:var(--White,#fff);font-family:Neurial Grotesk;font-size:32px;font-style:normal;font-weight:700;line-height:normal;"]);
const PricingSection = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "UnlockSection__PricingSection"
})(["display:flex;justify-content:center;align-items:center;column-gap:80px;margin-top:5%;"]);
const PriceCard = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "UnlockSection__PriceCard"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
const UnlockSection = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mainsection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FutureText, null, "Unlock"), " New Frontiers."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InformationText, null, "Are you a stock trader looking for new opportunities to make ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " ", "money? We got you covered!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Community, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PricingSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PriceCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Price, null, "Same"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Price, null, "Strategies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_devider_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PriceCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Price, null, "Same"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Price, null, "Indicators")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_devider_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PriceCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Price, null, "Better"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Price, null, "Leverage")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_devider_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PriceCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Price, null, "24x7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Price, null, "Trading")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenteredImage, {
    src: _images_unlockimg_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "Description of the image"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnlockSection);

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Navbar */ "./src/Components/Navbar.jsx");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Footer */ "./src/Components/Footer.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _Components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Hero */ "./src/Components/Hero.jsx");
/* harmony import */ var _Components_Frame1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Frame1 */ "./src/Components/Frame1.jsx");
/* harmony import */ var _Components_MobileSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/MobileSection */ "./src/Components/MobileSection.jsx");
/* harmony import */ var _Components_TradeSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/TradeSection */ "./src/Components/TradeSection.jsx");
/* harmony import */ var _Components_ExploreSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/ExploreSection */ "./src/Components/ExploreSection.jsx");
/* harmony import */ var _Components_UnlockSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/UnlockSection */ "./src/Components/UnlockSection.jsx");
/* harmony import */ var _Components_StartSmall__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/StartSmall */ "./src/Components/StartSmall.jsx");
/* harmony import */ var _Components_Darivates__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Darivates */ "./src/Components/Darivates.jsx");
/* harmony import */ var _Components_Backed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Backed */ "./src/Components/Backed.jsx");
/* harmony import */ var _Components_Donttake__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/Donttake */ "./src/Components/Donttake.jsx");
/* harmony import */ var _Components_Earnmoney__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Components/Earnmoney */ "./src/Components/Earnmoney.jsx");
/* harmony import */ var _Components_Tradetogether__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Components/Tradetogether */ "./src/Components/Tradetogether.jsx");
/* harmony import */ var _Components_Meet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Components/Meet */ "./src/Components/Meet.jsx");
/* harmony import */ var _Components_GetStart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Components/GetStart */ "./src/Components/GetStart.jsx");


















const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_17__.createGlobalStyle)(["html,body{margin:0;padding:0;box-sizing:border-box;background-color:black;}"]);
const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Frame1__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_MobileSection__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_TradeSection__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_ExploreSection__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_UnlockSection__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_StartSmall__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Darivates__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Backed__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Donttake__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Earnmoney__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Tradetogether__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Meet__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_GetStart__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Density");

/***/ }),

/***/ "./src/images/FooterLogo.png":
/*!***********************************!*\
  !*** ./src/images/FooterLogo.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/Frame.png":
/*!******************************!*\
  !*** ./src/images/Frame.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/Te1.png":
/*!****************************!*\
  !*** ./src/images/Te1.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/Te1-bafcbb84d8bf6f016ab613f7233c63ee.png");

/***/ }),

/***/ "./src/images/accountimg.png":
/*!***********************************!*\
  !*** ./src/images/accountimg.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/accountimg-b8f398db598c130f91fe533432306bc1.png");

/***/ }),

/***/ "./src/images/avatar1.png":
/*!********************************!*\
  !*** ./src/images/avatar1.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/avatar1-1dbc28529a3d69179744926683f9b4ac.png");

/***/ }),

/***/ "./src/images/avatar2.png":
/*!********************************!*\
  !*** ./src/images/avatar2.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/avatar2-a3c6dbdfc9ebae950be98fdd4d563c58.png");

/***/ }),

/***/ "./src/images/avatar3.png":
/*!********************************!*\
  !*** ./src/images/avatar3.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/avatar3-327899ba869f4e2332b8e41f6f527387.png");

/***/ }),

/***/ "./src/images/avatar4.png":
/*!********************************!*\
  !*** ./src/images/avatar4.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/avatar4-3c19145bfbf307275e5be34770f2e994.png");

/***/ }),

/***/ "./src/images/avatar5.png":
/*!********************************!*\
  !*** ./src/images/avatar5.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/avatar5-63c0cef56c35669b98d21dc15640d8fb.png");

/***/ }),

/***/ "./src/images/avatar6.png":
/*!********************************!*\
  !*** ./src/images/avatar6.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/avatar6-138d8564de7ffe30390e563107f35b41.png");

/***/ }),

/***/ "./src/images/avatar7.png":
/*!********************************!*\
  !*** ./src/images/avatar7.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/avatar7-028ea7f8534717b088165032fb351454.png");

/***/ }),

/***/ "./src/images/avatar8.png":
/*!********************************!*\
  !*** ./src/images/avatar8.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/avatar8-b7e324835d3438cf981308a4b5bf9ff3.png");

/***/ }),

/***/ "./src/images/backed1.png":
/*!********************************!*\
  !*** ./src/images/backed1.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/backed2.png":
/*!********************************!*\
  !*** ./src/images/backed2.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/backed3.png":
/*!********************************!*\
  !*** ./src/images/backed3.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/backed4.png":
/*!********************************!*\
  !*** ./src/images/backed4.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/backed5.png":
/*!********************************!*\
  !*** ./src/images/backed5.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/backed6.png":
/*!********************************!*\
  !*** ./src/images/backed6.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/backed7.png":
/*!********************************!*\
  !*** ./src/images/backed7.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/bg_image.png":
/*!*********************************!*\
  !*** ./src/images/bg_image.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/bg_image-92a1589aa5101e8df37658ad885102d3.png");

/***/ }),

/***/ "./src/images/black_logo.png":
/*!***********************************!*\
  !*** ./src/images/black_logo.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/black_logo-f7cbf945dc8e2e97d1527c2856459351.png");

/***/ }),

/***/ "./src/images/coinCRX.png":
/*!********************************!*\
  !*** ./src/images/coinCRX.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/delta.png":
/*!******************************!*\
  !*** ./src/images/delta.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/density_logo.png":
/*!*************************************!*\
  !*** ./src/images/density_logo.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/depoimg.png":
/*!********************************!*\
  !*** ./src/images/depoimg.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/depoimg-4b630faafd35ed5f74da6852c025ff56.png");

/***/ }),

/***/ "./src/images/depositimg.png":
/*!***********************************!*\
  !*** ./src/images/depositimg.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/depositimg-28e7f074e517250a8690b2ff8ef7cc4c.png");

/***/ }),

/***/ "./src/images/devider.png":
/*!********************************!*\
  !*** ./src/images/devider.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAABZCAYAAAAU//UQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAtSURBVHgB7caxDQAwCAMwUjFl6qc9KS/2BEDiC/BkSLqWnOSrHGubzdg4gF8J2ewEI6YSF/gAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/images/dotted_bg.png":
/*!**********************************!*\
  !*** ./src/images/dotted_bg.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/doubletradeimg.png":
/*!***************************************!*\
  !*** ./src/images/doubletradeimg.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/exploreimg.png":
/*!***********************************!*\
  !*** ./src/images/exploreimg.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/exploreimg-8170f014c62f4d151efe84f3fa30fe74.png");

/***/ }),

/***/ "./src/images/facebooklogo.png":
/*!*************************************!*\
  !*** ./src/images/facebooklogo.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAUCAYAAABbLMdoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACZSURBVHgB7VLBDYAgDKSGARzBEdxAR3AEV3MC3QBHcAPZQJ0AS1K0Nojh7yVN03C0xxVQL3DOlZjKUAOAjZEqDIOxuScaLYmYDEYVm6ZF3QriTuFxSAkjG7uS7guF6MwPLT5qT5GT0DSqi3T2rvSsnoAcWNU32hwZR7BuplwzKf5xCyPbx1XaXIARnfPc+Mkc8j8P6l6QleQTAaRb1ZSV7jUAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/images/future.png":
/*!*******************************!*\
  !*** ./src/images/future.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/getstarted_bg.png":
/*!**************************************!*\
  !*** ./src/images/getstarted_bg.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/getstarted_bg-b6a687117b56b4b7216db0a69ab37e9b.png");

/***/ }),

/***/ "./src/images/heroimg.png":
/*!********************************!*\
  !*** ./src/images/heroimg.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/heroimg-3b2c80c2aa4f2d369098a1bcbc87092b.png");

/***/ }),

/***/ "./src/images/instagramlogo.png":
/*!**************************************!*\
  !*** ./src/images/instagramlogo.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAZCAYAAAA14t7uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGcSURBVHgB1VTRUcMwDFU4/skGeAOyAWWCdoOWDbpB2gk6AmGCwgRpJ2iYoN6gZQIjkedWGDvg6/HBu9PJJ1nPsiWL6I9QhAbnXMnKsJQwmUicVeuuKIojpcCEhqVlObh87Fmm3zJmY8WqRZZy+gY6zE7DYL/oCraGs3/Ume5x8gpPkYWAY+6NMxieKBMcM5I4uTHWgoN3tjDcDxCUCK4C+w6x64CruqJz9W2EUMjk7SWLnQiuvMCWZ5YOWnPckX+bCOlEdYjotcrolGUQU8M3jRIHxagzfD8SDxYU5OdCRYivKI4xdBNzcq9a6t9Winob25Mi9ngf8PkPZHKILfSY0jDQbznEr9Bzec/QiXYTe5MaQNcxI2/eIFhEeveF9ZblhmXCMqL+VktKQbVOGfHVLo5d4iYr3xWSsS5CF2S+5E3yq8bwf04+tm8TeRpoq0+p6QKgtw+n2zs1lVwwZDKJG/2p/KCXbBfY01DfFcdf8Eld5IPMqB/2luUBH+h0Yu0uQ6sLWgTXEceIZOydx6nAqLWlr5CCdwMF/Sf4ADYrQ8JonjRmAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/images/inviteimg.png":
/*!**********************************!*\
  !*** ./src/images/inviteimg.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/isnow.png":
/*!******************************!*\
  !*** ./src/images/isnow.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/link1.png":
/*!******************************!*\
  !*** ./src/images/link1.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHBSURBVHgB7ZfbbcIwFIaPEw/ABs0Ifa3USyIBElMQNugGkAnaDUhH4JUgAS1SX+kG6Qa8O8H9TUnrRCKhJa5SiU8KvuQY/zrn+BKiMw2C6Y35/NVJkmTMmHTIEFKymHM+8LyrOOvjukGapkMULgzJII4Qu3kGWYdFOZXmPKBT9LRFDeAYEQuEJ4SXYjIEL3uJicNu9/YrdlH0MkfhUs1UeSKkvKgnMkCFCHaZM7asOzJAaTgYo9FsttoIId85V0tX+vTXIkBL5QWvsjIpQglgjMVZG57xpSQH1cX+yXBhjdCxRymTyaetfYHfEaqXdIoIEHY6N8usgdXhonCUAPQHWT9CFguRLHs9L9bGrvFMouj5AWLu6QQRR9FuXx9cNZynQZJwH9XWIZvadkzlpel0NYZX+nq/53kbhCosG1uLCHX6qgJngq/yCIKG+nvk0RuZFoHjv1+YNJeMenIbE1EEq6j1E/t/c4oa5ywioxEiqnZMf79V70DWO1h+Chf9up2rN9RdVd8rsEQxTtKvRGCwn//z3KRuyTgHxeh73GEBiublRNXOVhfFS3MuHEKIwLZtXOPqv8xmbLdsjY+sgM40lQ/+26qhnTm60gAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/images/linkedinlogo.png":
/*!*************************************!*\
  !*** ./src/images/linkedinlogo.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADaSURBVHgB7ZThDcIgEIWPxv+ygY7gBu0I3UTdgBHcoHEEJ6hOoJ2g3UCcAB8GDeLZBMov45e8NL2jjyscCALGmAqPEhqEEHvKAUyVeaelHMDoaj5Z0ESKL/EbTQXV1VDvKrXVrykn9vchSZkQlIgrYuVeNbrpEg5og43rvVzDbKyEdkz8DC2f3xYUTwNx+2Crf5mnGNcjOekmTjLWkIIqaMvkK7tcM4pn4x37E0zmbiKfMrpi5i7pmGEyZSlCNBfMYUx/4x8ztgfE9uXRi/ntc4CGcYtHXgWx7g6JHqwpUcOAfAAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/logo-7a827e9c1aa8774f22f186a50f7b29e7.svg");

/***/ }),

/***/ "./src/images/mobile.png":
/*!*******************************!*\
  !*** ./src/images/mobile.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/mobile-2f4ac5bdd43525feba0cf7ae54b45322.png");

/***/ }),

/***/ "./src/images/mobile_bg.png":
/*!**********************************!*\
  !*** ./src/images/mobile_bg.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/mobile_bg-27d5f9803ea69c067c98132a17203672.png");

/***/ }),

/***/ "./src/images/notification.png":
/*!*************************************!*\
  !*** ./src/images/notification.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/notification-d24617b1fe641b120fd3853c4ae2d57e.png");

/***/ }),

/***/ "./src/images/oneapp.png":
/*!*******************************!*\
  !*** ./src/images/oneapp.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/oneapp-624e33f7d110cbdb8cd2a72456f3e4f1.png");

/***/ }),

/***/ "./src/images/p1.png":
/*!***************************!*\
  !*** ./src/images/p1.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/p1-0fb59517872e90d1c6dd3c48768825e9.png");

/***/ }),

/***/ "./src/images/p2.png":
/*!***************************!*\
  !*** ./src/images/p2.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/p2-00b6d973e9469dc617612fa0ad7b5994.png");

/***/ }),

/***/ "./src/images/p3.png":
/*!***************************!*\
  !*** ./src/images/p3.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/p3-124237ca29927d9d33432b2bcc64f8c4.png");

/***/ }),

/***/ "./src/images/perImage.svg":
/*!*********************************!*\
  !*** ./src/images/perImage.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/perImage-d6288f3cfad184bab02081d946353dc6.svg");

/***/ }),

/***/ "./src/images/person1.png":
/*!********************************!*\
  !*** ./src/images/person1.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/person1-be2f3a048208f901887b64acecf0e1f2.png");

/***/ }),

/***/ "./src/images/person2.png":
/*!********************************!*\
  !*** ./src/images/person2.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/person2-48cf0bf12b036e3ddbefa7d5f25301c0.png");

/***/ }),

/***/ "./src/images/person3.png":
/*!********************************!*\
  !*** ./src/images/person3.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/person3-8225d9280ee982fd113a157f093cd796.png");

/***/ }),

/***/ "./src/images/profilePic.svg":
/*!***********************************!*\
  !*** ./src/images/profilePic.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU5IiBoZWlnaHQ9IjEwNiIgdmlld0JveD0iMCAwIDE1OSAxMDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIG9wYWNpdHk9IjAuMiIgZD0iTTkxLjk2NTYgNTQuMjAyNUM4Ni4xMTQ4IDUwLjgyNzUgODIuODE0OSA0Ni4yNTIzIDgyLjc5MTEgNDEuNDc1QzgyLjc2MTQgMzYuNjk3NyA4Ni4wMTM3IDMyLjEyMjUgOTEuODIyOSAyOC43NDc1Qzk3LjYzMiAyNS4zNzI1IDEwNS41MzQgMjMuNDc3MSAxMTMuNzgxIDIzLjQ3NzFDMTIyLjAyOCAyMy40NzcxIDEyOS45NDggMjUuMzcyNSAxMzUuNzkyIDI4Ljc0NzVDMTQxLjYzNyAzMi4xMjI1IDE0NC45NDMgMzYuNjk3NyAxNDQuOTczIDQxLjQ3NUMxNDUuMDAzIDQ2LjI1MjMgMTQxLjc1IDUwLjgyNzUgMTM1LjkzNSA1NC4yMDI1QzEzMC4xMjYgNTcuNTc3NSAxMjIuMjMgNTkuNDcyOSAxMTMuOTgzIDU5LjQ3MjlDMTA1LjczNiA1OS40NzI5IDk3LjgxNjMgNTcuNTc3NSA5MS45NjU2IDU0LjIwMjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjIiIGQ9Ik04MS4wMDc1IDYwLjU2NjJDMTA1LjM4NSA3NC42MzA2IDExNS4zMTUgOTEuNzEzNSAxMDMuMjA5IDk4Ljc0MjhMOTIuMjUxMSAxMDUuMTA3TDQuMDI2NDkgNTQuMjAyNUwxNC45ODQ3IDQ3LjgzODdDMjcuMDkwNSA0MC44MDk1IDU2LjYzNTQgNDYuNTAxOCA4MS4wMDc1IDYwLjU2NjJaIiBmaWxsPSJ3aGl0ZSIvPgo8bWFzayBpZD0ibWFzazBfMV85NTYiIHN0eWxlPSJtYXNrLXR5cGU6bHVtaW5hbmNlIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI3OSIgeT0iMTgiIHdpZHRoPSIxMCIgaGVpZ2h0PSIzMyI+CjxwYXRoIGQ9Ik04OC45OTI3IDMxLjAyOTFMODguOTM5MiA1MC40MDU2QzgzLjA4ODUgNDcuMDMwNiA3OS43ODg2IDQyLjQ1NTQgNzkuNzY0OCAzNy42NzgxTDc5LjgxODMgMTguMzAxNkM3OS44NDIxIDIzLjA3MyA4My4xNDIgMjcuNjU0MSA4OC45OTI3IDMxLjAyOTFaIiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfMV85NTYpIj4KPHBhdGggZD0iTTg4Ljk5MjcgMzEuMDI5MUw4OC45MzkyIDUwLjQwNTZDODMuMDg4NSA0Ny4wMzA2IDc5Ljc4ODYgNDIuNDU1NCA3OS43NjQ4IDM3LjY3ODFMNzkuODE4MyAxOC4zMDE2Qzc5Ljg0MjEgMjMuMDczIDgzLjE0MiAyNy42NTQxIDg4Ljk5MjcgMzEuMDI5MVoiIGZpbGw9IiMxRDk3NEYiLz4KPC9nPgo8cGF0aCBkPSJNODguOTkyNyAzMS4wMjkxQzgzLjE0MiAyNy42NTQyIDc5Ljg0MiAyMy4wNzg5IDc5LjgxODMgMTguMzAxN0M3OS43ODg1IDEzLjUyNDQgODMuMDQwOSA4Ljk0OTE0IDg4Ljg1IDUuNTc0MTVDOTQuNjU5MSAyLjE5OTE3IDEwMi41NjEgMC4zMDM3MTEgMTEwLjgwOCAwLjMwMzcxMUMxMTkuMDU1IDAuMzAzNzExIDEyNi45NzUgMi4xOTkxNyAxMzIuODIgNS41NzQxNUMxMzguNjY0IDguOTQ5MTQgMTQxLjk3IDEzLjUyNDQgMTQyIDE4LjMwMTdDMTQyLjAzIDIzLjA3ODkgMTM4Ljc3NyAyNy42NTQyIDEzMi45NjIgMzEuMDI5MUMxMjcuMTUzIDM0LjQwNDEgMTE5LjI1NyAzNi4yOTk2IDExMS4wMSAzNi4yOTk2QzEwMi43NjMgMzYuMjk5NiA5NC44NDM0IDM0LjQwNDEgODguOTkyNyAzMS4wMjkxWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzFfOTU2KSIvPgo8bWFzayBpZD0ibWFzazFfMV85NTYiIHN0eWxlPSJtYXNrLXR5cGU6bHVtaW5hbmNlIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI4OCIgeT0iMTgiIHdpZHRoPSI1NSIgaGVpZ2h0PSIzOCI+CjxwYXRoIGQ9Ik0xNDIgMTguMzAxNkwxNDEuOTQ3IDM3LjY3ODFDMTQxLjk3NiA0Mi40NTU0IDEzOC43MjQgNDcuMDMwNiAxMzIuOTA5IDUwLjQwNTZDMTI3LjEgNTMuNzgwNiAxMTkuMjA0IDU1LjY3NiAxMTAuOTU3IDU1LjY3NkMxMDIuNzEgNTUuNjc2IDk0Ljc4OTkgNTMuNzgwNiA4OC45MzkyIDUwLjQwNTZMODguOTkyNyAzMS4wMjkxQzk0Ljg0MzQgMzQuNDA0MSAxMDIuNzYzIDM2LjI5OTYgMTExLjAxIDM2LjI5OTZDMTE5LjI1NyAzNi4yOTk2IDEyNy4xNTMgMzQuNDA0MSAxMzIuOTYyIDMxLjAyOTFDMTM4Ljc3MSAyNy42NTQxIDE0Mi4wMjQgMjMuMDc4OSAxNDIgMTguMzAxNloiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMV8xXzk1NikiPgo8cGF0aCBkPSJNMTQyIDE4LjMwMTZMMTQxLjk0NyAzNy42NzgxQzE0MS45NTIgMzkuMTQ1NyAxNDEuNjU1IDQwLjU4OTYgMTQxLjA2NyA0MS45OTE5TDE0MS4xMiAyMi42MTU0QzE0MS43MDkgMjEuMjEzMiAxNDIuMDEyIDE5Ljc2OTMgMTQyIDE4LjMwMTZaIiBmaWxsPSIjMUQ5NzRGIi8+CjxwYXRoIGQ9Ik0xNDEuMTIgMjIuNjE1NEwxNDEuMDY3IDQxLjk5MTlDMTM5LjczNSA0NS4xNTMgMTM2Ljk0IDQ4LjA3MDQgMTMyLjkxNSA1MC40MDU2QzEyNy4xMDYgNTMuNzgwNiAxMTkuMjEgNTUuNjc2IDExMC45NjMgNTUuNjc2QzExMC43NzIgNTUuNjc2IDExMC41ODIgNTUuNjc2IDExMC4zOTggNTUuNjc2TDExMC40NTEgMzYuMjk5NkMxMTAuNjQyIDM2LjI5OTYgMTEwLjgzMiAzNi4yOTk2IDExMS4wMTYgMzYuMjk5NkMxMTkuMjYzIDM2LjI5OTYgMTI3LjE1OSAzNC40MDQxIDEzMi45NjggMzEuMDI5MUMxMzYuOTk0IDI4LjY4OCAxMzkuNzk0IDI1Ljc3NjUgMTQxLjEyIDIyLjYxNTRaIiBmaWxsPSIjMUQ5NzRGIi8+CjxwYXRoIGQ9Ik0xMTAuNDQ1IDM2LjI5MzZMMTEwLjM5MiA1NS42NzAxQzEwMi4zNDcgNTUuNTg2OSA5NC42NTkxIDUzLjY5NzQgODguOTM5MiA1MC4zOTk2TDg4Ljk5MjcgMzEuMDIzMkM5NC43MDY3IDM0LjMyMDkgMTAyLjQwMSAzNi4yMDQ1IDExMC40NDUgMzYuMjkzNloiIGZpbGw9IiMxRDk3NEYiLz4KPC9nPgo8bWFzayBpZD0ibWFzazJfMV85NTYiIHN0eWxlPSJtYXNrLXR5cGU6bHVtaW5hbmNlIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIxMDAiIHk9IjY3IiB3aWR0aD0iNiIgaGVpZ2h0PSIyOCI+CjxwYXRoIGQ9Ik0xMDUuMzk3IDY3LjI5ODNMMTA1LjM0NCA4Ni42NzQ4QzEwNS4zMzIgOTAuMDU1NyAxMDMuNjczIDkyLjkxOTcgMTAwLjE4OSA5NC45NDU5TDEwMC4yNDIgNzUuNTY5NEMxMDMuNzMzIDczLjU0MzMgMTA1LjM5MSA3MC42NzkzIDEwNS4zOTcgNjcuMjk4M1oiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMl8xXzk1NikiPgo8cGF0aCBkPSJNMTA1LjM5NyA2Ny4yOTgzTDEwNS4zNDQgODYuNjc0OEMxMDUuMzQ0IDg3LjkxMDcgMTA1LjExOCA4OS4wODEzIDEwNC42NiA5MC4xNjg2TDEwNC43MTQgNzAuNzkyMkMxMDUuMTY1IDY5LjcxMDcgMTA1LjM5MSA2OC41NDAyIDEwNS4zOTcgNjcuMjk4M1oiIGZpbGw9IiMzNkQwNjgiLz4KPHBhdGggZD0iTTEwNC43MTQgNzAuNzg2MkwxMDQuNjYgOTAuMTYyNkMxMDMuODc1IDkyLjA0MDMgMTAyLjM5NSA5My42NTY1IDEwMC4xODMgOTQuOTQ1OUwxMDAuMjM2IDc1LjU2OTRDMTAyLjQ0OCA3NC4yODYgMTAzLjkyMyA3Mi42NjM4IDEwNC43MTQgNzAuNzg2MloiIGZpbGw9IiMzNkQwNjgiLz4KPC9nPgo8cGF0aCBkPSJNNzguMDM0NSAzNy4zOTI5QzEwMi40MTMgNTEuNDU3MyAxMTIuMzQyIDY4LjU0MDIgMTAwLjIzNiA3NS41Njk0TDg5LjI3ODEgODEuOTMzMkwxLjA1MzUzIDMxLjAyOTFMMTIuMDExNyAyNC42NjU0QzI0LjExNzUgMTcuNjM2MiA1My42NjI0IDIzLjMyODUgNzguMDM0NSAzNy4zOTI5WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzFfOTU2KSIvPgo8cGF0aCBkPSJNMTAwLjI0MiA3NS41Njk1TDEwMC4xODMgOTQuOTQ1OUw4OS4yMzA1IDEwMS4zMDRMODkuMjg0IDgxLjkzMzJMMTAwLjI0MiA3NS41Njk1WiIgZmlsbD0iIzM2RDA2OCIvPgo8cGF0aCBkPSJNODkuMjg0IDgxLjkzMzJMODkuMjMwNSAxMDEuMzA0TDEgNTAuMzk5NkwxLjA1MzUxIDMxLjAyOTFMODkuMjg0IDgxLjkzMzJaIiBmaWxsPSIjMUQ5NzRGIi8+CjxwYXRoIGQ9Ik0xNTMuOTM3IDcuMjUwNzVDMTUzLjkzNyA3LjI1MDc1IDE1Mi44NjQgMTEuNDE5NyAxNTIuODc0IDEyLjQyNDhDMTUyLjg4MyAxMy40Mjk4IDE1Mi4yMjMgMTUuMzEzNyAxNTQuOTQgMTYuNDE1NkMxNTQuOTQgMTYuNDE1NiAxNTguMDk3IDE3LjU2MDcgMTU4Ljk2MyAxNy42NTc2QzE1OC45NjMgMTcuNjU3NiAxNTUuNjQyIDE2Ljg0OTIgMTU0LjcyOSAxNi44NDk5QzE1My44MTYgMTYuODUwNyAxNTIuMDAyIDE2LjYxODEgMTUwLjc5NiAyMC4zNjE4TDE0OS42NDggMjQuNDc0QzE0OS42NDggMjQuNDc0IDE1MC42NjQgMjAuMTE3NCAxNTAuNzIyIDE5LjIzMjJDMTUwLjc3OSAxOC4zNDY5IDE1MS4yODIgMTYuMjM4OSAxNDguNDE1IDE1LjIwMzFMMTQ0Ljg0MiAxNC4xMDk5QzE0NC44NDIgMTQuMTA5OSAxNDcuNzMyIDE0LjkxNjYgMTQ5LjQ3NyAxNC44ODI2QzE1MS4yMjIgMTQuODQ4NSAxNTIuNDk5IDEyLjg2MDcgMTUzLjkzNyA3LjI1MDc1WiIgZmlsbD0iIzMzQjU2OCIgc3Ryb2tlPSIjMzNCNTY4IiBzdHJva2Utd2lkdGg9IjAuMjc3ODI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTE2Ljc1MiA1Ny44Njc0QzE2Ljc1MiA1Ny44Njc0IDE2LjI2MjYgNTkuNzY4OSAxNi4yNjcgNjAuMjI3NEMxNi4yNzE1IDYwLjY4NTggMTUuOTcwNCA2MS41NDUxIDE3LjIwOTYgNjIuMDQ3N0MxNy4yMDk2IDYyLjA0NzcgMTguNjQ5NiA2Mi41Njk5IDE5LjA0NDYgNjIuNjE0MkMxOS4wNDQ2IDYyLjYxNDIgMTcuNTI5OCA2Mi4yNDU0IDE3LjExMzIgNjIuMjQ1N0MxNi42OTY3IDYyLjI0NjEgMTUuODY5NyA2Mi4xNCAxNS4zMTk0IDYzLjg0NzZMMTQuNzk1OSA2NS43MjMzQzE0Ljc5NTkgNjUuNzIzMyAxNS4yNTk0IDYzLjczNjEgMTUuMjg1NSA2My4zMzIzQzE1LjMxMTcgNjIuOTI4NSAxNS41NDA5IDYxLjk2NzEgMTQuMjMzMiA2MS40OTQ2TDEyLjYwMzYgNjAuOTk2QzEyLjYwMzYgNjAuOTk2IDEzLjkyMTggNjEuMzYzOSAxNC43MTc3IDYxLjM0ODRDMTUuNTEzNyA2MS4zMzI5IDE2LjA5NjIgNjAuNDI2MiAxNi43NTIgNTcuODY3NFoiIGZpbGw9IiMzM0I1NjgiIHN0cm9rZT0iIzMzQjU2OCIgc3Ryb2tlLXdpZHRoPSIwLjI3NzgyNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxlbGxpcHNlIGN4PSIxLjY2NTMiIGN5PSI2LjMxMzc5IiByeD0iMC45MTI1NTEiIHJ5PSIwLjkxMTUwNCIgZmlsbD0iIzMzQjU2OCIvPgo8ZWxsaXBzZSBjeD0iMTMwLjY3NCIgY3k9IjkyLjkxNDciIHJ4PSIxLjQ3NDY1IiByeT0iMS40NzI5NiIgZmlsbD0iIzMzQjU2OCIvPgo8ZWxsaXBzZSBjeD0iNzEuNTIxMSIgY3k9IjIuODUyOTIiIHJ4PSIyLjU1MjE0IiByeT0iMi41NDkyMSIgZmlsbD0iIzMzQjU2OCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfOTU2IiB4MT0iMTEwLjkwOSIgeTE9IjAuMzAzNzExIiB4Mj0iMTEwLjkwOSIgeTI9IjM2LjI5OTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjE4NzUiIHN0b3AtY29sb3I9IiNENEY5MzgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzJEODc1IiBzdG9wLW9wYWNpdHk9IjAuOTYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzFfOTU2IiB4MT0iNTMuMjIzNyIgeTE9IjIxLjY1MzUiIHgyPSI1My4yMjM3IiB5Mj0iODEuOTMzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMTg3NSIgc3RvcC1jb2xvcj0iI0Q0RjkzOCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMkQ4NzUiIHN0b3Atb3BhY2l0eT0iMC45NiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/images/shareimg.png":
/*!*********************************!*\
  !*** ./src/images/shareimg.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABbCAYAAABwMKucAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABWoSURBVHgB7V19cFTXdT/3vrdCgIQlISwhG7HIEL48RqpNnbR2Ue2kTlN3oFPb0047jdOPtNPOtHictP9kRiZxMuNMOsYdezrppDUkndS1W9tgm7p1xwiwO3ZiG0FiMDEGQWME4kNCgLTS7t6bc869d/dptd9fFkg/5rFv3773dnm/d875nXPufQiYAWjY3BmeAOgRAMMhgC3DW/uG4SqCDzMASNDjSNAmWh8X0I8vT8BVBAkzAEhQv1vHf/BVZUUzCvM3dz4476HOjTCLWcxiFrMoF7461NOZz34NL2xqaH7u3u5c+wmYRclgUqTcAIoVJBHUwGLFg0e+vaBne6bjkKDd+NItJlTX2T/Y1Zdpv1mSisDmoZ5wSMqNoDQSIoiYhsx76z4J+ncea9zSn/pJw799PhwK+RvP3vdy1pRglqQ8gKQ0YBK8SYNYJ5EUDRCGgqG3IVlb0pGVC7MkpQGR4qHbEiA24tINxoWVDHKBCtQT32ncsrXA42bhSJEgu/HtBly6oYLIJ16l7D8zkS7YQ5VQK+ZARI9Dvi5wxpCUDPbkvjQu1SMlFXNFLYzpCK/XiVG4zT/S9Vt1L2ZUd9dsgdUFe7wPN1Bc4WCv6BMNlcDH/Wfh/OmLcMunl2fdr1E28G9wJP36nP3Q7F+6Ltsx05qkn0Y+s1l4sEHG9EOr577Vn88xN7/2e913rO14OgQy7LZVgpbxSBSO9J1Acs7BqRPnoKY2BJu+eGfO49q8Fng/eoTXO2t+ppvkiMjl0KYtSft1d4OIjj9OV1j5QK5gSz7HnRkaCf/HmwfDnR03QFdHG5QTZC1MiiXGob5hHhNEr9lgrMhgjX8c1vkf5RVupi1JXaJ3+ODEp78khVgXjUFeKiiIvmMfw9FTZ4HIWtHWDMWArOX4B6eYlONHBvh9KuZYC8pFEGFtaCW8Mf42xqExWF/zAW7ReAuKnERNa3d3S81b26AEXI5MwBuHjjNhv3nrKqibOyfnMZmsJRM25kkQWVGHvxT6JnbDPbU/gkIwIzqzRNZzbx6E5YsXogu8YRJZ+VhLJty18VZobr0ur30/V7sBBuJn4K7a/WxJBuLqdneVwNGB87ysaVsEYnAsb2tJh/Xdq2FVZztbSKO8Dk4hARGr2FJBBN1Wsw7eGv+arhcjlhitBXKEDu/qdneVwvvHBiDy7mkoFkTQ+g2reH1IDfNykx+GBiSLrjgRdip+GpPWWvgNJOiOObfzvs3ypBhPSE0hlEKG8jCmGUlSKQgSFMRHsX5+JasyljO13FcDrTAOHybekyGZBCE7UTNiIEq5sBLdWzqCghhSF+HZ0Z3wWmTPlM+u9/8MPFHP64YgIfKxpFmS8sRCFAh3o1DIF0TSsdiJSdtqxQoI+09BjViMsUgD/5mNSeWBS1YLxbHYPpbdhLi+BMNqFzu3Vm8zTOgBcT7+DEQhd2ycJSkHHEGUtBaC1VhRWO0bR3VBPasHYjQ+c3LyOl/+EtToNhiD/VnPVVGSHh7q6fZAPo2/rB8NuxeXPX/fuKUXriJE6n04emEYuvJIWB3q5Bh0ho6iW7sDrecVMAQRREJ+0/oV9S6/SpbiOozxqT/d+SpC0t9hW0AhObjabRVnmCrRuGAfZ8sw/rBe4ekXRVztKaadXG0UUmKiRPWeOW8jQTEIiVYYjH2PtxsejOSmDMlssxvxumQiiFBWkkx7QD6CHYG/ybIbVhn1Jh2nMQMS/nZoC1uZAr0jDtC7tXHLtBwG7EpMh06egbvXLc9YYvrlmsNMFKm4y+o9jDkDARcnhOa71liSEQ1VzJO+MvT1zXhf9ECBzTQzqEM8KHmhjim6QwkvKqUOTEfXeOHyaMYSU2foQ1jineH1enEnXNEUawxB1oq0JcZakjWkSrcq/vD4w91tDQsw7ugwlAfd2JzrlsjUdHCNejyWdjuVl06eHYY17a3cErnJ+zmswzjkoMRlHdOnRZKCpBW5cpDhTeRsd5VM0qvvHOlpqp8Xbm2sg/ZFTbC4sR7KiEmuEUnro3Fs08U1TsTiiXj1zGfPQlQJkMhIrcTKghoQKpAEUU4k7LtgbqTzqAyVxd1duDTKy6GTg1Dje4CkIWGN0IqELazPXxXlARqM2DndXCPFK/LbE4BaFi97SC0QV/SHGJekpsKCEElSrBUlUBV3lwq6u04PXeKFUFdbw2S1X98IC+vm5dXTKQBTXONPTwzA4Z8PwuWxcagmIkoiRWjvePd4YlRHtQRylJJIYv2mwZPo6uw6u708y0IVT2bpLnMtAgJZWSVd481LW4EWtm4M8icGh/CGuYw3TwwqiQktucbmoWlE44O47lG0wRxIa7IufIWYMqTRNvcZ7aRynLvqFYd0rnH54mZ+LadrpPO5cxNOD43ACQz09N0DA0NQbowrjy4+eIouvkJigFwdvgq2HJkgzGlvrT08DncVUmWn6RMtC2VzjWRlNX75fl5r4wJe3Pd+vHwQjh0xHdlLw6NQKtiStLESKTzj3vAvSZvIYogw/pzJY0KZOI5m2evcfusLm8LxuNoQvTSyY/hLvSWpJbqopbiVVNdIhDXVzy27ayQLXrZqMS+Ec6cv4jKMbfQB7tQW0kJ3mFCSwz+eWgtbUkDXhtaDalwp4UhBLcFWRuGJqGEyvXjWc/tI0Eat1Vavbh4Nt90BRYLU3O0r2+H9k6c5Ky8HnJU518hWht9TbtdI4xRoWdVpKtZkXWRl5wcuwpmx/KwsYmNSnOIOWw6wZVHMIUlBgsETmgmjbJZJMy4RDxJZjcOPenK7F9P95+/fVTRBpNjuXLuML+Ttn2qHtZjg7ef8objxA+lALoqSR1r4OyvoGtvCzby473XxjG6YTKpxQvlIgsKUjl2cEQgcf5R1cUgMxyXpYhRQ7EKX+PV76147kO33lDwW/Madm3b/9vq13XTRUnF04BySdaoqcrhSrjEVQdXobhjClrv8mNA21ggIiAUezcCCgSyNiDGWxJa1474Fr/5uru8s+fb7wq2rG9IRRCBlRUs1yKqWa6TzrWmIwF8tuwCbX8fvHTVBf5zyJLIYyoPQqxlCSGpjzCF7IUHBpJmqBO7THx8e+5N8vrMkkjCBfATymGBFRJGyKrcLzIRKuUZqP6wPHYLl/sd2S1Pis6j2sFanWSwIMHLcxhxBeZItebPC8zwYQj1x958uy0+oFU0SNvRIaPTkuz9dqDvXLINQRMHhCxegmihVNRI5a7jTehx7RKRep0aJiLEkLgsJE4+scDBEeSy1jYWhunj4r5t3nYA8URRJgaZeQfhR72E4ePgkhFY0wSeJQlwjtR6oR1QvI3bwSHo4S+JKgjQlbp/dmk1cOTZJjE3xbzzcvOP7UAAKJokIwvtkNxTYNzrw1lF4Z88H4F9f1oJrycjkGjtvnA/3txzXLXJImFE9tuGQQWtRTDIlHzQbxW4PYkwMWpGmBJfXX/pay/PfgAJRMEnoUR8vtHd0DJPEN//7J3A1wLlGijstiy+LYIshGyiZNaoO4451axh3tORCKyk9faIWxh+GIlAQSSQU8EdvKuQYyuZ373gXrlYECZrUE0pxfOPCU1xFYBnuaSMgbKlIwrCC+OcebXs+7zgURN4kfXWo50EoQCgQRrAm9l///lZRZZbpBDtgZBJhZj1J1AS3Kmx+RBswifWokUTSW8W/8g83/rAoggh5kWSFwuNQAIigHdv3FVW8JIlM6osqGdWQ7LmgtKlSB63IrCdJMwVWU+KWpi2uJFbEsQrx6Hfbf/ADKAE5SSpGKBRDUF3tHMxjGmCpVVmkugg02KNa+VUqnAEJO6hHcJRJ31YY1+ziDFGk5sxQhj3fb//nR6FE5CSpUKFAro1cXEaC4kkXQSqKSCFyiKR0cPnVisULYd+h/qp2XCeN09aTY1IqothPErawSoXwGKj+mIp9GcqArCQVIxRef/FdniqfDjRUd/XN7XDj2sVcgXDWkg9o//t/9Zaq1gMJZE2KWw8iK0nj1N4z/SKqzw372r/n+Y7vFh2HgshIUjFCYd+rB3lKYxA3cEV5EdywNFlZLgXVKjFpMxLBujsziSibFOc8SZjxDJjMPrqz46myEERIS1IxQoGqCT95+yO2lmUrFzMhy1a1FTzQPR84F0jx6u33j8DJoQiUGwOjHl54H8s5pNIMUyLLEyHGOSOiC6q+ubvjqaegjJhCUjFCgWZrU5Sk2QflsJZsoCG8rd4FaJHnoH3uIHSEPXhsqPytCWzN6TGMM54wo4A8Tb0f0yOSPJ5xMmFR7CdJEd+7b+UT34IyYwpJtiYXhgJALu2GCpFDxc12rJ81yhFYiq/zxGhKvlKZYRpxlACjqNE8qloLxXVtIgkJ074w2z7bNnHXvx6tJY/TiWXXE8IP/TlUAFP+hc+9caD77nUrWAZ/EqgRUWhCQtq9QWhBi2kSI5MCtuDCvwYNOUfnlgQSoWNxnyvbHsTJ5WlLkiVLwh91jh7f2vW/XQuf/cKDIiRff/emx05CBTCFJKpd7Xj7/bQD0oNo81p5hnWpMKRcglZ5Ad3YeXRjpo2huVgpwU4MSWxz3Di1VSmQJY1pU+rxqcCjtYtPTBZZUyRiLt/5B3ZtOw+7oFLI6Ctc/yXTM3roKVP0DAOaHl8oiIwmcQmW+Kf5tUaYEUbOPoT9Q4lj0oLElCc55VP4LBb0zaN23IKHHW9fahuhFF400xr3vMoOuHTI6dAzTaAicuj5BPSsnFwg99UqzyMpg+y+Qmg9k/IOYWcqQtJCiBShA7mkdXGVJCYI+iYWDjwWlepvmsnxSUiYMQv4vjrDFvP6lkwTqGjSbjqS6EF7FFMaObacSViKg5unk7jgAYJcMTNoNcECp3NxmarR5QK5u4gOcdvB00aGM1naEEXjF6jLXA0UdCsEJ1DdtWIt3NywCh6YtxHemehD1XUWFsmT2MkMwVxcj8NlnnEd11E7r80VwkTWmQTaESaSdbJgBTrVkiplWUTSlbiHVi+N9HZE8chUkuJKxL0aqAaKsteWWBv8Rd0XeZ2emdMV6oAhvQsuxY/h3XcYl8uJfdltBQhyW91nWk+1BLYYrXjWwaTtKfsbK6qMJWEqoiPKo1vMSHDOl9CqJA/KZ0saHZtGlrRk3vXQPr+F139l0c383l2aCT0A/dG/nPI8giApSqm0M6XSEZTE1ANS96+ocMCvQuFgZLdGckw8otY4EsXxiQaWQDWQk6QFofnw/6ODvBDePJtsg3/vM38Mv9Zaw0QRgkRkWi8EiVCU8vyDhEUZe4RKQBkJzsqOJoNh0ZQvFsUndHXa5y/Ov0BcCnI+tmYkeiXjZ8cj/0IPNNLOpTmk3vGTXFQi5jhjTDUnVg06OUPb1jaDZ9DKHIN/f35JZBvml924x2bc0gtlQtyquzHta6o8jKFVjaL7Q+IgokJsZeWvGKZHSRoyDpfwnro85VZOtZx0VpUUDyIp3twewsQkOwk4dSpjYOY2y73wuQde2oObaHmi4enuBq+ufgM2GDbh/jRws6in43MyS3kSxyQJTjzgFs2tCIg/+Y8ltMQLQclC/4p+j25tMVUcGEzd5lyXnTpv/pp04Z21TWq6iUTfIOu0ejt9Z4dd+D/t8DzZLaS3USvVib8lDHlA4fegJfFELyRFcKUB13yp9kBMf/mHHdurQhChNEvSJJMXiJg+DTKQ8zhPlrSayREleA43nENACikpLg60ex6CaWTrZFDKiuHff7UfX7bZBRY9u6kTZGwDHk3NzO5Mx1FMooqDNJakQ6D2+jL2zWeX/tM+KAH0lOZaGMHvlv2rxTu9+RxTEkkTmNoNoeymahbPx3EOC+wlVorrb7zNWpSww3ATzwhJFOP4wqdIgclWNxl2W4EPgzv7AD/JnhZ2jf78+nXkGvGHdkPANTJJcU+j5VyUSn3rf1Y++SSUAXNhdD8KjjCtH9K3PbRGvLM11zElkUQzrDGXgOQ9rZNEUc9FywBxZnQngJ2CKHRivI0Qboa2YczOzrYEcz2Ipoq4Lql9bIUwAxdLUMHWNbp4lnCNeO4NeNpbokL+Z8zzn8Lq9kUoA36m13eqwHgRaf7zkkqTRKonkVCKxEW3MYUJoplv0nSipSkcKPdUS5kQ0TppEEHy7EmFIcoQKey6+4emsOSml569b+d2KBCprvEUlBefEj/uO6LX92n+b3/0cBx0Xr+xNJLw0kYoY9Cuem0utpME7oEsUhk/Juz8HacUhH2ES/K95Ug4QmnKiHmwi326i3ZEufNIOfmxL5FIBLxQdfKXYrBS/LiLLOoKxPq7RF9lp74QJpTQEdI/ZvpNqutylqBMVwhEiiUIs65FwHLMG5Z4tAcljuw3EwQmjzfmKlLmBFtr6IdpDLKoQvYv1d2JMaqCWo8nwMltc1GlIUilam0bm6ylJazMuUreyvso4xAdORyzgqSKgPC4hlESSTGsZKElaSp0JS3JkcWXWCddFbkwI+9EwBXai0+Tfq0StyNzDPHuEX78BdKamfOmZsKwuuZZKtHdeSJCDWZLkgv+WIBUeEHjVMhm0aDc3c8xxrhEV762xTlrSdrFpMT+9pwioOyMJqc+BhlY7lzpakeJeRLGJEz4uM1t/wMpLOXHMY4o+16bmGEEgr3w5i1FHavkEi7MEuWyWufK2OlZSSjN0+IMa4rbhLOWlA02T8JqiylUo9Ki54Io9IOcDElI1Ism5UvCBiehrHnYpyo6aZ6INTTfR1jhoAOiAsAdp6WYtaSsMCRJfgoIUYGlxzg6OeOOFDhVlqwwWFVHx0rLiDUwLVzMIR9pmLVWldzX5lbmOLObnlpFv/ZQMklUwsegg5EJ4s712Hmj1i1ZEWCfCpKMM+ZxYi5/gkRCK817VzkSk0hj4jA1uii02imEPKCj0Z1wjaPkikOENBvQ2Cbjkugamrs96Z6k7dsZqwLDmraJrx3JJd1H1g2COSGe3adJ20MoTw6gIHnJE7Cnp+WZgzCDkI6kR/BKbcaLmHMseJRG1GDtDlwlwQgBZe94Lq45LSCtuzOWlYgrSasyryQMiKWLSMYBPH4vMrn3icXb98IMRtqoawqNXg86mQezHbwy3BRtXTgvngjk5vluIlEhsFfecGEKd4GKRFJqG92wF98eFDK+M35eHNzWtW1aPh/8k0BWaURk+b7/AmTobna0N0cXNdfFEslnoDhqTp6Q0mxHUiQLqrgcxJe9PsReGr0YP/jiLCkZkZd+pQHpuGtPaldzSfv1E41N9fFkmSY5IMEQx2HJWIvUJ7Av8zK+Hhi5OOfl3q6ts6TkiYKSjObn7u0BilkWLUtaJq5rui6W6MRCwsVRjjQsVfwVEZJ7IRLb9/qa8s18m2koOBMMxquFNy6eqGtsiLHSlnoYyXoZpd0BLxp55f9mSSkbik7XiayWcPu35zc39GI2+8Z7q74zo2RxNfELmZYSqstk/pkAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/images/tradeimg.png":
/*!*********************************!*\
  !*** ./src/images/tradeimg.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/tradeimg-ab18f078e799e8d5114ea3e330e6ca6e.png");

/***/ }),

/***/ "./src/images/traderimg.png":
/*!**********************************!*\
  !*** ./src/images/traderimg.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/traderimg-6e25b2d24929568e31ab9917c590dda1.png");

/***/ }),

/***/ "./src/images/twitterlogo.png":
/*!************************************!*\
  !*** ./src/images/twitterlogo.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEkSURBVHgBtVWBsQExEN2YX4AS8iv4vwQd0AEd0AEqMCowKqCDowI6CBXQwbMrwTrhEsebeXOTy27eZrPZENUEgKaQvgFeeMR0uGHD7Kr5FrOjHXrMWYZAgedYBHGh1U4LZdCsEBigGi7Y9a/ryS5KBt0XIhuk4cD8147DiFEBndObbaqAvfiY4ChbcsxYqo7MFXPL3DNTzm5njPktR3euBNxXSx0Uev2f8JUz6NHncNSDRvjO6bNYRv8ifvjvwj6Vh69th3p4KIxGafxHpXy+gfHLWfgKq4MJpQC+jznkw1Eu2KmdISZ2NmdxeR8kbak9qkBFUzUhArmMNlCaWsojJAUy4vYxpRSIEPw9cYmRD5HxGpqYIPlStmpHEvWOuebIs0v8BLTSNSc9JwgGAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/images/unlockimg.png":
/*!**********************************!*\
  !*** ./src/images/unlockimg.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/unlockimg-6c1ca8fdfae6b8f70c3fed1e8cc33562.png");

/***/ }),

/***/ "./src/images/vector_image.png":
/*!*************************************!*\
  !*** ./src/images/vector_image.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/vector_image-3bd4e17102a8ecbd6d04ec6a73c18721.png");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map