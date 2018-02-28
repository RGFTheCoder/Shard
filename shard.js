var shard = {};

shard.getMousePos = function(canvas) {
    return {
        x: canvas.mouse.x,
        y: canvas.mouse.y
    };
}


shard.setupcanvas = function(canvas) {
    canvas.mouse = {};
    canvas.addEventListener('mousemove', function(evt) {
        var rect = canvas.getBoundingClientRect();
        canvas.mouse.x = evt.clientX - rect.left;
        canvas.mouse.y = evt.clientY - rect.top;
    }, false);
    canvas.clear = function() {
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    }
}

shard.circle = class {
    constructor(x, y, r, c, color, fill) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.fill = fill;
        this.c = c;
    }

    draw() {
        if (this.drawevent) { this.drawevent(this); }
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        this.c.strokeStyle = this.color;
        this.c.fillStyle = this.fill;
        this.c.stroke();
        this.c.fill();
    }

    setdrawevent(func) {
        this.drawevent = func;
    }

    changepos(x, y) {
        this.x += x;
        this.y += y;
    }

    setpos(x, y) {
        this.x = x;
        this.y = y;
    }

    changerad(r) {
        this.r += r;
    }

    setrad(r) {
        this.r = r;
    }

    dism(c) {
        return Math.sqrt(Math.pow(Math.abs(c.mouse.x - this.x), 2) + Math.pow(Math.abs(c.mouse.y - this.y), 2));

    }

    touchm(c) {
        return Math.sqrt(Math.pow(Math.abs(c.mouse.x - this.x), 2) + Math.pow(Math.abs(c.mouse.y - this.y), 2)) > this.r;
    }
}