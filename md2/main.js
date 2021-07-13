(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hnaoufal/Docs/IdeaProjects/md2-blog/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




const _c0 = ["image2"];
const _c1 = ["shadowOverlay"];
class AppComponent {
    constructor() {
        this.title = 'md2-blog';
        this.imageSLider = 20;
        this.shadowImageSrc = 'assets/schatten1.jpeg';
        this.shadowImageNum = 1;
        this.portraitNum = '0';
    }
    handleSliderValue($event) {
        console.log($event);
        this.image2.nativeElement.style.width = $event + '%';
    }
    handleShadowImage(num) {
        this.shadowImageNum = num;
        this.shadowOverlay.nativeElement.classList.add('animate');
        setTimeout(() => {
            this.shadowOverlay.nativeElement.classList.remove('animate');
        }, 1000);
        this.shadowImageSrc = `assets/schatten${num}.jpeg`;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.image2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.shadowOverlay = _t.first);
    } }, decls: 370, vars: 31, consts: [["aria-label", "main navigation", "role", "navigation", 1, "navbar"], [1, "navbar-brand"], ["href", "/md2/", 1, "navbar-item"], ["aria-expanded", "false", "aria-label", "menu", "data-target", "navbarBasicExample", "role", "button", 1, "navbar-burger"], ["aria-hidden", "true"], ["id", "navbarBasicExample", 1, "navbar-menu"], [1, "navbar-start"], [1, "navbar-item"], [1, "navbar-end"], [1, "buttons"], [1, "icon"], [1, "fa-icon", "fa", "fa-instagram"], [1, "fa-icon", "fa", "fa-github"], [1, "fa-icon", "fa", "fa-twitter"], [1, "hero", "is-fullheight", "green", "animate__animated", "animate__fadeIn"], [1, "hero-body"], [1, "hero-picture-wrapper"], [1, "hero-picture"], ["alt", "corona", "src", "assets/tunnel1.jpeg", 1, "hero-img"], [1, "hero-text"], ["src", "assets/coronaFont.png"], [1, "hero-black"], [1, "section"], [1, "container"], [1, "columns"], [1, "column"], [1, "content"], ["href", "https://www.beuth-hochschule.de/people/detail/753"], ["href", "#day1"], ["href", "#day2"], ["href", "#day3"], ["href", "#day4"], ["href", "#day5"], ["href", "#day6"], ["href", "#day7"], ["href", "#day8"], ["href", "#day9"], ["href", "#day10"], ["href", "#day11"], ["href", "assets/md2.pdf", "download", "md2abgabe"], [1, "fa", "fa-download"], [1, "column", "beuth-logo"], ["src", "assets/beuth.png"], [1, "solid"], ["id", "day1", 1, "section"], [1, "title"], [1, "button", "is-success", "is-outlined"], [1, "subtitle"], ["cellWidth", "100%", "height", "600", "loop", "true"], [1, "carousel-cell"], [1, "column", "is-5", "is-flex", "text-column-slider"], [1, "is-justify-items-center", "is-align-items-center", "is-flex"], ["src", "assets/tunnel1.jpeg"], ["src", "assets/tunnel2.jpeg"], ["src", "assets/tunnel3.jpeg"], ["id", "day2", 1, "section"], [1, "card"], [1, "card-image"], [1, "image", "is-4by3"], ["alt", "Placeholder image", "src", "assets/licht1.jpeg"], [1, "card-overlay", "animate__animated", "animate__fadeInUp", "animate__faster"], ["alt", "Placeholder image", "src", "assets/licht2.jpeg"], [1, "card-overlay", "animate__animated", "animate__fadeInUp", "animate__slower"], ["id", "day3", 1, "section"], [1, "container", "max-1k"], [1, "box", "box-wrapper"], ["max", "96", "min", "0", "step", "1", "type", "range", "value", "20", 1, "slider", "is-fullwidth", 3, "ngModel", "ngModelChange"], [1, "image2"], ["image2", ""], ["alt", "scharf1", "height", "724", "src", "assets/scharf1.jpeg"], ["id", "day4", 1, "section"], [1, "swr", "column", "isflex", "is-align-self-center", "is-justify-content-center"], [1, "shadow-main-img", 3, "src"], ["shattenImg", ""], [1, "shadowOverlay"], ["shadowOverlay", ""], [1, "column", "shadow-img", 3, "click"], ["src", "assets/schatten1.jpeg"], ["src", "assets/schatten2.jpeg"], ["src", "assets/schatten3.jpeg"], ["src", "assets/schatten4.jpeg"], ["src", "assets/schatten5.jpeg"], ["src", "assets/schatten6.jpeg"], ["src", "assets/schatten7.jpeg"], ["src", "assets/schatten8.jpeg"], ["src", "assets/schatten9.jpeg"], ["id", "day5", 1, "section"], [1, "contrast-wrapper", "is-align-items-center", "is-justify-content-flex-end", "is-flex"], ["src", "assets/starkefarben1.jpeg", "width", "60%"], [1, "contrast-overlay"], ["data-content", "VS", 1, "is-divider-vertical"], [1, "contrast-wrapper", "is-align-items-center", "is-justify-content-flex-start", "is-flex"], ["src", "assets/gedaempft1.jpeg", "width", "60%"], [1, "is-divider"], ["src", "assets/kontrast1.jpeg", "width", "60%"], ["src", "assets/toninton1.jpeg", "width", "60%"], ["src", "assets/kontrast_starke.jpeg", "width", "60%"], ["src", "assets/toninton2.jpeg", "width", "60%"], ["id", "day6", 1, "section"], [1, "column", "is-10"], [1, "image3"], ["alt", "portrait", "height", "724", 3, "src"], [1, "column", "is-flex", "is-align-items-center"], [1, "control", "is-flex", "is-flex-direction-column"], [1, "radio", "mb-2", "ml-0"], ["name", "rsvp", "type", "radio", 3, "value", "ngModel", "ngModelChange"], ["id", "day7", 1, "section"], [1, "flip-card"], [1, "flip-card-inner"], [1, "flip-card-front"], [1, "flip-card-back"], ["src", "assets/freisteller1.jpeg", "width", "100%"], ["height", "100%", "src", "assets/freisteller2.jpeg", "width", "auto"], ["src", "assets/freisteller3.jpeg", "width", "100%"], ["id", "day8", 1, "section"], [1, "mt-6"], ["controls", "", "id", "audio_with_controls", "src", "assets/acoustic.mp3", "type", "audio/mp3"], [1, "column", "has-text-centered"], ["src", "assets/cdcover.jpg", "width", "80%"], ["id", "day9", 1, "section"], ["autoplay", "", "cellWidth", "100%", "height", "600", "loop", ""], ["src", "assets/moodboard.jpg"], ["src", "assets/webpage.jpg"], ["src", "assets/Visitenkarte_Biotec.png"], ["src", "assets/flyer1.png"], ["src", "assets/VisitenkarteBeispiel.png"], ["id", "day10", 1, "section"], ["controls", "", "poster", "assets/biotecThumb.png", "width", "100%"], ["src", "assets/zahnrad.mp4", "type", "video/mp4"], ["id", "day10.2", 1, "section"], ["src", "assets/biotec.gif", "alt", "gif", "width", "100%"], ["id", "day11", 1, "section"], ["controls", "", "poster", "assets/infothumb1.png", "width", "100%"], ["src", "assets/infoAnimation.mp4", "type", "video/mp4"], [1, "footer"], [1, "content", "has-text-centered"], ["href", "https://naoufal.com"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hnaoufal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Das ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Tagebuch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Hallo und Wilkommen auf meinem Corona-Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Ich werde euch hier ein wenig \u00FCber meine Zeit w\u00E4hrend Corona erz\u00E4hlen und wie ich das mit Mediendesign II verbunden hab.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Dieses Projekt wurde betreut von ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Prof. Dipl.-Des. Antje Umst\u00E4tter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Jede Section beschreibt ein Tag. Ihr habt eine kleine Story und einige Interaktionen. Wenn ihr auf \"Technik\" klickt, werdet ihr auf eine extra Seite weitergeleitet, wo ihr lesen k\u00F6nnt, wie es umgesetzt wird. Der Inhalt ist folgendermasen aufgebaut:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Day 1 - Brennweite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Day 2 - Licht in Bewegung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Day 3 - Tiefensch\u00E4rfe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Day 4 - Objekt mit Licht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Day 5 - Farbkontraste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Day 6 - Portrait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Day 7 - Freisteller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Day 8 - CD Cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Day 9 - Corporate Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Day 10 - Infografik Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Day 11 - Typograpfik Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Download der Seite in PDF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "hr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "section", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Day 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Brennweite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Joggen im Park. Was man so alles sieht/assoziert wenn man seine Gedanken auf das Thema \"Corona\" fokussiert (oder vielleicht sehen will? \uD83D\uDE04). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "carousel", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Das Foto erinnert stark an Corona, die obere Haelfte sieht hell und schoen aus. Die andere Helfte, welches den Untergrund bildet, ist trist und dunkel. Corona ist schleichend und man sieht es nicht an der Oberflaeche, aber es ist dennoch da und gefaehrlich...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Egal wie dunkel es aussieht, es sind meist einfache Dinge, die uns Hoffnung geben... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " ...und etwas Licht ins Dunkle bringen. Die Maske als Symbol f\u00FCr den Kampf Corona ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "hr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "section", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Day 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Licht in Bewegung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Ein Abend mal ganz anders verbracht... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "figure", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Kurze Belichtungszeit:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Symbolisiert in dem Bild der Anfang der Krise ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "figure", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Lange Belichtungszeit: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Soo lange f\u00FChlt sich auch Corona an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "hr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "section", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Day 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Tiefensch\u00E4rfe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Na k\u00F6nnt ihr erraten was sich da im Hintergrund verbirgt? Kleiner Tip musste ich fast t\u00E4glich machen. Nutzt den Slider und findet es heraus... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_155_listener($event) { return ctx.handleSliderValue($event); })("ngModelChange", function AppComponent_Template_input_ngModelChange_155_listener($event) { return ctx.imageSLider = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "div", 67, 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "hr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "section", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " Day 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Objekte mit Licht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Licht und Schatten auf eine Pusteblume starke \u00C4hnlichkeit mit Corona, oder? \uD83E\uDDA0 \uD83E\uDDA0 \uD83E\uDDA0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "img", 72, 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "div", 74, 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_176_listener() { return ctx.handleShadowImage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_178_listener() { return ctx.handleShadowImage(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_180_listener() { return ctx.handleShadowImage(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_183_listener() { return ctx.handleShadowImage(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_185_listener() { return ctx.handleShadowImage(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_187_listener() { return ctx.handleShadowImage(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_190_listener() { return ctx.handleShadowImage(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_192_listener() { return ctx.handleShadowImage(8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_194_listener() { return ctx.handleShadowImage(9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "hr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "section", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " Day 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Farbkontraste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " Kollektion von Farben und Themen. Findet ihr den Zusammenhang zu Corona? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Starke Farben");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Ged\u00E4mpfte Farben");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Kontrast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "img", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Ton in Ton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Starke Farben/Kontrast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Ton in Ton / Ged\u00E4mpft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "hr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "section", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Day 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " Einigen Familienmitglieder scheint die Krise nicht so stark anzuhaben... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "label", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "input", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_257_listener($event) { return ctx.portraitNum = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " 1-Kanal (Grayscale-1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "label", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "input", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_260_listener($event) { return ctx.portraitNum = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " 86% rot / 86% blau ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "label", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "input", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_263_listener($event) { return ctx.portraitNum = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " 122% rot / 83% blau ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "label", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "input", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_266_listener($event) { return ctx.portraitNum = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, " 143% gr\u00FCn / 100% rot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "label", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "input", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_269_listener($event) { return ctx.portraitNum = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " 162% blau / 100% rot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "hr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "section", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Day 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " Auch wenn wir mit dem Blog fast durch sind, mit Corona sind wir noch lange nicht durch. Wo verbirgt es sich denn schon wieder? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "img", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "img", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, " ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "hr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "section", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Day 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " Musik hat mich durch die anstregende Zeit begleitet \uD83C\uDFB8 \uD83E\uDD18 \uD83C\uDFBC \uD83C\uDFB5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, " Um die Stimmung aufzuhellen gibt es hier eine Audio-Album erstellt von den Naoufal-Brothers, g\u00F6nnt euch momente der Enstpannung... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "audio", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, " Ihr Browser kann dieses Tondokument nicht wiedergeben. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "hr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "section", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Day 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, " So stell ich mir den Corporate Design von BioTEC vor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "carousel", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "img", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "img", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "img", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "img", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "hr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "section", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, " Day 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Typo/Logo Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, " So stell ich mir BioTEC in 2050 vor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "video", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "source", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "hr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "section", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, " Day 10.2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Typo Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, " Eine einfache Typo-Animation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "hr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "section", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, " Day 11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Info Grafik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, " Infografik zu den Erfolgen der Firma + Audio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "video", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "source", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "footer", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Corona-Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "a", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Hicham Naoufal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, " MEDIENDESIGN 2 Sammlung der Abgaben zum Thema Corona-Blog im SS 2021. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.imageSLider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.shadowImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", 1 === ctx.shadowImageNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", 2 === ctx.shadowImageNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", 3 === ctx.shadowImageNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", 4 === ctx.shadowImageNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", 5 === ctx.shadowImageNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", 6 === ctx.shadowImageNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", 7 === ctx.shadowImageNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", 8 === ctx.shadowImageNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", 9 === ctx.shadowImageNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/grau", ctx.portraitNum, ".jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "0")("ngModel", ctx.portraitNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "86r86b")("ngModel", ctx.portraitNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "122r83b")("ngModel", ctx.portraitNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "143g100r")("ngModel", ctx.portraitNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "162b100r")("ngModel", ctx.portraitNum);
    } }, directives: [angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"]], styles: [".fa-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.hero-body[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: center;\n  z-index: 1;\n}\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.hero.green[_ngcontent-%COMP%] {\n  background-color: #deecb4a3;\n}\n\n.hero-picture[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  position: relative;\n}\n\n.hero-black[_ngcontent-%COMP%] {\n  background-color: #1a1a18;\n  position: absolute;\n  bottom: 0;\n  height: 50%;\n  width: 100%;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  font-size: 5.5rem;\n  color: #eaf4cf;\n  margin: 0 15px;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  top: calc(50% - 4rem);\n}\n\n.hero-img[_ngcontent-%COMP%] {\n  z-index: -2 !important;\n}\n\n.hero-text[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background: darkgray;\n  opacity: .7;\n}\n\n.corona-text[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.beuth-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n}\n\n.text-column-slider[_ngcontent-%COMP%] {\n  padding-left: 100px;\n}\n\nhr.solid[_ngcontent-%COMP%] {\n  border-top: 2px solid #bbb;\n  width: 100%;\n}\n\n.container.max-1k[_ngcontent-%COMP%] {\n  max-width: 1024px;\n  position: relative;\n}\n\n.image2[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 656px;\n  z-index: 1;\n  background-image: url('scharf2.jpeg');\n  background-size: cover;\n  border-right: 3px solid cornflowerblue;\n  width: 20%;\n}\n\n.image3[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 656px;\n  z-index: 1;\n  background-image: url('grau0.jpeg');\n  background-size: cover;\n  border-right: 1px solid red;\n  width: 48.5%;\n}\n\n.image1[_ngcontent-%COMP%] {\n  height: 724px;\n}\n\n.box-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.shadow-img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all .5s ease-in-out;\n}\n\n.swr[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.shadowOverlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: lightgray;\n  z-index: 3;\n  opacity: 0;\n}\n\n.shadowOverlay.animate[_ngcontent-%COMP%] {\n  animation-name: opacityFade;\n  animation-duration: 1s;\n  animation-timing-function: ease;\n}\n\n@keyframes opacityFade {\n  from {opacity: 0.7;}\n  to {opacity: 0;}\n}\n\n.shadow-img[_ngcontent-%COMP%]:hover {\n  \n}\n\n.shadow-img.is-active[_ngcontent-%COMP%] {\n  border: 2px solid #49c78d;\n}\n\n.contrast-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.contrast-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #49c78d;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  width: 60%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  color: white;\n}\n\n.contrast-overlay[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: all .5s ease-in-out;\n}\n\n\n\n.flip-card[_ngcontent-%COMP%] {\n  background-color: transparent;\n  \n  \n  width: 100%;\n  height: 367px;\n  border: 1px solid #f1f1f1;\n  perspective: 1000px; \n}\n\n\n\n.flip-card-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n\n\n\n.flip-card[_ngcontent-%COMP%]:hover   .flip-card-inner[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n\n\n\n.flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden; \n  backface-visibility: hidden;\n}\n\n\n\n.flip-card-front[_ngcontent-%COMP%] {\n  background-color: #49c78d;\n  color: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 4rem;\n  color: white;\n}\n\n\n\n.flip-card-back[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  color: white;\n  transform: rotateY(180deg);\n}\n\n.card-overlay[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  background-color: whitesmoke;\n  padding: 5px;\n  position: absolute;\n  height: 100px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  display: none;\n}\n\n.card[_ngcontent-%COMP%]:hover   .card-overlay[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  display: block;\n}\n\n.card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n}\n\n.card-bg[_ngcontent-%COMP%] {\n  background-color: lightgray;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YscUNBQTRDO0VBQzVDLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsbUNBQTBDO0VBQzFDLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxRQUFRO0VBQ1IsT0FBTztFQUNQLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxNQUFNLFlBQVksQ0FBQztFQUNuQixJQUFJLFVBQVUsQ0FBQztBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLE1BQU07RUFDTixTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLCtCQUErQjtBQUNqQzs7QUFFQSxvT0FBb087O0FBQ3BPO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUUsZ0RBQWdEO0FBQ3ZFOztBQUVBLGlFQUFpRTs7QUFDakU7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM5Qjs7QUFFQSw4RUFBOEU7O0FBQzlFO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLHFDQUFxQzs7QUFDckM7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQ0FBbUMsRUFBRSxXQUFXO0VBQ2hELDJCQUEyQjtBQUM3Qjs7QUFFQSx3REFBd0Q7O0FBQ3hEO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBLHdCQUF3Qjs7QUFDeEI7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2QiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uaGVyby1ib2R5IHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTtcbn1cblxuLmhlcm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZXJvLmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZWNiNGEzO1xufVxuXG4uaGVyby1waWN0dXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVyby1ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMTg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZXJvLXRleHQge1xuICBmb250LXNpemU6IDUuNXJlbTtcbiAgY29sb3I6ICNlYWY0Y2Y7XG4gIG1hcmdpbjogMCAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogY2FsYyg1MCUgLSA0cmVtKTtcbn1cblxuLmhlcm8taW1nIHtcbiAgei1pbmRleDogLTIgIWltcG9ydGFudDtcbn1cblxuLmhlcm8tdGV4dDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGRhcmtncmF5O1xuICBvcGFjaXR5OiAuNztcbn1cblxuLmNvcm9uYS10ZXh0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYmV1dGgtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXh0LWNvbHVtbi1zbGlkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xufVxuXG5oci5zb2xpZCB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjYmJiO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci5tYXgtMWsge1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW1hZ2UyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDY1NnB4O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvc2NoYXJmMi5qcGVnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmltYWdlMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA2NTZweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2dyYXUwLmpwZWdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJlZDtcbiAgd2lkdGg6IDQ4LjUlO1xufVxuXG4uaW1hZ2UxIHtcbiAgaGVpZ2h0OiA3MjRweDtcbn1cblxuLmJveC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2hhZG93LWltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zd3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaGFkb3dPdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgei1pbmRleDogMztcbiAgb3BhY2l0eTogMDtcbn1cblxuLnNoYWRvd092ZXJsYXkuYW5pbWF0ZSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5RmFkZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbn1cblxuQGtleWZyYW1lcyBvcGFjaXR5RmFkZSB7XG4gIGZyb20ge29wYWNpdHk6IDAuNzt9XG4gIHRvIHtvcGFjaXR5OiAwO31cbn1cblxuLnNoYWRvdy1pbWc6aG92ZXIge1xuICAvKmJvcmRlcjogMnB4IHNvbGlkICM0OWM3OGQ7Ki9cbn1cblxuLnNoYWRvdy1pbWcuaXMtYWN0aXZlIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzQ5Yzc4ZDtcbn1cblxuLmNvbnRyYXN0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250cmFzdC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDljNzhkO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDYwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250cmFzdC1vdmVybGF5OmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcbn1cblxuLyogVGhlIGZsaXAgY2FyZCBjb250YWluZXIgLSBzZXQgdGhlIHdpZHRoIGFuZCBoZWlnaHQgdG8gd2hhdGV2ZXIgeW91IHdhbnQuIFdlIGhhdmUgYWRkZWQgdGhlIGJvcmRlciBwcm9wZXJ0eSB0byBkZW1vbnN0cmF0ZSB0aGF0IHRoZSBmbGlwIGl0c2VsZiBnb2VzIG91dCBvZiB0aGUgYm94IG9uIGhvdmVyIChyZW1vdmUgcGVyc3BlY3RpdmUgaWYgeW91IGRvbid0IHdhbnQgdGhlIDNEIGVmZmVjdCAqL1xuLmZsaXAtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKndpZHRoOiAxMDAlOyovXG4gIC8qaGVpZ2h0OiAxMDAlOyovXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2N3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4OyAvKiBSZW1vdmUgdGhpcyBpZiB5b3UgZG9uJ3Qgd2FudCB0aGUgM0QgZWZmZWN0ICovXG59XG5cbi8qIFRoaXMgY29udGFpbmVyIGlzIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xuLmZsaXAtY2FyZC1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLyogRG8gYW4gaG9yaXpvbnRhbCBmbGlwIHdoZW4geW91IG1vdmUgdGhlIG1vdXNlIG92ZXIgdGhlIGZsaXAgYm94IGNvbnRhaW5lciAqL1xuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi8qIFBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXG4uZmxpcC1jYXJkLWZyb250LCAuZmxpcC1jYXJkLWJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyAvKiBTYWZhcmkgKi9cbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4vKiBTdHlsZSB0aGUgZnJvbnQgc2lkZSAoZmFsbGJhY2sgaWYgaW1hZ2UgaXMgbWlzc2luZykgKi9cbi5mbGlwLWNhcmQtZnJvbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDljNzhkO1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDRyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogU3R5bGUgdGhlIGJhY2sgc2lkZSAqL1xuLmZsaXAtY2FyZC1iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuXG4uY2FyZC1vdmVybGF5IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2FyZDpob3ZlciAuY2FyZC1vdmVybGF5IHtcbiAgb3BhY2l0eTogMC43O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIG9wYWNpdHk6IDAuNztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__["IvyCarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__["IvyCarouselModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map