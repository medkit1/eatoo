(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/UserService */ "./src/app/core/services/UserService.ts");




class AppComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this.title = 'CAETO';
        this.nick = null;
    }
    ngOnInit() {
        this.userService.user.subscribe(user => { var _a; return this.nick = (_a = user === null || user === void 0 ? void 0 : user.nick) === null || _a === void 0 ? void 0 : _a.toString(); });
        if (this.nick == null) {
            //   this.router.navigate(['dashboard']);
            this.router.navigate(['login']);
        }
        else {
            this.router.navigate(['dashboard']);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_services_UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard/dashboard.component */ "./src/app/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _login_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/about/about.component */ "./src/app/login/about/about.component.ts");
/* harmony import */ var _login_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/register/register.component */ "./src/app/login/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _dashboard_class_class_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/class/class.component */ "./src/app/dashboard/class/class.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _dashboard_tweet_tweet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/tweet/tweet.component */ "./src/app/dashboard/tweet/tweet.component.ts");
/* harmony import */ var _dashboard_addclass_addclass_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/addclass/addclass.component */ "./src/app/dashboard/addclass/addclass.component.ts");
/* harmony import */ var _dashboard_addlesson_addlesson_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/addlesson/addlesson.component */ "./src/app/dashboard/addlesson/addlesson.component.ts");
/* harmony import */ var _dashboard_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/adduser/adduser.component */ "./src/app/dashboard/adduser/adduser.component.ts");
/* harmony import */ var _dashboard_getusers_getusers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/getusers/getusers.component */ "./src/app/dashboard/getusers/getusers.component.ts");
/* harmony import */ var _errorm_errorm_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./errorm/errorm.component */ "./src/app/errorm/errorm.component.ts");






















const appRoutes = [
    { path: 'login', component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"] },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _core_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _login_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        _login_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _login_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _dashboard_class_class_component__WEBPACK_IMPORTED_MODULE_12__["ClassComponent"],
        _dashboard_tweet_tweet_component__WEBPACK_IMPORTED_MODULE_14__["TweetComponent"],
        _dashboard_addclass_addclass_component__WEBPACK_IMPORTED_MODULE_15__["AddclassComponent"],
        _dashboard_addlesson_addlesson_component__WEBPACK_IMPORTED_MODULE_16__["AddlessonComponent"],
        _dashboard_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_17__["AdduserComponent"],
        _dashboard_getusers_getusers_component__WEBPACK_IMPORTED_MODULE_18__["GetusersComponent"],
        _errorm_errorm_component__WEBPACK_IMPORTED_MODULE_19__["ErrormComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _core_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _login_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                    _login_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                    _login_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                    _dashboard_class_class_component__WEBPACK_IMPORTED_MODULE_12__["ClassComponent"],
                    _dashboard_tweet_tweet_component__WEBPACK_IMPORTED_MODULE_14__["TweetComponent"],
                    _dashboard_addclass_addclass_component__WEBPACK_IMPORTED_MODULE_15__["AddclassComponent"],
                    _dashboard_addlesson_addlesson_component__WEBPACK_IMPORTED_MODULE_16__["AddlessonComponent"],
                    _dashboard_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_17__["AdduserComponent"],
                    _dashboard_getusers_getusers_component__WEBPACK_IMPORTED_MODULE_18__["GetusersComponent"],
                    _errorm_errorm_component__WEBPACK_IMPORTED_MODULE_19__["ErrormComponent"],
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _core_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/domain/ClassLessonSimpleDTO.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/domain/ClassLessonSimpleDTO.ts ***!
  \*****************************************************/
/*! exports provided: ClassLessonSimpleDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassLessonSimpleDTO", function() { return ClassLessonSimpleDTO; });
class ClassLessonSimpleDTO {
    constructor(clazzId, title, description, lessons) {
        this.clazzId = clazzId;
        this.title = title;
        this.description = description;
        this.lessons = lessons;
    }
}


/***/ }),

/***/ "./src/app/core/domain/ClassSimpleDTO.ts":
/*!***********************************************!*\
  !*** ./src/app/core/domain/ClassSimpleDTO.ts ***!
  \***********************************************/
/*! exports provided: ClassSimpleDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassSimpleDTO", function() { return ClassSimpleDTO; });
class ClassSimpleDTO {
    constructor(clazzId, title, description) {
        this.clazzId = clazzId;
        this.title = title;
        this.description = description;
    }
}


/***/ }),

/***/ "./src/app/core/domain/LessonSimpleDTO.ts":
/*!************************************************!*\
  !*** ./src/app/core/domain/LessonSimpleDTO.ts ***!
  \************************************************/
/*! exports provided: LessonSimpleDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonSimpleDTO", function() { return LessonSimpleDTO; });
class LessonSimpleDTO {
    constructor(lessonId, title, description) {
        this.lessonId = lessonId;
        this.title = title;
        this.description = description;
    }
}


/***/ }),

/***/ "./src/app/core/domain/LoginDTO.ts":
/*!*****************************************!*\
  !*** ./src/app/core/domain/LoginDTO.ts ***!
  \*****************************************/
/*! exports provided: LoginDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDTO", function() { return LoginDTO; });
class LoginDTO {
    constructor(nick, password) {
        this.nick = nick;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/core/domain/MemberDTO.ts":
/*!******************************************!*\
  !*** ./src/app/core/domain/MemberDTO.ts ***!
  \******************************************/
/*! exports provided: MemberDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDTO", function() { return MemberDTO; });
class MemberDTO {
    constructor(memberId, userId) {
        this.memberId = memberId;
        this.userId = userId;
    }
}


/***/ }),

/***/ "./src/app/core/domain/TweetSimpleDTO.ts":
/*!***********************************************!*\
  !*** ./src/app/core/domain/TweetSimpleDTO.ts ***!
  \***********************************************/
/*! exports provided: TweetSimpleDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetSimpleDTO", function() { return TweetSimpleDTO; });
class TweetSimpleDTO {
    constructor(tweetId, text, userId, nick) {
        this.tweetId = tweetId;
        this.text = text;
        this.userId = userId;
        this.nick = nick;
    }
}


/***/ }),

/***/ "./src/app/core/domain/User.ts":
/*!*************************************!*\
  !*** ./src/app/core/domain/User.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(id, nick, firstname, surname, email, password) {
        this.id = id;
        this.nick = nick;
        this.firstname = firstname;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");


















































class MaterialModule {
    constructor(matIconRegistry, domSanitizer) {
        matIconRegistry.addSvgIcon('vrd-icon', domSanitizer.bypassSecurityTrustResourceUrl('./ocean/assets/images/vrd-icon.svg'));
    }
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_47__["DomSanitizer"])); }, providers: [], imports: [[
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__["BrowserAnimationsModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_40__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_37__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_41__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_42__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_43__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_44__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_45__["MatTreeModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__["BrowserAnimationsModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_40__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_37__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_41__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_42__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_43__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_44__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_45__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__["BrowserAnimationsModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_40__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_37__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_41__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_42__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_43__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_44__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_45__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]], exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__["BrowserAnimationsModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_40__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_37__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_41__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_42__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_43__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_44__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_45__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__["BrowserAnimationsModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_40__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_37__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_41__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_42__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_43__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_44__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_45__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                ], exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__["BrowserAnimationsModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_40__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_37__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_41__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_42__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_43__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_44__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_45__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                ], providers: []
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_47__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/ClassService.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/ClassService.ts ***!
  \***********************************************/
/*! exports provided: ClassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassService", function() { return ClassService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/endpoints */ "./src/environments/endpoints.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ClassService {
    constructor(http) {
        this.http = http;
    }
    getAllClasses(classId) {
        return this.http.get(src_environments_endpoints__WEBPACK_IMPORTED_MODULE_1__["endpoints"].baseURL + '/api/class/get/byid/simple/' + classId);
    }
    addClass(userId, classSimpleDTO) {
        return this.http.post(src_environments_endpoints__WEBPACK_IMPORTED_MODULE_1__["endpoints"].baseURL + '/api/class/add2/' + userId, classSimpleDTO).subscribe();
    }
}
ClassService.ɵfac = function ClassService_Factory(t) { return new (t || ClassService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ClassService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClassService, factory: ClassService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/DashboardService.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/DashboardService.ts ***!
  \***************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/endpoints */ "./src/environments/endpoints.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class DashboardService {
    constructor(http) {
        this.http = http;
    }
    getAllClasses() {
        return this.http.get(src_environments_endpoints__WEBPACK_IMPORTED_MODULE_1__["endpoints"].baseURL + '/api/class/get/all/simple');
    }
    getUserClasses(userId) {
        return this.http.get(src_environments_endpoints__WEBPACK_IMPORTED_MODULE_1__["endpoints"].baseURL + '/api/class/get/byuser/simple/' + userId);
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/LessonService.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/LessonService.ts ***!
  \************************************************/
/*! exports provided: LessonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonService", function() { return LessonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/endpoints */ "./src/environments/endpoints.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class LessonService {
    constructor(http) {
        this.http = http;
    }
    /*
      getLessonById(classId : number) :  Observable<ClassLessonSimpleDTO>{
        return this.http.get<ClassLessonSimpleDTO>(
            'http://localhost:8080/api/lesson/get/byid/simple/' + classId)
        }  */
    getLessonById(lessonId) {
        return this.http.get(src_environments_endpoints__WEBPACK_IMPORTED_MODULE_1__["endpoints"].baseURL + '/api/lesson/get/byid/simple/' + lessonId);
    }
    addLesson(clazz, lessonSimpleDTO) {
        return this.http.post(src_environments_endpoints__WEBPACK_IMPORTED_MODULE_1__["endpoints"].baseURL + '/api/lesson/add/' + clazz, lessonSimpleDTO).subscribe();
    }
}
LessonService.ɵfac = function LessonService_Factory(t) { return new (t || LessonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LessonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LessonService, factory: LessonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LessonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/MemberService.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/MemberService.ts ***!
  \************************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/endpoints */ "./src/environments/endpoints.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class MemberService {
    constructor(http) {
        this.http = http;
    }
    addMember(clazz, memberDTO) {
        return this.http.post(src_environments_endpoints__WEBPACK_IMPORTED_MODULE_1__["endpoints"].baseURL + '/api/member/add/' + clazz, memberDTO).subscribe();
    }
}
MemberService.ɵfac = function MemberService_Factory(t) { return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MemberService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MemberService, factory: MemberService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/TweetService.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/TweetService.ts ***!
  \***********************************************/
/*! exports provided: TweetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetService", function() { return TweetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/endpoints */ "./src/environments/endpoints.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class TweetService {
    constructor(http) {
        this.http = http;
    }
    createTweet(lesson, tweetSimpleDTO) {
        return this.http.post(src_environments_endpoints__WEBPACK_IMPORTED_MODULE_1__["endpoints"].baseURL + '/api/tweet/add/' + lesson, tweetSimpleDTO).subscribe();
    }
}
TweetService.ɵfac = function TweetService_Factory(t) { return new (t || TweetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TweetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TweetService, factory: TweetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TweetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/UserService.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/UserService.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/endpoints */ "./src/environments/endpoints.ts");
/* harmony import */ var src_app_errorm_errorm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/errorm/errorm.component */ "./src/app/errorm/errorm.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");








class UserService {
    constructor(http, router, dialog) {
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    // works
    register(user) {
        return this.http.post(src_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endpoints"].baseURL + '/api/user/register', user).subscribe((e) => (console.log('login s userem: ' + e.toString)));
    }
    t() {
        this.user.next(null);
    }
    login(login) {
        return this.http.post(src_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endpoints"].baseURL + '/api/user/login', login).subscribe(result => {
            // Handle result
            (this.user.next(result));
        }, error => {
            console.log('Error during login: ' + error.toString);
            this.dialog.open(src_app_errorm_errorm_component__WEBPACK_IMPORTED_MODULE_3__["ErrormComponent"], {
                data: {
                    err: 'Error',
                    message: 'Unknown combination of Username and Password'
                }
            });
            //   this.errors = error;
        }, () => {
            // 'onCompleted' callback.
            this.router.navigate(['dashboard']);
        });
        /*.subscribe(
          (e)=>(this.user.next(e)),
          
        );
        console.log('chyba pri loginu');  */
    }
    getAll() {
        return this.http.get(src_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endpoints"].baseURL + '/api/user/get/all');
    }
    ;
    getClassWithMembers(classId) {
        return this.http.get(src_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endpoints"].baseURL + '/api/class/get/members/' + classId);
    }
    ;
    login2(login) {
        return this.http.post(src_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endpoints"].baseURL + '/api/user/register', login);
    }
    test() {
        return this.http.get(src_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endpoints"].baseURL + '/api/hello2', { responseType: 'text' }).subscribe();
    }
    test2() {
        // const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this.http.post(src_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endpoints"].baseURL + '/api/test2', 'miraaaaaaaaaaaaaaaaa').subscribe();
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/addclass/addclass.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/addclass/addclass.component.ts ***!
  \**********************************************************/
/*! exports provided: AddclassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddclassComponent", function() { return AddclassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_domain_ClassSimpleDTO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/domain/ClassSimpleDTO */ "./src/app/core/domain/ClassSimpleDTO.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_core_services_ClassService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/ClassService */ "./src/app/core/services/ClassService.ts");
/* harmony import */ var src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/UserService */ "./src/app/core/services/UserService.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










class AddclassComponent {
    constructor(dialogRef, classService, userService) {
        this.dialogRef = dialogRef;
        this.classService = classService;
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.user.subscribe(user => this.userId = user === null || user === void 0 ? void 0 : user.id);
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onYesClick() {
        console.log('add class component. userId: ' + this.userId);
        this.classService.addClass(this.userId, new src_app_core_domain_ClassSimpleDTO__WEBPACK_IMPORTED_MODULE_1__["ClassSimpleDTO"](null, this.title, this.description));
        this.dialogRef.close();
    }
}
AddclassComponent.ɵfac = function AddclassComponent_Factory(t) { return new (t || AddclassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_ClassService__WEBPACK_IMPORTED_MODULE_3__["ClassService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
AddclassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddclassComponent, selectors: [["app-addclass"]], decls: 12, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", "placeholder", "Title", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Description", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function AddclassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddclassComponent_Template_input_ngModelChange_4_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddclassComponent_Template_input_ngModelChange_6_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddclassComponent_Template_button_click_8_listener() { return ctx.onYesClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddclassComponent_Template_button_click_10_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hZGRjbGFzcy9hZGRjbGFzcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddclassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addclass',
                templateUrl: './addclass.component.html',
                styleUrls: ['./addclass.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: src_app_core_services_ClassService__WEBPACK_IMPORTED_MODULE_3__["ClassService"] }, { type: src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/addlesson/addlesson.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/addlesson/addlesson.component.ts ***!
  \************************************************************/
/*! exports provided: AddlessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddlessonComponent", function() { return AddlessonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_core_domain_LessonSimpleDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/domain/LessonSimpleDTO */ "./src/app/core/domain/LessonSimpleDTO.ts");
/* harmony import */ var src_app_core_services_LessonService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/LessonService */ "./src/app/core/services/LessonService.ts");
/* harmony import */ var src_app_core_domain_ClassLessonSimpleDTO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/domain/ClassLessonSimpleDTO */ "./src/app/core/domain/ClassLessonSimpleDTO.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











class AddlessonComponent {
    constructor(dialogRef, data, lessonService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.lessonService = lessonService;
    }
    ngOnInit() {
        // will log the entire data object
        console.log('log addlesson' + this.data.clazzId + " " + this.data.title);
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onYesClick() {
        console.log('aaa');
        //  this.userService.register(new User(null, this.nick, this.firstname, this.surname, this.email, this.password));
        this.lessonService.addLesson(this.data.clazzId, new src_app_core_domain_LessonSimpleDTO__WEBPACK_IMPORTED_MODULE_2__["LessonSimpleDTO"](null, this.title, this.description));
        this.dialogRef.close();
    }
}
AddlessonComponent.ɵfac = function AddlessonComponent_Factory(t) { return new (t || AddlessonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_LessonService__WEBPACK_IMPORTED_MODULE_3__["LessonService"])); };
AddlessonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddlessonComponent, selectors: [["app-addlesson"]], decls: 12, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", "placeholder", "Title", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Description", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function AddlessonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Lesson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddlessonComponent_Template_input_ngModelChange_4_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddlessonComponent_Template_input_ngModelChange_6_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddlessonComponent_Template_button_click_8_listener() { return ctx.onYesClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddlessonComponent_Template_button_click_10_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hZGRsZXNzb24vYWRkbGVzc29uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddlessonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addlesson',
                templateUrl: './addlesson.component.html',
                styleUrls: ['./addlesson.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: src_app_core_domain_ClassLessonSimpleDTO__WEBPACK_IMPORTED_MODULE_4__["ClassLessonSimpleDTO"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_core_services_LessonService__WEBPACK_IMPORTED_MODULE_3__["LessonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/adduser/adduser.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/adduser/adduser.component.ts ***!
  \********************************************************/
/*! exports provided: AdduserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdduserComponent", function() { return AdduserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_core_domain_MemberDTO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/domain/MemberDTO */ "./src/app/core/domain/MemberDTO.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/UserService */ "./src/app/core/services/UserService.ts");
/* harmony import */ var src_app_core_services_MemberService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/MemberService */ "./src/app/core/services/MemberService.ts");
/* harmony import */ var src_app_core_domain_ClassLessonSimpleDTO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/domain/ClassLessonSimpleDTO */ "./src/app/core/domain/ClassLessonSimpleDTO.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

















function AdduserComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function AdduserComponent_mat_option_8_Template_mat_option_onSelectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const option_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.getSelectedLesson(option_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3.nick);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", option_r3.nick, " - ", option_r3.firstname, " ", option_r3.surname, " ");
} }
function AdduserComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", user_r6.nick, " - ", user_r6.firstname, " ", user_r6.surname, "");
} }
class AdduserComponent {
    constructor(dialogRef, data, userService, memberService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.memberService = memberService;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.listpickedUsers = new Array();
        this.customFilter = function (countries, query) {
            return countries.filter(x => x.firstname.toLowerCase().startsWith(query.toLowerCase()));
        };
    }
    ngOnInit() {
        this.userService.getAll().subscribe(result => this.user = result);
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''));
    }
    _filter(value) {
        const filterValue = value;
        return this.user.filter(option => option.nick.includes(filterValue.nick));
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onYesClick() {
        console.log('aaa');
        //  this.userService.register(new User(null, this.nick, this.firstname, this.surname, this.email, this.password));
        //  this.lessonService.addLesson(this.data.clazzId, new LessonSimpleDTO(null, this.title))
        this.dialogRef.close();
    }
    getSelectedLesson(country, event) {
        if (event.isUserInput) {
            this.pickedUser = country;
            console.log("pciked user " + country.id + country.nick);
            console.log("pciked user  id" + this.pickedUser.id);
            this.listpickedUsers.push(country);
            setTimeout(() => {
            }, 500);
            this.m = new src_app_core_domain_MemberDTO__WEBPACK_IMPORTED_MODULE_3__["MemberDTO"](null, this.pickedUser.id);
            console.log("a moje m  id" + this.pickedUser.id);
            this.memberService.addMember(this.data.clazzId, this.m);
        }
    }
}
AdduserComponent.ɵfac = function AdduserComponent_Factory(t) { return new (t || AdduserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_MemberService__WEBPACK_IMPORTED_MODULE_6__["MemberService"])); };
AdduserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdduserComponent, selectors: [["app-adduser"]], decls: 15, vars: 4, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Look up any users...", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value", "onSelectionChange"]], template: function AdduserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdduserComponent_mat_option_8_Template, 2, 4, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdduserComponent_li_11_Template, 2, 3, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdduserComponent_Template_button_click_13_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listpickedUsers);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hZGR1c2VyL2FkZHVzZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdduserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adduser',
                templateUrl: './adduser.component.html',
                styleUrls: ['./adduser.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: src_app_core_domain_ClassLessonSimpleDTO__WEBPACK_IMPORTED_MODULE_7__["ClassLessonSimpleDTO"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: src_app_core_services_MemberService__WEBPACK_IMPORTED_MODULE_6__["MemberService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/class/class.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/class/class.component.ts ***!
  \****************************************************/
/*! exports provided: ClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassComponent", function() { return ClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_dashboard_addlesson_addlesson_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dashboard/addlesson/addlesson.component */ "./src/app/dashboard/addlesson/addlesson.component.ts");
/* harmony import */ var src_app_dashboard_getusers_getusers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dashboard/getusers/getusers.component */ "./src/app/dashboard/getusers/getusers.component.ts");
/* harmony import */ var src_app_dashboard_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dashboard/adduser/adduser.component */ "./src/app/dashboard/adduser/adduser.component.ts");
/* harmony import */ var src_app_core_services_ClassService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/ClassService */ "./src/app/core/services/ClassService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tweet/tweet.component */ "./src/app/dashboard/tweet/tweet.component.ts");
















function ClassComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function ClassComponent_mat_option_14_Template_mat_option_onSelectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const option_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.getSelectedLesson(option_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3.title, " ");
} }
function ClassComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tweet", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("element", ctx_r2.pickedLesson);
} }
class ClassComponent {
    constructor(classService, http, dialog) {
        this.classService = classService;
        this.http = http;
        this.dialog = dialog;
        this.classLessonSimpleDTO = null;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.pickedLesson = null;
    }
    ngOnInit() {
        console.log("class component on init");
        this.classService.getAllClasses(this.element.clazzId).subscribe(e => this.classLessonSimpleDTO = e);
    }
    ngOnChanges() {
        console.log("class component on changes");
        this.myControl.reset();
        this.classService.getAllClasses(this.element.clazzId).subscribe(e => this.classLessonSimpleDTO = e);
        this.pickedLesson = null;
    }
    getSelectedLesson(country, event) {
        if (event.isUserInput) {
            this.pickedLesson = country;
            console.log("event option2 selected lesson " + country.lessonId + country.title);
        }
    }
    openAddLessonDialog() {
        const dialogRef = this.dialog.open(src_app_dashboard_addlesson_addlesson_component__WEBPACK_IMPORTED_MODULE_2__["AddlessonComponent"], {
            width: '260px',
            height: '260px',
            data: this.classLessonSimpleDTO
        }).afterClosed()
            .subscribe(() => {
            console.log('after closed');
            this.classService.getAllClasses(this.element.clazzId).subscribe(e => this.classLessonSimpleDTO = e);
        });
    }
    openGetUsersDialog() {
        const dialogRef = this.dialog.open(src_app_dashboard_getusers_getusers_component__WEBPACK_IMPORTED_MODULE_3__["GetusersComponent"], {
            width: '330px',
            height: '400px',
            data: this.classLessonSimpleDTO
        });
    }
    openAddUserDialog() {
        const dialogRef = this.dialog.open(src_app_dashboard_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_4__["AdduserComponent"], {
            width: '330px',
            // height: '400px',
            data: this.classLessonSimpleDTO
        });
    }
}
ClassComponent.ɵfac = function ClassComponent_Factory(t) { return new (t || ClassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_ClassService__WEBPACK_IMPORTED_MODULE_5__["ClassService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
ClassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClassComponent, selectors: [["class"]], inputs: { element: "element" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 6, consts: [[1, "title"], [1, "btn", 3, "click"], [1, "description"], [1, "lesson"], [1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Look up any lessons...", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [1, "btn2", 3, "click"], [4, "ngIf"], [3, "value", "onSelectionChange"], [3, "element"]], template: function ClassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassComponent_Template_button_click_2_listener() { return ctx.openGetUsersDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassComponent_Template_button_click_4_listener() { return ctx.openAddUserDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "+ User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClassComponent_mat_option_14_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassComponent_Template_button_click_15_listener() { return ctx.openAddLessonDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+ Lesson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ClassComponent_div_17_Template, 2, 1, "div", 10);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.classLessonSimpleDTO == null ? null : ctx.classLessonSimpleDTO.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", ctx.classLessonSimpleDTO == null ? null : ctx.classLessonSimpleDTO.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.classLessonSimpleDTO == null ? null : ctx.classLessonSimpleDTO.lessons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pickedLesson != null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_13__["TweetComponent"]], styles: [".title[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  text-align: left;\n  display: inline-block;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 62px;\n  display: inline-block;\n  border-radius: 50px;\n  color: #333;\n  background: #fff;\n  margin-bottom: 5px;\n  box-shadow: 0 3px 20px 0 #0000003b;\n}\n\n.btn2[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 80px;\n  display: inline-block;\n  border-radius: 50px;\n  color: #333;\n  background: #fff;\n  margin-bottom: 5px;\n  box-shadow: 0 3px 20px 0 #0000003b;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  text-align: left;\n}\n\n.lesson[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NsYXNzL2NsYXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUdBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFHQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jbGFzcy9jbGFzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogNjJweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAvLyAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAyMHB4IDAgIzAwMDAwMDNiO1xyXG59XHJcblxyXG4uYnRuMntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gLy8gICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMjBweCAwICMwMDAwMDAzYjtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5sZXNzb257XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'class',
                templateUrl: './class.component.html',
                styleUrls: ['./class.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_ClassService__WEBPACK_IMPORTED_MODULE_5__["ClassService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, { element: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_dashboard_addclass_addclass_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dashboard/addclass/addclass.component */ "./src/app/dashboard/addclass/addclass.component.ts");
/* harmony import */ var src_app_core_services_DashboardService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/DashboardService */ "./src/app/core/services/DashboardService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/UserService */ "./src/app/core/services/UserService.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _class_class_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../class/class.component */ "./src/app/dashboard/class/class.component.ts");
















function DashboardComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function DashboardComponent_mat_option_8_Template_mat_option_onSelectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const option_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.getSelectedClazz(option_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3.title, " ");
} }
function DashboardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "class", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("element", ctx_r2.pickedClass);
} }
class DashboardComponent {
    constructor(dashboardService, http, userService, dialog) {
        this.dashboardService = dashboardService;
        this.http = http;
        this.userService = userService;
        this.dialog = dialog;
        this.pickedClass = null;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        this.userService.user.subscribe(user => this.userId = user === null || user === void 0 ? void 0 : user.id);
        //  this.dashboardService.getAllClasses().subscribe(
        //     e => this.allClassSimpleDTO = e
        //  )
        //  this.dashboardService.getAllClasses().subscribe(
        //    e => this.userClassSimpleDTO = e
        //  )
        this.dashboardService.getUserClasses(this.userId).subscribe(e => this.userClassSimpleDTO = e);
    }
    getSelectedClazz(country, event) {
        if (event.isUserInput) {
            this.pickedClass = country;
        }
    }
    openAddClassDialog() {
        const dialogRef = this.dialog.open(src_app_dashboard_addclass_addclass_component__WEBPACK_IMPORTED_MODULE_2__["AddclassComponent"], {
            width: '260px',
            height: '260px',
        }).afterClosed()
            .subscribe(() => {
            console.log('after closed');
            this.dashboardService.getUserClasses(this.userId).subscribe(e => this.userClassSimpleDTO = e);
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_DashboardService__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 13, vars: 4, consts: [["id", "container"], [1, "block"], [1, "example-full-width"], ["type", "text", "placeholder", "Look up your classes...", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], ["autocomplete", "on", 3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [1, "btn", 3, "click"], [4, "ngIf"], ["autocomplete", "on", 3, "value", "onSelectionChange"], [3, "element"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_10_listener() { return ctx.openAddClassDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+ Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_div_12_Template, 2, 1, "div", 7);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userClassSimpleDTO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pickedClass != null);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _class_class_component__WEBPACK_IMPORTED_MODULE_13__["ClassComponent"]], styles: [".dashboard[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.float-container[_ngcontent-%COMP%] {\n  border: 3px solid #fff;\n  padding: 20px;\n}\n\n#container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.block[_ngcontent-%COMP%] {\n  width: 155px;\n  height: 45px;\n  margin: 5px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-top: 17px;\n  width: 62px;\n  border-radius: 50px;\n  color: #333;\n  background: #fff;\n  margin-bottom: 5px;\n  box-shadow: 0 3px 20px 0 #0000003b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBR0U7RUFDRSxZQUFBO0FBQUo7O0FBSUU7RUFDRSxzQkFBQTtFQUNBLGFBQUE7QUFESjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBRUEsV0FBQTtBQUZGOztBQU1BO0VBQ0csZ0JBQUE7RUFDQyxXQUFBO0VBSUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FBTkoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuIFxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5mbG9hdC1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gIGRpc3BsYXk6ICAgICAgICAgZmxleDtcclxuICBmbGV4LXdyYXA6ICAgICAgIHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ibG9jayB7XHJcbiAgd2lkdGg6ICAgICAgICAgICAgICAxNTVweDtcclxuICBoZWlnaHQ6ICAgICAgICAgICAgIDQ1cHg7XHJcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiAgICNmOGRjZGM7XHJcbiAgbWFyZ2luOiAgICAgICAgICAgICA1cHg7ICAgICAgICBcclxufVxyXG5cclxuXHJcbi5idG57XHJcbiAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgICB3aWR0aDogNjJweDtcclxuIC8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuIC8vICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDIwcHggMCAjMDAwMDAwM2I7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_DashboardService__WEBPACK_IMPORTED_MODULE_3__["DashboardService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/getusers/getusers.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/getusers/getusers.component.ts ***!
  \**********************************************************/
/*! exports provided: GetusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetusersComponent", function() { return GetusersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/UserService */ "./src/app/core/services/UserService.ts");
/* harmony import */ var src_app_core_domain_ClassLessonSimpleDTO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/domain/ClassLessonSimpleDTO */ "./src/app/core/domain/ClassLessonSimpleDTO.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








function GetusersComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", option_r1.nick, " - ", option_r1.firstname, " ", option_r1.surname, "");
} }
class GetusersComponent {
    constructor(dialogRef, data, userService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.user.subscribe(user => this.u = user);
        this.userService.getClassWithMembers(this.data.clazzId).subscribe(result => this.user = result);
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onYesClick() {
        //  this.userService.register(new User(null, this.nick, this.firstname, this.surname, this.email, this.password));
        //  this.lessonService.addLesson(this.data.clazzId, new LessonSimpleDTO(null, this.title))
        this.dialogRef.close();
    }
}
GetusersComponent.ɵfac = function GetusersComponent_Factory(t) { return new (t || GetusersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
GetusersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetusersComponent, selectors: [["app-getusers"]], decls: 9, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["style", "text-align: left;", 3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [2, "text-align", "left", 3, "value"]], template: function GetusersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All Class members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "nick - firstname surname ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GetusersComponent_p_6_Template, 2, 4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GetusersComponent_Template_button_click_7_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9nZXR1c2Vycy9nZXR1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetusersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-getusers',
                templateUrl: './getusers.component.html',
                styleUrls: ['./getusers.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: src_app_core_domain_ClassLessonSimpleDTO__WEBPACK_IMPORTED_MODULE_3__["ClassLessonSimpleDTO"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/tweet/tweet.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/tweet/tweet.component.ts ***!
  \****************************************************/
/*! exports provided: TweetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetComponent", function() { return TweetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_domain_TweetSimpleDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/domain/TweetSimpleDTO */ "./src/app/core/domain/TweetSimpleDTO.ts");
/* harmony import */ var src_app_core_services_LessonService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/LessonService */ "./src/app/core/services/LessonService.ts");
/* harmony import */ var src_app_core_services_TweetService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/TweetService */ "./src/app/core/services/TweetService.ts");
/* harmony import */ var src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/UserService */ "./src/app/core/services/UserService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function TweetComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r1.nick, ": ", option_r1.text, "");
} }
class TweetComponent {
    constructor(lessonService, tweetService, userService, http) {
        this.lessonService = lessonService;
        this.tweetService = tweetService;
        this.userService = userService;
        this.http = http;
        this.lessonTweetSimpleDTO = null;
        this.tweets = null;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.user = null;
        this.nick = null;
    }
    ngOnInit() {
        var _a, _b;
        console.log("tweey component on init " + ((_a = this.element) === null || _a === void 0 ? void 0 : _a.lessonId) + " " + ((_b = this.element) === null || _b === void 0 ? void 0 : _b.title) + " konec");
        this.lessonService.getLessonById(this.element.lessonId).subscribe(e => {
            this.lessonTweetSimpleDTO = e;
            this.tweets = e.tweets.sort((a, b) => a.tweetId - b.tweetId);
        });
    }
    ngOnChanges() {
        var _a, _b;
        console.log("tweet component on changes " + ((_a = this.element) === null || _a === void 0 ? void 0 : _a.lessonId) + " " + ((_b = this.element) === null || _b === void 0 ? void 0 : _b.title) + " konec");
        console.log('xxxxxxxxxxxxxxxxxxxxx');
        this.userService.user.subscribe(e => console.log('iiiiiiiii ' + (e === null || e === void 0 ? void 0 : e.nick)));
        this.userService.user.subscribe(e => this.user = e);
        console.log('yyyyyyyyyyyyyyyyyyyyy');
        this.myControl.reset();
        this.lessonService.getLessonById(this.element.lessonId).subscribe(e => this.lessonTweetSimpleDTO = e);
    }
    save(event) {
        console.log("You entered: ", event.target.value);
        this.lessonTweetSimpleDTO.tweets.push(new src_app_core_domain_TweetSimpleDTO__WEBPACK_IMPORTED_MODULE_2__["TweetSimpleDTO"](null, event.target.value, null, this.user.nick));
        console.log("Moje hodnoty: lessonId: ", this.lessonTweetSimpleDTO.lessonId + ". usernick: " + this.nick);
        this.tweetService.createTweet(this.lessonTweetSimpleDTO.lessonId, new src_app_core_domain_TweetSimpleDTO__WEBPACK_IMPORTED_MODULE_2__["TweetSimpleDTO"](null, event.target.value, this.user.id, this.user.nick));
    }
}
TweetComponent.ɵfac = function TweetComponent_Factory(t) { return new (t || TweetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_LessonService__WEBPACK_IMPORTED_MODULE_3__["LessonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_TweetService__WEBPACK_IMPORTED_MODULE_4__["TweetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
TweetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TweetComponent, selectors: [["app-tweet"]], inputs: { element: "element" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 10, vars: 3, consts: [[1, "title"], [1, "description"], [2, "background-image", "url('../../../assets/images/mainBackground2.png')", "border-radius", "85% 85% 85% 85% / 30%"], [2, "text-align", "center"], ["style", "text-align: center;", 3, "value", 4, "ngFor", "ngForOf"], [1, "t"], ["placeholder", "Enter your message", "rows", "3", "cols", "40", 3, "keydown.enter"], [2, "text-align", "center", 3, "value"]], template: function TweetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tweets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TweetComponent_p_7_Template, 2, 3, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function TweetComponent_Template_textarea_keydown_enter_9_listener($event) { return ctx.save($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lesson: ", ctx.lessonTweetSimpleDTO == null ? null : ctx.lessonTweetSimpleDTO.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", ctx.lessonTweetSimpleDTO == null ? null : ctx.lessonTweetSimpleDTO.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lessonTweetSimpleDTO == null ? null : ctx.lessonTweetSimpleDTO.tweets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["@charset \"UTF-8\";\n.title[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  text-align: left;\n  display: inline-block;\n}\n.description[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\ntextarea[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.login-banner[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 50%;\n  left: 0;\n  transform: translate3d(0, -50%, 0);\n  \n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  \n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3R3ZWV0L3R3ZWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUVKO0FBRUE7RUFDSSxpQkFBQTtBQUNKO0FBTUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhKO0FBU0U7RUFDRSxrQkFBQTtFQUFxQixtSkFBQTtFQUNyQixRQUFBO0VBQ0EsT0FBQTtFQUNBLGtDQUFBO0VBQW9DLG1IQUFBO0VBQ3BDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFBb0IsMElBQUE7RUFDcEIsV0FBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3R3ZWV0L3R3ZWV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5sb2dpbi1iYW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qenDFr3NvYiBwb8SNw610w6Fuw60gcG9sb2h5IHBydmt1LiAgYWJzb2x1dGUgLSBwcnZlayBidWRlIHZ5am11dCB6IHRva3UgZG9rdW1lbnR1IGEgdW3DrXN0xJtuIG5hIHVyxI1pdMO9Y2ggc291xZlhZG5pY8OtY2ggIHJlbGF0aXZlLCBzdGF0aWMsIGZpeGVkLCBzdGlja3kqL1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKTtcbiAgLyogZWxlbWVudCByxa96bsSbIHRyYW5zZm9ybW92YXQgKG5hdMOhxI1ldCwgemtvc2l0LCBwb3NvdXZhdCwgbmF0YWhvdmF0IGF0ZC4pIGEgdG8gemEgcG9tb2PDrSAyRCBuZWJvIDNEIHRyYW5zZm9ybWFjw60gKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIC8qIHRvIHNwZWNpZnkgaG93IGFuIDxpbWc+IG9yIDx2aWRlbz4gc2hvdWxkIGJlIHJlc2l6ZWQgdG8gZml0IGl0cyBjb250YWluZXIuICAgZmlsbCwgY29udGFpbiwgY292ZXIgKHVkcnp1amUgbWVyaXRrbyksIG5vbmUsIHNjYWxlLWRvd24gKi9cbiAgei1pbmRleDogLTE7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TweetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tweet',
                templateUrl: './tweet.component.html',
                styleUrls: ['./tweet.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_LessonService__WEBPACK_IMPORTED_MODULE_3__["LessonService"] }, { type: src_app_core_services_TweetService__WEBPACK_IMPORTED_MODULE_4__["TweetService"] }, { type: src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, { element: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/errorm/errorm.component.ts":
/*!********************************************!*\
  !*** ./src/app/errorm/errorm.component.ts ***!
  \********************************************/
/*! exports provided: ErrormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrormComponent", function() { return ErrormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class ErrormComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.message = 'An unspecified error has occurred';
        this.err = '';
        if (data === null || data === void 0 ? void 0 : data.err)
            this.err = data.err;
        if (data === null || data === void 0 ? void 0 : data.message)
            this.message = data.message;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
}
ErrormComponent.ɵfac = function ErrormComponent_Factory(t) { return new (t || ErrormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
ErrormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrormComponent, selectors: [["app-errorm"]], decls: 7, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function ErrormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrormComponent_Template_button_click_5_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.err);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, "\n");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ybS9lcnJvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-errorm',
                templateUrl: './errorm.component.html',
                styleUrls: ['./errorm.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_dashboard_addclass_addclass_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dashboard/addclass/addclass.component */ "./src/app/dashboard/addclass/addclass.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/UserService */ "./src/app/core/services/UserService.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");






class HeaderComponent {
    constructor(router, userService, dialog) {
        this.router = router;
        this.userService = userService;
        this.dialog = dialog;
        this.nick = null;
    }
    ngOnInit() {
        this.userService.user.subscribe(user => { var _a; return this.nick = (_a = user === null || user === void 0 ? void 0 : user.nick) === null || _a === void 0 ? void 0 : _a.toString(); });
    }
    logout() {
        this.userService.user.next(null);
        this.router.navigate(['login']);
    }
    openAddClassDialog() {
        const dialogRef = this.dialog.open(src_app_dashboard_addclass_addclass_component__WEBPACK_IMPORTED_MODULE_1__["AddclassComponent"], {
        // width: '330px',
        // height: '400px',
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["header"]], decls: 8, vars: 1, consts: [[1, "header"], [1, "overlay"], ["src", "../../../assets/images/logo.png", "alt", "logo", 1, "header2"], [2, "width", "120px", "margin-left", "2px", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_6_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.nick, ", stay connected with your class");
    } }, styles: [".headerr[_ngcontent-%COMP%] {\n  padding-top: -10px;\n  padding-bottom: 1px;\n  padding-left: 0px;\n  padding-right: 10px;\n  text-align: center;\n  background: #1abc9c;\n  color: white;\n  font-size: 20px;\n  height: 50px;\n}\n\n.headerr2[_ngcontent-%COMP%] {\n  float: left;\n  margin: 10px;\n}\n\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  height: auto;\n  background-size: cover;\n  background-attachment: fixed;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0 0 85% 85%/30%;\n}\n\n.header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  color: #FFF;\n  text-shadow: 1px 1px 1px #333;\n  background-image: linear-gradient(135deg, #9f05ff69 10%, #fd5e086b 100%);\n}\n\nimg[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  border-radius: 35%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Dancing Script\", cursive;\n  font-size: 80px;\n  margin-bottom: 10px;\n}\n\nh3[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  font-family: \"Dancing Script\", cursive;\n  font-size: 30px;\n  margin-bottom: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px 20px;\n  border-radius: 50px;\n  color: #333;\n  background: #fff;\n  margin-bottom: 5px;\n  box-shadow: 0 3px 20px 0 #0000003b;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUtBO0VBQ0ksV0FBQTtFQUNGLFlBQUE7QUFGRjs7QUFpQkU7RUFBRSxVQUFBO0VBQVksU0FBQTtFQUFXLHNCQUFBO0FBWDNCOztBQWFFO0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFYSjs7QUFhRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHdFQUFBO0FBVko7O0FBZUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFaSjs7QUFlRTtFQUNFLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBWko7O0FBZUU7RUFDRSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVpKOztBQWVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQVpKOztBQWNFO0VBQ0UsZUFBQTtBQVhKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaGVhZGVyciB7XHJcbiAgICBwYWRkaW5nLXRvcDogLTEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzFhYmM5YztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5oZWFkZXJyMiB7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICAgXHJcbn1cclxuXHJcbi5sb2dpbi1iYW5uZXIge1xyXG4gIC8vICBwb3NpdGlvbjogYWJzb2x1dGU7ICAvKnpwxa9zb2IgcG/EjcOtdMOhbsOtIHBvbG9oeSBwcnZrdS4gIGFic29sdXRlIC0gcHJ2ZWsgYnVkZSB2eWptdXQgeiB0b2t1IGRva3VtZW50dSBhIHVtw61zdMSbbiBuYSB1csSNaXTDvWNoIHNvdcWZYWRuaWPDrWNoICByZWxhdGl2ZSwgc3RhdGljLCBmaXhlZCwgc3RpY2t5Ki9cclxuICAvLyAgdG9wOiAzJTtcclxuIC8vICAgbGVmdDogMSU7XHJcbiAvLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCk7IC8qIGVsZW1lbnQgcsWvem7EmyB0cmFuc2Zvcm1vdmF0IChuYXTDocSNZXQsIHprb3NpdCwgcG9zb3V2YXQsIG5hdGFob3ZhdCBhdGQuKSBhIHRvIHphIHBvbW9jw60gMkQgbmVibyAzRCB0cmFuc2Zvcm1hY8OtICovXHJcbiAgXHJcbiAgXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gICp7cGFkZGluZzogMDsgbWFyZ2luOiAwOyBib3gtc2l6aW5nOiBib3JkZXItYm94O31cclxuIC8vIGJvZHl7aGVpZ2h0OiA5MDBweDt9XHJcbiAgLmhlYWRlciB7XHJcbiAgLy8gIGJhY2tncm91bmQ6IFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluQmFja2dyb3VuZDIucG5nXCI7Ly8gdXJsKCdodHRwOi8vd3d3LmF1dG9kYXR6LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9PbGQtQ2FyLVdhbGxwYXBlcnMtSGQtMzYtd2l0aC1PbGQtQ2FyLVdhbGxwYXBlcnMtSGQuanBnJyk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA4NSUgODUlIC8gMzAlO1xyXG4gIH1cclxuICAuaGVhZGVyIC5vdmVybGF5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzMzMztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggMTM1ZGVnLCAjOWYwNWZmNjkgMTAlLCAjZmQ1ZTA4NmIgMTAwJSk7XHJcbiAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW5fYmFja2dyb3VuZDIud2VicCcpO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIGltZ3tcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1JTtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgaDMsIHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAyMHB4IDAgIzAwMDAwMDNiO1xyXG4gIH1cclxuICBidXR0b246aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _core_services_UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class AboutComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    onCloseClick() {
        this.dialogRef.close();
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 11, vars: 0, consts: [[1, "about-form-container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " The goal of this tool is allow to create own classes and lectures. Teachers and students can go throught past lectures and share knowledge. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "For feedback do not hesitate to contact me at: medkit@centrum.cz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_9_listener() { return ctx.onCloseClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".about-form-container[_ngcontent-%COMP%] {\n  height: 310px;\n  width: 270px;\n  text-align: center;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: justify;\n  display: block;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 270px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBcclxuICAgIGhlaWdodDogMzEwcHg7XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbiAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxucHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyNzBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _login_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../login/about/about.component */ "./src/app/login/about/about.component.ts");
/* harmony import */ var _login_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../login/register/register.component */ "./src/app/login/register/register.component.ts");
/* harmony import */ var src_app_core_domain_LoginDTO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/domain/LoginDTO */ "./src/app/core/domain/LoginDTO.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/UserService */ "./src/app/core/services/UserService.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");













class LoginComponent {
    constructor(router, dialog, userService) {
        this.router = router;
        this.dialog = dialog;
        this.userService = userService;
    }
    ngOnInit() {
    }
    login() {
        this.userService.login(new src_app_core_domain_LoginDTO__WEBPACK_IMPORTED_MODULE_3__["LoginDTO"](this.nick, this.password));
        //  this.router.navigate(['dashboard']);
    }
    openAboutDialog() {
        const dialogRef = this.dialog.open(_login_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"], {
        //   width: '300px',
        });
    }
    openRegisterDialog() {
        const dialogRef = this.dialog.open(_login_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], {
            width: '300px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
            //  this.email = result.email;
            //   this.password = result.password;
            console.log(this.nick + this.password);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 2, consts: [["src", "../../../assets/images/login_background.webp", "alt", "Login background", 1, "login-banner"], [1, "login-form-container"], [1, "eato"], ["matInput", "", "placeholder", "Username", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Password", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 1, "big-button", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "small-button", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "EATO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Education Tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.nick = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() { return ctx.openRegisterDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() { return ctx.openAboutDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nick);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: ["@charset \"UTF-8\";\n.login-banner[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 50%;\n  left: 0;\n  transform: translate3d(0, -50%, 0);\n  \n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  \n}\n.login-form-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  height: 310px;\n  width: 270px;\n  background: rgba(255, 255, 255, 0.9);\n  padding: 0px 10px 0px 10px;\n  \n  overflow: auto;\n  \n  z-index: 1;\n  \n  text-align: center;\n}\nmat-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0em auto;\n  \n  text-align: left;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n.big-button[_ngcontent-%COMP%] {\n  width: 270px;\n}\n.small-button[_ngcontent-%COMP%] {\n  width: 135px;\n}\n.eato[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-weight: 900;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksa0JBQUE7RUFBcUIsbUpBQUE7RUFDckIsUUFBQTtFQUNBLE9BQUE7RUFDQSxrQ0FBQTtFQUFvQyxtSEFBQTtFQUNwQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQW9CLDBJQUFBO0FBS3hCO0FBRkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsMEJBQUE7RUFBK0IsdUJBQUE7RUFDL0IsY0FBQTtFQUFrQixtSEFBQTtFQUNsQixVQUFBO0VBQWlCLHVDQUFBO0VBQ2pCLGtCQUFBO0FBUUo7QUFMRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFBb0Isc0JBQUE7RUFDcEIsZ0JBQUE7QUFTSjtBQU5FO0VBQ0UsY0FBQTtBQVNKO0FBTkU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBU0o7QUFOQTtFQUVJLFlBQUE7QUFRSjtBQUxBO0VBQ0ksWUFBQTtBQVFKO0FBTEE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVFGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubG9naW4tYmFubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKnpwxa9zb2IgcG/EjcOtdMOhbsOtIHBvbG9oeSBwcnZrdS4gIGFic29sdXRlIC0gcHJ2ZWsgYnVkZSB2eWptdXQgeiB0b2t1IGRva3VtZW50dSBhIHVtw61zdMSbbiBuYSB1csSNaXTDvWNoIHNvdcWZYWRuaWPDrWNoICByZWxhdGl2ZSwgc3RhdGljLCBmaXhlZCwgc3RpY2t5Ki9cbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCk7XG4gIC8qIGVsZW1lbnQgcsWvem7EmyB0cmFuc2Zvcm1vdmF0IChuYXTDocSNZXQsIHprb3NpdCwgcG9zb3V2YXQsIG5hdGFob3ZhdCBhdGQuKSBhIHRvIHphIHBvbW9jw60gMkQgbmVibyAzRCB0cmFuc2Zvcm1hY8OtICovXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICAvKiB0byBzcGVjaWZ5IGhvdyBhbiA8aW1nPiBvciA8dmlkZW8+IHNob3VsZCBiZSByZXNpemVkIHRvIGZpdCBpdHMgY29udGFpbmVyLiAgIGZpbGwsIGNvbnRhaW4sIGNvdmVyICh1ZHJ6dWplIG1lcml0a28pLCBub25lLCBzY2FsZS1kb3duICovXG59XG5cbi5sb2dpbi1mb3JtLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcbiAgaGVpZ2h0OiAzMTBweDtcbiAgd2lkdGg6IDI3MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICAvKiB2bml0cm5pIG9ocmFuaWNlbmkgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8qIHNwZWNpZmllcyB3aGF0IHNob3VsZCBoYXBwZW4gaWYgY29udGVudCBvdmVyZmxvd3MgYW4gZWxlbWVudCdzIGJveCAgc2Nyb2xsYmFycz8gIHNjcm9sbCwgaGlkZGVuLCBhdXRvLCB2aXNpYmxlICovXG4gIHotaW5kZXg6IDE7XG4gIC8qICBwcmlvcml0YSBwxZlpIHDFmWVrcsO9dsOhbsOtIC0xLi4uKzEgICAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwZW0gYXV0bztcbiAgLyogdm5lanNpIG9ocmFuaWNlbmkgKi9cbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaHIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbjogMWVtIDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5iaWctYnV0dG9uIHtcbiAgd2lkdGg6IDI3MHB4O1xufVxuXG4uc21hbGwtYnV0dG9uIHtcbiAgd2lkdGg6IDEzNXB4O1xufVxuXG4uZWF0byB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_6__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_domain_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/domain/User */ "./src/app/core/domain/User.ts");
/* harmony import */ var src_app_errorm_errorm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/errorm/errorm.component */ "./src/app/errorm/errorm.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/UserService */ "./src/app/core/services/UserService.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










class RegisterComponent {
    constructor(dialogRef, 
    //   @Inject(MAT_DIALOG_DATA) public data: DialogData,
    userService, dialog) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.dialog = dialog;
    }
    onNoClick() {
        this.userService.test2();
        this.dialogRef.close();
    }
    onYesClick() {
        if (this.nick == null || this.firstname == null || this.surname == null || this.email == null || this.password == null || this.passwordVerify == null) {
            this.dialog.open(src_app_errorm_errorm_component__WEBPACK_IMPORTED_MODULE_2__["ErrormComponent"], {
                data: {
                    err: 'Error',
                    message: 'All values from form are mandatory'
                }
            });
        }
        if (this.password != this.passwordVerify) {
            this.dialog.open(src_app_errorm_errorm_component__WEBPACK_IMPORTED_MODULE_2__["ErrormComponent"], {
                data: {
                    err: 'Error',
                    message: 'Password and PasswordVerify must be same'
                }
            });
        }
        console.log('aaa');
        this.userService.register(new src_app_core_domain_User__WEBPACK_IMPORTED_MODULE_1__["User"](null, this.nick, this.firstname, this.surname, this.email, this.password));
        this.dialogRef.close();
    }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 20, vars: 6, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", "placeholder", "Username", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Fistname", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Surname", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Email", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "placeholder", "Password", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "placeholder", "Password again", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_4_listener($event) { return ctx.nick = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_6_listener($event) { return ctx.firstname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_8_listener($event) { return ctx.surname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_12_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { return ctx.passwordVerify = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_16_listener() { return ctx.onYesClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_18_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nick);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.surname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.passwordVerify);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: src_app_core_services_UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/endpoints.ts":
/*!***************************************!*\
  !*** ./src/environments/endpoints.ts ***!
  \***************************************/
/*! exports provided: endpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoints", function() { return endpoints; });
const endpoints = {
    //   baseURL: 'http://localhost:8080'
    baseURL: 'https://eatoob.herokuapp.com'
};


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\slavikm\Desktop\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map