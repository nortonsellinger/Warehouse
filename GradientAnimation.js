var grad_colors = new Array('red', 'orange', 'yellow', 'lime', 'aqua', 'blue', 'blueviolet');
var grad_direct = '135deg, ';
var grad_space = 100 / (grad_colors.length - 1);
var gradient = '';
const gradClass = document.querySelectorAll('.gradient_anim');
gradClass.forEach(function (el) {
    el.style.setProperty('background', 'linear-gradient' + '(' + grad_direct + gradient + ')');
});

function GradientAnimation () {
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

requestAnimationFrame(setInterval(GradientAnimation, 150));
/*clearInterval(gradient_anim);*/