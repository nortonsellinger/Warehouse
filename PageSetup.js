const GreaterEdge = Math.max(screen.height, screen.width);
const MinorEdge = Math.min(screen.height, screen.width);
const Ratio = GreaterEdge / MinorEdge;

var MaxHeaderHeight = 0.05 * GreaterEdge;
var BaseContentFontSize = GreaterEdge * Ratio * 0.008;
var HeaderPadding = 0.06 * MaxHeaderHeight;
var LogoWidth = MaxHeaderHeight - HeaderPadding * 2;
var TitlePadding = HeaderPadding * 2;
var HeaderFontSize = MaxHeaderHeight - TitlePadding * 2;

var ContentImgHeight = 0.25 * screen.height;
var contentImgs = document.querySelectorAll('section img');
contentImgs.forEach (
	function (img) {
		img.style.height = ContentImgHeight + 'px';
	}
)


document.querySelector('footer').style.padding = HeaderPadding * 2 + 'px'; 
document.querySelector('.headertitle').style.padding = TitlePadding + 'px';
document.querySelector('.headertitle').style.paddingLeft = TitlePadding * 1.2 + 'px';
document.querySelector('.headertitle').style.fontSize = HeaderFontSize + 'px';
document.querySelector('footer').style.fontSize = HeaderFontSize * 0.7 + 'px';
document.querySelector('.headerlogo').style.height = MaxHeaderHeight + 'px';
document.querySelector('.headerlogo').style.width = MaxHeaderHeight + 'px';
document.querySelector('.headerlogo').style.padding = HeaderPadding + 'px';
document.querySelector('.headerimg').style.width = LogoWidth + 'px';
document.getElementById('content').style.fontSize = BaseContentFontSize + 'px';
document.querySelector('nav').style.fontSize = BaseContentFontSize * 1.2 + 'px';

function PageSetup() {
    document.querySelector('section').style.padding = 0.02 * screen.width + 'px';
}

PageSetup();

/*window.addEventListener('resize', PageSetup, true);*/
window.addEventListener("orientationchange", PageSetup, {caption: true, once: false, passive: false});

