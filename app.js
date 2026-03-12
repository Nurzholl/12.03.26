var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var userTuple = ["Alex", 25, true];
function welcome(data) {
    return "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, ".concat(data.name, "!");
}
var BaseStore = /** @class */ (function () {
    function BaseStore() {
    }
    return BaseStore;
}());
var ProductStore = /** @class */ (function (_super) {
    __extends(ProductStore, _super);
    function ProductStore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.storeName = "My Tech Store";
        _this.products = [];
        _this.categories = {
            "elec": "Электроника",
            "book": "Книги"
        };
        return _this;
    }
    ProductStore.prototype.addProduct = function (p) {
        this.products.push(p);
    };
    Object.defineProperty(ProductStore.prototype, "allProducts", {
        get: function () {
            return this.products;
        },
        enumerable: false,
        configurable: true
    });
    ProductStore.prototype.updateQuantity = function (id, qty) {
        var p = this.products.find(function (item) { return item.id === id; });
        if (p)
            p.quantity = qty;
    };
    ProductStore.prototype.deleteProduct = function (id) {
        this.products = this.products.filter(function (p) { return p.id !== id; });
    };
    return ProductStore;
}(BaseStore));
var catalog = [
    { id: 1, name: "Phone", price: 500, quantity: 10 },
    { id: 2, name: "Laptop", price: 1200, quantity: 5 }
];
var expensiveItems = catalog.filter(function (p) { return p.price > 600; });
var totalPrice = catalog.reduce(function (sum, p) { return sum + (p.price * p.quantity); }, 0);
