var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var arr3 = ['a', 'b', 'c', 'd'];
var arr4 = ['A', 'B', 'C', 'D'];
var arr5 = ['!', '@', '#', '$'];

document.getElementById('param-1').oninput = function() {
    // console.log(this.value);
    document.getElementById('password-length').innerHTML = this.value;
};

document.getElementById('generator').onclick = generatePass;

function generatePass(event) {
    var result = [];

    if (document.getElementById('param-2').checked) {
        result = result.concat(arr2);
    };
    if (document.getElementById('param-3').checked) {
        result = result.concat(arr3);
    };
    if (document.getElementById('param-4').checked) {
        result = result.concat(arr4);
    };
    if (document.getElementById('param-5').checked) {
        result = result.concat(arr5);
    };

    result.sort(compareRandom);
    // console.log(result);
    var pass = '';
    var passwordLength = parseInt(document.getElementById('password-length').value);

    for (var i = 0; i < passwordLength; i++) {
        pass += result[i];
    };
    console.log(pass);
    document.getElementById('out').innerHTML = '<p>' + pass + '</p>';
};

function compareRandom(a, b) {
    return Math.random() - 0.5;
};