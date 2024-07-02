var filterFunction = function (products) {
    var index = 3;
    return products[index];
};
var funcNo1 = function (val1, val2) {
    return [val1, val2];
};
var CoCo = /** @class */ (function () {
    function CoCo(xCor, yCor) {
        this.xCor = xCor;
        this.yCor = yCor;
    }
    return CoCo;
}());
var funcNo2 = function (point) {
    console.log(point.xCor);
};
funcNo2(new CoCo(12, 21));
