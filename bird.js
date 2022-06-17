class Bird {
    constructor(x,y,r){
        this.body = Matter.Bodies.circle(x,y,r)
        Matter.World.add(world , this.body)
        this.r = r
    }

    show() {
        var pos = this.body.position
        var angle = this.bodyangle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        fill(255)
        rectMode(CENTER)
        ellipse(0 , 0 , this.r)
        pop()
    }
}