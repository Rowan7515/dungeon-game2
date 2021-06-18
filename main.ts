namespace SpriteKind {
    export const Boss = SpriteKind.create()
    export const Bar = SpriteKind.create()
    export const Bad_projectile = SpriteKind.create()
    export const Utility = SpriteKind.create()
}
function Boss_attack_1 () {
    Attack_happening = 1
    Boss_1.say("1", 200)
    for (let index = 0; index < 10; index++) {
        Boss_shot = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Bad_projectile)
        Boss_shot.setPosition(Boss_1.x, Boss_1.y)
        Boss_shot.setVelocity(10 * randint(-100, 100), 10 * randint(-100, 100))
        pause(50)
        Boss_shot.destroy(effects.fire, 500)
    }
    Attack_happening = 0
}
sprites.onCreated(SpriteKind.Boss, function (sprite) {
    while (Boss_exists == 1) {
        if (randint(0, 50) == 1) {
            Random_number_1 = randint(1, 10)
            if (Random_number_1 == 1 || Random_number_1 == 2 || (Random_number_1 == 3 || (Random_number_1 == 4 || Random_number_1 == 5))) {
                Boss_attack_1()
            } else if (Random_number_1 == 6 || Random_number_1 == 7 || (Random_number_1 == 8 || Random_number_1 == 9)) {
                Boss_attack_2()
            } else {
                Boss_attack_3()
            }
        }
        if (Attack_happening == 0) {
            Boss_shot = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 2 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Bad_projectile)
            Boss_shot.setPosition(Boss_1.x, Boss_1.y)
            Player_x_for_aim = Player_1.x
            Player_y_for_aim = Player_1.y
            Boss_shot.setVelocity(10 * (Player_x_for_aim - Boss_1.x), 10 * (Player_y_for_aim - Boss_1.y))
            pause(100)
            Boss_shot.destroy(effects.fire, 500)
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    Boss_life += -1
    Player_shot.destroy()
})
sprites.onCreated(SpriteKind.Bad_projectile, function (sprite) {
    Projectile_bad_exists = 1
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
})
function Spawn_enemies () {
    Enemy_1 = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bad_projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
function Boss_attack_3 () {
    Boss_1.say("3", 200)
    Boss_Minion = sprites.create(img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c . . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f b 3 b c 3 b c f b b c c c . 
        . c b b b b b b c f b c b c c . 
        . c b b b b b b c b b c b b c . 
        c b 1 b b b 1 b b b c c c b c . 
        c b b b b b b b b c c c c c . . 
        f b c b b b c b b b b f c . . . 
        f b 1 f f f 1 b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Boss_Minion,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c . . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f b 3 b c 3 b c f b b c c c . 
        . c b b b b b b c f b c b c c . 
        . c b b b b b b c b b c b b c . 
        c b 1 b b b 1 b b b c c c b c . 
        c b b b b b b b b c c c c c . . 
        f b c b b b c b b b b f c . . . 
        f b 1 f f f 1 b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . c c . . c c . . . . . . . . 
        . . c 3 c c 3 c c c . . . . . . 
        . c b 3 b c 3 b c c c . . . . . 
        . c b b b b b b b b f f . . . . 
        c c b b b b b b b b f f . . . . 
        c b 1 b b b 1 b b c f f f . . . 
        c b b b b b b b b f f f f . . . 
        f b c b b b c b c c b b b . . . 
        f b 1 f f f 1 b f c c c c . . . 
        . f b b b b b b f b b c c . . . 
        c c f b b b b b c c b b c . . . 
        c c c f f f f f f c c b b c . . 
        . c c c . . . . . . c c c c c . 
        . . c c c . . . . . . . c c c c 
        . . . . . . . . . . . . . . . . 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c b 1 b b b 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
    100,
    true
    )
    Boss_Minion.setPosition(Boss_1.x, Boss_1.y)
    Boss_Minion.follow(Player_1, 50)
    pause(10000)
    Boss_Minion.destroy(effects.fire, 500)
}
sprites.onDestroyed(SpriteKind.Bad_projectile, function (sprite) {
    Projectile_bad_exists = 0
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    Projectile_exists = 1
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    Projectile_exists = 0
})
function Boss_attack_2 () {
    Attack_happening = 1
    Boss_1.say("2", 200)
    Boss_1.setVelocity(0, 20)
    pause(200)
    Player_x_for_aim = Player_1.x
    Player_y_for_aim = Player_1.y
    Boss_1.setVelocity(5 * (Player_x_for_aim - Boss_1.x), 10 * (Player_y_for_aim - Boss_1.y))
    pause(300)
    Boss_1.setVelocity(0, 0)
    Attack_happening = 0
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    Boss_exists = 1
    scene.cameraShake(8, 3000)
    pause(3000)
    Boss_1 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Boss)
    tiles.placeOnRandomTile(Boss_1, sprites.dungeon.collectibleInsignia)
    Boss_1.y += -30
    Boss_1.setVelocity(0, 30)
    pause(1000)
    Boss_1.follow(Player_1, 30)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    pause(100)
})
let Projectile_exists = 0
let Boss_Minion: Sprite = null
let Enemy_1: Sprite = null
let Projectile_bad_exists = 0
let Player_shot: Sprite = null
let Player_y_for_aim = 0
let Player_x_for_aim = 0
let Random_number_1 = 0
let Boss_exists = 0
let Boss_shot: Sprite = null
let Boss_1: Sprite = null
let Attack_happening = 0
let Player_1: Sprite = null
tiles.setTilemap(tilemap`level1`)
info.setLife(20)
let Boss_life = 100
Player_1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let Boss_life_bar = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Bar)
controller.moveSprite(Player_1, 100, 100)
controller.moveSprite(Boss_life_bar, 100, 100)
scene.cameraFollowSprite(Player_1)
tiles.placeOnRandomTile(Player_1, sprites.castle.tileGrass2)
Boss_life_bar.setPosition(Player_1.x, Player_1.y)
Boss_life_bar.x += 60
Boss_life_bar.y += -50
Boss_life_bar.setStayInScreen(true)
Spawn_enemies()
forever(function () {
    Boss_life_bar.say(Boss_life, 1000)
    Boss_life_bar.setPosition(Player_1.x + 0, Player_1.y - 50)
    if (controller.A.isPressed() && Projectile_exists == 0) {
        Player_shot = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . 8 9 8 . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        Player_shot.setPosition(Player_1.x, Player_1.y)
        Player_shot.follow(Boss_1, 1000)
        pause(200)
        Player_shot.destroy(effects.coolRadial, 500)
        pause(100)
    }
    if (Boss_life <= 0) {
        Boss_life = 0
        Player_1.say("I Win!!! :)", 1000)
        Boss_1.say("Nooooooo! You Win! :(", 1000)
    }
    if (Player_1.tileKindAt(TileDirection.Center, sprites.castle.tileDarkGrass1) || Player_1.tileKindAt(TileDirection.Center, sprites.castle.tileDarkGrass3)) {
        controller.moveSprite(Player_1, 30, 30)
        controller.moveSprite(Boss_life_bar, 30, 30)
    } else if (Player_1.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava1) || Player_1.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava0)) {
        controller.moveSprite(Player_1, 30, 30)
        controller.moveSprite(Boss_life_bar, 30, 30)
        info.changeLifeBy(-1)
        pause(200)
    } else {
        controller.moveSprite(Player_1, 100, 100)
        controller.moveSprite(Boss_life_bar, 100, 100)
    }
})
