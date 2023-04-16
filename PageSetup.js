const GreaterEdge = Math.max(screen.height, screen.width);
const MinorEdge = Math.min(screen.height, screen.width);
const Ratio = GreaterEdge / MinorEdge;

var MaxHeaderHeight = 0.05 * GreaterEdge;
var BaseContentFontSize = GreaterEdge * Ratio * 0.008;
var HeaderPadding = 0.06 * MaxHeaderHeight;
var LogoWidth = MaxHeaderHeight - HeaderPadding * 2;
var TitlePadding = HeaderPadding * 2;
var HeaderFontSize = MaxHeaderHeight - TitlePadding * 2;

var ContentImgMaxHeight = 0.25 * screen.height;
var contentImgs = document.querySelectorAll('.content_img img');
contentImgs.forEach (
	function (img) {
		img.style.width = '100%';
			if (img.offsetHeight > ContentImgMaxHeight) {
				img.style.height = ContentImgMaxHeight + 'px';
				img.style.width = 'auto';

		}
	})

document.querySelector('.title').style.fontSize = BaseContentFontSize * 1.3+ 'px';
/*var titleSides = document.querySelectorAll('.title_side');
titleSides.forEach (
	function(side) {
		side.style.fontSize = side.offsetHeight + 'px';
	}
)*/

document.querySelector('footer').style.padding = HeaderPadding * 2 + 'px'; 
document.querySelector('.headertitle').style.padding = TitlePadding + 'px';
document.querySelector('.headertitle').style.paddingLeft = TitlePadding * 1.2 + 'px';
document.querySelector('.headertitle').style.fontSize = HeaderFontSize + 'px';
document.querySelector('footer').style.fontSize = HeaderFontSize * 0.7 + 'px';
document.querySelector('.headerlogo').style.height = MaxHeaderHeight + 'px';
document.querySelector('.headerlogo').style.width = MaxHeaderHeight + 'px';
document.querySelector('.headerlogo').style.padding = HeaderPadding + 'px';
document.querySelector('.headerimg').style.width = LogoWidth + 'px';

if (BaseContentFontSize > 20) {
    BaseContentFontSize = 20;
}
document.querySelector('section').style.fontSize = BaseContentFontSize + 'px';
document.querySelector('nav').style.fontSize = BaseContentFontSize * 1.2 + 'px';

function PageSetup() {
    document.querySelector('section').style.padding = 0.02 * screen.width + 'px';
    document.querySelector('section').style.paddingTop = 10 + 'px';
    /*var ContentImgMaxHeight = 0.25 * screen.height;
	var contentImgs = document.querySelectorAll('.content_img img');
	contentImgs.forEach (
	function (img) {
		img.style.width = img.closest('.content_img').width;
		if (img.offsetHeight > ContentImgMaxHeight) {
			img.style.height = ContentImgMaxHeight + 'px';
			img.style.width = 'auto';
		}
	}) */
}

PageSetup();

/*window.addEventListener('resize', PageSetup, true);*/
window.addEventListener("orientationchange", PageSetup, {caption: true, once: false, passive: false});

