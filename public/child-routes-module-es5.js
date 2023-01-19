function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["child-routes-module"], {
  /***/"./src/app/guards/admin.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/guards/admin.guard.ts ***!
    \***************************************/
  /*! exports provided: AdminGuard */
  /***/
  function srcAppGuardsAdminGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
      return AdminGuard;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../services/usuario.service */"./src/app/services/usuario.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    /**
     *
     *
     * @export
     * @class AdminGuard
     * @implements {CanActivate}
     */
    var AdminGuard = /*#__PURE__*/function () {
      function AdminGuard(usuarioService, router) {
        _classCallCheck(this, AdminGuard);
        this.usuarioService = usuarioService;
        this.router = router;
      }
      _createClass(AdminGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.usuarioService.role === 'ADMIN_ROLE') {
            return true;
          } else {
            this.router.navigateByUrl('/dashboard');
            return false;
          }
          /** return (this.usuarioService.role === 'ADMIN_ROLE') ? true : false;*/
        }
      }]);
      return AdminGuard;
    }();
    AdminGuard.ɵfac = function AdminGuard_Factory(t) {
      return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };
    AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminGuard,
      factory: AdminGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();

    /***/
  },

  /***/"./src/app/pages/child-routes.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/child-routes.module.ts ***!
    \**********************************************/
  /*! exports provided: ChildRoutesModule */
  /***/
  function srcAppPagesChildRoutesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChildRoutesModule", function () {
      return ChildRoutesModule;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./dashboard/dashboard.component */"./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */
    var _progress_progress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./progress/progress.component */"./src/app/pages/progress/progress.component.ts");
    /* harmony import */
    var _grafica1_grafica1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./grafica1/grafica1.component */"./src/app/pages/grafica1/grafica1.component.ts");
    /* harmony import */
    var _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./account-settings/account-settings.component */"./src/app/pages/account-settings/account-settings.component.ts");
    /* harmony import */
    var _promesas_promesas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./promesas/promesas.component */"./src/app/pages/promesas/promesas.component.ts");
    /* harmony import */
    var _rxjs_rxjs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./rxjs/rxjs.component */"./src/app/pages/rxjs/rxjs.component.ts");
    /* harmony import */
    var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./perfil/perfil.component */"./src/app/pages/perfil/perfil.component.ts");
    /* harmony import */
    var _mantenimientos_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./mantenimientos/usuarios/usuarios.component */"./src/app/pages/mantenimientos/usuarios/usuarios.component.ts");
    /* harmony import */
    var _mantenimientos_hospitales_hospitales_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./mantenimientos/hospitales/hospitales.component */"./src/app/pages/mantenimientos/hospitales/hospitales.component.ts");
    /* harmony import */
    var _mantenimientos_medicos_medicos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./mantenimientos/medicos/medicos.component */"./src/app/pages/mantenimientos/medicos/medicos.component.ts");
    /* harmony import */
    var _mantenimientos_medicos_medico_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./mantenimientos/medicos/medico.component */"./src/app/pages/mantenimientos/medicos/medico.component.ts");
    /* harmony import */
    var _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./busqueda/busqueda.component */"./src/app/pages/busqueda/busqueda.component.ts");
    /* harmony import */
    var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ../guards/admin.guard */"./src/app/guards/admin.guard.ts");

    /** Mantenimientos*/

    var childRoutes = [{
      path: '',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
      data: {
        titulo: 'Dashboard'
      }
    }, {
      path: 'account-settings',
      component: _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_5__["AccountSettingsComponent"],
      data: {
        titulo: 'Ajustes de cuenta'
      }
    }, {
      path: 'buscar/:termino',
      component: _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_13__["BusquedaComponent"],
      data: {
        titulo: 'Busquedas'
      }
    }, {
      path: 'grafica1',
      component: _grafica1_grafica1_component__WEBPACK_IMPORTED_MODULE_4__["Grafica1Component"],
      data: {
        titulo: 'Gráfica #1'
      }
    }, {
      path: 'perfil',
      component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__["PerfilComponent"],
      data: {
        titulo: 'Perfil de usuario'
      }
    }, {
      path: 'progress',
      component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_3__["ProgressComponent"],
      data: {
        titulo: 'ProgressBar'
      }
    }, {
      path: 'promesas',
      component: _promesas_promesas_component__WEBPACK_IMPORTED_MODULE_6__["PromesasComponent"],
      data: {
        titulo: 'Promesas'
      }
    }, {
      path: 'rxjs',
      component: _rxjs_rxjs_component__WEBPACK_IMPORTED_MODULE_7__["RxjsComponent"],
      data: {
        titulo: 'RxJs'
      }
    }, /** Mantenimientos*/
    {
      path: 'hospitales',
      component: _mantenimientos_hospitales_hospitales_component__WEBPACK_IMPORTED_MODULE_10__["HospitalesComponent"],
      data: {
        titulo: 'Matenimiento de Hospitales'
      }
    }, {
      path: 'medicos',
      component: _mantenimientos_medicos_medicos_component__WEBPACK_IMPORTED_MODULE_11__["MedicosComponent"],
      data: {
        titulo: 'Matenimiento de Medicos'
      }
    }, {
      path: 'medico/:id',
      component: _mantenimientos_medicos_medico_component__WEBPACK_IMPORTED_MODULE_12__["MedicoComponent"],
      data: {
        titulo: 'Matenimiento de Medicos'
      }
    }, /** Rutas de Admin*/
    {
      path: 'usuarios',
      canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_14__["AdminGuard"]],
      component: _mantenimientos_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_9__["UsuariosComponent"],
      data: {
        titulo: 'Matenimiento de Usuarios'
      }
    }];
    var ChildRoutesModule = /*#__PURE__*/_createClass(function ChildRoutesModule() {
      _classCallCheck(this, ChildRoutesModule);
    });
    ChildRoutesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChildRoutesModule
    });
    ChildRoutesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChildRoutesModule_Factory(t) {
        return new (t || ChildRoutesModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(childRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });
    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChildRoutesModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChildRoutesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(childRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();

    /***/
  }
}]);
//# sourceMappingURL=child-routes-module-es5.js.map