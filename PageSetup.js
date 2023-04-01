var max_header_coeff = 0.05;
var header_pad_coeff = 0.06;
var header_padding;
var TITLE_PADDING;
var MAX_HEADER_HEIGHT;
var HEADER_FONT_SIZE;
var NAV_WIDTH;
var IMAGE_WIDTH;
var smthForFontSize = screen.height * screen.width / ((screen.height + screen.width) / 2);
var BASE_CONTENT_FONT_SIZE_COEFF = 0.020;

var GreaterEdge = Math.max(screen.width, screen.height);
var MinorEdge = Math.min(screen.width, screen.height);

function PageSetup() {
    MAX_HEADER_HEIGHT = max_header_coeff * GreaterEdge;

    header_padding = header_pad_coeff * MAX_HEADER_HEIGHT;
    document.querySelector('header').style.setProperty('--PADDING', header_padding + 'px');
    document.querySelector('footer').style.setProperty('padding', header_padding * 2 + 'px');

    TITLE_PADDING = header_padding * 2;
    document.querySelector('.headertitle').style.setProperty('--TITLE_PADDING', TITLE_PADDING + 'px');
    
    HEADER_FONT_SIZE = MAX_HEADER_HEIGHT - TITLE_PADDING * 2;
    document.querySelector('header').style.setProperty('--HEADER_FONT_SIZE', HEADER_FONT_SIZE + 'px');

    document.querySelector('footer').style.setProperty('font-size', HEADER_FONT_SIZE * 0.7 + 'px');

    NAV_WIDTH = document.getElementById('nav').offsetWidth;
    document.documentElement.style.setProperty('--NAV_WIDTH', NAV_WIDTH + 'px');
    document.querySelector('.headerlogo').style.setProperty('height', MAX_HEADER_HEIGHT + 'px');
    document.querySelector('.headerlogo').style.setProperty('width', MAX_HEADER_HEIGHT + 'px');

    IMAGE_WIDTH = MAX_HEADER_HEIGHT - header_padding * 2;
    document.querySelector('.headerimg').style.setProperty('width', IMAGE_WIDTH + 'px');

    document.getElementById('content').style.setProperty('font-size', BASE_CONTENT_FONT_SIZE_COEFF * smthForFontSize + 'px');
}

PageSetup();

window.addEventListener('resize', PageSetup);
