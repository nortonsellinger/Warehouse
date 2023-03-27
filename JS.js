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
    document.querySelector('.headerlogo').style.setProperty('width', NAV_WIDTH + 'px');

    IMAGE_WIDTH = Math.min(NAV_WIDTH, MAX_HEADER_HEIGHT) - header_padding * 2;
    document.querySelector('.headerimg').style.setProperty('--IMAGE_WIDTH', IMAGE_WIDTH + 'px');   
}

DefinePageParams();

window.addEventListener("resize", DefinePageParams());
