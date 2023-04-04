var max_header_coeff = 0.05;
var header_pad_coeff = 0.06;
var GreaterEdge = Math.max(screen.height, screen.width);
var MinorEdge = Math.min(screen.height, screen.width);
var Ratio = GreaterEdge / MinorEdge;
var smthForFontSize = GreaterEdge * Ratio * 0.008;
var MAX_HEADER_HEIGHT = max_header_coeff * GreaterEdge;
var header_padding = header_pad_coeff * MAX_HEADER_HEIGHT;
var TITLE_PADDING = header_padding * 2;
var HEADER_FONT_SIZE = MAX_HEADER_HEIGHT - TITLE_PADDING * 2;
var IMAGE_WIDTH = MAX_HEADER_HEIGHT - header_padding * 2;
function PageSetup() {
    document.querySelector('header').style.setProperty('--PADDING', header_padding + 'px');
    document.querySelector('footer').style.setProperty('padding', header_padding * 2 + 'px');
    
    document.querySelector('.headertitle').style.setProperty('--TITLE_PADDING', TITLE_PADDING + 'px');

    document.querySelector('header').style.setProperty('--HEADER_FONT_SIZE', HEADER_FONT_SIZE + 'px');

    document.querySelector('footer').style.setProperty('font-size', HEADER_FONT_SIZE * 0.7 + 'px');

    document.querySelector('.headerlogo').style.setProperty('height', MAX_HEADER_HEIGHT + 'px');
    document.querySelector('.headerlogo').style.setProperty('width', MAX_HEADER_HEIGHT + 'px');

    document.querySelector('.headerimg').style.setProperty('width', IMAGE_WIDTH + 'px');

    document.getElementById('content').style.setProperty('font-size', smthForFontSize + 'px');
    document.querySelector('section').style.setProperty('padding', 0.02 * screen.width + 'px');
}

PageSetup();

window.addEventListener('resize', PageSetup);
