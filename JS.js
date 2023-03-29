/*function Nav_Visibility() {
    document.querySelector('nav').style.setProperty('visibility', 'visible');
}
document.querySelector('.headerimg').addEventListener('click', Nav_Visibility());*/

var grad_colors = ['red', 'yellow', 'lime', 'aqua', 'blue'];
var grad_direct = '45deg, ';
var grad_space = 100 / grad_colors.length;
var gradient = '';
for (i = 0; i < grad_colors.length; i++) {
    gradient += grad_colors[i] + ' ' + grad_space * i + '%, ';
}
gradient = gradient.slice(0, -2);
document.getElementById('gradient_anim').style.setProperty('background', 'linear-gradient' + '(' + grad_direct + gradient + ')');

function GradientAnimation {
    for (i = 0; i < grad_colors.length; i++) {
        grad_colors.unshift(grad_colors.pop());
    }
    gradient = ' ';
    for (i = 0; i < grad_colors.length; i++) {
        gradient += grad_colors[i] + ' ' + grad_space * i + '%, ';
    }
    gradient = gradient.slice(0, -2);
    document.getElementById('gradient_anim').style.setProperty('background', 'linear-gradient' + '(' + grad_direct + gradient + ')');
}
setInterval(GradientAnimation, 100);
