/*function Nav_Visibility() {
    document.querySelector('nav').style.setProperty('display', 'inline-flex');
}
document.querySelector('.headerimg').addEventListener('click', Nav_Visibility());*/

var grad_colors = new Array('a52a2a', 'ffff00',);
var grad_direct = '135deg, ';
var grad_space = 100 / (2 * grad_colors.length - 2);
var gradient = '';
var red1;
var green1;
var blue1;
var red2;
var green2;
var blue2;
var red;
var green;
var blue;
var newColor;
alert(gradient);
var currCol;
var nextCol;
/*for (i = 0; i < grad_colors.length - 1; i++) {
    alert(grad_space);
    /*currCol = grad_colors[i];
    nextCol = grad_colors[i + 1]
    red1 = currCol.slice(0, 2);
    green1 = currCol.slice(2, 4);
    blue1 = currCol.slice(4, 6);
    red2 = nextCol.slice(0, 2);
    green2 = nextCol.slice(2, 4);
    blue2 = nextCol.slice(4, 6);
    /*red = ((parseInt(red1, 16) + parseInt(red2, 16)) / 2).toString(16);
    green = ((parseInt(greend1, 16) + parseInt(green2, 16)) / 2).toString(16);
    blue = ((parseInt(blue1, 16) + parseInt(blue2, 16)) / 2).toString(16);
    newColor = '#' + red + green + blue;
    gradient += grad_colors[i] + ' ' + grad_space * i + '%, ';
    grad_colors.splice(i + 1, 0, newColor);
    alert(blue2.toString(16));
}

gradient = gradient.slice(0, -2);

/*const gradClass = document.querySelectorAll('.gradient2');
gradClass.forEach(function (el) {
    el.style.setProperty('background', 'linear-gradient' + '(' + grad_direct + gradient + ')');
});

/*alert((0x64 + 0x50).toString(16));

function GradientAnimation () {
    grad_colors.unshift(grad_colors.pop(grad_colors[grad_colors.length - 1]));
    gradient = '';
    for (i = 0; i < grad_colors.length; i++) {
        gradient += grad_colors[i] + ' ' + grad_space * i + '%, ';
    }
    gradient = gradient.slice(0, -2);
    gradClass.forEach(function (el) {
    el.style.setProperty('background', 'linear-gradient' + '(' + grad_direct + gradient + ')');
});
}

requestAnimationFrame(setInterval(GradientAnimation, 500));
/*clearInterval(gradient_anim);*/
