class Enemy {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
        this.sprite = game.add.sprite(game.world.randomX, game.world.randomY, name);
        this.sprite.scale.setTo(0.3);
    }

    move(target) {
        const dx = target.sprite.position.x - this.sprite.position.x;
        const dy = target.sprite.position.y - this.sprite.position.y;
        const magnitude = Math.hypot(dx, dy);
        this.sprite.position.x += (dx / magnitude) * this.speed;
        this.sprite.position.y += (dy / magnitude) * this.speed;
    }

    collisionCheck(object) {
        if (Math.abs(this.sprite.position.x - object.sprite.position.x) < 20 && Math.abs(this.sprite.position.y - object.sprite.position.y) < 20) {
            console.log('ahhhhh');
        }
    }
}