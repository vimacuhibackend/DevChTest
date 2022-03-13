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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <title></title>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <style>\n        /* Para realizar el seguimiento correctamente */\n        canvas.drawing, canvas.drawingBuffer {\n            position: absolute;\n            left: 0;\n            top: 0;\n        }\n    </style>\n</head>\n\n<body>\n    <!-- Div para mostrar el escáner -->\n    <div id=\"scanner-container\"></div>\n    <input type=\"button\" id=\"btn\" value=\"Start/Stop the scanner\" />\n\n    <!-- Incluir la biblioteca image-diff -->\n    <script src=\"quagga.min.js\"></script>\n\n    <script>\n        var _scannerIsRunning = false;\n\n        function startScanner() {\n            Quagga.init({\n                inputStream: {\n                    name: \"Live\",\n                    type: \"LiveStream\",\n                    target: document.querySelector('#scanner-container'),\n                    constraints: {\n                        width: 480,\n                        height: 320,\n                        facingMode: \"environment\"\n                    },\n                },\n                decoder: {\n                    readers: [\n                        \"code_128_reader\",\n                        \"ean_reader\",\n                        \"ean_8_reader\",\n                        \"code_39_reader\",\n                        \"code_39_vin_reader\",\n                        \"codabar_reader\",\n                        \"upc_reader\",\n                        \"upc_e_reader\",\n                        \"i2of5_reader\"\n                    ],\n                    debug: {\n                        showCanvas: true,\n                        showPatches: true,\n                        showFoundPatches: true,\n                        showSkeleton: true,\n                        showLabels: true,\n                        showPatchLabels: true,\n                        showRemainingPatchLabels: true,\n                        boxFromPatches: {\n                            showTransformed: true,\n                            showTransformedBox: true,\n                            showBB: true\n                        }\n                    }\n                },\n\n            }, function (err) {\n                if (err) {\n                    console.log(err);\n                    return\n                }\n\n                console.log(\"Initialization finished. Ready to start\");\n                Quagga.start();\n\n                // Establecer bandera en se está ejecutando\n                _scannerIsRunning = true;\n            });\n\n            Quagga.onProcessed(function (result) {\n                var drawingCtx = Quagga.canvas.ctx.overlay,\n                drawingCanvas = Quagga.canvas.dom.overlay;\n\n                if (result) {\n                    if (result.boxes) {\n                        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute(\"width\")), parseInt(drawingCanvas.getAttribute(\"height\")));\n                        result.boxes.filter(function (box) {\n                            return box !== result.box;\n                        }).forEach(function (box) {\n                            Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: \"green\", lineWidth: 2 });\n                        });\n                    }\n\n                    if (result.box) {\n                        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: \"#00F\", lineWidth: 2 });\n                    }\n\n                    if (result.codeResult && result.codeResult.code) {\n                        Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });\n                    }\n                }\n            });\n\n\n            Quagga.onDetected(function (result) {\n                console.log(\"Barcode detected and processed : [\" + result.codeResult.code + \"]\", result);\n            });\n        }\n\n\n        // Iniciar / detener el escáner\n        document.getElementById(\"btn\").addEventListener(\"click\", function () {\n            if (_scannerIsRunning) {\n                Quagga.stop();\n            } else {\n                startScanner();\n            }\n        }, false);\n    </script>\n</body>\n\n</html>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Clientes';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _employee_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee/employee.service */ "./src/app/employee/employee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _employee_add_employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee/add-employee.component */ "./src/app/employee/add-employee.component.ts");
/* harmony import */ var _employee_update_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee/update-employee.component */ "./src/app/employee/update-employee.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeComponent"],
                _employee_add_employee_component__WEBPACK_IMPORTED_MODULE_8__["AddEmployeeComponent"],
                _employee_update_employee_component__WEBPACK_IMPORTED_MODULE_9__["UpdateEmployeeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_employee_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _employee_add_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/add-employee.component */ "./src/app/employee/add-employee.component.ts");
/* harmony import */ var _employee_update_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee/update-employee.component */ "./src/app/employee/update-employee.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'employees', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeComponent"] },
    { path: 'add', component: _employee_add_employee_component__WEBPACK_IMPORTED_MODULE_3__["AddEmployeeComponent"] },
    { path: 'update/:id', component: _employee_update_employee_component__WEBPACK_IMPORTED_MODULE_4__["UpdateEmployeeComponent"] },
    { path: '', redirectTo: '/employees', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/employee/add-employee.component.html":
/*!******************************************************!*\
  !*** ./src/app/employee/add-employee.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Registrar Cliente</h2>\n<form>\n  <div class=\"form-group\">\n    <label for=\"name\">Nombre:</label>\n    <input [(ngModel)]=\"employee.nombreCliente\" placeholder=\"Nombre\" name=\"name\" class=\"form-control\" id=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"surname\">Apellido:</label>\n    <input [(ngModel)]=\"employee.apellidoCliente\" placeholder=\"Apellido\" name=\"surname\" class=\"form-control\"\n      id=\"surname\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"phone\">Fecha de nacimiento:</label>\n    <input type=\"date\" [(ngModel)]=\"employee.fechaNacimientoCliente\" placeholder=\"Fecha de nacimineto\" name=\"phone\"\n      class=\"form-control\" id=\"phone\">\n  </div>\n  <div class=\"form-group text-center\">\n    <button class=\"btn btn-success\" (click)=\"createEmployee()\">Create</button>\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/employee/add-employee.component.ts":
/*!****************************************************!*\
  !*** ./src/app/employee/add-employee.component.ts ***!
  \****************************************************/
/*! exports provided: AddEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function() { return AddEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_employee_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/employee.model */ "./src/app/models/employee.model.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(router, employeeService) {
        this.router = router;
        this.employeeService = employeeService;
        this.employee = new _models_employee_model__WEBPACK_IMPORTED_MODULE_2__["Cliente"]();
    }
    AddEmployeeComponent.prototype.createEmployee = function () {
        var _this = this;
        this.employeeService.createEmployee(this.employee)
            .subscribe(function (data) {
            alert("Cliente registrado con exito.");
            _this.router.navigate(['/employees']);
        });
    };
    ;
    AddEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-create',
            template: __webpack_require__(/*! ./add-employee.component.html */ "./src/app/employee/add-employee.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th class=\"hidden\">Id</th>\n      <th>Nombre</th>\n      <th>Apellido</th>\n      <th>Fecha de nacimiento</th>\n      <th>Edad</th>\n      <th>Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let employee of employees\">\n      <td class=\"hidden\">{{employee.idCliente}}</td>\n      <td>{{employee.nombreCliente}}</td>\n      <td>{{employee.apellidoCliente}}</td>\n      <td>{{employee.fechaNacimientoCliente | date:'dd/MM/yyyy' }}</td>\n      <td>{{employee.edad}}</td>\n      <td>\n        <a [routerLink]=\"['/update', employee.idCliente]\" class=\"btn btn-info\">Update</a> &nbsp;\n        <button class=\"btn btn-danger\" (click)=\"deleteEmployee(employee)\"> Delete</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(router, employeeService) {
        this.router = router;
        this.employeeService = employeeService;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getEmployees()
            .subscribe(function (data) {
            _this.employees = data.data;
        });
    };
    ;
    EmployeeComponent.prototype.deleteEmployee = function (employee) {
        var _this = this;
        this.employeeService.deleteEmployee(employee)
            .subscribe(function (data) {
            _this.employees = _this.employees.filter(function (u) { return u !== employee; });
        });
    };
    ;
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-read',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/employee/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.employeeUrl = 'https://promartapi20220302170655.azurewebsites.net/api/v1/cliente';
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this.employeeUrl);
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.http.get(this.employeeUrl + "/" + id);
    };
    EmployeeService.prototype.deleteEmployee = function (employee) {
        console.log("employee", employee);
        return this.http.delete(this.employeeUrl + "/" + employee.idCliente);
    };
    EmployeeService.prototype.createEmployee = function (employee) {
        return this.http.post(this.employeeUrl, employee);
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        return this.http.put(this.employeeUrl, employee);
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/employee/update-employee.component.html":
/*!*********************************************************!*\
  !*** ./src/app/employee/update-employee.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Actualizar Cliente</h2>\n<form (ngSubmit)=\"updateEmployee()\" #employeeForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"name\">Nombre:</label>\n    <input [(ngModel)]=\"employee.nombreCliente\" placeholder=\"Name\" name=\"name\" class=\"form-control\" id=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"surname\">Apellido:</label>\n    <input [(ngModel)]=\"employee.apellidoCliente\" placeholder=\"Surname\" name=\"surname\" class=\"form-control\"\n      id=\"surname\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"phone\">Fecha de nacimiento:</label>\n    <input type=\"date\" [(ngModel)]=\"employee.fechaNacimientoCliente\" placeholder=\"Phone\" name=\"phone\"\n      class=\"form-control\" id=\"phone\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"phone\">Edad:</label>\n    <input [(ngModel)]=\"employee.edad\" placeholder=\"Phone\" name=\"age\" class=\"form-control\" id=\"age\" disabled>\n  </div>\n  <div class=\"form-group text-center\">\n    <button type=\"submit\" class=\"btn btn-success\">Update</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/employee/update-employee.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/employee/update-employee.component.ts ***!
  \*******************************************************/
/*! exports provided: UpdateEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEmployeeComponent", function() { return UpdateEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateEmployeeComponent = /** @class */ (function () {
    function UpdateEmployeeComponent(router, route, employeeService) {
        this.router = router;
        this.route = route;
        this.employeeService = employeeService;
        this.employee = {};
    }
    UpdateEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getEmployee(this.route.snapshot.params['id'])
            .subscribe(function (data) {
            _this.employee = data;
        });
    };
    ;
    UpdateEmployeeComponent.prototype.updateEmployee = function () {
        var _this = this;
        this.employeeService.updateEmployee(this.employee)
            .subscribe(function (data) {
            alert("Se actualizo el registro con éxito.");
            _this.router.navigate(['/employees']);
        });
    };
    ;
    UpdateEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-update',
            template: __webpack_require__(/*! ./update-employee.component.html */ "./src/app/employee/update-employee.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], UpdateEmployeeComponent);
    return UpdateEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/models/employee.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/employee.model.ts ***!
  \******************************************/
/*! exports provided: Cliente, response */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "response", function() { return response; });
var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    return Cliente;
}());

var response = /** @class */ (function () {
    function response() {
    }
    return response;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\V330\Downloads\angular-crud-rest-api-master\angular-crud-rest-api-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map