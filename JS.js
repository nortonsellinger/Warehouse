//ПОЛУЧАЕМ ШИРИНУ ЭКРАНА
const dvc_width = window.screen.width;
//ПОЛУЧАЕМ ВЫСОТУ ЭКРАНА
const dvc_height = window.screen.height;
//ВЫЧИСЛЯЕМ ОТНОШЕНИЕ !ШИРИНЫ! К !ВЫСОТЕ!
const dvc_ratio = dvc_width / dvc_height;
//ПРИСВАИВАЕМ ПЕРЕМЕННОЙ --DEVICE_RATIO В CSS ВЫЧИСЛЕННОЕ СООТНОШЕНИЕ СТОРОН УСТРОЙСТВА
document.documentElement.style.setProperty('--DEVICE_RATIO', 'device_ratio');