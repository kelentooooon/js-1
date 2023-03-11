

document.getElementById('button').onclick = function () {

    var num1 = document.getElementById("number-1").value;
    var num2 = document.getElementById("number-2").value;
    var num3 = document.getElementById("number-3").value;
    var num4 = document.getElementById("number-4").value;
    var num5 = document.getElementById("number-5").value;
    var num6 = document.getElementById("number-6").value;
    var num7 = document.getElementById("number-7").value;
    var num8 = document.getElementById("number-8").value;
    var num9 = document.getElementById("number-9").value;
    var num10 = document.getElementById("number-10").value;

    var all  ;

    var all = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5) + parseInt(num6) + parseInt(num7) + parseInt(num8) + parseInt(num9) + parseInt(num10);



    var calc = (all / 2);


    document.getElementById("total").value = calc ;

}


