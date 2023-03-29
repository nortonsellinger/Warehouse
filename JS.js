const dvc_width = window.screen.width;
const dvc_height = window.screen.height;
const dvc_ratio = dvc_width / dvc_height;
document.documentElement.style.setProperty('--DEVICE_RATIO', 'device_ratio');




var max_header_coeff = 0.05;
var header_pad_coeff = 0.06;
var header_padding;
var TITLE_PADDING;
var MAX_HEADER_HEIGHT;
var HEADER_FONT_SIZE;
var NAV_WIDTH;
var IMAGE_WIDTH;

function DefinePageParams() {
    MAX_HEADER_HEIGHT = max_header_coeff * Math.max(screen.width, screen.height);

    header_padding = header_pad_coeff * MAX_HEADER_HEIGHT;
    document.querySelector('header').style.setProperty('--PADDING', header_padding + 'px');

    TITLE_PADDING = header_padding * 2;
    document.querySelector('.headertitle').style.setProperty('--TITLE_PADDING', TITLE_PADDING + 'px');
    
    HEADER_FONT_SIZE = MAX_HEADER_HEIGHT - TITLE_PADDING * 2;
    document.querySelector('header').style.setProperty('--HEADER_FONT_SIZE', HEADER_FONT_SIZE + 'px');

    NAV_WIDTH = document.getElementById('nav').offsetWidth;
    document.documentElement.style.setProperty('--NAV_WIDTH', NAV_WIDTH + 'px');
    document.querySelector('.headerlogo').style.setProperty('height', MAX_HEADER_HEIGHT + 'px');
    document.querySelector('.headerlogo').style.setProperty('width', MAX_HEADER_HEIGHT + 'px');

    IMAGE_WIDTH = MAX_HEADER_HEIGHT - header_padding * 2;
    document.querySelector('.headerimg').style.setProperty('width', IMAGE_WIDTH + 'px');   
}

DefinePageParams();

window.addEventListener('resize', DefinePageParams);

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
var gradient_anim;
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
requestAnimationFrame(setInterval(GradientAnimation, 100));
