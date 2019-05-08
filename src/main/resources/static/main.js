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
    { path: 'test', component: _test_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"] }
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

module.exports = "\n.drawer{\n    height: 100vh;\n}\nbutton{\n    padding-left: 6px;\n    padding-right: 6px;\n    min-width: 0px;\n    margin: 0 6px;\n}\nmat-toolbar button{\n    background-color: rgb(92, 116, 221);\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmRyYXdlcntcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuYnV0dG9ue1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgICBtYXJnaW46IDAgNnB4O1xufVxubWF0LXRvb2xiYXIgYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMTE2LCAyMjEpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<mat-drawer-container autosize class=\"drawer\" (contextmenu)=\"rightClick()\">\n    <mat-drawer mode=\"side\" opened>\n        <app-main-menu [selection]=\"selection\"></app-main-menu>\n    </mat-drawer>\n\n\n    <mat-toolbar>\n        <!-- <button mat-button><i class=\"material-icons\">add_circle</i></button>\n        <button mat-button><i class=\"material-icons\">cancel</i></button>\n        <button mat-button><i class=\"material-icons\">pause_circle_filled</i></button>\n        <button mat-button><i class=\"material-icons\">play_circle_filled</i></button>\n        <button mat-button><i class=\"material-icons\">drafts</i></button>\n        <button mat-button><i class=\"material-icons\">swap_vertical_circle</i></button>\n        <button mat-button><i class=\"material-icons\">supervised_user_circle</i></button>\n        <button mat-button><i class=\"material-icons\">description</i></button>\n        <button mat-button><i class=\"material-icons\">save</i></button>\n        <button mat-button><i class=\"material-icons\">ac_unit</i></button>\n        <button mat-button><i class=\"material-icons\">whatshot</i></button>\n        <button mat-button><i class=\"material-icons\">visibility</i></button>\n        <button mat-button><i class=\"material-icons\">face</i></button>\n        <button mat-button><i class=\"material-icons\">receipt</i></button>\n        <button mat-button><i class=\"material-icons\">bug_report</i></button> -->\n        <button mat-button (click)=\"sayHello()\">Say Hello</button>\n        <button mat-button (click)=\"changeName()\">Change name</button>\n        <button mat-button routerLink=\"/test\" (click)=\"expand()\">Router Test</button>\n    </mat-toolbar>\n\n    <div style=\"display: grid; grid-template-rows: 100%; height: 90%;\" [style.grid-template-columns]=\"gridlayout\">\n        <!-- FIXME: standard divs are preferred over mat-card -->\n        <mat-card class=\"card\">\n            <app-tree (emitter)=\"eventListener($event)\"></app-tree>\n        </mat-card>\n\n        <mat-card class=\"card\">\n            <p>{{return}}</p>\n        </mat-card>\n\n        <div>\n            <router-outlet></router-outlet>\n            <button mat-button routerLink=\"/\" (click)=\"unexpand()\">Close</button>\n        </div>\n    </div>\n\n\n\n\n\n</mat-drawer-container>"

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



var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'Test-sb';
        this.return = '';
        this.gridlayout = '50% 50%';
        this.selection = '';
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
    AppComponent.prototype.expand = function () {
        this.gridlayout = '33.3% 33.4% 33.3%';
    };
    AppComponent.prototype.unexpand = function () {
        this.gridlayout = '50% 50%';
    };
    AppComponent.prototype.rightClick = function () {
        console.log("right click");
        // return false;
    };
    AppComponent.prototype.eventListener = function ($event) {
        this.selection = $event;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tree/tree.component */ "./src/app/tree/tree.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");



























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
                _tree_tree_component__WEBPACK_IMPORTED_MODULE_23__["TreeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_22__["CdkTreeModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
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

/***/ "./src/app/main-menu/main-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nmat-expansion-panel p{\n    cursor: pointer;\n}\nmat-expansion-panel p:hover{\n    color: rgb(92, 116, 221);\n    background-color: rgba(1, 1, 1, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbm1hdC1leHBhbnNpb24tcGFuZWwgcHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5tYXQtZXhwYW5zaW9uLXBhbmVsIHA6aG92ZXJ7XG4gICAgY29sb3I6IHJnYig5MiwgMTE2LCAyMjEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMSwgMSwgMC4xKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\n     <mat-expansion-panel>\n          <mat-expansion-panel-header>\n               <mat-panel-title>\n                    File\n               </mat-panel-title>\n          </mat-expansion-panel-header>\n          <p>Close RMA agent</p>\n          <p>Exit this container</p>\n          <p>Shut down AgentPlatform</p>\n     </mat-expansion-panel>\n     <mat-expansion-panel>\n          <mat-expansion-panel-header>\n               <mat-panel-title>\n                    Actions\n               </mat-panel-title>\n          </mat-expansion-panel-header>\n          <p (click)=\"startDialog()\">Start new agent</p>\n          <p (click)=\"securityDialog('kill')\">Kill</p>\n          <p (click)=\"securityDialog('suspend')\">Suspend</p>\n          <p (click)=\"securityDialog('resume')\">Resume</p>\n          <!-- <p (click)=\"messageDialog()\">Send message</p> -->\n          <p (click)=\"cloneDialog('Migrate')\">Migrate agent</p>\n          <p (click)=\"cloneDialog('Clone')\">Clone agent</p>\n          <p>Load agent</p>\n          <p (click)=\"securityDialog('save')\">Save agent</p>\n          <p (click)=\"securityDialog('freeze')\">Freeze agent</p>\n          <!-- FIXME: THAW need a container as input, maybe cloneDialog can be used -->\n          <p>Thaw agent</p>\n     </mat-expansion-panel>\n     <mat-expansion-panel>\n          <mat-expansion-panel-header>\n               <mat-panel-title>\n                    Tools\n               </mat-panel-title>\n          </mat-expansion-panel-header>\n          <p routerLink=\"/sniffer\">Start sniffer</p>\n          <p>Start dummy agent</p>\n          <p>Show the DF GUI</p>\n          <p routerLink=\"/introspector\">Start introspector agent</p>\n          <p routerLink=\"/logmanager\">Start log manager agent</p>\n     </mat-expansion-panel>\n     <mat-expansion-panel>\n          <mat-expansion-panel-header>\n               <mat-panel-title>\n                    Remote Platforms\n               </mat-panel-title>\n          </mat-expansion-panel-header>\n          <p>Add platform via AMS AID</p>\n          <p>Add platform via URL</p>\n          <p>View AP description</p>\n          <p>Refresh AP description</p>\n          <p>Remove remote platform</p>\n          <p>Refresh agent list</p>\n     </mat-expansion-panel>\n     <mat-expansion-panel>\n          <mat-expansion-panel-header>\n               <mat-panel-title>\n                    Help\n               </mat-panel-title>\n          </mat-expansion-panel-header>\n          <p>About Jade</p>\n     </mat-expansion-panel>\n</mat-accordion>"

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






var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.selection = '';
    }
    MainMenuComponent.prototype.ngOnInit = function () { };
    MainMenuComponent.prototype.startDialog = function () {
        this.startDialogRef = this.dialog.open(_start_dialog_start_dialog_component__WEBPACK_IMPORTED_MODULE_3__["StartDialogComponent"]);
    };
    MainMenuComponent.prototype.cloneDialog = function (title) {
        this.cloneDialogRef = this.dialog.open(_clone_dialog_clone_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CloneDialogComponent"], {
            data: {
                1: title,
                2: this.selection
            }
        });
        this.snackBar.open("Warning: Some agents might not be able to migrate or be cloned because of lack of serialization support in their implementation. If you are not sure about the  implemementation of this agent, Cancel this operation.", "Dismiss", {
            duration: 16000,
        });
    };
    MainMenuComponent.prototype.securityDialog = function (title) {
        this.securityDialogRef = this.dialog.open(_security_dialog_security_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SecurityDialogComponent"], {
            data: {
                1: title,
                2: this.selection
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MainMenuComponent.prototype, "selection", void 0);
    MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/main-menu/main-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
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
    };
    SecurityDialogComponent.prototype.send = function () {
        console.log(this.selection);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("name", this.selection);
        if (this.title == 'kill') {
            this.http.get('http://localhost:2020/kill', { params: params }).subscribe(function (data) { return console.log(data); });
        }
        else if (this.title == 'suspend') {
            this.http.get('http://localhost:2020/suspend', { params: params }).subscribe(function (data) { return console.log(data); });
        }
        else if (this.title == 'resume') {
            this.http.get('http://localhost:2020/resume', { params: params }).subscribe(function (data) { return console.log(data); });
        }
        else if (this.title == 'freeze') {
            this.http.get('http://localhost:2020/freeze', { params: params }).subscribe(function (data) { return console.log(data); });
        }
        else if (this.title == 'thaw') {
            this.http.get('http://localhost:2020/thaw', { params: params }).subscribe(function (data) { return console.log(data); });
        }
        else if (this.title == 'save') {
            this.http.get('http://localhost:2020/save', { params: params }).subscribe(function (data) { return console.log(data); });
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
    StartDialogComponent.prototype.ngOnInit = function () { };
    StartDialogComponent.prototype.send = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("name", this.name).set("clas", this.clas).set("args", this.args).set("owner", this.own).set("container", this.cont);
        this.http.get('http://localhost:2020/start', {
            params: params
        }).subscribe(function (data) { return console.log(data); });
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card class=\"card\">\n    <p>\n      test works!\n    </p>\n</mat-card>\n\n"

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


var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () { };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = ".example-tree-invisible {\n    display: none;\n  }\n  \n  .example-tree ul,\n  .example-tree li {\n    margin-top: 0;\n    margin-bottom: 0;\n    list-style-type: none;\n  }\n  \n  .example-tree-node {\n    display: block;\n  }\n  \n  .example-tree-node .example-tree-node {\n    padding-left: 40px;\n  }\n  \n  .example-tree-progress-bar {\n    margin-left: 30px;\n  }\n  \n  .example-tree-nested-node {\n    padding-left: 30px;\n  }\n  \n  span:focus{\n      outline: none;\n  }\n  \n  span{\n      cursor: pointer;\n  }\n  \n  .focusClass{\n    background-color: rgb(92, 116, 221);\n    color: white;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlZS90cmVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7O0VBRUE7O0lBRUUsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixxQkFBcUI7RUFDdkI7O0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO01BQ0ksYUFBYTtFQUNqQjs7RUFDQTtNQUNJLGVBQWU7RUFDbkI7O0VBQ0E7SUFDRSxtQ0FBbUM7SUFDbkMsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvdHJlZS90cmVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS10cmVlLWludmlzaWJsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtdHJlZSB1bCxcbiAgLmV4YW1wbGUtdHJlZSBsaSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuICAuZXhhbXBsZS10cmVlLW5vZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuZXhhbXBsZS10cmVlLW5vZGUgLmV4YW1wbGUtdHJlZS1ub2RlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIH1cblxuICAuZXhhbXBsZS10cmVlLXByb2dyZXNzLWJhciB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXRyZWUtbmVzdGVkLW5vZGUge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgfVxuXG4gIHNwYW46Zm9jdXN7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIHNwYW57XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmZvY3VzQ2xhc3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAxMTYsIDIyMSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/tree/tree.component.html":
/*!******************************************!*\
  !*** ./src/app/tree/tree.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <button (click)='platformName()'>platformName</button> -->\n\n<cdk-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <!-- This is the tree node template for leaf nodes -->\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\">\n        <!-- use a disabled button to provide padding for tree leaf -->\n        <button mat-icon-button disabled *ngIf='node.name;else other_content'></button>\n        <span tabindex=\"1\" (click)=\"focus(node.name)\" [ngClass]=\"{focusClass: selected == node.name}\">\n            {{node.name}}\n        </span>\n        <ng-template #other_content>Qui se non esiste il nome della cartella ma solo gli agenti</ng-template>\n        <!-- {{node.agents.name}} -->\n    </cdk-nested-tree-node>\n    <!-- This is the tree node template for expandable nodes -->\n    \n\n\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"example-tree-node\">\n        <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.name\" cdkTreeNodeToggle>\n            <mat-icon class=\"mat-icon-rtl-mirror\">\n                {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n            </mat-icon>\n        </button>\n        <span tabindex=\"1\" (click)=\"focus(node.name)\" [ngClass]=\"{focusClass: selected == node.name}\">\n            {{node.name}}\n        </span>\n        <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n            <ng-container cdkTreeNodeOutlet></ng-container>\n        </div>\n    </cdk-nested-tree-node>\n</cdk-tree>\n\n<button (click)='addContainer()'>Add container test button</button>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var TreeComponent = /** @class */ (function () {
    function TreeComponent(http) {
        this.http = http;
        this.VOID_DATA = [];
        this.TREE_DATA = [];
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["NestedTreeControl"](function (node) { return node.childNode; });
        this.dataSource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["ArrayDataSource"](this.TREE_DATA);
        this.platform = '';
        this.container = '';
        this.agents = [];
        this.selected = '';
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasChild = function (_, node) { return !!node.childNode && node.childNode.length > 0; };
    }
    TreeComponent.prototype.ngOnInit = function () {
        this.populateTree();
    };
    TreeComponent.prototype.focus = function (selected_) {
        this.selected = selected_;
        // any time there is a click on the tree, the event is sent to parent component
        this.emitter.emit(this.selected);
        // FIXME: also on every click the tree is updated
    };
    TreeComponent.prototype.populateTree = function () {
        var _this = this;
        this.http.get('http://localhost:2020/containerName', {
            responseType: 'text'
        }).subscribe(function (data) {
            _this.container = data;
            console.log(_this.container);
            _this.http.get('http://localhost:2020/platformName', {
                responseType: 'text'
            }).subscribe(function (data) {
                _this.platform = data;
                console.log(_this.platform);
                _this.http.get('http://localhost:2020/agentsName').subscribe(function (data) {
                    console.log(data);
                    console.log(typeof data);
                    var agentlist = [];
                    for (var i in data) {
                        _this.agents.push(data[i]);
                        var ag = new Node(_this.agents[i]);
                        agentlist.push(ag);
                    }
                    var maincontainer = [{
                            name: _this.container,
                            childNode: agentlist
                        }];
                    var ip = [{
                            name: _this.platform,
                            childNode: maincontainer
                        }];
                    _this.TREE_DATA.push({
                        name: 'Agent Platforms',
                        childNode: ip
                    });
                    _this.tree.renderNodeChanges(_this.TREE_DATA);
                });
            });
        });
    };
    TreeComponent.prototype.addContainer = function () {
        // METODO DI PROVA PER VERIFICARE LA POSSIBILITA DI AGGIORNARE L'ALBERO
        var agentlist = [{
                name: '3'
            }, {
                name: '4'
            }];
        var newcontainer = {
            name: 'Second Container',
            childNode: agentlist
        };
        this.TREE_DATA[0].childNode[0].childNode.push(newcontainer);
        // rendering VOID_DATA is necessary to actually render the modified TREE_DATA
        this.tree.renderNodeChanges(this.VOID_DATA);
        this.tree.renderNodeChanges(this.TREE_DATA);
        console.log(this.TREE_DATA);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tree'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TreeComponent.prototype, "tree", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TreeComponent.prototype, "emitter", void 0);
    TreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tree',
            template: __webpack_require__(/*! ./tree.component.html */ "./src/app/tree/tree.component.html"),
            styles: [__webpack_require__(/*! ./tree.component.css */ "./src/app/tree/tree.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], TreeComponent);
    return TreeComponent;
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