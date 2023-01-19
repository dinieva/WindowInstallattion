
const animate = ({ timing, draw, duration }) => { // передается объект с настройками duration- длительность анимации
    let start = performance.now(); //отработка метода, который возвращает время начала(старта) анимации на данный момент

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration; // (текущее время - время начала анимации) / продолжительность
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}


export { animate }