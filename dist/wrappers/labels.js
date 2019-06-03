"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../api");
var sagas_1 = __importDefault(require("../utils/sagas"));
var DEFAULT_LABEL_COLOR = '#326BBA';
exports.addLabelDefaults = function (l) { return (__assign({}, l, { properties: __assign({}, l.properties, { color: (l.properties || {}).color || DEFAULT_LABEL_COLOR, description: (l.properties || {}).description || '' }) })); };
var default_1 = (function () {
    function default_1(basePath, baseOptions) {
        this.service = new api_1.LabelsApi({ basePath: basePath, baseOptions: baseOptions });
        this.serviceOptions = baseOptions;
    }
    default_1.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var label;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.getLabelsID(id, undefined, this.serviceOptions)];
                    case 1:
                        label = (_a.sent()).data.label;
                        if (!label) {
                            throw new Error('Failed to get label');
                        }
                        return [2, exports.addLabelDefaults(label)];
                }
            });
        });
    };
    default_1.prototype.getAll = function (orgID) {
        return __awaiter(this, void 0, void 0, function () {
            var labels;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.getLabels(undefined, orgID, this.serviceOptions)];
                    case 1:
                        labels = (_a.sent()).data.labels;
                        return [2, (labels || []).map(exports.addLabelDefaults)];
                }
            });
        });
    };
    default_1.prototype.create = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var label;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.postLabels(request, this.serviceOptions)];
                    case 1:
                        label = (_a.sent()).data.label;
                        if (!label) {
                            throw new Error('Failed to create label');
                        }
                        return [2, exports.addLabelDefaults(label)];
                }
            });
        });
    };
    default_1.prototype.createAll = function (labels) {
        return __awaiter(this, void 0, void 0, function () {
            var pendingLabels;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pendingLabels = labels.map(function (r) {
                            return {
                                action: function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4, this.create(r)];
                                            case 1: return [2, _a.sent()];
                                        }
                                    });
                                }); },
                                rollback: function (r) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (r && r.id) {
                                            this.delete(r.id);
                                        }
                                        return [2];
                                    });
                                }); },
                            };
                        });
                        return [4, sagas_1.default(pendingLabels)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    default_1.prototype.update = function (id, updates) {
        return __awaiter(this, void 0, void 0, function () {
            var original, label;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.get(id)];
                    case 1:
                        original = _a.sent();
                        return [4, this.service.patchLabelsID(id, __assign({}, original, updates), undefined, this.serviceOptions)];
                    case 2:
                        label = (_a.sent()).data.label;
                        if (!label) {
                            throw new Error('Failed to update label');
                        }
                        return [2, exports.addLabelDefaults(label)];
                }
            });
        });
    };
    default_1.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.deleteLabelsID(id, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    return default_1;
}());
exports.default = default_1;
