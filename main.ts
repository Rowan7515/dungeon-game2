namespace SpriteKind {
    export const Boss = SpriteKind.create()
    export const Bar = SpriteKind.create()
    export const Bad_projectile = SpriteKind.create()
}
function Set_up () {
    info.setLife(20)
    Boss_life = 100
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
    Boss_life_bar = sprites.create(img`
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
    controller.moveSprite(Player_1)
    controller.moveSprite(Boss_life_bar)
    tiles.setTilemap(tilemap`level1`)
    scene.cameraFollowSprite(Player_1)
    tiles.placeOnTile(Player_1, tiles.getTileLocation(8, 15))
    Boss_life_bar.setPosition(Player_1.x, Player_1.y)
    Boss_life_bar.x += 60
    Boss_life_bar.y += -50
    Boss_life_bar.setStayInScreen(true)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    Boss_life += -1
    Player_shot.destroy(effects.coolRadial, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bad_projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    Projectile_exists = 1
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    Projectile_exists = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let Player_y_for_aim = 0
let Player_x_for_aim = 0
let Boss_shot: Sprite = null
let Projectile_exists = 0
let Player_shot: Sprite = null
let Boss_life_bar: Sprite = null
let Boss_life = 0
let Player_1: Sprite = null
Set_up()
while (!(Player_1.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia))) {
    pause(10)
}
scene.cameraShake(8, 3000)
pause(3000)
let Boss_1 = sprites.create(img`
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
Boss_1.follow(Player_1, 40)
forever(function () {
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
        Player_shot.follow(Boss_1, 200)
        pause(200)
    }
})
forever(function () {
    if (Player_1.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava1) || Player_1.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava0)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    Boss_life_bar.say(Boss_life, 500)
})
forever(function () {
    pause(1000)
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
    if (Boss_1.x < Player_x_for_aim && Boss_1.y < Player_y_for_aim) {
        Boss_shot.setVelocity(Boss_1.x + Player_x_for_aim, Boss_1.y + Player_y_for_aim)
    } else if (Boss_1.x < Player_x_for_aim && Boss_1.y > Player_y_for_aim) {
        Boss_shot.setVelocity(Boss_1.x + Player_x_for_aim, Boss_1.y - Player_y_for_aim)
    } else if (Boss_1.x > Player_x_for_aim && Boss_1.y < Player_y_for_aim) {
        Boss_shot.setVelocity(Boss_1.x - Player_x_for_aim, Boss_1.y + Player_y_for_aim)
    } else {
        Boss_shot.setVelocity(Boss_1.x - Player_x_for_aim, Boss_1.y - Player_y_for_aim)
    }
    pause(100)
    Boss_shot.destroy(effects.fire, 500)
})
