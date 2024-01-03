/*rendering context. Tool used to paint on Canvas*/
var ctx = canvas.getContext("2d");

/*pond assets */
var numLillies = 10;
var maxSizeLily = 100;
var minSizeLily = 25;
var items = [];


class Lily {
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x + 25, this.y + 25, this.size, 0, Math.PI*2);
        ctx.fillStyle = "rgb(0, 0, 0, 0.05)";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fillStyle = "rgb(0, 150, 152, 0.75)";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(this.x + 5, this.y + 5, this.size, 0, Math.PI*2);
        ctx.fillStyle = "rgb(0, 150, 152, 0.75)";
        ctx.fill();
        ctx.closePath();
    }
}

function addAssets() {

    /*adding lillies */
    for (let i = 0; i < numLillies; i++) {
        var curSize = Math.floor(Math.random() * (maxSizeLily - minSizeLily + 1)) + minSizeLily ;

        if (i < numLillies*6/8){
            if (Math.random() < 0.6){
                var y = curSize;
            } else {
                var y = canvas.height - curSize - 5;
            }
        } else {
            var y = Math.floor(Math.random() * (canvas.height - curSize + 1));
        }

        var x = Math.floor(Math.random() * ((canvas.width - curSize) - curSize + 1)) + curSize ;

        var newLilly = new Lily(x, y, curSize);
        items.push(newLilly);
    };
};

function drawAssets() {
    for (let i = 0; i < items.length; i++){
        items[i].draw();
    }
}

/** setting up the pond **/
addAssets();
drawAssets();