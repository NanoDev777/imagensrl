webpackJsonp([3],{

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__charts_axes_AxisRenderer__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_axes_AxisRendererX__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charts_axes_AxisRendererY__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_axes_AxisRendererCircular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charts_Chart__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__charts_Legend__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__charts_map_SmallMap__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__charts_map_ZoomControl__ = __webpack_require__(491);
/**
 * Defines default Responsive rules
 * @hidden
 */








/**
 * ============================================================================
 * RULES
 * ============================================================================
 * @hidden
 */
/**
 * Default rules.
 *
 * @ignore Exclude from docs
 * @todo Do not create states for objects that do not have any overrides
 */
/* harmony default export */ __webpack_exports__["default"] = ([
    /**
     * --------------------------------------------------------------------------
     * Microcharts and sparklines
     * W<=100 || H<=100
     * @todo
     */
    {
        relevant: function (container) {
            if ((container.pixelWidth <= 100) || (container.pixelHeight <= 100)) {
                return true;
            }
            return false;
        },
        state: function (object, stateId) {
            // Put vertical axis labels inside
            if (object instanceof __WEBPACK_IMPORTED_MODULE_0__charts_axes_AxisRenderer__["a" /* AxisRenderer */]) {
                var state = object.states.create(stateId);
                state.properties.minLabelPosition = 1;
                state.properties.maxLabelPosition = 0;
                return state;
            }
        }
    },
    /**
     * --------------------------------------------------------------------------
     * Narrow
     * W<=200
     */
    {
        relevant: function (container) {
            if ((container.pixelWidth <= 200)) {
                return true;
            }
            return false;
        },
        state: function (object, stateId) {
            // Put vertical axis labels inside
            if (object instanceof __WEBPACK_IMPORTED_MODULE_2__charts_axes_AxisRendererY__["a" /* AxisRendererY */]) {
                var state = object.states.create(stateId);
                state.properties.inside = true;
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_3__charts_axes_AxisRendererCircular__["a" /* AxisRendererCircular */]) {
                var state = object.states.create(stateId);
                state.properties.inside = true;
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_6__charts_map_SmallMap__["a" /* SmallMap */]) {
                var state = object.states.create(stateId);
                state.properties.disabled = true;
                return state;
            }
            /*if (object instanceof Container && object.parent instanceof ZoomControl && !(object instanceof Button)) {
                let state = object.states.create(stateId);
                state.properties.height = 0;
                return state;
            }*/
            if (object instanceof __WEBPACK_IMPORTED_MODULE_7__charts_map_ZoomControl__["a" /* ZoomControl */]) {
                var state = object.states.create(stateId);
                state.properties.layout = "vertical";
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_4__charts_Chart__["a" /* Chart */]) {
                var state = object.states.create(stateId);
                state.properties.marginLeft = 0;
                state.properties.marginRight = 0;
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_5__charts_Legend__["a" /* Legend */] && (object.position == "left" || object.position == "right")) {
                var state = object.states.create(stateId);
                state.properties.position = "bottom";
                return state;
            }
        }
    },
    /**
     * --------------------------------------------------------------------------
     * Short
     * H<=200
     */
    {
        relevant: function (container) {
            if ((container.pixelHeight <= 200)) {
                return true;
            }
            return false;
        },
        state: function (object, stateId) {
            // Put vertical axis labels inside
            if (object instanceof __WEBPACK_IMPORTED_MODULE_1__charts_axes_AxisRendererX__["a" /* AxisRendererX */]) {
                var state = object.states.create(stateId);
                state.properties.inside = true;
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_3__charts_axes_AxisRendererCircular__["a" /* AxisRendererCircular */]) {
                var state = object.states.create(stateId);
                state.properties.inside = true;
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_6__charts_map_SmallMap__["a" /* SmallMap */]) {
                var state = object.states.create(stateId);
                state.properties.disabled = true;
                return state;
            }
            /*if (object instanceof Container && object.parent instanceof ZoomControl && !(object instanceof Button)) {
                let state = object.states.create(stateId);
                state.properties.width = 100;
                return state;
            }*/
            if (object instanceof __WEBPACK_IMPORTED_MODULE_7__charts_map_ZoomControl__["a" /* ZoomControl */]) {
                var state = object.states.create(stateId);
                state.properties.layout = "horizontal";
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_4__charts_Chart__["a" /* Chart */]) {
                var state = object.states.create(stateId);
                state.properties.marginTop = 0;
                state.properties.marginBottom = 0;
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_5__charts_Legend__["a" /* Legend */] && (object.position == "bottom" || object.position == "top")) {
                var state = object.states.create(stateId);
                state.properties.position = "right";
                return state;
            }
        }
    },
    /**
     * --------------------------------------------------------------------------
     * Super-small
     * W<=200 && H<=200
     */
    {
        relevant: function (container) {
            if ((container.pixelWidth <= 200) && (container.pixelHeight <= 200)) {
                return true;
            }
            return false;
        },
        state: function (object, stateId) {
            // Hide legend
            if (object instanceof __WEBPACK_IMPORTED_MODULE_5__charts_Legend__["a" /* Legend */]) {
                var state = object.states.create(stateId);
                state.properties.disabled = true;
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_7__charts_map_ZoomControl__["a" /* ZoomControl */]) {
                var state = object.states.create(stateId);
                state.properties.disabled = true;
                return state;
            }
        }
    }
]);
//# sourceMappingURL=ResponsiveDefaults.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmallMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Container__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_elements_Rectangle__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_utils_List__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_utils_Disposer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_Registry__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_utils_Color__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_utils_InterfaceColorSet__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_utils_Utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_utils_Type__ = __webpack_require__(3);
/**
 * A module for the mini-map control.
 */

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */









/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Creates a "bird's eye" view of the whole map.
 *
 * This control creates a mini-map with the whole of the map, highlighting
 * the area which is in the current viewport of the map map.
 *
 * @see {@link ISmallMapEvents} for a list of available events
 * @see {@link ISmallMapAdapters} for a list of available Adapters
 * @important
 */
var SmallMap = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](SmallMap, _super);
    /**
     * Constructor
     */
    function SmallMap() {
        var _this = 
        // Init
        _super.call(this) || this;
        /**
         * A target map.
         *
         * @type {MutableValueDisposer<MapChart>}
         */
        _this._chart = new __WEBPACK_IMPORTED_MODULE_4__core_utils_Disposer__["d" /* MutableValueDisposer */]();
        _this.className = "SmallMap";
        // Set defaults
        _this.align = "left";
        _this.valign = "bottom";
        _this.percentHeight = 20;
        _this.percentWidth = 20;
        _this.margin(5, 5, 5, 5);
        var interfaceColors = new __WEBPACK_IMPORTED_MODULE_7__core_utils_InterfaceColorSet__["a" /* InterfaceColorSet */]();
        // Set background defailts
        _this.background.fillOpacity = 0.9;
        _this.background.fill = interfaceColors.getFor("background");
        // Set up events
        _this.events.on("hit", _this.moveToPosition, _this, false);
        _this.events.on("maxsizechanged", _this.updateMapSize, _this, false);
        // Create a container
        _this.seriesContainer = _this.createChild(__WEBPACK_IMPORTED_MODULE_1__core_Container__["a" /* Container */]);
        _this.seriesContainer.shouldClone = false;
        // Create an outline rectangle
        var rectangle = _this.createChild(__WEBPACK_IMPORTED_MODULE_2__core_elements_Rectangle__["a" /* Rectangle */]);
        rectangle.shouldClone = false;
        rectangle.stroke = interfaceColors.getFor("alternativeBackground");
        rectangle.strokeWidth = 1;
        rectangle.strokeOpacity = 0.5;
        rectangle.fill = Object(__WEBPACK_IMPORTED_MODULE_6__core_utils_Color__["b" /* color */])(); //"none";
        rectangle.verticalCenter = "middle";
        rectangle.horizontalCenter = "middle";
        rectangle.isMeasured = false;
        _this.rectangle = rectangle;
        _this._disposers.push(_this._chart);
        // Apply theme
        _this.applyTheme();
        return _this;
    }
    Object.defineProperty(SmallMap.prototype, "series", {
        /**
         * A list of map series used to draw the mini-map.
         *
         * @readonly
         * @return {List<MapSeries>} Series
         */
        get: function () {
            if (!this._series) {
                this._series = new __WEBPACK_IMPORTED_MODULE_3__core_utils_List__["a" /* List */]();
                this._series.events.on("inserted", this.handleSeriesAdded, this, false);
                this._series.events.on("removed", this.handleSeriesRemoved, this, false);
            }
            return this._series;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Decorates a new series when they are pushed into a `series` list.
     *
     * @param {IListEvents<MapSeries>["inserted"]} event Event
     */
    SmallMap.prototype.handleSeriesAdded = function (event) {
        var series = event.newValue;
        if (this.chart.series.contains(series)) {
            var newSeries = series.clone();
            this._series.removeValue(series);
            this._series.push(newSeries);
            series = newSeries;
            this.chart.dataUsers.push(newSeries);
        }
        series.chart = this.chart;
        series.parent = this.seriesContainer;
        series.interactionsEnabled = false;
    };
    /**
     * Cleans up after series are removed from Scrollbar.
     *
     * @param {IListEvents<XYSeries>["removed"]}  event  Event
     */
    SmallMap.prototype.handleSeriesRemoved = function (event) {
        //let sourceSeries: MapSeries = event.oldValue;
        this.invalidate();
    };
    /**
     * Moves main map pan position after click on the small map.
     *
     * @ignore Exclude from docs
     * @param {AMEvent<Sprite, ISpriteEvents>["hit"]}  event  Event
     */
    SmallMap.prototype.moveToPosition = function (event) {
        var svgPoint = event.svgPoint;
        var rectPoint = __WEBPACK_IMPORTED_MODULE_8__core_utils_Utils__["M" /* svgPointToSprite */](svgPoint, this.rectangle);
        var zoomLevel = this.chart.zoomLevel;
        var scale = Math.min(this.percentWidth, this.percentHeight) / 100;
        var x = (rectPoint.x + this.rectangle.pixelWidth / 2) / scale * zoomLevel;
        var y = (rectPoint.y + this.rectangle.pixelHeight / 2) / scale * zoomLevel;
        var geoPoint = this.chart.svgPointToGeo({ x: x, y: y });
        this.chart.zoomToGeoPoint(geoPoint, this.chart.zoomLevel, true);
    };
    Object.defineProperty(SmallMap.prototype, "chart", {
        /**
         * @return {MapChart} Chart/map
         */
        get: function () {
            return this._chart.get();
        },
        /**
         * A chart/map that this control is meant for.
         *
         * @param {MapChart}  chart  Chart/map
         */
        set: function (chart) {
            if (this.chart != chart) {
                this._chart.set(chart, new __WEBPACK_IMPORTED_MODULE_4__core_utils_Disposer__["c" /* MultiDisposer */]([
                    //chart.events.on("zoomlevelchanged", this.updateRectangle, this, false),
                    chart.events.on("mappositionchanged", this.updateRectangle, this, false),
                    chart.events.on("scaleratiochanged", this.updateMapSize, this, false)
                ]));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the viewport recangle as per current map zoom/pan position.
     *
     * @ignore Exclude from docs
     */
    SmallMap.prototype.updateRectangle = function () {
        var chart = this.chart;
        var zoomLevel = chart.zoomLevel;
        var rectangle = this.rectangle;
        rectangle.width = this.pixelWidth / zoomLevel;
        rectangle.height = this.pixelHeight / zoomLevel;
        var scale = Math.min(this.percentWidth, this.percentHeight) / 100;
        var seriesContainer = chart.seriesContainer;
        rectangle.x = Math.ceil((zoomLevel * seriesContainer.pixelWidth / 2 - seriesContainer.pixelX) * scale / zoomLevel + rectangle.pixelWidth / 2);
        rectangle.y = Math.ceil((zoomLevel * seriesContainer.pixelHeight / 2 - seriesContainer.pixelY) * scale / zoomLevel + rectangle.pixelHeight / 2);
        rectangle.validate();
    };
    /**
     * Update map size so that internal elements can redraw themselves after
     * the size of the small map changes.
     *
     * @ignore Exclude from docs
     */
    SmallMap.prototype.updateMapSize = function () {
        if (this.chart) {
            this.seriesContainer.scale = this.chart.scaleRatio * Math.min(this.percentWidth, this.percentHeight) / 100;
            this.updateRectangle();
            this.afterDraw();
        }
    };
    /**
     * Update elements after drawing the small map.
     */
    SmallMap.prototype.afterDraw = function () {
        _super.prototype.afterDraw.call(this);
        this.seriesContainer.moveTo({ x: this.pixelWidth / 2, y: this.pixelHeight / 2 });
        this.rectangle.maskRectangle = { x: -1, y: -1, width: Math.ceil(this.pixelWidth + 2), height: Math.ceil(this.pixelHeight + 2) };
    };
    /**
     * Processes JSON-based config before it is applied to the object.
     *
     * @ignore Exclude from docs
     * @param {object}  config  Config
     */
    SmallMap.prototype.processConfig = function (config) {
        if (config) {
            // Set up series
            if (__WEBPACK_IMPORTED_MODULE_9__core_utils_Type__["d" /* hasValue */](config.series) && __WEBPACK_IMPORTED_MODULE_9__core_utils_Type__["e" /* isArray */](config.series)) {
                for (var i = 0, len = config.series.length; i < len; i++) {
                    var series = config.series[i];
                    if (__WEBPACK_IMPORTED_MODULE_9__core_utils_Type__["d" /* hasValue */](series) && __WEBPACK_IMPORTED_MODULE_9__core_utils_Type__["j" /* isString */](series) && this.map.hasKey(series)) {
                        config.series[i] = this.map.getKey(series);
                    }
                }
            }
        }
        _super.prototype.processConfig.call(this, config);
    };
    return SmallMap;
}(__WEBPACK_IMPORTED_MODULE_1__core_Container__["a" /* Container */]));

/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */
__WEBPACK_IMPORTED_MODULE_5__core_Registry__["a" /* registry */].registeredClasses["SmallMap"] = SmallMap;
//# sourceMappingURL=SmallMap.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoomControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Container__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_elements_Button__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_elements_RoundedRectangle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_utils_Disposer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_utils_Keyboard__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_interaction_Interaction__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_utils_Percent__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_Registry__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_utils_InterfaceColorSet__ = __webpack_require__(13);
/**
 * Zoom control module
 */

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */









/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Creates a control for zooming the map.
 *
 * @see {@link IZoomControlEvents} for a list of available events
 * @see {@link IZoomControlAdapters} for a list of available Adapters
 * @important
 */
var ZoomControl = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](ZoomControl, _super);
    /**
     * Constructor
     */
    function ZoomControl() {
        var _this = _super.call(this) || this;
        /**
         * A target map.
         *
         * @type {MutableValueDisposer<MapChart>}
         */
        _this._chart = new __WEBPACK_IMPORTED_MODULE_4__core_utils_Disposer__["d" /* MutableValueDisposer */]();
        _this.className = "ZoomControl";
        _this.align = "right";
        _this.valign = "bottom";
        _this.layout = "vertical";
        _this.padding(5, 5, 5, 5);
        var interfaceColors = new __WEBPACK_IMPORTED_MODULE_9__core_utils_InterfaceColorSet__["a" /* InterfaceColorSet */]();
        var plusButton = _this.createChild(__WEBPACK_IMPORTED_MODULE_2__core_elements_Button__["a" /* Button */]);
        plusButton.shouldClone = false;
        plusButton.label.text = "+";
        plusButton.width = Object(__WEBPACK_IMPORTED_MODULE_7__core_utils_Percent__["c" /* percent */])(100);
        plusButton.padding(5, 5, 5, 5);
        //plusButton.fontFamily = "Verdana";
        _this.plusButton = plusButton;
        var slider = _this.createChild(__WEBPACK_IMPORTED_MODULE_1__core_Container__["a" /* Container */]);
        slider.shouldClone = false;
        slider.width = Object(__WEBPACK_IMPORTED_MODULE_7__core_utils_Percent__["c" /* percent */])(100);
        slider.background.fill = interfaceColors.getFor("alternativeBackground");
        slider.background.fillOpacity = 0.05;
        slider.background.events.on("hit", _this.handleBackgroundClick, _this, false);
        slider.events.on("sizechanged", _this.updateThumbSize, _this, false);
        _this.slider = slider;
        var thumb = slider.createChild(__WEBPACK_IMPORTED_MODULE_2__core_elements_Button__["a" /* Button */]);
        thumb.shouldClone = false;
        thumb.padding(0, 0, 0, 0);
        thumb.draggable = true;
        thumb.events.on("drag", _this.handleThumbDrag, _this, false);
        _this.thumb = thumb;
        var minusButton = _this.createChild(__WEBPACK_IMPORTED_MODULE_2__core_elements_Button__["a" /* Button */]);
        minusButton.shouldClone = false;
        minusButton.label.text = "-";
        minusButton.padding(5, 5, 5, 5);
        //minusButton.fontFamily = "Verdana";
        _this.minusButton = minusButton;
        // Set roles
        _this.thumb.role = "slider";
        _this.thumb.readerLive = "polite";
        // Set reader text
        _this.thumb.readerTitle = _this.language.translate("Use arrow keys to zoom in and out");
        _this.minusButton.readerTitle = _this.language.translate("Press ENTER to zoom in");
        _this.plusButton.readerTitle = _this.language.translate("Press ENTER to zoom out");
        _this.applyTheme();
        _this.events.on("propertychanged", function (event) {
            if (event.property == "layout") {
                _this.fixLayout();
            }
        }, undefined, false);
        _this._disposers.push(_this._chart);
        _this.fixLayout();
        return _this;
    }
    ZoomControl.prototype.fixLayout = function () {
        if (this.layout == "vertical") {
            this.width = 40;
            this.height = undefined;
            this.minusButton.width = Object(__WEBPACK_IMPORTED_MODULE_7__core_utils_Percent__["c" /* percent */])(100);
            this.thumb.width = Object(__WEBPACK_IMPORTED_MODULE_7__core_utils_Percent__["c" /* percent */])(100);
            this.plusButton.width = Object(__WEBPACK_IMPORTED_MODULE_7__core_utils_Percent__["c" /* percent */])(100);
            this.slider.width = Object(__WEBPACK_IMPORTED_MODULE_7__core_utils_Percent__["c" /* percent */])(100);
            this.minusButton.marginTop = 1;
            this.plusButton.marginBottom = 2;
            this.slider.height = 0;
            this.minusButton.toFront();
            this.plusButton.toBack();
            this.thumb.minX = 0;
            this.thumb.maxX = 0;
            this.thumb.minY = 0;
        }
        else if (this.layout == "horizontal") {
            this.thumb.minX = 0;
            this.thumb.minY = 0;
            this.thumb.maxY = 0;
            this.height = 40;
            this.width = undefined;
            this.minusButton.height = Object(__WEBPACK_IMPORTED_MODULE_7__core_utils_Percent__["c" /* percent */])(100);
            this.minusButton.width = 30;
            this.thumb.height = Object(__WEBPACK_IMPORTED_MODULE_7__core_utils_Percent__["c" /* percent */])(100);
            this.thumb.width = undefined;
            this.plusButton.height = Object(__WEBPACK_IMPORTED_MODULE_7__core_utils_Percent__["c" /* percent */])(100);
            this.plusButton.width = 30;
            this.slider.height = Object(__WEBPACK_IMPORTED_MODULE_7__core_utils_Percent__["c" /* percent */])(100);
            this.slider.width = 0;
            this.minusButton.marginLeft = 2;
            this.plusButton.marginRight = 2;
            this.minusButton.toBack();
            this.plusButton.toFront();
        }
    };
    /**
     * Handles zoom operation after clicking on the slider background.
     *
     * @ignore Exclude from docs
     * @param {AMEvent<Sprite, ISpriteEvents>["hit"]}  event  Event
     */
    ZoomControl.prototype.handleBackgroundClick = function (event) {
        var sprite = event.target;
        var y = event.spritePoint.y;
        var chart = this.chart;
        var maxPower = Math.log(chart.maxZoomLevel) / Math.LN2;
        var minPower = Math.log(chart.minZoomLevel) / Math.LN2;
        var power = (sprite.pixelHeight - y) / sprite.pixelHeight * (minPower + (maxPower - minPower));
        var zoomLevel = Math.pow(2, power);
        chart.zoomToGeoPoint(chart.zoomGeoPoint, zoomLevel);
    };
    Object.defineProperty(ZoomControl.prototype, "chart", {
        /**
         * @return {MapChart} Map/chart
         */
        get: function () {
            return this._chart.get();
        },
        /**
         * A main chart/map that this zoom control is for.
         *
         * @param {MapChart}  chart  Map/chart
         */
        set: function (chart) {
            var _this = this;
            this._chart.set(chart, new __WEBPACK_IMPORTED_MODULE_4__core_utils_Disposer__["c" /* MultiDisposer */]([
                chart.events.on("maxsizechanged", this.updateThumbSize, this, false),
                chart.events.on("zoomlevelchanged", this.updateThumb, this, false),
                this.minusButton.events.on("hit", function () { chart.zoomOut(chart.zoomGeoPoint); }, chart, false),
                Object(__WEBPACK_IMPORTED_MODULE_6__core_interaction_Interaction__["a" /* getInteraction */])().body.events.on("keyup", function (ev) {
                    if (_this.topParent.hasFocused) {
                        if (__WEBPACK_IMPORTED_MODULE_5__core_utils_Keyboard__["a" /* keyboard */].isKey(ev.event, "enter")) {
                            if (_this.minusButton.isFocused) {
                                chart.zoomOut();
                            }
                            else if (_this.plusButton.isFocused) {
                                chart.zoomIn();
                            }
                        }
                        else if (__WEBPACK_IMPORTED_MODULE_5__core_utils_Keyboard__["a" /* keyboard */].isKey(ev.event, "plus")) {
                            chart.zoomIn();
                        }
                        else if (__WEBPACK_IMPORTED_MODULE_5__core_utils_Keyboard__["a" /* keyboard */].isKey(ev.event, "minus")) {
                            chart.zoomOut();
                        }
                    }
                }, chart),
                this.plusButton.events.on("hit", function () { chart.zoomIn(chart.zoomGeoPoint); }, chart, false)
            ]));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the slider's thumb size based on the available zoom space.
     *
     * @ignore Exclude from docs
     */
    ZoomControl.prototype.updateThumbSize = function () {
        var chart = this.chart;
        if (chart) {
            var slider = this.slider;
            var thumb = this.thumb;
            if (this.layout == "vertical") {
                thumb.minHeight = Math.min(this.slider.pixelHeight, 20);
                thumb.height = slider.pixelHeight / this.stepCount;
                thumb.maxY = slider.pixelHeight - thumb.pixelHeight;
                if (thumb.pixelHeight <= 1) {
                    thumb.visible = false;
                }
                else {
                    thumb.visible = true;
                }
            }
            else {
                thumb.minWidth = Math.min(this.slider.pixelWidth, 20);
                thumb.width = slider.pixelWidth / this.stepCount;
                thumb.maxX = slider.pixelWidth - thumb.pixelWidth;
                if (thumb.pixelWidth <= 1) {
                    thumb.visible = false;
                }
                else {
                    thumb.visible = true;
                }
            }
        }
    };
    /**
     * Updates thumb according to current zoom position from map.
     *
     * @ignore Exclude from docs
     */
    ZoomControl.prototype.updateThumb = function () {
        var slider = this.slider;
        var chart = this.chart;
        var thumb = this.thumb;
        if (!thumb.isDown) {
            var step = (Math.log(chart.zoomLevel) - Math.log(this.chart.minZoomLevel)) / Math.LN2;
            if (this.layout == "vertical") {
                thumb.y = slider.pixelHeight - (slider.pixelHeight - thumb.pixelHeight) * step / this.stepCount - thumb.pixelHeight;
            }
            else {
                thumb.x = slider.pixelWidth * step / this.stepCount;
            }
        }
    };
    /**
     * Zooms the actual map when slider position changes.
     *
     * @ignore Exclude from docs
     */
    ZoomControl.prototype.handleThumbDrag = function () {
        var slider = this.slider;
        var chart = this.chart;
        var thumb = this.thumb;
        var step;
        var minStep = Math.log(this.chart.minZoomLevel) / Math.LN2;
        if (this.layout == "vertical") {
            step = this.stepCount * (slider.pixelHeight - thumb.pixelY - thumb.pixelHeight) / (slider.pixelHeight - thumb.pixelHeight);
        }
        else {
            step = this.stepCount * thumb.pixelX / slider.pixelWidth;
        }
        step = minStep + step;
        var zoomLevel = Math.pow(2, step);
        chart.zoomToGeoPoint(undefined, zoomLevel, false, 0);
    };
    Object.defineProperty(ZoomControl.prototype, "stepCount", {
        /**
         * Returns the step countfor the slider grid according to map's min and max
         * zoom level settings.
         *
         * @ignore Exclude from docs
         * @return {number} Step count
         */
        get: function () {
            return Math.log(this.chart.maxZoomLevel) / Math.LN2 - Math.log(this.chart.minZoomLevel) / Math.LN2;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a background element for slider control.
     *
     * @ignore Exclude from docs
     * @return {this} Background
     */
    ZoomControl.prototype.createBackground = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__core_elements_RoundedRectangle__["a" /* RoundedRectangle */]();
    };
    return ZoomControl;
}(__WEBPACK_IMPORTED_MODULE_1__core_Container__["a" /* Container */]));

/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */
__WEBPACK_IMPORTED_MODULE_8__core_Registry__["a" /* registry */].registeredClasses["ZoomControl"] = ZoomControl;
//# sourceMappingURL=ZoomControl.js.map

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFtY2hhcnRzL2FtY2hhcnRzNC8uaW50ZXJuYWwvY29yZS9yZXNwb25zaXZlL1Jlc3BvbnNpdmVEZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFtY2hhcnRzL2FtY2hhcnRzNC8uaW50ZXJuYWwvY2hhcnRzL21hcC9TbWFsbE1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFtY2hhcnRzL2FtY2hhcnRzNC8uaW50ZXJuYWwvY2hhcnRzL21hcC9ab29tQ29udHJvbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDdUI7QUFDQztBQUNBO0FBQ087QUFDZjtBQUNDO0FBQ0U7QUFDRztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25MQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29CO0FBQ0E7QUFDTDtBQUMrQjtBQUMzQjtBQUNIO0FBQ1k7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0JBQXNCO0FBQy9CLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvR0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlDQUFpQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNDQUFzQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGFBQWE7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxrREFBa0Q7QUFDdkYsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNPO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNU9BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0I7QUFDSDtBQUNVO0FBQ21CO0FBQzNCO0FBQ007QUFDUDtBQUNDO0FBQ1M7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5QkFBeUI7QUFDbEMsU0FBUywyQkFBMkI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQ0FBc0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELG1DQUFtQyxFQUFFO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsOERBQThELGtDQUFrQyxFQUFFO0FBQ2xHO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEtBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDTztBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUMiLCJmaWxlIjoicmVzcG9uc2l2ZWRlZmF1bHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIERlZmluZXMgZGVmYXVsdCBSZXNwb25zaXZlIHJ1bGVzXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmltcG9ydCB7IEF4aXNSZW5kZXJlciB9IGZyb20gXCIuLi8uLi9jaGFydHMvYXhlcy9BeGlzUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgQXhpc1JlbmRlcmVyWCB9IGZyb20gXCIuLi8uLi9jaGFydHMvYXhlcy9BeGlzUmVuZGVyZXJYXCI7XHJcbmltcG9ydCB7IEF4aXNSZW5kZXJlclkgfSBmcm9tIFwiLi4vLi4vY2hhcnRzL2F4ZXMvQXhpc1JlbmRlcmVyWVwiO1xyXG5pbXBvcnQgeyBBeGlzUmVuZGVyZXJDaXJjdWxhciB9IGZyb20gXCIuLi8uLi9jaGFydHMvYXhlcy9BeGlzUmVuZGVyZXJDaXJjdWxhclwiO1xyXG5pbXBvcnQgeyBDaGFydCB9IGZyb20gXCIuLi8uLi9jaGFydHMvQ2hhcnRcIjtcclxuaW1wb3J0IHsgTGVnZW5kIH0gZnJvbSBcIi4uLy4uL2NoYXJ0cy9MZWdlbmRcIjtcclxuaW1wb3J0IHsgU21hbGxNYXAgfSBmcm9tIFwiLi4vLi4vY2hhcnRzL21hcC9TbWFsbE1hcFwiO1xyXG5pbXBvcnQgeyBab29tQ29udHJvbCB9IGZyb20gXCIuLi8uLi9jaGFydHMvbWFwL1pvb21Db250cm9sXCI7XHJcbi8qKlxyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqIFJVTEVTXHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogQGhpZGRlblxyXG4gKi9cclxuLyoqXHJcbiAqIERlZmF1bHQgcnVsZXMuXHJcbiAqXHJcbiAqIEBpZ25vcmUgRXhjbHVkZSBmcm9tIGRvY3NcclxuICogQHRvZG8gRG8gbm90IGNyZWF0ZSBzdGF0ZXMgZm9yIG9iamVjdHMgdGhhdCBkbyBub3QgaGF2ZSBhbnkgb3ZlcnJpZGVzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBNaWNyb2NoYXJ0cyBhbmQgc3BhcmtsaW5lc1xyXG4gICAgICogVzw9MTAwIHx8IEg8PTEwMFxyXG4gICAgICogQHRvZG9cclxuICAgICAqL1xyXG4gICAge1xyXG4gICAgICAgIHJlbGV2YW50OiBmdW5jdGlvbiAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGlmICgoY29udGFpbmVyLnBpeGVsV2lkdGggPD0gMTAwKSB8fCAoY29udGFpbmVyLnBpeGVsSGVpZ2h0IDw9IDEwMCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXRlOiBmdW5jdGlvbiAob2JqZWN0LCBzdGF0ZUlkKSB7XHJcbiAgICAgICAgICAgIC8vIFB1dCB2ZXJ0aWNhbCBheGlzIGxhYmVscyBpbnNpZGVcclxuICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIEF4aXNSZW5kZXJlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gb2JqZWN0LnN0YXRlcy5jcmVhdGUoc3RhdGVJZCk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzLm1pbkxhYmVsUG9zaXRpb24gPSAxO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcy5tYXhMYWJlbFBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBOYXJyb3dcclxuICAgICAqIFc8PTIwMFxyXG4gICAgICovXHJcbiAgICB7XHJcbiAgICAgICAgcmVsZXZhbnQ6IGZ1bmN0aW9uIChjb250YWluZXIpIHtcclxuICAgICAgICAgICAgaWYgKChjb250YWluZXIucGl4ZWxXaWR0aCA8PSAyMDApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGF0ZTogZnVuY3Rpb24gKG9iamVjdCwgc3RhdGVJZCkge1xyXG4gICAgICAgICAgICAvLyBQdXQgdmVydGljYWwgYXhpcyBsYWJlbHMgaW5zaWRlXHJcbiAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBBeGlzUmVuZGVyZXJZKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBvYmplY3Quc3RhdGVzLmNyZWF0ZShzdGF0ZUlkKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMuaW5zaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgQXhpc1JlbmRlcmVyQ2lyY3VsYXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IG9iamVjdC5zdGF0ZXMuY3JlYXRlKHN0YXRlSWQpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcy5pbnNpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBTbWFsbE1hcCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gb2JqZWN0LnN0YXRlcy5jcmVhdGUoc3RhdGVJZCk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKmlmIChvYmplY3QgaW5zdGFuY2VvZiBDb250YWluZXIgJiYgb2JqZWN0LnBhcmVudCBpbnN0YW5jZW9mIFpvb21Db250cm9sICYmICEob2JqZWN0IGluc3RhbmNlb2YgQnV0dG9uKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlID0gb2JqZWN0LnN0YXRlcy5jcmVhdGUoc3RhdGVJZCk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzLmhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgWm9vbUNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IG9iamVjdC5zdGF0ZXMuY3JlYXRlKHN0YXRlSWQpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcy5sYXlvdXQgPSBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIENoYXJ0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBvYmplY3Quc3RhdGVzLmNyZWF0ZShzdGF0ZUlkKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMubWFyZ2luTGVmdCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzLm1hcmdpblJpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgTGVnZW5kICYmIChvYmplY3QucG9zaXRpb24gPT0gXCJsZWZ0XCIgfHwgb2JqZWN0LnBvc2l0aW9uID09IFwicmlnaHRcIikpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IG9iamVjdC5zdGF0ZXMuY3JlYXRlKHN0YXRlSWQpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcy5wb3NpdGlvbiA9IFwiYm90dG9tXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogU2hvcnRcclxuICAgICAqIEg8PTIwMFxyXG4gICAgICovXHJcbiAgICB7XHJcbiAgICAgICAgcmVsZXZhbnQ6IGZ1bmN0aW9uIChjb250YWluZXIpIHtcclxuICAgICAgICAgICAgaWYgKChjb250YWluZXIucGl4ZWxIZWlnaHQgPD0gMjAwKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhdGU6IGZ1bmN0aW9uIChvYmplY3QsIHN0YXRlSWQpIHtcclxuICAgICAgICAgICAgLy8gUHV0IHZlcnRpY2FsIGF4aXMgbGFiZWxzIGluc2lkZVxyXG4gICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgQXhpc1JlbmRlcmVyWCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gb2JqZWN0LnN0YXRlcy5jcmVhdGUoc3RhdGVJZCk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzLmluc2lkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIEF4aXNSZW5kZXJlckNpcmN1bGFyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBvYmplY3Quc3RhdGVzLmNyZWF0ZShzdGF0ZUlkKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMuaW5zaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgU21hbGxNYXApIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IG9iamVjdC5zdGF0ZXMuY3JlYXRlKHN0YXRlSWQpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyppZiAob2JqZWN0IGluc3RhbmNlb2YgQ29udGFpbmVyICYmIG9iamVjdC5wYXJlbnQgaW5zdGFuY2VvZiBab29tQ29udHJvbCAmJiAhKG9iamVjdCBpbnN0YW5jZW9mIEJ1dHRvbikpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0ZSA9IG9iamVjdC5zdGF0ZXMuY3JlYXRlKHN0YXRlSWQpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcy53aWR0aCA9IDEwMDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBab29tQ29udHJvbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gb2JqZWN0LnN0YXRlcy5jcmVhdGUoc3RhdGVJZCk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzLmxheW91dCA9IFwiaG9yaXpvbnRhbFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBDaGFydCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gb2JqZWN0LnN0YXRlcy5jcmVhdGUoc3RhdGVJZCk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzLm1hcmdpblRvcCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIExlZ2VuZCAmJiAob2JqZWN0LnBvc2l0aW9uID09IFwiYm90dG9tXCIgfHwgb2JqZWN0LnBvc2l0aW9uID09IFwidG9wXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBvYmplY3Quc3RhdGVzLmNyZWF0ZShzdGF0ZUlkKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMucG9zaXRpb24gPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogU3VwZXItc21hbGxcclxuICAgICAqIFc8PTIwMCAmJiBIPD0yMDBcclxuICAgICAqL1xyXG4gICAge1xyXG4gICAgICAgIHJlbGV2YW50OiBmdW5jdGlvbiAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGlmICgoY29udGFpbmVyLnBpeGVsV2lkdGggPD0gMjAwKSAmJiAoY29udGFpbmVyLnBpeGVsSGVpZ2h0IDw9IDIwMCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXRlOiBmdW5jdGlvbiAob2JqZWN0LCBzdGF0ZUlkKSB7XHJcbiAgICAgICAgICAgIC8vIEhpZGUgbGVnZW5kXHJcbiAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBMZWdlbmQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IG9iamVjdC5zdGF0ZXMuY3JlYXRlKHN0YXRlSWQpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFpvb21Db250cm9sKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBvYmplY3Quc3RhdGVzLmNyZWF0ZShzdGF0ZUlkKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5dO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZXNwb25zaXZlRGVmYXVsdHMuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQGFtY2hhcnRzL2FtY2hhcnRzNC8uaW50ZXJuYWwvY29yZS9yZXNwb25zaXZlL1Jlc3BvbnNpdmVEZWZhdWx0cy5qc1xuLy8gbW9kdWxlIGlkID0gNDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8qKlxyXG4gKiBBIG1vZHVsZSBmb3IgdGhlIG1pbmktbWFwIGNvbnRyb2wuXHJcbiAqL1xyXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xyXG4vKipcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiBJTVBPUlRTXHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogQGhpZGRlblxyXG4gKi9cclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uLy4uL2NvcmUvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gXCIuLi8uLi9jb3JlL2VsZW1lbnRzL1JlY3RhbmdsZVwiO1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcIi4uLy4uL2NvcmUvdXRpbHMvTGlzdFwiO1xyXG5pbXBvcnQgeyBNdXRhYmxlVmFsdWVEaXNwb3NlciwgTXVsdGlEaXNwb3NlciB9IGZyb20gXCIuLi8uLi9jb3JlL3V0aWxzL0Rpc3Bvc2VyXCI7XHJcbmltcG9ydCB7IHJlZ2lzdHJ5IH0gZnJvbSBcIi4uLy4uL2NvcmUvUmVnaXN0cnlcIjtcclxuaW1wb3J0IHsgY29sb3IgfSBmcm9tIFwiLi4vLi4vY29yZS91dGlscy9Db2xvclwiO1xyXG5pbXBvcnQgeyBJbnRlcmZhY2VDb2xvclNldCB9IGZyb20gXCIuLi8uLi9jb3JlL3V0aWxzL0ludGVyZmFjZUNvbG9yU2V0XCI7XHJcbmltcG9ydCAqIGFzICR1dGlscyBmcm9tIFwiLi4vLi4vY29yZS91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgKiBhcyAkdHlwZSBmcm9tIFwiLi4vLi4vY29yZS91dGlscy9UeXBlXCI7XHJcbi8qKlxyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqIE1BSU4gQ0xBU1NcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG4vKipcclxuICogQ3JlYXRlcyBhIFwiYmlyZCdzIGV5ZVwiIHZpZXcgb2YgdGhlIHdob2xlIG1hcC5cclxuICpcclxuICogVGhpcyBjb250cm9sIGNyZWF0ZXMgYSBtaW5pLW1hcCB3aXRoIHRoZSB3aG9sZSBvZiB0aGUgbWFwLCBoaWdobGlnaHRpbmdcclxuICogdGhlIGFyZWEgd2hpY2ggaXMgaW4gdGhlIGN1cnJlbnQgdmlld3BvcnQgb2YgdGhlIG1hcCBtYXAuXHJcbiAqXHJcbiAqIEBzZWUge0BsaW5rIElTbWFsbE1hcEV2ZW50c30gZm9yIGEgbGlzdCBvZiBhdmFpbGFibGUgZXZlbnRzXHJcbiAqIEBzZWUge0BsaW5rIElTbWFsbE1hcEFkYXB0ZXJzfSBmb3IgYSBsaXN0IG9mIGF2YWlsYWJsZSBBZGFwdGVyc1xyXG4gKiBAaW1wb3J0YW50XHJcbiAqL1xyXG52YXIgU21hbGxNYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhTbWFsbE1hcCwgX3N1cGVyKTtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gU21hbGxNYXAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gXHJcbiAgICAgICAgLy8gSW5pdFxyXG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSB0YXJnZXQgbWFwLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge011dGFibGVWYWx1ZURpc3Bvc2VyPE1hcENoYXJ0Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBfdGhpcy5fY2hhcnQgPSBuZXcgTXV0YWJsZVZhbHVlRGlzcG9zZXIoKTtcclxuICAgICAgICBfdGhpcy5jbGFzc05hbWUgPSBcIlNtYWxsTWFwXCI7XHJcbiAgICAgICAgLy8gU2V0IGRlZmF1bHRzXHJcbiAgICAgICAgX3RoaXMuYWxpZ24gPSBcImxlZnRcIjtcclxuICAgICAgICBfdGhpcy52YWxpZ24gPSBcImJvdHRvbVwiO1xyXG4gICAgICAgIF90aGlzLnBlcmNlbnRIZWlnaHQgPSAyMDtcclxuICAgICAgICBfdGhpcy5wZXJjZW50V2lkdGggPSAyMDtcclxuICAgICAgICBfdGhpcy5tYXJnaW4oNSwgNSwgNSwgNSk7XHJcbiAgICAgICAgdmFyIGludGVyZmFjZUNvbG9ycyA9IG5ldyBJbnRlcmZhY2VDb2xvclNldCgpO1xyXG4gICAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIGRlZmFpbHRzXHJcbiAgICAgICAgX3RoaXMuYmFja2dyb3VuZC5maWxsT3BhY2l0eSA9IDAuOTtcclxuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kLmZpbGwgPSBpbnRlcmZhY2VDb2xvcnMuZ2V0Rm9yKFwiYmFja2dyb3VuZFwiKTtcclxuICAgICAgICAvLyBTZXQgdXAgZXZlbnRzXHJcbiAgICAgICAgX3RoaXMuZXZlbnRzLm9uKFwiaGl0XCIsIF90aGlzLm1vdmVUb1Bvc2l0aW9uLCBfdGhpcywgZmFsc2UpO1xyXG4gICAgICAgIF90aGlzLmV2ZW50cy5vbihcIm1heHNpemVjaGFuZ2VkXCIsIF90aGlzLnVwZGF0ZU1hcFNpemUsIF90aGlzLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgY29udGFpbmVyXHJcbiAgICAgICAgX3RoaXMuc2VyaWVzQ29udGFpbmVyID0gX3RoaXMuY3JlYXRlQ2hpbGQoQ29udGFpbmVyKTtcclxuICAgICAgICBfdGhpcy5zZXJpZXNDb250YWluZXIuc2hvdWxkQ2xvbmUgPSBmYWxzZTtcclxuICAgICAgICAvLyBDcmVhdGUgYW4gb3V0bGluZSByZWN0YW5nbGVcclxuICAgICAgICB2YXIgcmVjdGFuZ2xlID0gX3RoaXMuY3JlYXRlQ2hpbGQoUmVjdGFuZ2xlKTtcclxuICAgICAgICByZWN0YW5nbGUuc2hvdWxkQ2xvbmUgPSBmYWxzZTtcclxuICAgICAgICByZWN0YW5nbGUuc3Ryb2tlID0gaW50ZXJmYWNlQ29sb3JzLmdldEZvcihcImFsdGVybmF0aXZlQmFja2dyb3VuZFwiKTtcclxuICAgICAgICByZWN0YW5nbGUuc3Ryb2tlV2lkdGggPSAxO1xyXG4gICAgICAgIHJlY3RhbmdsZS5zdHJva2VPcGFjaXR5ID0gMC41O1xyXG4gICAgICAgIHJlY3RhbmdsZS5maWxsID0gY29sb3IoKTsgLy9cIm5vbmVcIjtcclxuICAgICAgICByZWN0YW5nbGUudmVydGljYWxDZW50ZXIgPSBcIm1pZGRsZVwiO1xyXG4gICAgICAgIHJlY3RhbmdsZS5ob3Jpem9udGFsQ2VudGVyID0gXCJtaWRkbGVcIjtcclxuICAgICAgICByZWN0YW5nbGUuaXNNZWFzdXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIF90aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZTtcclxuICAgICAgICBfdGhpcy5fZGlzcG9zZXJzLnB1c2goX3RoaXMuX2NoYXJ0KTtcclxuICAgICAgICAvLyBBcHBseSB0aGVtZVxyXG4gICAgICAgIF90aGlzLmFwcGx5VGhlbWUoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU21hbGxNYXAucHJvdG90eXBlLCBcInNlcmllc1wiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBsaXN0IG9mIG1hcCBzZXJpZXMgdXNlZCB0byBkcmF3IHRoZSBtaW5pLW1hcC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZWFkb25seVxyXG4gICAgICAgICAqIEByZXR1cm4ge0xpc3Q8TWFwU2VyaWVzPn0gU2VyaWVzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fc2VyaWVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXJpZXMgPSBuZXcgTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2VyaWVzLmV2ZW50cy5vbihcImluc2VydGVkXCIsIHRoaXMuaGFuZGxlU2VyaWVzQWRkZWQsIHRoaXMsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nlcmllcy5ldmVudHMub24oXCJyZW1vdmVkXCIsIHRoaXMuaGFuZGxlU2VyaWVzUmVtb3ZlZCwgdGhpcywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZXJpZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIERlY29yYXRlcyBhIG5ldyBzZXJpZXMgd2hlbiB0aGV5IGFyZSBwdXNoZWQgaW50byBhIGBzZXJpZXNgIGxpc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtJTGlzdEV2ZW50czxNYXBTZXJpZXM+W1wiaW5zZXJ0ZWRcIl19IGV2ZW50IEV2ZW50XHJcbiAgICAgKi9cclxuICAgIFNtYWxsTWFwLnByb3RvdHlwZS5oYW5kbGVTZXJpZXNBZGRlZCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBzZXJpZXMgPSBldmVudC5uZXdWYWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5jaGFydC5zZXJpZXMuY29udGFpbnMoc2VyaWVzKSkge1xyXG4gICAgICAgICAgICB2YXIgbmV3U2VyaWVzID0gc2VyaWVzLmNsb25lKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nlcmllcy5yZW1vdmVWYWx1ZShzZXJpZXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXJpZXMucHVzaChuZXdTZXJpZXMpO1xyXG4gICAgICAgICAgICBzZXJpZXMgPSBuZXdTZXJpZXM7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcnQuZGF0YVVzZXJzLnB1c2gobmV3U2VyaWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VyaWVzLmNoYXJ0ID0gdGhpcy5jaGFydDtcclxuICAgICAgICBzZXJpZXMucGFyZW50ID0gdGhpcy5zZXJpZXNDb250YWluZXI7XHJcbiAgICAgICAgc2VyaWVzLmludGVyYWN0aW9uc0VuYWJsZWQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENsZWFucyB1cCBhZnRlciBzZXJpZXMgYXJlIHJlbW92ZWQgZnJvbSBTY3JvbGxiYXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtJTGlzdEV2ZW50czxYWVNlcmllcz5bXCJyZW1vdmVkXCJdfSAgZXZlbnQgIEV2ZW50XHJcbiAgICAgKi9cclxuICAgIFNtYWxsTWFwLnByb3RvdHlwZS5oYW5kbGVTZXJpZXNSZW1vdmVkID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy9sZXQgc291cmNlU2VyaWVzOiBNYXBTZXJpZXMgPSBldmVudC5vbGRWYWx1ZTtcclxuICAgICAgICB0aGlzLmludmFsaWRhdGUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIE1vdmVzIG1haW4gbWFwIHBhbiBwb3NpdGlvbiBhZnRlciBjbGljayBvbiB0aGUgc21hbGwgbWFwLlxyXG4gICAgICpcclxuICAgICAqIEBpZ25vcmUgRXhjbHVkZSBmcm9tIGRvY3NcclxuICAgICAqIEBwYXJhbSB7QU1FdmVudDxTcHJpdGUsIElTcHJpdGVFdmVudHM+W1wiaGl0XCJdfSAgZXZlbnQgIEV2ZW50XHJcbiAgICAgKi9cclxuICAgIFNtYWxsTWFwLnByb3RvdHlwZS5tb3ZlVG9Qb3NpdGlvbiA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBzdmdQb2ludCA9IGV2ZW50LnN2Z1BvaW50O1xyXG4gICAgICAgIHZhciByZWN0UG9pbnQgPSAkdXRpbHMuc3ZnUG9pbnRUb1Nwcml0ZShzdmdQb2ludCwgdGhpcy5yZWN0YW5nbGUpO1xyXG4gICAgICAgIHZhciB6b29tTGV2ZWwgPSB0aGlzLmNoYXJ0Lnpvb21MZXZlbDtcclxuICAgICAgICB2YXIgc2NhbGUgPSBNYXRoLm1pbih0aGlzLnBlcmNlbnRXaWR0aCwgdGhpcy5wZXJjZW50SGVpZ2h0KSAvIDEwMDtcclxuICAgICAgICB2YXIgeCA9IChyZWN0UG9pbnQueCArIHRoaXMucmVjdGFuZ2xlLnBpeGVsV2lkdGggLyAyKSAvIHNjYWxlICogem9vbUxldmVsO1xyXG4gICAgICAgIHZhciB5ID0gKHJlY3RQb2ludC55ICsgdGhpcy5yZWN0YW5nbGUucGl4ZWxIZWlnaHQgLyAyKSAvIHNjYWxlICogem9vbUxldmVsO1xyXG4gICAgICAgIHZhciBnZW9Qb2ludCA9IHRoaXMuY2hhcnQuc3ZnUG9pbnRUb0dlbyh7IHg6IHgsIHk6IHkgfSk7XHJcbiAgICAgICAgdGhpcy5jaGFydC56b29tVG9HZW9Qb2ludChnZW9Qb2ludCwgdGhpcy5jaGFydC56b29tTGV2ZWwsIHRydWUpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTbWFsbE1hcC5wcm90b3R5cGUsIFwiY2hhcnRcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEByZXR1cm4ge01hcENoYXJ0fSBDaGFydC9tYXBcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NoYXJ0LmdldCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBjaGFydC9tYXAgdGhhdCB0aGlzIGNvbnRyb2wgaXMgbWVhbnQgZm9yLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtNYXBDaGFydH0gIGNoYXJ0ICBDaGFydC9tYXBcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChjaGFydCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGFydCAhPSBjaGFydCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhcnQuc2V0KGNoYXJ0LCBuZXcgTXVsdGlEaXNwb3NlcihbXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jaGFydC5ldmVudHMub24oXCJ6b29tbGV2ZWxjaGFuZ2VkXCIsIHRoaXMudXBkYXRlUmVjdGFuZ2xlLCB0aGlzLCBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQuZXZlbnRzLm9uKFwibWFwcG9zaXRpb25jaGFuZ2VkXCIsIHRoaXMudXBkYXRlUmVjdGFuZ2xlLCB0aGlzLCBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQuZXZlbnRzLm9uKFwic2NhbGVyYXRpb2NoYW5nZWRcIiwgdGhpcy51cGRhdGVNYXBTaXplLCB0aGlzLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIF0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSB2aWV3cG9ydCByZWNhbmdsZSBhcyBwZXIgY3VycmVudCBtYXAgem9vbS9wYW4gcG9zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQGlnbm9yZSBFeGNsdWRlIGZyb20gZG9jc1xyXG4gICAgICovXHJcbiAgICBTbWFsbE1hcC5wcm90b3R5cGUudXBkYXRlUmVjdGFuZ2xlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjaGFydCA9IHRoaXMuY2hhcnQ7XHJcbiAgICAgICAgdmFyIHpvb21MZXZlbCA9IGNoYXJ0Lnpvb21MZXZlbDtcclxuICAgICAgICB2YXIgcmVjdGFuZ2xlID0gdGhpcy5yZWN0YW5nbGU7XHJcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gdGhpcy5waXhlbFdpZHRoIC8gem9vbUxldmVsO1xyXG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSB0aGlzLnBpeGVsSGVpZ2h0IC8gem9vbUxldmVsO1xyXG4gICAgICAgIHZhciBzY2FsZSA9IE1hdGgubWluKHRoaXMucGVyY2VudFdpZHRoLCB0aGlzLnBlcmNlbnRIZWlnaHQpIC8gMTAwO1xyXG4gICAgICAgIHZhciBzZXJpZXNDb250YWluZXIgPSBjaGFydC5zZXJpZXNDb250YWluZXI7XHJcbiAgICAgICAgcmVjdGFuZ2xlLnggPSBNYXRoLmNlaWwoKHpvb21MZXZlbCAqIHNlcmllc0NvbnRhaW5lci5waXhlbFdpZHRoIC8gMiAtIHNlcmllc0NvbnRhaW5lci5waXhlbFgpICogc2NhbGUgLyB6b29tTGV2ZWwgKyByZWN0YW5nbGUucGl4ZWxXaWR0aCAvIDIpO1xyXG4gICAgICAgIHJlY3RhbmdsZS55ID0gTWF0aC5jZWlsKCh6b29tTGV2ZWwgKiBzZXJpZXNDb250YWluZXIucGl4ZWxIZWlnaHQgLyAyIC0gc2VyaWVzQ29udGFpbmVyLnBpeGVsWSkgKiBzY2FsZSAvIHpvb21MZXZlbCArIHJlY3RhbmdsZS5waXhlbEhlaWdodCAvIDIpO1xyXG4gICAgICAgIHJlY3RhbmdsZS52YWxpZGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIG1hcCBzaXplIHNvIHRoYXQgaW50ZXJuYWwgZWxlbWVudHMgY2FuIHJlZHJhdyB0aGVtc2VsdmVzIGFmdGVyXHJcbiAgICAgKiB0aGUgc2l6ZSBvZiB0aGUgc21hbGwgbWFwIGNoYW5nZXMuXHJcbiAgICAgKlxyXG4gICAgICogQGlnbm9yZSBFeGNsdWRlIGZyb20gZG9jc1xyXG4gICAgICovXHJcbiAgICBTbWFsbE1hcC5wcm90b3R5cGUudXBkYXRlTWFwU2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmllc0NvbnRhaW5lci5zY2FsZSA9IHRoaXMuY2hhcnQuc2NhbGVSYXRpbyAqIE1hdGgubWluKHRoaXMucGVyY2VudFdpZHRoLCB0aGlzLnBlcmNlbnRIZWlnaHQpIC8gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlY3RhbmdsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFmdGVyRHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSBlbGVtZW50cyBhZnRlciBkcmF3aW5nIHRoZSBzbWFsbCBtYXAuXHJcbiAgICAgKi9cclxuICAgIFNtYWxsTWFwLnByb3RvdHlwZS5hZnRlckRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5hZnRlckRyYXcuY2FsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNlcmllc0NvbnRhaW5lci5tb3ZlVG8oeyB4OiB0aGlzLnBpeGVsV2lkdGggLyAyLCB5OiB0aGlzLnBpeGVsSGVpZ2h0IC8gMiB9KTtcclxuICAgICAgICB0aGlzLnJlY3RhbmdsZS5tYXNrUmVjdGFuZ2xlID0geyB4OiAtMSwgeTogLTEsIHdpZHRoOiBNYXRoLmNlaWwodGhpcy5waXhlbFdpZHRoICsgMiksIGhlaWdodDogTWF0aC5jZWlsKHRoaXMucGl4ZWxIZWlnaHQgKyAyKSB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUHJvY2Vzc2VzIEpTT04tYmFzZWQgY29uZmlnIGJlZm9yZSBpdCBpcyBhcHBsaWVkIHRvIHRoZSBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQGlnbm9yZSBFeGNsdWRlIGZyb20gZG9jc1xyXG4gICAgICogQHBhcmFtIHtvYmplY3R9ICBjb25maWcgIENvbmZpZ1xyXG4gICAgICovXHJcbiAgICBTbWFsbE1hcC5wcm90b3R5cGUucHJvY2Vzc0NvbmZpZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgICAgICAgIC8vIFNldCB1cCBzZXJpZXNcclxuICAgICAgICAgICAgaWYgKCR0eXBlLmhhc1ZhbHVlKGNvbmZpZy5zZXJpZXMpICYmICR0eXBlLmlzQXJyYXkoY29uZmlnLnNlcmllcykpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb25maWcuc2VyaWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlcmllcyA9IGNvbmZpZy5zZXJpZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR0eXBlLmhhc1ZhbHVlKHNlcmllcykgJiYgJHR5cGUuaXNTdHJpbmcoc2VyaWVzKSAmJiB0aGlzLm1hcC5oYXNLZXkoc2VyaWVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWcuc2VyaWVzW2ldID0gdGhpcy5tYXAuZ2V0S2V5KHNlcmllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucHJvY2Vzc0NvbmZpZy5jYWxsKHRoaXMsIGNvbmZpZyk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNtYWxsTWFwO1xyXG59KENvbnRhaW5lcikpO1xyXG5leHBvcnQgeyBTbWFsbE1hcCB9O1xyXG4vKipcclxuICogUmVnaXN0ZXIgY2xhc3MgaW4gc3lzdGVtLCBzbyB0aGF0IGl0IGNhbiBiZSBpbnN0YW50aWF0ZWQgdXNpbmcgaXRzIG5hbWUgZnJvbVxyXG4gKiBhbnl3aGVyZS5cclxuICpcclxuICogQGlnbm9yZVxyXG4gKi9cclxucmVnaXN0cnkucmVnaXN0ZXJlZENsYXNzZXNbXCJTbWFsbE1hcFwiXSA9IFNtYWxsTWFwO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1TbWFsbE1hcC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYW1jaGFydHMvYW1jaGFydHM0Ly5pbnRlcm5hbC9jaGFydHMvbWFwL1NtYWxsTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA0OTBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLyoqXHJcbiAqIFpvb20gY29udHJvbCBtb2R1bGVcclxuICovXHJcbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XHJcbi8qKlxyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqIElNUE9SVFNcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vLi4vY29yZS9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2NvcmUvZWxlbWVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCB7IFJvdW5kZWRSZWN0YW5nbGUgfSBmcm9tIFwiLi4vLi4vY29yZS9lbGVtZW50cy9Sb3VuZGVkUmVjdGFuZ2xlXCI7XHJcbmltcG9ydCB7IE11dGFibGVWYWx1ZURpc3Bvc2VyLCBNdWx0aURpc3Bvc2VyIH0gZnJvbSBcIi4uLy4uL2NvcmUvdXRpbHMvRGlzcG9zZXJcIjtcclxuaW1wb3J0IHsga2V5Ym9hcmQgfSBmcm9tIFwiLi4vLi4vY29yZS91dGlscy9LZXlib2FyZFwiO1xyXG5pbXBvcnQgeyBnZXRJbnRlcmFjdGlvbiB9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVyYWN0aW9uL0ludGVyYWN0aW9uXCI7XHJcbmltcG9ydCB7IHBlcmNlbnQgfSBmcm9tIFwiLi4vLi4vY29yZS91dGlscy9QZXJjZW50XCI7XHJcbmltcG9ydCB7IHJlZ2lzdHJ5IH0gZnJvbSBcIi4uLy4uL2NvcmUvUmVnaXN0cnlcIjtcclxuaW1wb3J0IHsgSW50ZXJmYWNlQ29sb3JTZXQgfSBmcm9tIFwiLi4vLi4vY29yZS91dGlscy9JbnRlcmZhY2VDb2xvclNldFwiO1xyXG4vKipcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiBNQUlOIENMQVNTXHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogQGhpZGRlblxyXG4gKi9cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBjb250cm9sIGZvciB6b29taW5nIHRoZSBtYXAuXHJcbiAqXHJcbiAqIEBzZWUge0BsaW5rIElab29tQ29udHJvbEV2ZW50c30gZm9yIGEgbGlzdCBvZiBhdmFpbGFibGUgZXZlbnRzXHJcbiAqIEBzZWUge0BsaW5rIElab29tQ29udHJvbEFkYXB0ZXJzfSBmb3IgYSBsaXN0IG9mIGF2YWlsYWJsZSBBZGFwdGVyc1xyXG4gKiBAaW1wb3J0YW50XHJcbiAqL1xyXG52YXIgWm9vbUNvbnRyb2wgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhab29tQ29udHJvbCwgX3N1cGVyKTtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gWm9vbUNvbnRyb2woKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIHRhcmdldCBtYXAuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7TXV0YWJsZVZhbHVlRGlzcG9zZXI8TWFwQ2hhcnQ+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF90aGlzLl9jaGFydCA9IG5ldyBNdXRhYmxlVmFsdWVEaXNwb3NlcigpO1xyXG4gICAgICAgIF90aGlzLmNsYXNzTmFtZSA9IFwiWm9vbUNvbnRyb2xcIjtcclxuICAgICAgICBfdGhpcy5hbGlnbiA9IFwicmlnaHRcIjtcclxuICAgICAgICBfdGhpcy52YWxpZ24gPSBcImJvdHRvbVwiO1xyXG4gICAgICAgIF90aGlzLmxheW91dCA9IFwidmVydGljYWxcIjtcclxuICAgICAgICBfdGhpcy5wYWRkaW5nKDUsIDUsIDUsIDUpO1xyXG4gICAgICAgIHZhciBpbnRlcmZhY2VDb2xvcnMgPSBuZXcgSW50ZXJmYWNlQ29sb3JTZXQoKTtcclxuICAgICAgICB2YXIgcGx1c0J1dHRvbiA9IF90aGlzLmNyZWF0ZUNoaWxkKEJ1dHRvbik7XHJcbiAgICAgICAgcGx1c0J1dHRvbi5zaG91bGRDbG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIHBsdXNCdXR0b24ubGFiZWwudGV4dCA9IFwiK1wiO1xyXG4gICAgICAgIHBsdXNCdXR0b24ud2lkdGggPSBwZXJjZW50KDEwMCk7XHJcbiAgICAgICAgcGx1c0J1dHRvbi5wYWRkaW5nKDUsIDUsIDUsIDUpO1xyXG4gICAgICAgIC8vcGx1c0J1dHRvbi5mb250RmFtaWx5ID0gXCJWZXJkYW5hXCI7XHJcbiAgICAgICAgX3RoaXMucGx1c0J1dHRvbiA9IHBsdXNCdXR0b247XHJcbiAgICAgICAgdmFyIHNsaWRlciA9IF90aGlzLmNyZWF0ZUNoaWxkKENvbnRhaW5lcik7XHJcbiAgICAgICAgc2xpZGVyLnNob3VsZENsb25lID0gZmFsc2U7XHJcbiAgICAgICAgc2xpZGVyLndpZHRoID0gcGVyY2VudCgxMDApO1xyXG4gICAgICAgIHNsaWRlci5iYWNrZ3JvdW5kLmZpbGwgPSBpbnRlcmZhY2VDb2xvcnMuZ2V0Rm9yKFwiYWx0ZXJuYXRpdmVCYWNrZ3JvdW5kXCIpO1xyXG4gICAgICAgIHNsaWRlci5iYWNrZ3JvdW5kLmZpbGxPcGFjaXR5ID0gMC4wNTtcclxuICAgICAgICBzbGlkZXIuYmFja2dyb3VuZC5ldmVudHMub24oXCJoaXRcIiwgX3RoaXMuaGFuZGxlQmFja2dyb3VuZENsaWNrLCBfdGhpcywgZmFsc2UpO1xyXG4gICAgICAgIHNsaWRlci5ldmVudHMub24oXCJzaXplY2hhbmdlZFwiLCBfdGhpcy51cGRhdGVUaHVtYlNpemUsIF90aGlzLCBmYWxzZSk7XHJcbiAgICAgICAgX3RoaXMuc2xpZGVyID0gc2xpZGVyO1xyXG4gICAgICAgIHZhciB0aHVtYiA9IHNsaWRlci5jcmVhdGVDaGlsZChCdXR0b24pO1xyXG4gICAgICAgIHRodW1iLnNob3VsZENsb25lID0gZmFsc2U7XHJcbiAgICAgICAgdGh1bWIucGFkZGluZygwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aHVtYi5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgIHRodW1iLmV2ZW50cy5vbihcImRyYWdcIiwgX3RoaXMuaGFuZGxlVGh1bWJEcmFnLCBfdGhpcywgZmFsc2UpO1xyXG4gICAgICAgIF90aGlzLnRodW1iID0gdGh1bWI7XHJcbiAgICAgICAgdmFyIG1pbnVzQnV0dG9uID0gX3RoaXMuY3JlYXRlQ2hpbGQoQnV0dG9uKTtcclxuICAgICAgICBtaW51c0J1dHRvbi5zaG91bGRDbG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIG1pbnVzQnV0dG9uLmxhYmVsLnRleHQgPSBcIi1cIjtcclxuICAgICAgICBtaW51c0J1dHRvbi5wYWRkaW5nKDUsIDUsIDUsIDUpO1xyXG4gICAgICAgIC8vbWludXNCdXR0b24uZm9udEZhbWlseSA9IFwiVmVyZGFuYVwiO1xyXG4gICAgICAgIF90aGlzLm1pbnVzQnV0dG9uID0gbWludXNCdXR0b247XHJcbiAgICAgICAgLy8gU2V0IHJvbGVzXHJcbiAgICAgICAgX3RoaXMudGh1bWIucm9sZSA9IFwic2xpZGVyXCI7XHJcbiAgICAgICAgX3RoaXMudGh1bWIucmVhZGVyTGl2ZSA9IFwicG9saXRlXCI7XHJcbiAgICAgICAgLy8gU2V0IHJlYWRlciB0ZXh0XHJcbiAgICAgICAgX3RoaXMudGh1bWIucmVhZGVyVGl0bGUgPSBfdGhpcy5sYW5ndWFnZS50cmFuc2xhdGUoXCJVc2UgYXJyb3cga2V5cyB0byB6b29tIGluIGFuZCBvdXRcIik7XHJcbiAgICAgICAgX3RoaXMubWludXNCdXR0b24ucmVhZGVyVGl0bGUgPSBfdGhpcy5sYW5ndWFnZS50cmFuc2xhdGUoXCJQcmVzcyBFTlRFUiB0byB6b29tIGluXCIpO1xyXG4gICAgICAgIF90aGlzLnBsdXNCdXR0b24ucmVhZGVyVGl0bGUgPSBfdGhpcy5sYW5ndWFnZS50cmFuc2xhdGUoXCJQcmVzcyBFTlRFUiB0byB6b29tIG91dFwiKTtcclxuICAgICAgICBfdGhpcy5hcHBseVRoZW1lKCk7XHJcbiAgICAgICAgX3RoaXMuZXZlbnRzLm9uKFwicHJvcGVydHljaGFuZ2VkXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQucHJvcGVydHkgPT0gXCJsYXlvdXRcIikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZml4TGF5b3V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlKTtcclxuICAgICAgICBfdGhpcy5fZGlzcG9zZXJzLnB1c2goX3RoaXMuX2NoYXJ0KTtcclxuICAgICAgICBfdGhpcy5maXhMYXlvdXQoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBab29tQ29udHJvbC5wcm90b3R5cGUuZml4TGF5b3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxheW91dCA9PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IDQwO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5taW51c0J1dHRvbi53aWR0aCA9IHBlcmNlbnQoMTAwKTtcclxuICAgICAgICAgICAgdGhpcy50aHVtYi53aWR0aCA9IHBlcmNlbnQoMTAwKTtcclxuICAgICAgICAgICAgdGhpcy5wbHVzQnV0dG9uLndpZHRoID0gcGVyY2VudCgxMDApO1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlci53aWR0aCA9IHBlcmNlbnQoMTAwKTtcclxuICAgICAgICAgICAgdGhpcy5taW51c0J1dHRvbi5tYXJnaW5Ub3AgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBsdXNCdXR0b24ubWFyZ2luQm90dG9tID0gMjtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXIuaGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5taW51c0J1dHRvbi50b0Zyb250KCk7XHJcbiAgICAgICAgICAgIHRoaXMucGx1c0J1dHRvbi50b0JhY2soKTtcclxuICAgICAgICAgICAgdGhpcy50aHVtYi5taW5YID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aHVtYi5tYXhYID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aHVtYi5taW5ZID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5sYXlvdXQgPT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICAgICAgdGhpcy50aHVtYi5taW5YID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aHVtYi5taW5ZID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aHVtYi5tYXhZID0gMDtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA0MDtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5taW51c0J1dHRvbi5oZWlnaHQgPSBwZXJjZW50KDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMubWludXNCdXR0b24ud2lkdGggPSAzMDtcclxuICAgICAgICAgICAgdGhpcy50aHVtYi5oZWlnaHQgPSBwZXJjZW50KDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMudGh1bWIud2lkdGggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMucGx1c0J1dHRvbi5oZWlnaHQgPSBwZXJjZW50KDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMucGx1c0J1dHRvbi53aWR0aCA9IDMwO1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlci5oZWlnaHQgPSBwZXJjZW50KDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyLndpZHRoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5taW51c0J1dHRvbi5tYXJnaW5MZWZ0ID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wbHVzQnV0dG9uLm1hcmdpblJpZ2h0ID0gMjtcclxuICAgICAgICAgICAgdGhpcy5taW51c0J1dHRvbi50b0JhY2soKTtcclxuICAgICAgICAgICAgdGhpcy5wbHVzQnV0dG9uLnRvRnJvbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHpvb20gb3BlcmF0aW9uIGFmdGVyIGNsaWNraW5nIG9uIHRoZSBzbGlkZXIgYmFja2dyb3VuZC5cclxuICAgICAqXHJcbiAgICAgKiBAaWdub3JlIEV4Y2x1ZGUgZnJvbSBkb2NzXHJcbiAgICAgKiBAcGFyYW0ge0FNRXZlbnQ8U3ByaXRlLCBJU3ByaXRlRXZlbnRzPltcImhpdFwiXX0gIGV2ZW50ICBFdmVudFxyXG4gICAgICovXHJcbiAgICBab29tQ29udHJvbC5wcm90b3R5cGUuaGFuZGxlQmFja2dyb3VuZENsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHNwcml0ZSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICB2YXIgeSA9IGV2ZW50LnNwcml0ZVBvaW50Lnk7XHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gdGhpcy5jaGFydDtcclxuICAgICAgICB2YXIgbWF4UG93ZXIgPSBNYXRoLmxvZyhjaGFydC5tYXhab29tTGV2ZWwpIC8gTWF0aC5MTjI7XHJcbiAgICAgICAgdmFyIG1pblBvd2VyID0gTWF0aC5sb2coY2hhcnQubWluWm9vbUxldmVsKSAvIE1hdGguTE4yO1xyXG4gICAgICAgIHZhciBwb3dlciA9IChzcHJpdGUucGl4ZWxIZWlnaHQgLSB5KSAvIHNwcml0ZS5waXhlbEhlaWdodCAqIChtaW5Qb3dlciArIChtYXhQb3dlciAtIG1pblBvd2VyKSk7XHJcbiAgICAgICAgdmFyIHpvb21MZXZlbCA9IE1hdGgucG93KDIsIHBvd2VyKTtcclxuICAgICAgICBjaGFydC56b29tVG9HZW9Qb2ludChjaGFydC56b29tR2VvUG9pbnQsIHpvb21MZXZlbCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvb21Db250cm9sLnByb3RvdHlwZSwgXCJjaGFydFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHJldHVybiB7TWFwQ2hhcnR9IE1hcC9jaGFydFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hhcnQuZ2V0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIG1haW4gY2hhcnQvbWFwIHRoYXQgdGhpcyB6b29tIGNvbnRyb2wgaXMgZm9yLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtNYXBDaGFydH0gIGNoYXJ0ICBNYXAvY2hhcnRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChjaGFydCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLl9jaGFydC5zZXQoY2hhcnQsIG5ldyBNdWx0aURpc3Bvc2VyKFtcclxuICAgICAgICAgICAgICAgIGNoYXJ0LmV2ZW50cy5vbihcIm1heHNpemVjaGFuZ2VkXCIsIHRoaXMudXBkYXRlVGh1bWJTaXplLCB0aGlzLCBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICBjaGFydC5ldmVudHMub24oXCJ6b29tbGV2ZWxjaGFuZ2VkXCIsIHRoaXMudXBkYXRlVGh1bWIsIHRoaXMsIGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIHRoaXMubWludXNCdXR0b24uZXZlbnRzLm9uKFwiaGl0XCIsIGZ1bmN0aW9uICgpIHsgY2hhcnQuem9vbU91dChjaGFydC56b29tR2VvUG9pbnQpOyB9LCBjaGFydCwgZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgZ2V0SW50ZXJhY3Rpb24oKS5ib2R5LmV2ZW50cy5vbihcImtleXVwXCIsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy50b3BQYXJlbnQuaGFzRm9jdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5Ym9hcmQuaXNLZXkoZXYuZXZlbnQsIFwiZW50ZXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5taW51c0J1dHRvbi5pc0ZvY3VzZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFydC56b29tT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChfdGhpcy5wbHVzQnV0dG9uLmlzRm9jdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0Lnpvb21JbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtleWJvYXJkLmlzS2V5KGV2LmV2ZW50LCBcInBsdXNcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0Lnpvb21JbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtleWJvYXJkLmlzS2V5KGV2LmV2ZW50LCBcIm1pbnVzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFydC56b29tT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBjaGFydCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsdXNCdXR0b24uZXZlbnRzLm9uKFwiaGl0XCIsIGZ1bmN0aW9uICgpIHsgY2hhcnQuem9vbUluKGNoYXJ0Lnpvb21HZW9Qb2ludCk7IH0sIGNoYXJ0LCBmYWxzZSlcclxuICAgICAgICAgICAgXSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBzbGlkZXIncyB0aHVtYiBzaXplIGJhc2VkIG9uIHRoZSBhdmFpbGFibGUgem9vbSBzcGFjZS5cclxuICAgICAqXHJcbiAgICAgKiBAaWdub3JlIEV4Y2x1ZGUgZnJvbSBkb2NzXHJcbiAgICAgKi9cclxuICAgIFpvb21Db250cm9sLnByb3RvdHlwZS51cGRhdGVUaHVtYlNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gdGhpcy5jaGFydDtcclxuICAgICAgICBpZiAoY2hhcnQpIHtcclxuICAgICAgICAgICAgdmFyIHNsaWRlciA9IHRoaXMuc2xpZGVyO1xyXG4gICAgICAgICAgICB2YXIgdGh1bWIgPSB0aGlzLnRodW1iO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQgPT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aHVtYi5taW5IZWlnaHQgPSBNYXRoLm1pbih0aGlzLnNsaWRlci5waXhlbEhlaWdodCwgMjApO1xyXG4gICAgICAgICAgICAgICAgdGh1bWIuaGVpZ2h0ID0gc2xpZGVyLnBpeGVsSGVpZ2h0IC8gdGhpcy5zdGVwQ291bnQ7XHJcbiAgICAgICAgICAgICAgICB0aHVtYi5tYXhZID0gc2xpZGVyLnBpeGVsSGVpZ2h0IC0gdGh1bWIucGl4ZWxIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGh1bWIucGl4ZWxIZWlnaHQgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRodW1iLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRodW1iLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGh1bWIubWluV2lkdGggPSBNYXRoLm1pbih0aGlzLnNsaWRlci5waXhlbFdpZHRoLCAyMCk7XHJcbiAgICAgICAgICAgICAgICB0aHVtYi53aWR0aCA9IHNsaWRlci5waXhlbFdpZHRoIC8gdGhpcy5zdGVwQ291bnQ7XHJcbiAgICAgICAgICAgICAgICB0aHVtYi5tYXhYID0gc2xpZGVyLnBpeGVsV2lkdGggLSB0aHVtYi5waXhlbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRodW1iLnBpeGVsV2lkdGggPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRodW1iLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRodW1iLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aHVtYiBhY2NvcmRpbmcgdG8gY3VycmVudCB6b29tIHBvc2l0aW9uIGZyb20gbWFwLlxyXG4gICAgICpcclxuICAgICAqIEBpZ25vcmUgRXhjbHVkZSBmcm9tIGRvY3NcclxuICAgICAqL1xyXG4gICAgWm9vbUNvbnRyb2wucHJvdG90eXBlLnVwZGF0ZVRodW1iID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzbGlkZXIgPSB0aGlzLnNsaWRlcjtcclxuICAgICAgICB2YXIgY2hhcnQgPSB0aGlzLmNoYXJ0O1xyXG4gICAgICAgIHZhciB0aHVtYiA9IHRoaXMudGh1bWI7XHJcbiAgICAgICAgaWYgKCF0aHVtYi5pc0Rvd24pIHtcclxuICAgICAgICAgICAgdmFyIHN0ZXAgPSAoTWF0aC5sb2coY2hhcnQuem9vbUxldmVsKSAtIE1hdGgubG9nKHRoaXMuY2hhcnQubWluWm9vbUxldmVsKSkgLyBNYXRoLkxOMjtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0ID09IFwidmVydGljYWxcIikge1xyXG4gICAgICAgICAgICAgICAgdGh1bWIueSA9IHNsaWRlci5waXhlbEhlaWdodCAtIChzbGlkZXIucGl4ZWxIZWlnaHQgLSB0aHVtYi5waXhlbEhlaWdodCkgKiBzdGVwIC8gdGhpcy5zdGVwQ291bnQgLSB0aHVtYi5waXhlbEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRodW1iLnggPSBzbGlkZXIucGl4ZWxXaWR0aCAqIHN0ZXAgLyB0aGlzLnN0ZXBDb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFpvb21zIHRoZSBhY3R1YWwgbWFwIHdoZW4gc2xpZGVyIHBvc2l0aW9uIGNoYW5nZXMuXHJcbiAgICAgKlxyXG4gICAgICogQGlnbm9yZSBFeGNsdWRlIGZyb20gZG9jc1xyXG4gICAgICovXHJcbiAgICBab29tQ29udHJvbC5wcm90b3R5cGUuaGFuZGxlVGh1bWJEcmFnID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzbGlkZXIgPSB0aGlzLnNsaWRlcjtcclxuICAgICAgICB2YXIgY2hhcnQgPSB0aGlzLmNoYXJ0O1xyXG4gICAgICAgIHZhciB0aHVtYiA9IHRoaXMudGh1bWI7XHJcbiAgICAgICAgdmFyIHN0ZXA7XHJcbiAgICAgICAgdmFyIG1pblN0ZXAgPSBNYXRoLmxvZyh0aGlzLmNoYXJ0Lm1pblpvb21MZXZlbCkgLyBNYXRoLkxOMjtcclxuICAgICAgICBpZiAodGhpcy5sYXlvdXQgPT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgICAgIHN0ZXAgPSB0aGlzLnN0ZXBDb3VudCAqIChzbGlkZXIucGl4ZWxIZWlnaHQgLSB0aHVtYi5waXhlbFkgLSB0aHVtYi5waXhlbEhlaWdodCkgLyAoc2xpZGVyLnBpeGVsSGVpZ2h0IC0gdGh1bWIucGl4ZWxIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3RlcCA9IHRoaXMuc3RlcENvdW50ICogdGh1bWIucGl4ZWxYIC8gc2xpZGVyLnBpeGVsV2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0ZXAgPSBtaW5TdGVwICsgc3RlcDtcclxuICAgICAgICB2YXIgem9vbUxldmVsID0gTWF0aC5wb3coMiwgc3RlcCk7XHJcbiAgICAgICAgY2hhcnQuem9vbVRvR2VvUG9pbnQodW5kZWZpbmVkLCB6b29tTGV2ZWwsIGZhbHNlLCAwKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9vbUNvbnRyb2wucHJvdG90eXBlLCBcInN0ZXBDb3VudFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0aGUgc3RlcCBjb3VudGZvciB0aGUgc2xpZGVyIGdyaWQgYWNjb3JkaW5nIHRvIG1hcCdzIG1pbiBhbmQgbWF4XHJcbiAgICAgICAgICogem9vbSBsZXZlbCBzZXR0aW5ncy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBpZ25vcmUgRXhjbHVkZSBmcm9tIGRvY3NcclxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFN0ZXAgY291bnRcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgubG9nKHRoaXMuY2hhcnQubWF4Wm9vbUxldmVsKSAvIE1hdGguTE4yIC0gTWF0aC5sb2codGhpcy5jaGFydC5taW5ab29tTGV2ZWwpIC8gTWF0aC5MTjI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBiYWNrZ3JvdW5kIGVsZW1lbnQgZm9yIHNsaWRlciBjb250cm9sLlxyXG4gICAgICpcclxuICAgICAqIEBpZ25vcmUgRXhjbHVkZSBmcm9tIGRvY3NcclxuICAgICAqIEByZXR1cm4ge3RoaXN9IEJhY2tncm91bmRcclxuICAgICAqL1xyXG4gICAgWm9vbUNvbnRyb2wucHJvdG90eXBlLmNyZWF0ZUJhY2tncm91bmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3VuZGVkUmVjdGFuZ2xlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFpvb21Db250cm9sO1xyXG59KENvbnRhaW5lcikpO1xyXG5leHBvcnQgeyBab29tQ29udHJvbCB9O1xyXG4vKipcclxuICogUmVnaXN0ZXIgY2xhc3MgaW4gc3lzdGVtLCBzbyB0aGF0IGl0IGNhbiBiZSBpbnN0YW50aWF0ZWQgdXNpbmcgaXRzIG5hbWUgZnJvbVxyXG4gKiBhbnl3aGVyZS5cclxuICpcclxuICogQGlnbm9yZVxyXG4gKi9cclxucmVnaXN0cnkucmVnaXN0ZXJlZENsYXNzZXNbXCJab29tQ29udHJvbFwiXSA9IFpvb21Db250cm9sO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ab29tQ29udHJvbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYW1jaGFydHMvYW1jaGFydHM0Ly5pbnRlcm5hbC9jaGFydHMvbWFwL1pvb21Db250cm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA0OTFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sInNvdXJjZVJvb3QiOiIifQ==