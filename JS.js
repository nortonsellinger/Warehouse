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
var HEADER_PADDING = 6;
//ПРИСВАИВАЕМ ПЕРЕМЕННОЙ --PADDING В CSS ЗНАЧЕНИЕ ПЕРЕМЕННОЙ HEADER_PADDING
document.querySelector('header').style.setProperty('--PADDING', HEADER_PADDING + 'px');
//УСТАНАВИВАЕМ ПЕРЕМЕННУЮ ШИРИНЫ КАРТИНКИ ДЛЯ ХЕДЕРА
let IMAGE_WIDTH =
Math.min(NAV_WIDTH, 0.07 * Math.max(window.innerWidth, window.innerHeight)) - 
HEADER_PADDING * 2;
//ПРИСВАИВАЕМ ПЕРЕМЕННОЙ --IMAGE_WIDTH В CSS ЗНАЧЕНИЕ ПЕРЕМЕННОЙ IMAGE_WIDTH
document.querySelector('.headerimg').style.setProperty('--IMAGE_WIDTH', IMAGE_WIDTH + 'px');