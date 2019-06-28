(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");




var routes = [
    { path: 'test', component: _test_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"], data: { name: 'some value passed on route' } },
    { path: 'sniffer', component: _test_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"], data: { name: 'sniffer' } },
    { path: 'dummy', component: _test_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"], data: { name: 'dummy' } },
    { path: 'introspector', component: _test_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"], data: { name: 'introspector' } },
    { path: 'log', component: _test_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"], data: { name: 'log-manager' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.drawer{\n    height: 100vh;\n    background-color: white;\n}\nbutton{\n    padding-left: 6px;\n    padding-right: 6px;\n    min-width: 0px;\n    margin: 0 6px;\n}\nmat-drawer-content{\n    overflow: unset !important;\n}\n.mat-drawer-content{\n    overflow: unset !important;\n}\nmat-toolbar button{\n    background-color: rgb(92, 116, 221);\n    color: white;\n}\ndiv{\n    font-family: 'Roboto', monospace;\n}\n.split-grid{\n    display: grid;\n    /* min-height: calc(100vh - 64px); */\n    max-height: calc(100vh - 68px);\n    overflow: hidden;\n    padding: 0;\n    grid-gap: 4px;\n    grid-template: \n    \"tree view\" -webkit-min-content\n    \"tree view\" 1fr\n        / -webkit-min-content 1fr;\n    grid-template: \n    \"tree view\" min-content\n    \"tree view\" 1fr\n        / min-content 1fr;\n        \n}\n.tree{\n    grid-area: tree;\n    border-right: 1px solid gainsboro;\n    overflow: auto;\n    resize: horizontal;\n    min-height: calc(100vh - 68px);\n    max-height: calc(100vh - 68px);\n    min-width: 590px;\n    max-width: 70vw;\n}\n.view{\n    float: right;\n    grid-area: view;\n    overflow: auto;\n    min-height: calc(100vh - 68px);\n    max-height: calc(100vh - 68px);\n}\nrouter-outlet{\n    display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFJQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsYUFBYTtJQUNiOzs7aUNBR3FCO0lBSHJCOzs7eUJBR3FCOztBQUV6QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLDhCQUE4QjtJQUM5Qiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmRyYXdlcntcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuYnV0dG9ue1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgICBtYXJnaW46IDAgNnB4O1xufVxubWF0LWRyYXdlci1jb250ZW50e1xuICAgIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xufVxuLm1hdC1kcmF3ZXItY29udGVudHtcbiAgICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbn1cbm1hdC10b29sYmFyIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDExNiwgMjIxKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5kaXZ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBtb25vc3BhY2U7XG59XG5cblxuXG4uc3BsaXQtZ3JpZHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8qIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTsgKi9cbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjhweCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGdyaWQtZ2FwOiA0cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZTogXG4gICAgXCJ0cmVlIHZpZXdcIiBtaW4tY29udGVudFxuICAgIFwidHJlZSB2aWV3XCIgMWZyXG4gICAgICAgIC8gbWluLWNvbnRlbnQgMWZyO1xuICAgICAgICBcbn1cbi50cmVle1xuICAgIGdyaWQtYXJlYTogdHJlZTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBnYWluc2Jvcm87XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcmVzaXplOiBob3Jpem9udGFsO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2OHB4KTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjhweCk7XG4gICAgbWluLXdpZHRoOiA1OTBweDtcbiAgICBtYXgtd2lkdGg6IDcwdnc7XG59XG4udmlld3tcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZ3JpZC1hcmVhOiB2aWV3O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2OHB4KTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjhweCk7XG59XG5yb3V0ZXItb3V0bGV0e1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<link rel=\"stylesheet\" href=\"//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css\">\n\n<mat-drawer-container autosize class=\"drawer\" (contextmenu)=\"rightClick()\">\n    <mat-drawer mode=\"side\" opened>\n        <app-main-menu></app-main-menu>\n    </mat-drawer>\n\n\n    <mat-toolbar>\n        <button mat-button matTooltip=\"Start a new agent\" (click)=\"menu.startDialog()\"><i class=\"material-icons\">add_circle</i></button>\n        <button mat-button matTooltip=\"Kill\" (click)=\"menu.securityDialog('kill')\"><i class=\"material-icons\">cancel</i></button>\n        <button mat-button matTooltip=\"Suspend\" (click)=\"menu.securityDialog('suspend')\"><i class=\"material-icons\">pause_circle_filled</i></button>\n        <button mat-button matTooltip=\"Resume\" (click)=\"menusecurityDialog('resume')\"><i class=\"material-icons\">play_circle_filled</i></button>\n        <!-- <button mat-button><i class=\"material-icons\">drafts</i></button> -->\n        <button mat-button matTooltip=\"Move\" (click)=\"menu.cloneDialog('Migrate')\"><i class=\"material-icons\">swap_vertical_circle</i></button>\n        <button mat-button matTooltip=\"Clone\" (click)=\"menu.cloneDialog('Clone')\"><i class=\"material-icons\">supervised_user_circle</i></button>\n        <!-- <button mat-button><i class=\"material-icons\">description</i></button> -->\n        <!-- <button mat-button><i class=\"material-icons\">save</i></button> -->\n        <button mat-button matTooltip=\"Freeze\" (click)=\"menu.securityDialog('freeze')\"><i class=\"material-icons\">ac_unit</i></button>\n        <button mat-button matTooltip=\"Thaw the agent\" (click)=\"menu.cloneDialog('thaw')\"><i class=\"material-icons\">whatshot</i></button>\n        <button mat-button matTooltip=\"Start sniffer\" (click)=\"menu.startSniffer()\"><i class=\"material-icons\">visibility</i></button>\n        <button mat-button matTooltip=\"Start dummy agent\" (click)=\"menu.startDummy()\"><i class=\"material-icons\">face</i></button>\n        <button mat-button matTooltip=\"Start log manager\" (click)=\"menu.startLog()\"><i class=\"material-icons\">receipt</i></button>\n        <button mat-button matTooltip=\"Start introspector\" (click)=\"menu.startIntrospector()\"><i class=\"material-icons\">bug_report</i></button>\n        <!-- <button mat-button (click)=\"sayHello()\">Say Hello</button>\n        <button mat-button (click)=\"changeName()\">Change name</button>\n        <button mat-button routerLink=\"/test\">Router Test</button> -->\n    </mat-toolbar>\n\n\n    <div class=\"split-grid\">\n        <app-tree class=\"tree\"></app-tree>\n        <div class=\"view\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n\n\n\n\n\n</mat-drawer-container>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-transfer.service */ "./src/app/data-transfer.service.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");





// import 'jquery-ui-dist/jquery-ui';
var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'Test-sb';
        this.return = '';
    }
    AppComponent.prototype.sayHello = function () {
        var _this = this;
        this.return = 'loading...';
        this.http.get('http://localhost:2020/hello-world', {
            responseType: 'text'
        }).subscribe(function (data) { return console.log(data); });
        this.http.get('http://localhost:2020/hello-world', {
            responseType: 'text'
        }).subscribe(function (data) { return _this.return = data; });
    };
    // choose between GET and POST method
    AppComponent.prototype.changeName = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("name", "matteo");
        this.http.get('http://localhost:2020/changeName', {
            params: params
        }).subscribe(function (data) { return console.log(data); });
    };
    // to use if POST method is preferred, need JSON parsing
    // 
    // private changeName(): any{
    //   let params = new HttpParams().set("name",'Matteo'); //Create new HttpParams
    //   return this.http.post('http://localhost:2020/changeName', {params: params}).subscribe(data => console.log(data));
    // }
    AppComponent.prototype.rightClick = function () {
        console.log("right click");
        // return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__["MainMenuComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__["MainMenuComponent"])
    ], AppComponent.prototype, "menu", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__["DataTransferService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, PizzaPartyAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaPartyAppModule", function() { return PizzaPartyAppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _start_dialog_start_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./start-dialog/start-dialog.component */ "./src/app/start-dialog/start-dialog.component.ts");
/* harmony import */ var _clone_dialog_clone_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clone-dialog/clone-dialog.component */ "./src/app/clone-dialog/clone-dialog.component.ts");
/* harmony import */ var _security_dialog_security_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./security-dialog/security-dialog.component */ "./src/app/security-dialog/security-dialog.component.ts");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tree/tree.component */ "./src/app/tree/tree.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"],
                _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_8__["MainMenuComponent"],
                _start_dialog_start_dialog_component__WEBPACK_IMPORTED_MODULE_9__["StartDialogComponent"],
                _clone_dialog_clone_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CloneDialogComponent"],
                _security_dialog_security_dialog_component__WEBPACK_IMPORTED_MODULE_11__["SecurityDialogComponent"],
                _tree_tree_component__WEBPACK_IMPORTED_MODULE_12__["TreeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_23__["CdkTreeModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
            ],
            entryComponents: [_start_dialog_start_dialog_component__WEBPACK_IMPORTED_MODULE_9__["StartDialogComponent"],
                _clone_dialog_clone_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CloneDialogComponent"],
                _security_dialog_security_dialog_component__WEBPACK_IMPORTED_MODULE_11__["SecurityDialogComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

var PizzaPartyAppModule = /** @class */ (function () {
    function PizzaPartyAppModule() {
    }
    return PizzaPartyAppModule;
}());



/***/ }),

/***/ "./src/app/clone-dialog/clone-dialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/clone-dialog/clone-dialog.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvbmUtZGlhbG9nL2Nsb25lLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Nsb25lLWRpYWxvZy9jbG9uZS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcbiAgICBtYXJnaW46IDAgMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/clone-dialog/clone-dialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/clone-dialog/clone-dialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mat-typography\">\n  <h2>{{title}} agent</h2>\n</section>\n\n<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\" *ngIf=\"title=='Clone'\">\n    <form>\n      <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"Agent new name\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\">\n      </mat-form-field>\n    </form>\n  </mat-list-item>\n  <mat-list-item role=\"listitem\">\n    <form>\n      <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"Container\" [(ngModel)]=\"cont\" [ngModelOptions]=\"{standalone: true}\">\n      </mat-form-field>\n    </form>\n  </mat-list-item>\n</mat-list>\n\n<button mat-button (click)=\"cancel()\">Cancel</button>\n<button mat-button (click)=\"send()\">OK</button>"

/***/ }),

/***/ "./src/app/clone-dialog/clone-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/clone-dialog/clone-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: CloneDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneDialogComponent", function() { return CloneDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CloneDialogComponent = /** @class */ (function () {
    function CloneDialogComponent(dialogRef, data, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.http = http;
        this.title = '';
        this.name = '';
        this.cont = '';
    }
    CloneDialogComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.title = this.data[1];
        this.selection = this.data[2];
    };
    CloneDialogComponent.prototype.send = function () {
        if (this.title == 'Clone') {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("name", this.selection).set("container", this.cont).set("newname", this.name);
            this.http.get('http://localhost:2020/clone', {
                params: params
            }).subscribe(function (data) { return console.log(data); });
        }
        else if (this.title == 'Migrate') {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("name", this.selection).set("container", this.cont);
            this.http.get('http://localhost:2020/migrate', {
                params: params
            }).subscribe(function (data) { return console.log(data); });
        }
        else if (this.title == 'Thaw') {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("name", this.selection).set("container", this.cont);
            this.http.get('http://localhost:2020/thaw', {
                params: params
            }).subscribe(function (data) { return console.log(data); });
        }
        this.dialogRef.close();
    };
    CloneDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    CloneDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clone-dialog',
            template: __webpack_require__(/*! ./clone-dialog.component.html */ "./src/app/clone-dialog/clone-dialog.component.html"),
            styles: [__webpack_require__(/*! ./clone-dialog.component.css */ "./src/app/clone-dialog/clone-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CloneDialogComponent);
    return CloneDialogComponent;
}());



/***/ }),

/***/ "./src/app/data-transfer.service.ts":
/*!******************************************!*\
  !*** ./src/app/data-transfer.service.ts ***!
  \******************************************/
/*! exports provided: DataTransferService, Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransferService", function() { return DataTransferService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var DataTransferService = /** @class */ (function () {
    function DataTransferService(http) {
        this.http = http;
        // selected node name
        this.selection = '';
        // last agent that changed status
        this.ready = false;
        this.name = '';
        this.container = '';
        this.state = '';
        this.ip = '';
        this.TREE_DATA = [];
        this.needRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.refreshStatus = this.needRefresh.asObservable();
    }
    DataTransferService.prototype.changeRefreshStatus = function (tf) {
        this.needRefresh.next(tf);
    };
    // Retrive the initial tree, shouldn't be used after initialization
    // Add or remove nodes from TREE_DATA using updateFromRemote()
    // instead
    DataTransferService.prototype.getTree = function () {
        var _this = this;
        var platform = '';
        var container = '';
        var agents = [];
        return this.http.get('http://localhost:2020/containerName', {
            responseType: 'text'
        }).toPromise().then(function (data) {
            container = data;
            return _this.http.get('http://localhost:2020/platformName', {
                responseType: 'text'
            }).toPromise().then(function (data) {
                platform = data;
                _this.ip = platform;
                return _this.http.get('http://localhost:2020/agentsName').toPromise().then(function (data) {
                    var agentlist = [];
                    for (var i in data) {
                        agents.push(data[i]);
                        var ag = new Node(agents[i]);
                        agentlist.push(ag);
                    }
                    var maincontainer = [{
                            name: container,
                            childNode: agentlist
                        }];
                    var ip = [{
                            name: platform,
                            childNode: maincontainer
                        }];
                    _this.TREE_DATA.push({
                        name: 'Agent Platforms',
                        childNode: ip
                    });
                    console.log(_this.TREE_DATA);
                    return _this.TREE_DATA;
                });
            });
        });
    };
    DataTransferService.prototype.remove = function () {
        var _this = this;
        var i = 0;
        var j = 0;
        var m = 0;
        var n = 0;
        this.TREE_DATA.forEach(function (node) {
            _this.TREE_DATA[i].childNode.forEach(function (subnode) {
                _this.TREE_DATA[i].childNode[j].childNode.forEach(function (subsubnode) {
                    _this.TREE_DATA[i].childNode[j].childNode[m].childNode.forEach(function (subsubsubnode) {
                        if (subsubsubnode.name == _this.selection) {
                            _this.TREE_DATA[i].childNode[j].childNode[m].childNode.splice(n, 1);
                        }
                        n++;
                    });
                    m++;
                });
                j++;
            });
            i++;
        });
        this.changeRefreshStatus(true);
    };
    DataTransferService.prototype.add = function (name, container) {
        var _this = this;
        var i = 0;
        var j = 0;
        var m = 0;
        var existing = false;
        this.TREE_DATA.forEach(function (node) {
            _this.TREE_DATA[i].childNode.forEach(function (subnode) {
                _this.TREE_DATA[i].childNode[j].childNode.forEach(function (subsubnode) {
                    if (subsubnode.name == container) {
                        _this.TREE_DATA[i].childNode[j].childNode[m].childNode.forEach(function (subsubsubnode) {
                            if (subsubsubnode.name.indexOf(name) !== -1) {
                                existing = true;
                            }
                        });
                        if (existing == false) {
                            _this.TREE_DATA[i].childNode[j].childNode[m].childNode.push(new Node(name + '@' + _this.ip));
                        }
                    }
                });
                m++;
            });
            j++;
        });
        i++;
        this.changeRefreshStatus(true);
    };
    DataTransferService.prototype.updateFromRemote = function () {
        var _this = this;
        this.http.get('http://localhost:2020/update').subscribe(function (data) {
            var name = '';
            var container = '';
            var state = '';
            var ip = '';
            name = data[0];
            container = data[1];
            state = data[2];
            ip = data[3];
            if (name == "" && container == "" && state == "" && _this.ready == false) {
                _this.name = name;
                _this.container = container;
                _this.state = state;
                _this.ready = true;
                console.log("this.ready -> " + true);
            }
            else if ((_this.name != name || _this.container != container || _this.state != state) && _this.ready == true) {
                if (state == "addedd") {
                    // Agent added
                    if (name != "") {
                        var i = 0;
                        var j = 0;
                        var m = 0;
                        _this.TREE_DATA.forEach(function (node) {
                            _this.TREE_DATA[i].childNode.forEach(function (subnode) {
                                _this.TREE_DATA[i].childNode[j].childNode.forEach(function (subsubnode) {
                                    if (subsubnode.name == container) {
                                        _this.TREE_DATA[i].childNode[j].childNode[m].childNode.push(new Node(name));
                                    }
                                    m++;
                                });
                                j++;
                            });
                            i++;
                        });
                    }
                    // Container added
                    else {
                        var i = 0;
                        var j = 0;
                        _this.TREE_DATA.forEach(function (node) {
                            _this.TREE_DATA[i].childNode.forEach(function (subnode) {
                                if (subnode.name.indexOf(ip) !== -1) {
                                    _this.TREE_DATA[i].childNode[j].childNode.push(new Node(container));
                                }
                                j++;
                            });
                            i++;
                        });
                    }
                }
                if (state == "removed") {
                    var i = 0;
                    var j = 0;
                    var m = 0;
                    var n = 0;
                    _this.TREE_DATA.forEach(function (node) {
                        _this.TREE_DATA[i].childNode.forEach(function (subnode) {
                            _this.TREE_DATA[i].childNode[j].childNode.forEach(function (subsubnode) {
                                _this.TREE_DATA[i].childNode[j].childNode[m].childNode.forEach(function (subsubsubnode) {
                                    if (subsubsubnode.name == name) {
                                        _this.TREE_DATA[i].childNode[j].childNode[m].childNode.splice(n, 1);
                                    }
                                    n++;
                                });
                                m++;
                            });
                            j++;
                        });
                        i++;
                    });
                }
                _this.name = name;
                _this.container = container;
                _this.state = state;
                _this.changeRefreshStatus(true);
            }
        });
    };
    DataTransferService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataTransferService);
    return DataTransferService;
}());

var Node = /** @class */ (function () {
    function Node(name_, childnode_) {
        this.name = '';
        this.name = name_;
        this.childNode = childnode_;
    }
    return Node;
}());



/***/ }),

/***/ "./src/app/main-menu/main-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-expansion-panel{\n    margin:0;\n    border-radius: 0;\n}\nmat-expansion-panel p{\n    cursor: pointer;\n}\nmat-expansion-panel p:hover{\n    color: rgb(92, 116, 221);\n    background-color: rgba(1, 1, 1, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1leHBhbnNpb24tcGFuZWx7XG4gICAgbWFyZ2luOjA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cbm1hdC1leHBhbnNpb24tcGFuZWwgcHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5tYXQtZXhwYW5zaW9uLXBhbmVsIHA6aG92ZXJ7XG4gICAgY29sb3I6IHJnYig5MiwgMTE2LCAyMjEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMSwgMSwgMC4xKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion [multi]=\"true\">\n     <mat-expansion-panel>\n          <mat-expansion-panel-header>\n               <mat-panel-title>\n                    File\n               </mat-panel-title>\n          </mat-expansion-panel-header>\n          <p>Close RMA agent</p>\n          <p>Exit this container</p>\n          <p>Shut down AgentPlatform</p>\n     </mat-expansion-panel>\n     <mat-expansion-panel>\n          <mat-expansion-panel-header>\n               <mat-panel-title>\n                    Actions\n               </mat-panel-title>\n          </mat-expansion-panel-header>\n          <p (click)=\"startDialog()\">Start new agent</p>\n          <p (click)=\"securityDialog('kill')\">Kill</p>\n          <p (click)=\"securityDialog('suspend')\">Suspend</p>\n          <p (click)=\"securityDialog('resume')\">Resume</p>\n          <!-- <p (click)=\"messageDialog()\">Send message</p> -->\n          <p (click)=\"cloneDialog('Migrate')\">Migrate agent</p>\n          <p (click)=\"cloneDialog('Clone')\">Clone agent</p>\n          <p>Load agent</p>\n          <p (click)=\"securityDialog('save')\">Save agent</p>\n          <p (click)=\"securityDialog('freeze')\">Freeze agent</p>\n          <!-- FIXME: THAW need a container as input, maybe cloneDialog can be used -->\n          <p (click)=\"cloneDialog('Thaw')\">Thaw agent</p>\n     </mat-expansion-panel>\n     <mat-expansion-panel>\n          <mat-expansion-panel-header>\n               <mat-panel-title>\n                    Tools\n               </mat-panel-title>\n          </mat-expansion-panel-header>\n          <!-- WARNING sniffer router need a different name from the sniffer endpoint; snifferRouter is suggested \n               (routerLinking inside typescript) -->\n          <p (click)=\"startSniffer()\">Start sniffer</p>\n          <p (click)=\"startDummy()\">Start dummy agent</p>\n          <p>Show the DF GUI</p>\n          <p (click)=\"startIntrospector()\">Start introspector agent</p>\n          <p (click)=\"startLog()\">Start log manager agent</p>\n     </mat-expansion-panel>\n     <mat-expansion-panel>\n          <mat-expansion-panel-header>\n               <mat-panel-title>\n                    Remote Platforms\n               </mat-panel-title>\n          </mat-expansion-panel-header>\n          <p>Add platform via AMS AID</p>\n          <p>Add platform via URL</p>\n          <p>View AP description</p>\n          <p>Refresh AP description</p>\n          <p>Remove remote platform</p>\n          <p>Refresh agent list</p>\n     </mat-expansion-panel>\n     <mat-expansion-panel>\n          <mat-expansion-panel-header>\n               <mat-panel-title>\n                    Help\n               </mat-panel-title>\n          </mat-expansion-panel-header>\n          <p (click)=\"goToLink('https://jade.tilab.com')\">About Jade</p>\n     </mat-expansion-panel>\n</mat-accordion>"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _start_dialog_start_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../start-dialog/start-dialog.component */ "./src/app/start-dialog/start-dialog.component.ts");
/* harmony import */ var _clone_dialog_clone_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clone-dialog/clone-dialog.component */ "./src/app/clone-dialog/clone-dialog.component.ts");
/* harmony import */ var _security_dialog_security_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../security-dialog/security-dialog.component */ "./src/app/security-dialog/security-dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_transfer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data-transfer.service */ "./src/app/data-transfer.service.ts");









var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(dialog, snackBar, http, router, dataService) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.router = router;
        this.dataService = dataService;
        this.selection = '';
    }
    MainMenuComponent.prototype.ngOnInit = function () { };
    MainMenuComponent.prototype.updateSelection = function () {
        this.selection = this.dataService.selection;
    };
    MainMenuComponent.prototype.startDialog = function () {
        this.startDialogRef = this.dialog.open(_start_dialog_start_dialog_component__WEBPACK_IMPORTED_MODULE_3__["StartDialogComponent"], {
            data: {
                1: this.dataService
            }
        });
    };
    MainMenuComponent.prototype.cloneDialog = function (title) {
        this.updateSelection();
        if (this.selection.indexOf('@') !== -1 && this.selection != '') {
            this.cloneDialogRef = this.dialog.open(_clone_dialog_clone_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CloneDialogComponent"], {
                data: {
                    1: title,
                    2: this.selection
                }
            });
            this.snackBar.open("Warning: Some agents might not be able to migrate or be cloned because of lack of serialization support in their implementation. If you are not sure about the  implemementation of this agent, Cancel this operation.", "Dismiss", {
                duration: 16000,
            });
        }
        else {
            this.snackBar.open("You must select an agent in the tree", "Dismiss", {
                duration: 2000,
            });
        }
    };
    MainMenuComponent.prototype.securityDialog = function (title) {
        this.updateSelection();
        this.securityDialogRef = this.dialog.open(_security_dialog_security_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SecurityDialogComponent"], {
            data: {
                1: title,
                2: this.selection,
                3: this.dataService
            }
        });
    };
    MainMenuComponent.prototype.startSniffer = function () {
        this.updateSelection();
        if (this.selection.indexOf('@') == -1 && this.selection != '') {
            console.log("Starting sniffer on " + this.selection);
            this.router.navigate(['/sniffer']);
        }
        else {
            this.snackBar.open("You must select an agent-platform or an agent-container in the tree", "Dismiss", {
                duration: 4000,
            });
        }
    };
    MainMenuComponent.prototype.startDummy = function () {
        this.updateSelection();
        if (this.selection.indexOf('@') == -1 && this.selection != '') {
            console.log("Starting dummy on " + this.selection);
            this.router.navigate(['/dummy']);
        }
        else {
            this.snackBar.open("You must select an agent-platform or an agent-container in the tree", "Dismiss", {
                duration: 4000,
            });
        }
    };
    MainMenuComponent.prototype.startIntrospector = function () {
        this.updateSelection();
        if (this.selection.indexOf('@') == -1 && this.selection != '') {
            console.log("Starting dummy on " + this.selection);
            this.router.navigate(['/introspector']);
        }
        else {
            this.snackBar.open("You must select an agent-platform or an agent-container in the tree", "Dismiss", {
                duration: 4000,
            });
        }
    };
    MainMenuComponent.prototype.startLog = function () {
        this.updateSelection();
        if (this.selection.indexOf('@') == -1 && this.selection != '') {
            console.log("Starting log-manager on " + this.selection);
            this.router.navigate(['/log']);
        }
        else {
            this.snackBar.open("You must select an agent-platform or an agent-container in the tree", "Dismiss", {
                duration: 4000,
            });
        }
    };
    MainMenuComponent.prototype.goToLink = function (url) {
        window.open(url, "_blank");
    };
    MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/main-menu/main-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _data_transfer_service__WEBPACK_IMPORTED_MODULE_8__["DataTransferService"]])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/security-dialog/security-dialog.component.css":
/*!***************************************************************!*\
  !*** ./src/app/security-dialog/security-dialog.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdXJpdHktZGlhbG9nL3NlY3VyaXR5LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXR5LWRpYWxvZy9zZWN1cml0eS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcbiAgICBtYXJnaW46IDAgMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/security-dialog/security-dialog.component.html":
/*!****************************************************************!*\
  !*** ./src/app/security-dialog/security-dialog.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mat-typography\">\n    <h3>Are you sure you want to {{title}} this agent?</h3>\n</section>\n\n<button mat-button (click)=\"cancel()\">Cancel</button>\n<button mat-button (click)=\"send()\">OK</button>"

/***/ }),

/***/ "./src/app/security-dialog/security-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/security-dialog/security-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: SecurityDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityDialogComponent", function() { return SecurityDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SecurityDialogComponent = /** @class */ (function () {
    function SecurityDialogComponent(dialogRef, data, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.http = http;
        this.title = '';
    }
    SecurityDialogComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.title = this.data[1];
        this.selection = this.data[2];
        this.dataService = this.data[3];
    };
    SecurityDialogComponent.prototype.send = function () {
        var _this = this;
        console.log(this.selection);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("name", this.selection);
        if (this.title == 'kill') {
            this.http.get('http://localhost:2020/kill', {
                params: params, observe: 'response'
            }).subscribe(function (data) {
                console.log(data);
                if (data.statusText == "OK") {
                    _this.dataService.remove();
                    // this.dataService.updateFromRemote();
                }
                ;
            });
        }
        else if (this.title == 'suspend') {
            this.http.get('http://localhost:2020/suspend', {
                params: params
            }).subscribe(function (data) { return console.log(data); });
        }
        else if (this.title == 'resume') {
            this.http.get('http://localhost:2020/resume', {
                params: params
            }).subscribe(function (data) { return console.log(data); });
        }
        else if (this.title == 'freeze') {
            this.http.get('http://localhost:2020/freeze', {
                params: params
            }).subscribe(function (data) { return console.log(data); });
        }
        else if (this.title == 'thaw') {
            this.http.get('http://localhost:2020/thaw', {
                params: params
            }).subscribe(function (data) { return console.log(data); });
        }
        else if (this.title == 'save') {
            this.http.get('http://localhost:2020/save', {
                params: params
            }).subscribe(function (data) { return console.log(data); });
        }
        this.dialogRef.close();
    };
    SecurityDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    SecurityDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-security-dialog',
            template: __webpack_require__(/*! ./security-dialog.component.html */ "./src/app/security-dialog/security-dialog.component.html"),
            styles: [__webpack_require__(/*! ./security-dialog.component.css */ "./src/app/security-dialog/security-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SecurityDialogComponent);
    return SecurityDialogComponent;
}());



/***/ }),

/***/ "./src/app/start-dialog/start-dialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/start-dialog/start-dialog.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQtZGlhbG9nL3N0YXJ0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0LWRpYWxvZy9zdGFydC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcbiAgICBtYXJnaW46IDAgMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/start-dialog/start-dialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/start-dialog/start-dialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mat-typography\">\n    <h2>Start new agent</h2>\n</section>\n\n<mat-list role=\"list\">\n    <mat-list-item role=\"listitem\">\n        <form>\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Agent name\" [(ngModel)]=\"name\"\n                    [ngModelOptions]=\"{standalone: true}\" required=true>\n            </mat-form-field>\n        </form>\n    </mat-list-item>\n    <mat-list-item role=\"listitem\">\n        <form>\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Class name\" [(ngModel)]=\"clas\"\n                    [ngModelOptions]=\"{standalone: true}\" required=true>\n            </mat-form-field>\n        </form>\n    </mat-list-item>\n    <mat-list-item role=\"listitem\">\n        <form>\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Arguments\" [(ngModel)]=\"args\"\n                    [ngModelOptions]=\"{standalone: true}\">\n            </mat-form-field>\n        </form>\n    </mat-list-item>\n    <mat-list-item role=\"listitem\">\n        <form>\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Owner\" [(ngModel)]=\"own\" [ngModelOptions]=\"{standalone: true}\">\n            </mat-form-field>\n        </form>\n    </mat-list-item>\n    <mat-list-item role=\"listitem\">\n        <form>\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Container\" [(ngModel)]=\"cont\"\n                    [ngModelOptions]=\"{standalone: true}\" required=true>\n            </mat-form-field>\n        </form>\n    </mat-list-item>\n</mat-list>\n\n<button mat-button (click)=\"cancel()\">Cancel</button>\n<button mat-button (click)=\"send()\">OK</button>"

/***/ }),

/***/ "./src/app/start-dialog/start-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/start-dialog/start-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: StartDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartDialogComponent", function() { return StartDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var StartDialogComponent = /** @class */ (function () {
    function StartDialogComponent(dialogRef, data, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.http = http;
        this.name = '';
        this.clas = 'jade.core.Agent';
        this.args = '';
        this.own = '';
        this.cont = 'MainContainer';
    }
    StartDialogComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.dataService = this.data[1];
    };
    StartDialogComponent.prototype.send = function () {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("name", this.name).set("clas", this.clas).set("args", this.args).set("owner", this.own).set("container", this.cont);
        this.http.get('http://localhost:2020/start', {
            params: params, observe: 'response'
        }).subscribe(function (data) {
            console.log(data);
            if (data.statusText == "OK") {
                _this.dataService.add(_this.name, _this.cont);
                // this.dataService.updateFromRemote();
            }
            ;
        });
        this.dialogRef.close();
    };
    StartDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    StartDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start-dialog',
            template: __webpack_require__(/*! ./start-dialog.component.html */ "./src/app/start-dialog/start-dialog.component.html"),
            styles: [__webpack_require__(/*! ./start-dialog.component.css */ "./src/app/start-dialog/start-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StartDialogComponent);
    return StartDialogComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar{\n    position: absolute;\n    top: 0;\n}\nbutton{\n    padding-left: 6px;\n    padding-right: 6px;\n    min-width: 0px;\n    margin: 0 6px;\n}\nmat-toolbar button{\n    background-color: rgb(92, 116, 221);\n    color: white;\n}\n#close{\n    background-color: rgba(255, 0, 0, 0.6);\n    color: white;\n}\n#wrapper{\n    overflow: hidden;\n}\n#other{\n    border: 3px solid black;\n}\n.sniffed{\n    padding: 8px;\n    background-color: gray;\n    color: white;\n    margin: 12px;\n    display: inline-flex;\n    border: 3px solid deeppink;\n}\n.showed{\n    padding: 8px;\n    background-color: gray;\n    color: white;\n    margin: 12px;\n    display: inline-flex;\n    border: 3px solid orange;\n}\n.dummyControl{\n    width: 40%;\n    /* border: 1px solid black; */\n    display: inline-block;\n    text-align: center;\n    min-height: 80vh;\n    margin-top: 20px;\n    margin-left: 20px;\n    margin-bottom: 50px;\n    box-shadow: 0 0 40px #aebaca;\n    padding: 4px;\n    border-radius: 16px;\n}\n.msgOption{\n    display: inline-block;\n    width: 100%;\n    margin-top: 45px;\n}\n.msgOption mat-form-field{\n    width: 90%;\n}\n.dummyMessages{\n    width: 55%;\n    float: right;\n    /* border: 1px solid black; */\n    display: inline-block;\n    min-height: 800px;\n    margin-top: 5px;\n}\n.dualSelector{\n    display: inline;\n    border: 1px solid gray;\n    text-align: center;\n    padding: 0 6px;\n}\n.introspectorGrid{\n    margin: 1% 2.5%;\n    display: grid;\n    grid-template-areas:\n      'in in in out out out'\n      'st be be be  be  be'\n      'sp sp sp sp  sp  sp';\n    grid-gap: 10px;\n    min-height: 800px;\n}\n.intrGridElement{\n    /* border: 2px solid gray; */\n}\n#item1{\n    text-align: center;\n    grid-area: in;\n    /* overflow-y: auto; */\n}\n#item2{\n    text-align: center;\n    grid-area: out;\n    /* overflow-y: auto; */\n}\n#item3{\n    text-align: center;\n    grid-area: st;\n    box-shadow: 0 0 40px #aebaca;\n    padding: 4px;\n    border-radius: 16px;\n}\n#item4{\n    text-align: left;\n    grid-area: be;\n    box-shadow: 0 0 40px #aebaca;\n    padding: 4px;\n    border-radius: 16px;\n}\n#item5{\n    text-align: left;\n    grid-area: sp;\n    box-shadow: 0 0 40px #aebaca;\n    padding: 4px;\n    border-radius: 16px;\n}\n.example-tree-invisible {\n    display: none;\n}\n.example-tree ul,\n.example-tree li {\n    margin-top: 0;\n    margin-bottom: 0;\n    list-style-type: none;\n}\n.example-tree-node {\n    display: block;\n}\n.example-tree-node .example-tree-node {\n    padding-left: 40px;\n}\n.example-tree-progress-bar {\n    margin-left: 30px;\n}\n.example-tree-nested-node {\n    padding-left: 30px;\n}\nspan{\n    cursor: pointer;\n    border: 5px solid transparent;\n    padding-right: 8px;\n}\n.focusClass{\n    background-color: rgb(92, 116, 221);\n    color: white;\n}\n.logtable{\n    width: 95%;\n    margin: 2.5% 2.5%;\n    font-family: inherit;\n    font-size: inherit;\n    font-style: normal;\n    text-align: left;\n    padding: 4px;\n    border-radius: 16px;\n    box-shadow: 0 0 40px #aebaca;\n}\n.logtable tr:nth-child(even){\n    background-color: #a0c6ff42;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC90ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtBQUNWO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUdBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtJQUNwQix3QkFBd0I7QUFDNUI7QUFJQTtJQUNJLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUlBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYjs7OzJCQUd1QjtJQUN2QixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBOztJQUVJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7QUFDaEI7QUFLQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC90ZXN0L3Rlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG59XG5idXR0b257XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xuICAgIG1pbi13aWR0aDogMHB4O1xuICAgIG1hcmdpbjogMCA2cHg7XG59XG5tYXQtdG9vbGJhciBidXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAxMTYsIDIyMSk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2Nsb3Nle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjYpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiN3cmFwcGVye1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuI290aGVye1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xufVxuLnNuaWZmZWR7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMTJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBkZWVwcGluaztcbn1cbi5zaG93ZWR7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMTJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7XG59XG5cblxuXG4uZHVtbXlDb250cm9se1xuICAgIHdpZHRoOiA0MCU7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCAjYWViYWNhO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuLm1zZ09wdGlvbntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNDVweDtcbn1cbi5tc2dPcHRpb24gbWF0LWZvcm0tZmllbGR7XG4gICAgd2lkdGg6IDkwJTtcbn1cbi5kdW1teU1lc3NhZ2Vze1xuICAgIHdpZHRoOiA1NSU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uZHVhbFNlbGVjdG9ye1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDZweDtcbn1cblxuXG5cbi5pbnRyb3NwZWN0b3JHcmlke1xuICAgIG1hcmdpbjogMSUgMi41JTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAnaW4gaW4gaW4gb3V0IG91dCBvdXQnXG4gICAgICAnc3QgYmUgYmUgYmUgIGJlICBiZSdcbiAgICAgICdzcCBzcCBzcCBzcCAgc3AgIHNwJztcbiAgICBncmlkLWdhcDogMTBweDtcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcbn1cbi5pbnRyR3JpZEVsZW1lbnR7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZ3JheTsgKi9cbn1cbiNpdGVtMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ3JpZC1hcmVhOiBpbjtcbiAgICAvKiBvdmVyZmxvdy15OiBhdXRvOyAqL1xufVxuI2l0ZW0ye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBncmlkLWFyZWE6IG91dDtcbiAgICAvKiBvdmVyZmxvdy15OiBhdXRvOyAqL1xufVxuI2l0ZW0ze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBncmlkLWFyZWE6IHN0O1xuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4ICNhZWJhY2E7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4jaXRlbTR7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBncmlkLWFyZWE6IGJlO1xuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4ICNhZWJhY2E7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4jaXRlbTV7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBncmlkLWFyZWE6IHNwO1xuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4ICNhZWJhY2E7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4uZXhhbXBsZS10cmVlLWludmlzaWJsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5leGFtcGxlLXRyZWUgdWwsXG4uZXhhbXBsZS10cmVlIGxpIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLmV4YW1wbGUtdHJlZS1ub2RlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmV4YW1wbGUtdHJlZS1ub2RlIC5leGFtcGxlLXRyZWUtbm9kZSB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuLmV4YW1wbGUtdHJlZS1wcm9ncmVzcy1iYXIge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uZXhhbXBsZS10cmVlLW5lc3RlZC1ub2RlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5zcGFue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4uZm9jdXNDbGFzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDExNiwgMjIxKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuXG5cbi5sb2d0YWJsZXtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogMi41JSAyLjUlO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCAjYWViYWNhO1xufVxuLmxvZ3RhYmxlIHRyOm50aC1jaGlsZChldmVuKXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBjNmZmNDI7XG59Il19 */"

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"wrapper\">\n    <mat-toolbar>\n        <button mat-button routerLink=\"/\" id=\"close\">Close</button>\n\n        <span *ngIf=\"isSniffer\">\n            <button mat-button (click)=\"clear()\">Clear</button>\n            <!-- <button mat-button>Open</button>\n            <button mat-button>Save</button>\n            <button mat-button>Write</button> -->\n            <button mat-button (click)=\"addSniffed()\">Do Sniff</button>\n            <button mat-button (click)=\"removeSniffed()\">Don't Sniff</button>\n            <!-- <button mat-button (click)=\"addShowed()\">Show only</button> -->\n        </span>\n\n        <span *ngIf=\"isLog\">\n            <!-- <button mat-button>Set default logging</button> -->\n            <button mat-button (click)=\"startLog()\">Start log</button>\n            <!-- <button mat-button>Stop log</button> -->\n        </span>\n\n        <span *ngIf=\"isDummy\">\n            <!-- <button mat-button>Reset</button> -->\n            <button mat-button (click)=\"sendDummy()\">Send</button>\n            <!-- <button mat-button>Open</button>\n            <button mat-button>Save</button>\n            <button mat-button>Open queue</button>\n            <button mat-button>Save queue</button>\n            <button mat-button>Set as current</button>\n            <button mat-button>Reply</button>\n            <button mat-button>View</button>\n            <button mat-button>Delete</button> -->\n        </span>\n\n        <span *ngIf=\"isIntrospector\">\n            <button mat-button (click)=\"debugOn()\">Debug On</button>\n            <button mat-button (click)=\"debugOff()\">Debug Off</button>\n            <!-- <button mat-button>Step</button>\n            <button mat-button>Break</button>\n            <button mat-button>Slow</button>\n            <button mat-button>Go</button> -->\n        </span>\n\n                \n\n    </mat-toolbar>\n    <div *ngIf=\"isSniffer\" style=\"overflow-y: auto; max-height:92vh; min-height:90vh;\">\n        <div class=\"sniffed\" id=\"other\">\n            Other\n        </div>\n        <div class=\"sniffed\" *ngFor=\"let agent of sniffed\">\n            {{agent}}\n        </div>\n        <div class=\"showed\" *ngFor=\"let agent of showed\">\n            {{agent}}\n        </div>\n        <table class=\"logtable\">\n            <tr>\n                <th> Sender </th>\n                <th> Type </th>\n                <th> Receiver </th>\n                <th> Content </th>\n            </tr>\n            <tr *ngFor=\"let m of snifferMsgList\">\n                <th> {{ m.sender }} </th>\n                <th> {{ m.type }} </th>\n                <th> {{ m.receiver }} </th>\n                <th> {{ m.content }} </th>\n            </tr>\n        </table>\n    </div>\n\n    <div *ngIf=\"isDummy\">\n        <div class=\"dummyControl\">\n            <div class=\"dualSelector\">\n                ACL Message\n            </div>\n            <div class=\"dualSelector\">\n                Envelope\n            </div>\n            <div class=\"msgOption\">\n                <form>\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Sender\" [(ngModel)]=\"sender\"\n                        [ngModelOptions]=\"{standalone: true}\" required=true>\n                    </mat-form-field>\n                </form>\n                <form>\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Receiver\" [(ngModel)]=\"receiver\"\n                        [ngModelOptions]=\"{standalone: true}\" required=false>\n                    </mat-form-field>\n                </form>\n                <mat-form-field>\n                    <mat-label>Communication type</mat-label>\n                    <mat-select [(value)]=\"commtype\">\n                        <mat-option value=0>Accept proposal</mat-option>\n                        <mat-option value=1>Agree</mat-option>\n                        <mat-option value=2>Cancel</mat-option>\n                        <mat-option value=3>Cfp</mat-option>\n                        <mat-option value=4>Confirm</mat-option>\n                        <mat-option value=5>Disconfirm</mat-option>\n                        <mat-option value=6>Failure</mat-option>\n                        <mat-option value=7>Inform</mat-option>\n                        <mat-option value=8>Inform if</mat-option>\n                        <mat-option value=9>Inform ref</mat-option>\n                        <mat-option value=10>Not undersood</mat-option>\n                        <mat-option value=11>Purpose</mat-option>\n                        <mat-option value=12>Query if</mat-option>\n                        <mat-option value=13>Query ref</mat-option>\n                        <mat-option value=14>Refuse</mat-option>\n                        <mat-option value=15>Reject proposal</mat-option>\n                        <mat-option value=16>Request</mat-option>\n                        <mat-option value=17>Request when</mat-option>\n                        <mat-option value=18>Request whenever</mat-option>\n                        <mat-option value=19>Subscribe</mat-option>\n                        <mat-option value=20>Proxy</mat-option>\n                        <mat-option value=21>Propagate</mat-option>\n                    </mat-select>\n                </mat-form-field>\n                <form>\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Content\" [(ngModel)]=\"content\"\n                        [ngModelOptions]=\"{standalone: true}\" required=false>\n                    </mat-form-field>\n                </form>\n                <form>\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Language\" [(ngModel)]=\"language\"\n                        [ngModelOptions]=\"{standalone: true}\" required=false>\n                    </mat-form-field>\n                </form>\n                <form>\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Encoding\" [(ngModel)]=\"encoding\"\n                        [ngModelOptions]=\"{standalone: true}\" required=false>\n                    </mat-form-field>\n                </form>\n                <form>\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Ontology\" [(ngModel)]=\"ontology\"\n                        [ngModelOptions]=\"{standalone: true}\" required=false>\n                    </mat-form-field>\n                </form>\n                <mat-form-field>\n                    <mat-label>Protocol</mat-label>\n                    <mat-select [(value)]=\"protocol\">\n                        <mat-option value=\"Null\">Null</mat-option>\n                        <mat-option value=\"fipa-auction-english\">Fipa-auction-english</mat-option>\n                        <mat-option value=\"fipa-auction-dutch\">Fipa-auction-dutch</mat-option>\n                        <mat-option value=\"fipa-contract-net\">Fipa-contract-net</mat-option>\n                        <mat-option value=\"fipa-iterated-contract-net\">Fipa-iterated-contract-net</mat-option>\n                        <mat-option value=\"fipa-query\">Fipa-query</mat-option>\n                        <mat-option value=\"fipa-request\">Fipa-request</mat-option>\n                        <mat-option value=\"fipa-request-when\">Fipa-request-when</mat-option>\n                        <mat-option value=\"fipa-purpose\">Fipa-purpose</mat-option>\n                        <mat-option value=\"ADD USER-DEF PROTOCOL\">Add user-def protocol</mat-option>\n                    </mat-select>\n                </mat-form-field>\n                <form>\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Conversation\" [(ngModel)]=\"conversation\"\n                        [ngModelOptions]=\"{standalone: true}\" required=false>\n                    </mat-form-field>\n                </form>\n                <form>\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"In reply to\" [(ngModel)]=\"repto\"\n                        [ngModelOptions]=\"{standalone: true}\" required=false>\n                    </mat-form-field>\n                </form>\n                <form>\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Reply with\" [(ngModel)]=\"repw\"\n                        [ngModelOptions]=\"{standalone: true}\" required=false>\n                    </mat-form-field>\n                </form>\n            </div>\n        </div>\n        <div class=\"dummyMessages\">\n            <table class=\"logtable\">\n                <tr>\n                    <th> Sender </th>\n                    <th> Type </th>\n                    <th> Receiver </th>\n                    <th> Content </th>\n                </tr>\n                <tr *ngFor=\"let m of dummyMsgList\">\n                    <th> {{ m.sender }} </th>\n                    <th> {{ m.type }} </th>\n                    <th> {{ m.receiver }} </th>\n                    <th> {{ m.content }} </th>\n                </tr>\n            </table>\n        </div>\n    </div>\n        \n        <div *ngIf=\"isLog\" style=\"overflow-y: auto; max-height:92vh; min-height:90vh;\">\n            <table class=\"logtable\">\n                <tr>\n                    <th> Name </th>\n                    <th> Level </th>\n                </tr>\n                <tr *ngFor=\"let l of logs\">\n                    <th> {{ l.name }} </th>\n                    <th> {{ l.level }} </th>\n                </tr>\n            </table>\n    </div>\n\n    <div *ngIf=\"isIntrospector\" class=\"introspectorGrid\">\n        <div class=\"intrGridElement\" id=\"item1\">\n            <p>Incoming Messages</p>\n            <!-- <div class=\"dualSelector\">\n                Pending\n            </div>\n            <div class=\"dualSelector\">\n                Received\n            </div> -->\n            <table class=\"logtable\">\n                <tr>\n                    <th> Sender </th>\n                    <th> Type </th>\n                    <th> Receiver </th>\n                    <th> Content </th>\n                </tr>\n                <tr *ngFor=\"let m of receivedMsgList\">\n                    <th> {{ m.sender }} </th>\n                    <th> {{ m.type }} </th>\n                    <th> {{ m.receiver }} </th>\n                    <th> {{ m.content }} </th>\n                </tr>\n            </table>\n        </div>\n        <div class=\"intrGridElement\" id=\"item2\">\n            <p>Outgoing Messages</p>\n            <!-- <div class=\"dualSelector\">\n                Pending\n            </div>\n            <div class=\"dualSelector\">\n                Received\n            </div> -->\n            <table class=\"logtable\">\n                <tr>\n                    <th> Sender </th>\n                    <th> Type </th>\n                    <th> Receiver </th>\n                    <th> Content </th>\n                </tr>\n                <tr *ngFor=\"let m of sentMsgList\">\n                    <th> {{ m.sender }} </th>\n                    <th> {{ m.type }} </th>\n                    <th> {{ m.receiver }} </th>\n                    <th> {{ m.content }} </th>\n                </tr>\n            </table>\n        </div>\n        <div class=\"intrGridElement\" id=\"item3\">\n            Current State\n            <p>{{ state }}</p>\n        </div>\n        <div class=\"intrGridElement\" id=\"item4\">\n            Behaviours\n            <cdk-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n                <!-- This is the tree node template for leaf nodes -->\n                <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\">\n                    <!-- use a disabled button to provide padding for tree leaf -->\n                    <button mat-icon-button disabled *ngIf='node.name;else other_content'></button>\n                    <span tabindex=\"1\" (click)=\"focus(node.name)\" [ngClass]=\"{focusClass: selected == node.name}\">\n                        {{node.name}}\n                    </span>\n                    <!-- <ng-template #other_content>Qui se non esiste il nome della cartella ma solo gli agenti</ng-template> -->\n                    <!-- {{node.agents.name}} -->\n                </cdk-nested-tree-node>\n                <!-- This is the tree node template for expandable nodes -->\n                \n            \n            \n                <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"example-tree-node\">\n                    <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.name\" cdkTreeNodeToggle>\n                        <mat-icon class=\"mat-icon-rtl-mirror\">\n                            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n                        </mat-icon>\n                    </button>\n                    <span tabindex=\"1\" (click)=\"focus(node.name)\" [ngClass]=\"{focusClass: selected == node.name}\">\n                        {{node.name}}\n                    </span>\n                    <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n                        <ng-container cdkTreeNodeOutlet></ng-container>\n                    </div>\n                </cdk-nested-tree-node>\n            </cdk-tree>\n        </div>\n        <div *ngIf=\"detail\" class=\"intrGridElement\" id=\"item5\">\n            <ul>\n                <li>Name: {{ selected }}</li>\n                <li>Class: {{ class }}</li>\n                <li>Kind: {{ kind }}</li>\n            </ul>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-transfer.service */ "./src/app/data-transfer.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");









var TestComponent = /** @class */ (function () {
    function TestComponent(route, dataService, snackBar, http) {
        this.route = route;
        this.dataService = dataService;
        this.snackBar = snackBar;
        this.http = http;
        this.isSniffer = false;
        this.isDummy = false;
        this.isIntrospector = false;
        this.isLog = false;
        this.sniffed = [];
        this.showed = [];
        this.sniffing = false;
        this.logging = false;
        this.debugging = false;
        this.commtype = 7;
        this.language = "fipa-sl0";
        this.snifferMsgList = [];
        this.dummyMsgList = [];
        this.logs = [];
        this.behaviours = [];
        this.sentMsgList = [];
        this.receivedMsgList = [];
        this.postedMsgList = [];
        this.detail = false;
        this.VOID_DATA = [];
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["NestedTreeControl"](function (b) { return b.allChildren; });
        this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](this.behaviours);
        this.hasChild = function (_, b) { return !!b.allChildren && b.allChildren.length > 0; };
    }
    TestComponent.prototype.focus = function (selected_) {
        var _this = this;
        // FIXME: does work only for <= 3 level subBehaviour
        this.behaviours.forEach(function (b) {
            if (!b.simple) {
                b.allChildren.forEach(function (bb) {
                    if (!bb.simple) {
                        bb.allChildren.forEach(function (bbb) {
                            if (bbb.name === selected_) {
                                _this.selected = selected_;
                                _this.class = bbb.className;
                                _this.kind = bbb.kind;
                            }
                        });
                    }
                    if (bb.name === selected_) {
                        _this.selected = selected_;
                        _this.class = bb.className;
                        _this.kind = bb.kind;
                    }
                });
            }
            if (b.name === selected_) {
                _this.selected = selected_;
                _this.class = b.className;
                _this.kind = b.kind;
            }
        });
        this.detail = true;
    };
    TestComponent.prototype.newMessages = function (data) {
        var list = [];
        var msg = { sender: null, type: null, receiver: null, content: null };
        for (var i in data) {
            var s = void 0;
            s = JSON.stringify(data[i]);
            msg.sender = s.substring(s.indexOf(":sender") + 33, s.indexOf("@"));
            msg.type = s.substring(2, s.indexOf("\\"));
            if (s.indexOf(":receiver") !== -1 && s.indexOf(":content") !== -1) {
                msg.receiver = s.substring(s.indexOf(":receiver"), s.indexOf(":content"));
                var rec = "";
                for (var j = 0; j < msg.receiver.length; j++) {
                    if (msg.receiver.charAt(j) == "@") {
                        var k = 0;
                        while (msg.receiver.charAt(j - k) !== " ") {
                            k++;
                        }
                        rec = rec + msg.receiver.substring(j - k, j) + " ";
                    }
                }
                msg.receiver = rec;
            }
            else if (s.indexOf(":receiver") !== -1) {
                msg.receiver = s.substring(s.indexOf(":receiver"), s.length);
                var rec = "";
                for (var j = 0; j < msg.receiver.length; j++) {
                    if (msg.receiver.charAt(j) == "@") {
                        var k = 0;
                        while (msg.receiver.charAt(j - k) !== " ") {
                            k++;
                        }
                        rec = rec + msg.receiver.substring(j - k, j) + " ";
                    }
                }
                msg.receiver = rec;
            }
            else {
                msg.receiver = "?";
            }
            if (s.indexOf(":content") !== -1) {
                msg.content = s.substring(s.indexOf(":content") + 8, s.length - 1);
            }
            else {
                msg.content = "empty";
            }
            list = list.concat({
                sender: msg.sender,
                type: msg.type,
                receiver: msg.receiver,
                content: msg.content,
            });
            // console.log(msg.type);
        }
        return list;
    };
    TestComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name;
        this.route.data.subscribe(function (data) { return name = data['name']; });
        console.log(name);
        if (name == 'sniffer') {
            this.isSniffer = true;
            this.isDummy = false;
            this.isIntrospector = false;
            this.isLog = false;
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set("container", this.dataService.selection);
            this.http.get('http://localhost:2020/sniffer', {
                params: params, responseType: 'text'
            }).subscribe(function (data) {
                _this.dataService.add("sniffer" + data, _this.dataService.selection);
            });
            this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(2000);
            this.subscription = this.timer.subscribe(function (val) {
                if (_this.sniffing === true) {
                    _this.http.get('http://localhost:2020/getSniffedMsg').subscribe(function (data) {
                        _this.snifferMsgList = _this.snifferMsgList.concat(_this.newMessages(data));
                    });
                }
            });
        }
        else if (name == 'dummy') {
            this.isDummy = true;
            this.isSniffer = false;
            this.isIntrospector = false;
            this.isLog = false;
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set("container", this.dataService.selection);
            this.http.get('http://localhost:2020/dummy', {
                params: params, responseType: 'text'
            }).subscribe(function (data) {
                _this.dataService.add("da" + data, _this.dataService.selection);
                _this.sender = "da" + data;
            });
            this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(2000);
            this.subscription = this.timer.subscribe(function (val) {
                console.log("asking for messages");
                _this.http.get('http://localhost:2020/getDummyMsg').subscribe(function (data) {
                    _this.dummyMsgList = _this.dummyMsgList.concat(_this.newMessages(data));
                });
            });
        }
        else if (name == 'introspector') {
            this.isIntrospector = true;
            this.isSniffer = false;
            this.isDummy = false;
            this.isLog = false;
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set("container", this.dataService.selection);
            this.http.get('http://localhost:2020/introspector', {
                params: params, responseType: 'text'
            }).subscribe(function (data) {
                _this.dataService.add("introspector" + data, _this.dataService.selection);
            });
            this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(2000);
            this.subscription = this.timer.subscribe(function (val) {
                if (_this.debugging === true) {
                    _this.http.get('http://localhost:2020/getBehaviours', {
                        responseType: 'json'
                    }).subscribe(function (data) {
                        var b;
                        var n = 0;
                        for (var i in data) {
                            n++;
                            b = JSON.parse(JSON.stringify(data[i]));
                            if (_this.behaviours.includes(b)) {
                                _this.behaviours = _this.behaviours.filter(function (item) { return item !== b; });
                            }
                            else if (_this.behaviours.length < n) {
                                _this.behaviours = _this.behaviours.concat(b);
                            }
                        }
                        _this.tree.renderNodeChanges(_this.VOID_DATA);
                        _this.tree.renderNodeChanges(_this.behaviours);
                    });
                    _this.http.get('http://localhost:2020/getCurrentState', {
                        responseType: 'text'
                    }).subscribe(function (data) {
                        _this.state = data;
                    });
                    _this.http.get('http://localhost:2020/getSentMsg').subscribe(function (data) {
                        _this.sentMsgList = _this.sentMsgList.concat(_this.newMessages(data));
                    });
                    _this.http.get('http://localhost:2020/getReceivedMsg').subscribe(function (data) {
                        _this.receivedMsgList = _this.receivedMsgList.concat(_this.newMessages(data));
                    });
                    _this.http.get('http://localhost:2020/getPostedMsg').subscribe(function (data) {
                        _this.postedMsgList = _this.postedMsgList.concat(_this.newMessages(data));
                    });
                }
            });
        }
        else if (name == 'log-manager') {
            this.isLog = true;
            this.isSniffer = false;
            this.isDummy = false;
            this.isIntrospector = false;
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set("container", this.dataService.selection);
            this.http.get('http://localhost:2020/log', {
                params: params, responseType: 'text'
            }).subscribe(function (data) {
                _this.dataService.add("log" + data, _this.dataService.selection);
            });
            this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(2000);
            this.subscription = this.timer.subscribe(function (val) {
                if (_this.logging === true) {
                    _this.http.get('http://localhost:2020/startLog', {
                        responseType: 'json'
                    }).subscribe(function (data) {
                        var log;
                        for (var i in data) {
                            log = JSON.parse(JSON.stringify(data[i]));
                            _this.logs = _this.logs.concat(log);
                        }
                    });
                }
            });
        }
    };
    TestComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        console.log("destroyed");
    };
    TestComponent.prototype.addSniffed = function () {
        var selection = ''; // localName only
        var index = this.dataService.selection.indexOf('@');
        if (index != -1) {
            for (var i = 0; i < index; i++) {
                selection = selection.concat(this.dataService.selection.charAt(i));
            }
            this.sniffed.push(selection);
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set("name", selection);
            this.http.get('http://localhost:2020/doSniff', {
                params: params
            }).subscribe(function (data) { return console.log(data); });
        }
        else {
            this.snackBar.open("You must select an agent from the tree", "Dismiss", {
                duration: 4000,
            });
        }
        if (this.sniffed.length !== 0) {
            this.sniffing = true;
        }
    };
    TestComponent.prototype.removeSniffed = function () {
        var selection = ''; // localName only
        var index = this.dataService.selection.indexOf('@');
        if (index != -1) {
            for (var i = 0; i < index; i++) {
                selection = selection.concat(this.dataService.selection.charAt(i));
            }
            this.showed = this.showed.filter(function (obj) { return obj !== selection; });
            this.sniffed = this.sniffed.filter(function (obj) { return obj !== selection; });
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set("name", selection);
            this.http.get('http://localhost:2020/doNotSniff', {
                params: params
            }).subscribe(function (data) { return console.log(data); });
        }
        else {
            this.snackBar.open("You must select an agent from the tree", "Dismiss", {
                duration: 4000,
            });
        }
        if (this.sniffed.length === 0) {
            this.sniffing = false;
        }
    };
    TestComponent.prototype.addShowed = function () {
        var selection = '';
        var index = this.dataService.selection.indexOf('@');
        if (index != -1) {
            for (var i = 0; i < index; i++) {
                selection = selection.concat(this.dataService.selection.charAt(i));
            }
            this.showed.push(selection);
        }
        else {
            this.snackBar.open("You must select an agent from the tree", "Dismiss", {
                duration: 4000,
            });
        }
    };
    TestComponent.prototype.clear = function () {
        this.snifferMsgList = [];
    };
    TestComponent.prototype.startLog = function () {
        this.logging = true;
    };
    TestComponent.prototype.sendDummy = function () {
        console.log("pressed");
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set("senderName", this.sender)
            .set("receiverName", this.receiver)
            .set("commType", this.commtype.toString())
            .set("content", this.content)
            .set("ontology", this.ontology)
            .set("language", this.language)
            .set("protocol", this.protocol)
            .set("conversation", this.conversation)
            .set("repTo", this.repto)
            .set("repWith", this.repw)
            .set("encoding", this.encoding);
        this.http.get('http://localhost:2020/sendDummy', {
            params: params
        }).subscribe(function (data) { return console.log(data); });
        console.log("end");
    };
    TestComponent.prototype.debugOn = function () {
        this.debugging = true;
        console.log(this.dataService.selection);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set("name", this.dataService.selection);
        this.http.get('http://localhost:2020/debugOn', {
            params: params
        }).subscribe(function (data) {
            console.log(data);
        });
    };
    TestComponent.prototype.debugOff = function () {
        var _this = this;
        this.debugging = false;
        console.log(this.dataService.selection);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set("name", this.dataService.selection);
        this.http.get('http://localhost:2020/debugOff', {
            params: params
        }).subscribe(function (data) {
            console.log(data);
            _this.behaviours = [];
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tree'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TestComponent.prototype, "tree", void 0);
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_transfer_service__WEBPACK_IMPORTED_MODULE_3__["DataTransferService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/tree/tree.component.css":
/*!*****************************************!*\
  !*** ./src/app/tree/tree.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tree-invisible {\n    display: none;\n  }\n  \n  .example-tree ul,\n  .example-tree li {\n    margin-top: 0;\n    margin-bottom: 0;\n    list-style-type: none;\n  }\n  \n  .example-tree-node {\n    display: block;\n  }\n  \n  .example-tree-node .example-tree-node {\n    padding-left: 40px;\n  }\n  \n  .example-tree-progress-bar {\n    margin-left: 30px;\n  }\n  \n  .example-tree-nested-node {\n    padding-left: 30px;\n  }\n  \n  /* span:focus{\n      outline: none;\n  } */\n  \n  span{\n      cursor: pointer;\n      border: 5px solid transparent;\n      padding-right: 8px;\n  }\n  \n  .focusClass{\n    background-color: rgb(92, 116, 221);\n    color: white;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlZS90cmVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7O0VBRUE7O0lBRUUsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixxQkFBcUI7RUFDdkI7O0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBOztLQUVHOztFQUNIO01BQ0ksZUFBZTtNQUNmLDZCQUE2QjtNQUM3QixrQkFBa0I7RUFDdEI7O0VBQ0E7SUFDRSxtQ0FBbUM7SUFDbkMsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvdHJlZS90cmVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS10cmVlLWludmlzaWJsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtdHJlZSB1bCxcbiAgLmV4YW1wbGUtdHJlZSBsaSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuICAuZXhhbXBsZS10cmVlLW5vZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuZXhhbXBsZS10cmVlLW5vZGUgLmV4YW1wbGUtdHJlZS1ub2RlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIH1cblxuICAuZXhhbXBsZS10cmVlLXByb2dyZXNzLWJhciB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXRyZWUtbmVzdGVkLW5vZGUge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgfVxuXG4gIC8qIHNwYW46Zm9jdXN7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICB9ICovXG4gIHNwYW57XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgfVxuICAuZm9jdXNDbGFzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDExNiwgMjIxKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/tree/tree.component.html":
/*!******************************************!*\
  !*** ./src/app/tree/tree.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <button (click)='platformName()'>platformName</button> -->\n\n<cdk-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <!-- This is the tree node template for leaf nodes -->\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\">\n        <!-- use a disabled button to provide padding for tree leaf -->\n        <button mat-icon-button disabled *ngIf='node.name;else other_content'></button>\n        <span tabindex=\"1\" (click)=\"focus(node.name)\" [ngClass]=\"{focusClass: selected == node.name}\">\n            {{node.name}}\n        </span>\n        <!-- <ng-template #other_content>Qui se non esiste il nome della cartella ma solo gli agenti</ng-template> -->\n        <!-- {{node.agents.name}} -->\n    </cdk-nested-tree-node>\n    <!-- This is the tree node template for expandable nodes -->\n    \n\n\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"example-tree-node\">\n        <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.name\" cdkTreeNodeToggle>\n            <mat-icon class=\"mat-icon-rtl-mirror\">\n                {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n            </mat-icon>\n        </button>\n        <span tabindex=\"1\" (click)=\"focus(node.name)\" [ngClass]=\"{focusClass: selected == node.name}\">\n            {{node.name}}\n        </span>\n        <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n            <ng-container cdkTreeNodeOutlet></ng-container>\n        </div>\n    </cdk-nested-tree-node>\n</cdk-tree>\n\n<!-- <button (click)='expand()'>Add container test button</button> -->"

/***/ }),

/***/ "./src/app/tree/tree.component.ts":
/*!****************************************!*\
  !*** ./src/app/tree/tree.component.ts ***!
  \****************************************/
/*! exports provided: TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-transfer.service */ "./src/app/data-transfer.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var TreeComponent = /** @class */ (function () {
    function TreeComponent(dataService, http) {
        this.dataService = dataService;
        this.http = http;
        this.VOID_DATA = [];
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["NestedTreeControl"](function (node) { return node.childNode; });
        this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["ArrayDataSource"](this.dataService.TREE_DATA);
        this.selected = "";
        this.hasChild = function (_, node) { return !!node.childNode && node.childNode.length > 0; };
    }
    TreeComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService.getTree().then(function (protoTree) {
                            _this.tree.renderNodeChanges(protoTree);
                        })];
                    case 1:
                        _a.sent();
                        this.dataService.refreshStatus.subscribe(function (status) {
                            if (status == true) {
                                _this.tree.renderNodeChanges(_this.VOID_DATA);
                                _this.tree.renderNodeChanges(_this.dataService.TREE_DATA);
                            }
                        });
                        this.interval = setInterval(function () {
                            _this.dataService.updateFromRemote();
                        }, 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    TreeComponent.prototype.focus = function (selected_) {
        this.selected = selected_;
        // any time there is a click on the tree, the selected element is stored in a DataTransferService
        this.dataService.selection = selected_;
    };
    TreeComponent.prototype.addContainer = function () {
        // METODO DI PROVA PER VERIFICARE LA POSSIBILITA DI AGGIORNARE L'ALBERO
        // let agentlist: Node[] = [{
        //     name: '3'
        // }, {
        //     name: '4'
        // }];
        // let newcontainer: Node = {
        //     name: 'Second Container',
        //     childNode: agentlist
        // };
        // this.dataService.TREE_DATA[0].childNode[0].childNode.push(newcontainer);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tree'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TreeComponent.prototype, "tree", void 0);
    TreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tree',
            template: __webpack_require__(/*! ./tree.component.html */ "./src/app/tree/tree.component.html"),
            styles: [__webpack_require__(/*! ./tree.component.css */ "./src/app/tree/tree.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], TreeComponent);
    return TreeComponent;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/giovannicorgiatbondon/Tesi/test-sb/src/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map