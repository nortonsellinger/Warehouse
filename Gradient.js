var grad_colors = new Array('brown', 'yellow', 'lime', 'blue',);
var grad_direct = '135deg, ';
var grad_space = 100 / (grad_colors.length - 1);
var gradient = '';
for (i = 0; i < grad_colors.length; i++) {
    gradient += grad_colors[i] + ' ' + grad_space * i + '%, ';
}
gradient = gradient.slice(0, -2);

const gradClass = document.querySelectorAll('.gradient_anim');
gradClass.forEach(function (el) {
    el.style.setProperty('background', 'linear-gradient' + '(' + grad_direct + gradient + ')');
});

var GradientSpeed = 8; //пиксели в миллисекунду
var GradientDuration = screen.width / GradientSpeed;
var GradientSectionDuration = GradientDuration / (grad_colors.length - 1);
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

requestAnimationFrame(setInterval(GradientAnimation, GradientDuration));
/*clearInterval(gradient_anim);*/
