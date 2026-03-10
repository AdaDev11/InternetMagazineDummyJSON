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
exports.__esModule = true;
var material_1 = require("@mui/material");
function Filters(_a) {
    var filters = _a.filters, setFilters = _a.setFilters;
    return (React.createElement(material_1.Box, { sx: { maxWidth: 300, p: 2 } },
        React.createElement(material_1.Typography, { variant: "h6" }, "Filters"),
        React.createElement(material_1.TextField, { fullWidth: true, placeholder: "Search products...", value: filters.search, onChange: function (e) {
                return setFilters(__assign(__assign({}, filters), { search: e.target.value }));
            }, sx: { my: 2 } }),
        React.createElement(material_1.FormControl, { fullWidth: true, sx: { my: 1 } },
            React.createElement(material_1.InputLabel, { id: "sort-label" }, "Sort"),
            React.createElement(material_1.Select, { labelId: "sort-label", label: "Sort", value: filters.sort, onChange: function (e) {
                    return setFilters(__assign(__assign({}, filters), { sort: e.target.value }));
                } },
                React.createElement(material_1.MenuItem, { value: "" }, "Default"),
                React.createElement(material_1.MenuItem, { value: "az" }, "Name (A\u2013Z)"),
                React.createElement(material_1.MenuItem, { value: "za" }, "Name (Z\u2013A)"),
                React.createElement(material_1.MenuItem, { value: "low" }, "Price (Low \u2192 High)"),
                React.createElement(material_1.MenuItem, { value: "high" }, "Price (High \u2192 Low)"))),
        React.createElement(material_1.FormControl, { fullWidth: true, sx: { my: 1 } },
            React.createElement(material_1.InputLabel, { id: "category-label" }, "Category"),
            React.createElement(material_1.Select, { labelId: "category-label", label: "Category", value: filters.category, onChange: function (e) {
                    return setFilters(__assign(__assign({}, filters), { category: e.target.value }));
                } },
                React.createElement(material_1.MenuItem, { value: "" }, "All"),
                React.createElement(material_1.MenuItem, { value: "smartphones" }, "Smartphones"),
                React.createElement(material_1.MenuItem, { value: "laptops" }, "Laptops"),
                React.createElement(material_1.MenuItem, { value: "fragrances" }, "Fragrances"),
                React.createElement(material_1.MenuItem, { value: "beauty" }, "Beauty"),
                React.createElement(material_1.MenuItem, { value: "furniture" }, "Furniture"),
                React.createElement(material_1.MenuItem, { value: "groceries" }, "Groceries"),
                React.createElement(material_1.MenuItem, { value: "home-decoration" }, "Home-decoration"),
                React.createElement(material_1.MenuItem, { value: "kitchen-accessories" }, "Kitchen-accessories"),
                React.createElement(material_1.MenuItem, { value: "mens-shirts" }, "Mens-shirts"),
                React.createElement(material_1.MenuItem, { value: "mens-shoes" }, "Mens-shoes"),
                React.createElement(material_1.MenuItem, { value: "mens-watches" }, "Mens-watches"),
                React.createElement(material_1.MenuItem, { value: "mobile-accessories" }, "Mobile-accessories"),
                React.createElement(material_1.MenuItem, { value: "motorcycle" }, "Motorcycl"),
                React.createElement(material_1.MenuItem, { value: "skin-care" }, "Skin-care"),
                React.createElement(material_1.MenuItem, { value: "sports-accessories" }, "Sports-accessories"),
                React.createElement(material_1.MenuItem, { value: "sunglasses" }, "Sunglasses"),
                React.createElement(material_1.MenuItem, { value: "tablets" }, "Tablest"),
                React.createElement(material_1.MenuItem, { value: "tops" }, "Tops"),
                React.createElement(material_1.MenuItem, { value: "vehicle" }, "Vehicle"),
                React.createElement(material_1.MenuItem, { value: "womens-bags" }, "Womens-bags"),
                React.createElement(material_1.MenuItem, { value: "womens-dresses" }, "Womens-dresses"),
                React.createElement(material_1.MenuItem, { value: "womens-jewellery" }, "Womens-jewellery"),
                React.createElement(material_1.MenuItem, { value: "womens-shoes" }, "Womens-shoes"),
                React.createElement(material_1.MenuItem, { value: "womens-watches" }, "Womens-watches")))));
}
exports["default"] = Filters;
