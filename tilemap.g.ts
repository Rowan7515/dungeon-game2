// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000010102020101020b0c0201010101010102020201020202090a0202020102020201010102050605090a050605020202020201020603030307030303030602020102010503030303030803030307050202020106030703070303030308030602020101050303080303030303070305010201020603030303040403030303060102010206030703030404030703030601020102050303030303030303070305010201010603030703070803030303060102010205030303070303030703030501020202010607030303030303030602010201020101050605090a0506050201010101020202010101090a0101020101010101020202020101090a02020201020201`, img`
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
`, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.dungeon.hazardLava0,sprites.dungeon.floorLight0,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorDark2,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLight4,sprites.dungeon.floorLight1,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
