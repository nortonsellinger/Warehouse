//ПОЛУЧАЕМ ШИРИНУ ЭКРАНА
const dvc_width = window.screen.width;
//ПОЛУЧАЕМ ВЫСОТУ ЭКРАНА
const dvc_height = window.screen.height;
//ВЫЧИСЛЯЕМ ОТНОШЕНИЕ !ШИРИНЫ! К !ВЫСОТЕ!
const dvc_ratio = dvc_width / dvc_height;
//ПРИСВАИВАЕМ ПЕРЕМЕННОЙ --DEVICE_RATIO В CSS ВЫЧИСЛЕННОЕ СООТНОШЕНИЕ СТОРОН УСТРОЙСТВА
document.documentElement.style.setProperty('--DEVICE_RATIO', 'device_ratio');
//ПРИСВАИВАЕМ ПЕРЕМЕННОЙ --NAVWIDTH В CSS ЗНАЧЕНИЕ ШИРИНЫ ПАНЕЛИ НАВИГАЦИИ
var NAV_WIDTH = document.querySelector('nav').offsetWidth;
document.documentElement.style.setProperty('--NAV_WIDTH', NAV_WIDTH + 'px');

//УСТАНАВЛИВАЕМ ПЕРЕМЕННУЮ ПАДДИНГА ДЛЯ ХЕДЕРА
var header_padding = 6;

//ПРИСВАИВАЕМ ПЕРЕМЕННОЙ --PADDING В CSS ЗНАЧЕНИЕ ПЕРЕМЕННОЙ header_padding
document.querySelector('header').style.setProperty('--PADDING', header_padding + 'px');

var max_header_coeff = 0.05;
var MAX_HEADER_HEIGHT = max_header_coeff * Math.max(screen.width, screen.height);
var IMAGE_WIDTH;
var HEADER_FONT_SIZE = MAX_HEADER_HEIGHT - header_padding * 2;
document.querySelector('header').style.setProperty('--HEADER_FONT_SIZE', HEADER_FONT_SIZE + 'px');

window.addEventListener("resize", RatioChange());

function RatioChange() {
	MAX_HEADER_HEIGHT = max_header_coeff * Math.max(screen.width, screen.height);
    IMAGE_WIDTH = Math.min(NAV_WIDTH, MAX_HEADER_HEIGHT) - header_padding * 2;
    document.querySelector('.headerimg').style.setProperty('--IMAGE_WIDTH', IMAGE_WIDTH + 'px');

    HEADER_FONT_SIZE = MAX_HEADER_HEIGHT - header_padding * 2;
document.querySelector('header').style.setProperty('--HEADER_FONT_SIZE', HEADER_FONT_SIZE + 'px');
}
//УСТАНАВИВАЕМ ПЕРЕМЕННУЮ ШИРИНЫ КАРТИНКИ ДЛЯ ХЕДЕРА

//ПРИСВАИВАЕМ ПЕРЕМЕННОЙ --IMAGE_WIDTH В CSS ЗНАЧЕНИЕ ПЕРЕМЕННОЙ IMAGE_WIDTH
