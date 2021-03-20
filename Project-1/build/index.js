var Project1 = /** @class */ (function () {
    function Project1() {
        this.startApp();
    }
    Project1.prototype.startApp = function () {
        this.getInputs();
        this.watchInputValues();
    };
    Project1.prototype.getInputs = function () {
        this.input1Input = document.querySelector('#input1');
        this.input2Input = document.querySelector('#input2');
        this.input3Input = document.querySelector('#input3');
        this.input4Input = document.querySelector('#input4');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    Project1.prototype.watchInputValues = function () {
        var _this = this;
        this.input1Input.addEventListener('input', function () { return _this.computeData(); });
        this.input2Input.addEventListener('input', function () { return _this.computeData(); });
        this.input3Input.addEventListener('input', function () { return _this.computeData(); });
        this.input4Input.addEventListener('input', function () { return _this.computeData(); });
    };
    Project1.prototype.computeData = function () {
        var input1 = +this.input1Input.value;
        var input2 = +this.input2Input.value;
        var input3 = +this.input3Input.value;
        var input4 = +this.input4Input.value;
        var sum = input1 + input2 + input3 + input4;
        var avg = sum / 4;
        var min = Math.min(input1, input2, input3, input4);
        var max = Math.max(input1, input2, input3, input4);
        this.showStats(sum, avg, min, max);
    };
    Project1.prototype.showStats = function (sum, avg, min, max) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    };
    return Project1;
}());
var project1 = new Project1();
