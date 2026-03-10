"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
exports.__esModule = true;
var react_1 = require("react");
var getAllProduct_1 = require("../../services/getAllProduct");
var useSearchFunction_1 = require("../../hooks/useSearchFunction");
var filters_1 = require("./components/filters");
var material_1 = require("@mui/material");
var ArrowBackIos_1 = require("@mui/icons-material/ArrowBackIos");
var ArrowForwardIos_1 = require("@mui/icons-material/ArrowForwardIos");
var ProductList_1 = require("./components/ProductList");
function AllProductsPage(_a) {
    var _this = this;
    var _b = _a.searchValue, searchValue = _b === void 0 ? "" : _b, _c = _a.category, category = _c === void 0 ? "" : _c, _d = _a.sort, sort = _d === void 0 ? "" : _d;
    var _e = react_1.useState([]), products = _e[0], setProducts = _e[1];
    var _f = react_1.useState(false), loading = _f[0], setLoading = _f[1];
    var _g = react_1.useState(1), page = _g[0], setPage = _g[1];
    var _h = react_1.useState(0), total = _h[0], setTotal = _h[1];
    var limit = 12;
    var _j = react_1.useState({
        search: "",
        sort: "",
        category: ""
    }), filters = _j[0], setFilters = _j[1];
    var _k = useSearchFunction_1.useSearchFunction(searchValue), searchData = _k.data, searchLoading = _k.isLoading;
    var isMobile = material_1.useMediaQuery("(max-width: 900px)");
    var _l = react_1.useState(false), open = _l[0], setOpen = _l[1];
    react_1.useEffect(function () {
        setPage(1);
    }, [searchValue, category, sort]);
    react_1.useEffect(function () {
        var fetchProducts = function () { return __awaiter(_this, void 0, void 0, function () {
            var skip, params, endpoint, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading(true);
                        skip = (page - 1) * limit;
                        params = {
                            category: filters.category || "",
                            search: searchValue || filters.search || "",
                            sortBy: filters.sort || "",
                            order: "asc",
                            limit: limit,
                            skip: skip
                        };
                        console.log("Fetching products whis params:", params);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        endpoint = "/products";
                        if (searchValue)
                            endpoint = "/products/search?q=" + searchValue;
                        else if (category)
                            endpoint = "/products/category/" + category;
                        else if (sort)
                            endpoint = "/products?sortBy=" + sort + "&order=asc";
                        return [4 /*yield*/, getAllProduct_1.getAllProducts(params)];
                    case 2:
                        data = _a.sent();
                        setProducts(data.products);
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 5];
                    case 4:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        fetchProducts();
    }, [searchValue, filters.category, filters.sort, filters.search, page]);
    return (React.createElement(material_1.Box, { sx: {
            display: "grid",
            gridTemplateColumns: {
                xs: "1fr",
                md: "250px 8fr"
            },
            width: "100%"
        } },
        isMobile && (React.createElement(material_1.Button, { variant: "contained", onClick: function () { return setOpen(true); }, sx: {
                position: "fixed",
                top: 16,
                left: 16,
                zIndex: 1200
            } }, "Filters")),
        !isMobile ? (React.createElement(material_1.Box, null,
            React.createElement(filters_1["default"], { filters: filters, setFilters: setFilters }))) : (React.createElement(material_1.Drawer, { anchor: "left", open: open, onClose: function () { return setOpen(false); } },
            React.createElement(material_1.Box, { sx: { width: "250px", p: 2 } },
                React.createElement(material_1.Button, null,
                    React.createElement(filters_1["default"], { filters: filters, setFilters: setFilters }))))),
        React.createElement(material_1.Box, { sx: {
                py: 4,
                px: { xs: 2, sm: 4, md: 6 },
                display: "flex",
                justifyContent: "center"
            } },
            React.createElement(material_1.Box, { sx: {
                    width: "100%",
                    maxWidth: "1400px"
                } },
                loading ? (React.createElement("p", null, "Loading...")) : (React.createElement(ProductList_1["default"], { products: products })),
                React.createElement(material_1.Box, { sx: {
                        mt: 4,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 2
                    } },
                    React.createElement(material_1.Button, { onClick: function () { return setPage(function (p) { return Math.max(p - 1, 1); }); } },
                        React.createElement(ArrowBackIos_1["default"], null)),
                    React.createElement("span", null,
                        "Page: ",
                        page),
                    React.createElement(material_1.Button, { onClick: function () { return setPage(function (p) { return p + 1; }); } },
                        React.createElement(ArrowForwardIos_1["default"], null)))))));
}
exports["default"] = AllProductsPage;
