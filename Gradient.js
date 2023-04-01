var grad_colors = new Array('red', 'orange', 'yellow', 'lime', 'aqua', 'blue', 'blueviolet');
var grad_direct = '135deg, ';
var grad_space = 100 / (grad_colors.length - 1);
var gradient = '';
const gradClass = document.querySelectorAll('.gradbutton');
gradClass.forEach(function (el) {
    el.style.setProperty('background', 'linear-gradient' + '(' + grad_direct + gradient + ')');
});

function Animation () {
    for (i = 0; i < grad_colors.length; i++) {
        gradient += grad_colors[i] + ' ' + grad_space * i + '%, ';
    }
    gradient = gradient.slice(0, -2);
    gradClass.forEach(function (el) {
    el.style.setProperty('background', 'linear-gradient' + '(' + grad_direct + gradient + ')');
    });
    grad_colors.unshift(grad_colors.pop(grad_colors[grad_colors.length - 1]));
    gradient = '';
}
var interval = setInterval(Animation, 150);
requestAnimationFrame(interval);

function GradientAnimation () {
    clearInterval(interval);
}
gradClass.addEventListener('click', GradientAnimation);
/*clearInterval(gradient_anim);*/