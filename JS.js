//ПОЛУЧАЕМ ШИРИНУ ЭКРАНА
const dvc_width = window.screen.width;
//ПОЛУЧАЕМ ВЫСОТУ ЭКРАНА
const dvc_height = window.screen.height;
//ВЫЧИСЛЯЕМ ОТНОШЕНИЕ !ШИРИНЫ! К !ВЫСОТЕ!
const dvc_ratio = dvc_width / dvc_height;
//ПРИСВАИВАЕМ ПЕРЕМЕННОЙ --DEVICE_RATIO В CSS ВЫЧИСЛЕННОЕ СООТНОШЕНИЕ СТОРОН УСТРОЙСТВА
document.documentElement.style.setProperty('--DEVICE_RATIO', 'device_ratio');
//ПРИСВАИВАЕМ ПЕРЕМЕННОЙ --NAVWIDTH В CSS ЗНАЧЕНИЕ ШИРИНЫ ПАНЕЛИ НАВИГАЦИИ
let NAV_WIDTH = document.querySelector('nav').offsetWidth;
document.documentElement.style.setProperty('--NAV_WIDTH', NAV_WIDTH + 'px');

let IMAGE_WIDTH =
Math.min(NAV_WIDTH, document.querySelector('.headerlogo').style.getPropertyValue(max-height)) - 
document.querySelector('header').style.getPropertyValue(--PADDING) * 2;

document.querySelector('.headerimg').style.setProperty('--IMAGE_WIDTH', NIMAGE_WIDTH + 'px');