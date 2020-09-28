
exports.min = function min (array) {
    if (array && array.length > 0){
        let min = 0;
        for (let item of array){
            if (item < min){
                min = item;
            }
        }
        return min;
    } else return 0;

}

exports.max = function max (array) {
    if (array && array.length > 0){
        let max = 0;
        for (let item of array){
            if (item > max){
                max = item;
            }
        }
        return max;
    } else return 0;

}

exports.avg = function avg (array) {
    if (array && array.length > 0){
        let avg = 0;
        for (let item of array){
            avg += item;
        }
        return avg / array.length;
    } else return 0

}
