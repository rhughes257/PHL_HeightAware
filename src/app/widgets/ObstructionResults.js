var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/core/accessorSupport/decorators", "esri/widgets/Widget", "dojo/_base/declare", "dojo/dom-class", "dgrid/Grid", "dgrid/Selection", "dstore/Memory", "./viewModels/ObstructionResultsViewModel", "esri/widgets/support/widget"], function (require, exports, __extends, __decorate, decorators_1, Widget, declare, domClass, Grid, Selection, Memory, ObstructionResultsViewModel_1, widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ObstructionResults = (function (_super) {
        __extends(ObstructionResults, _super);
        function ObstructionResults(params) {
            var _this = _super.call(this, params) || this;
            _this.viewModel = new ObstructionResultsViewModel_1.default();
            _this.x = 0;
            _this.y = 0;
            _this.peak = 0;
            _this.name = "Obstruction Results";
            _this.groundElevation = 0;
            _this.count_3d = 0;
            _this.count_2d = 0;
            _this.store3d = new Memory({ data: [] });
            _this.store2d = new Memory({ data: [] });
            return _this;
        }
        ObstructionResults.prototype.postInitialize = function () {
            var _this = this;
            var handle1 = this.watch("layerResults3d", function (newValue, oldValue, property, object) {
                _this.count_3d = newValue.features.length;
                var array3D = _this.viewModel.create3DArray(newValue.features, _this.groundElevation, _this.peak);
                console.log(array3D);
                _this.results3d_grid.renderArray(array3D);
                _this.meta3d.renderArray(array3D);
            });
            var handle2 = this.watch("layerResults2d", function (newValue, oldValue, property, object) {
                _this.count_2d = newValue.features.length;
                var array2D = _this.viewModel.create2DArray(newValue.features);
                console.log(array2D);
                _this.results2d_grid.renderArray(array2D);
                _this.meta2d.renderArray(array2D);
            });
            this.own([handle1, handle2]);
        };
        ObstructionResults.prototype.Click3d = function (element) {
            if (!domClass.contains(element, "is-active")) {
                var link3D = document.getElementById("tab_3d");
                var link3D_meta = document.getElementById("tab-meta_3d");
                var article1 = document.getElementById("results3d");
                var article1_meta = document.getElementById("results3d_meta");
                var link2D = document.getElementById("tab_2d");
                var link2D_meta = document.getElementById("tab-meta_2d");
                var article2 = document.getElementById("results2d");
                var article2_meta = document.getElementById("results2d_meta");
                domClass.add(link3D, "is-active");
                domClass.add(article1, "is-active");
                domClass.remove(link3D_meta, "is-active");
                domClass.remove(link2D_meta, "is-active");
                domClass.remove(article1_meta, "is-active");
                domClass.remove(link2D, "is-active");
                domClass.remove(article2, "is-active");
                domClass.remove(article2_meta, "is-active");
            }
        };
        ObstructionResults.prototype.Click2d = function (element) {
            if (!domClass.contains(element, "is-active")) {
                var link3D = document.getElementById("tab_3d");
                var link3D_meta = document.getElementById("tab-meta_3d");
                var article1 = document.getElementById("results3d");
                var article1_meta = document.getElementById("results3d_meta");
                var link2D = document.getElementById("tab_2d");
                var link2D_meta = document.getElementById("tab-meta_2d");
                var article2 = document.getElementById("results2d");
                var article2_meta = document.getElementById("results2d_meta");
                domClass.add(link2D, "is-active");
                domClass.add(article2, "is-active");
                domClass.remove(link3D_meta, "is-active");
                domClass.remove(link2D_meta, "is-active:);");
                domClass.remove(article2_meta, "is-active");
                domClass.remove(link3D, "is-active");
                domClass.remove(article1, "is-active");
                domClass.remove(article1_meta, "is-active");
            }
        };
        ObstructionResults.prototype.Click3dMeta = function (element) {
            if (!domClass.contains(element, "is-active")) {
                var link3D = document.getElementById("tab_3d");
                var link3D_meta = document.getElementById("tab-meta_3d");
                var article1 = document.getElementById("results3d");
                var article1_meta = document.getElementById("results3d_meta");
                var link2D = document.getElementById("tab_2d");
                var link2D_meta = document.getElementById("tab-meta_2d");
                var article2 = document.getElementById("results2d");
                var article2_meta = document.getElementById("results2d_meta");
                domClass.add(link3D_meta, "is-active");
                domClass.add(article1_meta, "is-active");
                domClass.remove(link3D, "is-active");
                domClass.remove(article1, "is-active");
                domClass.remove(link2D, "is-active");
                domClass.remove(article2, "is-active");
                domClass.remove(link2D_meta, "is-active");
                domClass.remove(article2_meta, "is-active");
            }
        };
        ObstructionResults.prototype.Click2dMeta = function (element) {
            if (!domClass.contains(element, "is-active")) {
                var link3D = document.getElementById("tab_3d");
                var link3D_meta = document.getElementById("tab-meta_3d");
                var article1 = document.getElementById("results3d");
                var article1_meta = document.getElementById("results3d_meta");
                var link2D = document.getElementById("tab_2d");
                var link2D_meta = document.getElementById("tab-meta_2d");
                var article2 = document.getElementById("results2d");
                var article2_meta = document.getElementById("results2d_meta");
                domClass.add(article2_meta, "is-active");
                domClass.add(link2D_meta, "is-active");
                domClass.remove(article2, "is-active");
                domClass.remove(link2D, "is-active");
                domClass.remove(link3D, "is-active");
                domClass.remove(link3D_meta, "is-active");
                domClass.remove(article1, "is-active");
                domClass.remove(article1_meta, "is-active");
            }
        };
        ObstructionResults.prototype.buildResults3d = function (element) {
            var columns = {
                clearance: {
                    label: "Clearance (+ / - ft.)",
                    className: "data-field"
                },
                name: {
                    label: "Surface Name",
                    className: "data-field"
                },
                type: {
                    label: "Type",
                    className: "data-field"
                },
                condition: {
                    label: "Condition",
                    className: "data-field"
                },
                runway: {
                    label: "Runway",
                    className: "data-field"
                },
                elevation: {
                    label: "Elevation Above Sea Level (ft.)",
                    className: "data-field"
                },
                height: {
                    label: "Height Above Ground (ft.)",
                    className: "data-field"
                }
            };
            var grid = this.results3d_grid = new (declare([Grid, Selection]))({
                columns: columns,
                baseClass: "result-table"
            }, element);
            grid.startup();
        };
        ObstructionResults.prototype.buildResults2d = function (element) {
            var columns = {
                name: {
                    label: "Surface Name"
                },
                desc: {
                    label: "Description"
                }
            };
            var grid = this.results2d_grid = new (declare([Grid, Selection]))({
                columns: columns,
                baseClass: "result-table"
            }, element);
            grid.startup();
        };
        ObstructionResults.prototype.build3dMeta = function (element) {
            var columns = {
                clearance: {
                    label: "Clearance (+ / - ft.)",
                    className: "data-field"
                },
                guidance: {
                    label: "Approach Guidance",
                    className: "metadata-field"
                },
                date: {
                    label: "Date Acquired",
                    className: "metadata-field"
                },
                desc: {
                    label: "Description",
                    className: "metadata-field"
                },
                regulation: {
                    label: "Safety Regulation",
                    className: "metadata-field"
                },
                zone: {
                    label: "Zone Use",
                    className: "metadata-field"
                }
            };
            var grid = this.meta3d = new (declare([Grid, Selection]))({
                columns: columns,
                baseClass: "result-table"
            }, element);
            grid.startup();
        };
        ObstructionResults.prototype.build2dMeta = function (element) {
            var columns = {
                date: {
                    label: "Date Acquired"
                },
                source: {
                    label: "Data Source"
                },
                updated: {
                    label: "Last Update"
                }
            };
            var grid = this.meta2d = new (declare([Grid, Selection]))({
                columns: columns,
                baseClass: "result-table"
            }, element);
            grid.startup();
        };
        ObstructionResults.prototype.render = function () {
            return (widget_1.tsx("div", { id: "obstructionResults" },
                widget_1.tsx("h2", null, this.name),
                widget_1.tsx("div", null,
                    widget_1.tsx("b", null, "x:"),
                    this.x,
                    widget_1.tsx("br", null),
                    widget_1.tsx("b", null, "y:"),
                    this.y,
                    widget_1.tsx("br", null),
                    widget_1.tsx("b", null, "Ground Elevation:"),
                    this.groundElevation,
                    " feet MSL ",
                    widget_1.tsx("i", null,
                        "source:",
                        this.dem_source),
                    widget_1.tsx("br", null),
                    widget_1.tsx("b", null, "Obstruction Height:"),
                    this.peak,
                    " feet",
                    widget_1.tsx("br", null)),
                widget_1.tsx("div", { class: "trailer-2 js-tab-group" },
                    widget_1.tsx("nav", { class: "tab-nav" },
                        widget_1.tsx("a", { id: "tab_3d", class: "tab-title is-active", onclick: this.Click3d.bind(this) },
                            "3D Surfaces (",
                            this.count_3d,
                            ")"),
                        widget_1.tsx("a", { id: "tab-meta_3d", class: "tab-title", onclick: this.Click3dMeta.bind(this) }, " - metadata"),
                        widget_1.tsx("a", { id: "tab_2d", class: "tab-title", onclick: this.Click2d.bind(this) },
                            "2D Surfaces (",
                            this.count_2d,
                            ")"),
                        widget_1.tsx("a", { id: "tab-meta_2d", class: "tab-title", onclick: this.Click2dMeta.bind(this) }, " - metadata")),
                    widget_1.tsx("section", { class: "tab-contents" },
                        widget_1.tsx("article", { id: "results3d", class: "results_panel tab-section js-tab-section is-active" },
                            widget_1.tsx("div", { afterCreate: this.buildResults3d.bind(this) })),
                        widget_1.tsx("article", { id: "results2d", class: "results_panel tab-section js-tab-section" },
                            widget_1.tsx("div", { afterCreate: this.buildResults2d.bind(this) })),
                        widget_1.tsx("article", { id: "results3d_meta", class: "results_panel-meta tab-section js-tab-section" },
                            widget_1.tsx("div", { afterCreate: this.build3dMeta.bind(this) })),
                        widget_1.tsx("article", { id: "results2d_meta", class: "results_panel-meta tab-section js-tab-section" },
                            widget_1.tsx("div", { afterCreate: this.build2dMeta.bind(this) }))))));
        };
        __decorate([
            decorators_1.property()
        ], ObstructionResults.prototype, "viewModel", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.scene")
        ], ObstructionResults.prototype, "scene", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.view")
        ], ObstructionResults.prototype, "view", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.x")
        ], ObstructionResults.prototype, "x", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.y")
        ], ObstructionResults.prototype, "y", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.peak")
        ], ObstructionResults.prototype, "peak", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.name")
        ], ObstructionResults.prototype, "name", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.groundElevation")
        ], ObstructionResults.prototype, "groundElevation", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.modifiedBase")
        ], ObstructionResults.prototype, "modifiedBase", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.dem_source")
        ], ObstructionResults.prototype, "dem_source", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.layerResults3d")
        ], ObstructionResults.prototype, "layerResults3d", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.layerResults2d")
        ], ObstructionResults.prototype, "layerResults2d", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.count_3d")
        ], ObstructionResults.prototype, "count_3d", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.count_2d")
        ], ObstructionResults.prototype, "count_2d", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.expand")
        ], ObstructionResults.prototype, "expand", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.results3d_grid")
        ], ObstructionResults.prototype, "results3d_grid", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.results2d_grid")
        ], ObstructionResults.prototype, "results2d_grid", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.meta3d")
        ], ObstructionResults.prototype, "meta3d", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.meta2d")
        ], ObstructionResults.prototype, "meta2d", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.store3d")
        ], ObstructionResults.prototype, "store3d", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.store2d")
        ], ObstructionResults.prototype, "store2d", void 0);
        ObstructionResults = __decorate([
            decorators_1.subclass("app.widgets.obstructionResults")
        ], ObstructionResults);
        return ObstructionResults;
    }(decorators_1.declared(Widget)));
    exports.ObstructionResults = ObstructionResults;
});
//# sourceMappingURL=ObstructionResults.js.map