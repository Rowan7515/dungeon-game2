namespace SpriteKind {
    export const Boss = SpriteKind.create()
    export const Bar = SpriteKind.create()
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
    controller.moveSprite(Player_1)
    tiles.setTilemap(tiles.createTilemap(hex`10001000010102020101020b0c0201010101010102020201020202090a0202020102020201010102050605090a050605020202020201020603030307030303030602020102010503030303030803030307050202020106030703070303030308030602020101050303080303030303070305010201020603030303040403030303060102010206030703030404030703030601020102050303030303030303070305010201010603030703070803030303060102010205030303070303030703030501020202010607030303030303030602010201020101050605090a0506050201010101020202010101090a0101020101010101020202020101090a02020201020201`, img`
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
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
        `, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.dungeon.hazardLava0,sprites.dungeon.floorLight0,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorDark2,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLight4,sprites.dungeon.floorLight1,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11], TileScale.Sixteen))
    scene.cameraFollowSprite(Player_1)
    tiles.placeOnTile(Player_1, tiles.getTileLocation(8, 15))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
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
    pause(2000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    Boss_life += -1
    Player_shot.destroy(effects.coolRadial, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(3000)
})
let Player_shot: Sprite = null
let Boss_life = 0
let Boss_1: Sprite = null
let Player_1: Sprite = null
Set_up()
while (!(Player_1.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia))) {
    pause(10)
}
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
Boss_1.follow(Player_1, 40)
forever(function () {
    if (Player_1.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava1) || Player_1.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava0)) {
        info.changeLifeBy(-1)
    }
    pause(1000)
})
