class Star {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rChange = 0.015;
        this.color = color;
    } // constructor

    Draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        context.shadowBlur = 8;
        context.shadowColor = "white";
        context.fillStyle = this.color;
        context.fill();
    }  // Draw()

    Twinkle() {
        if (this.r > 2 || this.r < .8) {
            this.rChange = - this.rChange;
        }
        this.r += this.rChange;
    } // Twinkle()
} // class