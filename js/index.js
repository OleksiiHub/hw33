let arr = [1, 2, 3, 4, 5]

Array.prototype.pow = function (n) {
    let newArr = [];
    this.forEach((item) => {
        newArr.push(item ** n)
        console.log(newArr);
    });
};

function defer() {

    arr.pow(2);
};

setTimeout(defer, 4000);