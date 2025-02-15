setTimeout(() => {
    TweenLite.defaultEase = Elastic.easeOut.config(1, 0.2);

    var svg = document.querySelector("#svg");
    var path = document.querySelector("#path");

    var connected = false;
    var snapDist = 100;
    var startY = 200;

    // Break the path down into points
    // <path d="M200,200 Q 400,200 600,200" />
    var p0 = { x: 50, y: startY };
    var p1 = { x: (window.innerWidth - 50) / 2, y: startY };
    var p2 = { x: 600, y: startY };

    svg.addEventListener("mousemove", onMove);

    TweenLite.ticker.addEventListener("tick", update)
    update();

    function update() {

        var d = "M" + p0.x + "," + p0.y + " Q" + p1.x + "," + p1.y + " " + (window.innerWidth - 50) + "," + p2.y;

        path.setAttribute("d", d);

        if (Math.abs(p1.y - startY) > snapDist * 2) {
            connected = false;
            TweenLite.to(p1, 2, { y: startY });
        }
    }

    function onMove(event) {

        if (!connected && event.target === path) {
            connected = true;
            TweenLite.killTweensOf(p1); // Kill any active tweens on the point
        }
        if (connected) {
            p1.y = event.offsetY * 2 - (p0.y + p2.y) / 2;
        }
    }
}, 6000);