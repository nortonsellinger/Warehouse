const GreaterEdge = Math.max(screen.height, screen.width);
const MinorEdge = Math.min(screen.height, screen.width);
const Ratio = GreaterEdge / MinorEdge;

var MaxHeaderHeight = 0.05 * GreaterEdge;
var BaseContentFontSize = GreaterEdge * Ratio * 0.008;
var HeaderPadding = 0.06 * MaxHeaderHeight;
var LogoWidth = MaxHeaderHeight - HeaderPadding * 2;
var TitlePadding = HeaderPadding * 2;
var HeaderFontSize = MaxHeaderHeight - TitlePadding * 2;

document.querySelector('footer').style.setProperty('padding', HeaderPadding * 2 + 'px'); 
document.querySelector('.headertitle').style.setProperty('padding', TitlePadding + 'px');
document.querySelector('.headertitle').style.setProperty('padding-left', TitlePadding * 1.2 + 'px');
document.querySelector('.headertitle').style.setProperty('font-size', HeaderFontSize + 'px');
document.querySelector('footer').style.setProperty('font-size', HeaderFontSize * 0.7 + 'px');
document.querySelector('.headerlogo').style.setProperty('height', MaxHeaderHeight + 'px');
document.querySelector('.headerlogo').style.setProperty('width', MaxHeaderHeight + 'px');
document.querySelector('.headerlogo').style.setProperty('padding', HeaderPadding + 'px');
document.querySelector('.headerimg').style.setProperty('width', LogoWidth + 'px');
document.getElementById('content').style.setProperty('font-size', BaseContentFontSize + 'px');

function PageSetup() {
    document.querySelector('section').style.setProperty('padding', 0.02 * screen.width + 'px');
}

PageSetup();

/*window.addEventListener('resize', PageSetup, true);*/
window.addEventListener("orientationchange", function() {
  document.querySelector('section').style.setProperty('padding', 0.02 * screen.width + 'px');
}, false);
