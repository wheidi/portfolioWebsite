/*rendering context. Tool used to paint on Canvas*/
var ctx = canvas.getContext("2d");

/*pond assets */
var numLillies = 0;
var lilyColour = "rgb(179, 247, 158, 0.85)";
var maxSizeLily = 100;
var minSizeLily = 25;
var items = [];


class Lily {
    constructor(x, y, colour, size){
        this.x = x;
        this.y = y;
        this.colour = colour;
        this.size = size;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fillStyle = this.colour;
        ctx.fill();
        ctx.closePath();
    }
}

function addAssets() {

    /*adding lillies */
    for (let i = 0; i < numLillies; i++) {
        var curSize = Math.floor(Math.random() * (maxSizeLily - minSizeLily + 1)) + minSizeLily ;

        if (i < numLillies*7/8){
            if (Math.random() < 0.6){
                var y = curSize;
            } else {
                var y = canvas.height - curSize;
            }
        } else {
            console.log("populating in center")
            var y = Math.floor(Math.random() * (canvas.height + 1));
        }

        var x = Math.floor(Math.random() * (canvas.width + 1));

        var newLilly = new Lily(x, y, lilyColour, curSize);
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