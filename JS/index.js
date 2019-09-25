function fibonacci(num) {
    if (isNaN(num)) {
        document.getElementById("error").innerHTML = "It is not a number";
        document.getElementById("result").innerHTML = "";
        document.getElementById("result").style.backgroundColor = "lightcoral";

    } else if (num == "") {
        document.getElementById("error").innerHTML = "Insert a number";
        document.getElementById("result").innerHTML = "";
        document.getElementById("result").style.backgroundColor = "lightcoral";
    }
    else if (num <= 0) {
        document.getElementById("error").innerHTML = "Insert a number bigger than 0";
        document.getElementById("result").innerHTML = "";
        document.getElementById("result").style.backgroundColor = "lightcoral";
    }
    else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("result").style.backgroundColor = "white";
        var array = [];
        array[0] = 1;
        for (var i = 1; i < num; i++) {
            if (i == 1) {
                array[i] = i;
            } else {
                array[i] = array[i - 1] + array[i - 2];
            }
        }
        document.getElementById("result").innerHTML = array;
    }
}