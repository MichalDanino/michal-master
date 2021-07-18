let color = document.getElementsByTagName('body')[0].style;
const rand = () => Math.floor(Math.random() * 255 + 3);
setTimeout(() => color.cssText = `--paint-color: rgb(${rand()}, ${rand()}, ${rand()})`, 20000);