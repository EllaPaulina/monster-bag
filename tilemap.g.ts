// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`100010000301010101010101010101010101010204090909090909090909090909090908040909090909090909090909090909080409090a0909090909090909090909080409090909090a09090909090b0909080409090909090909090909090909090804090909090909090909090909090908040909090b0909090a0909090909090804090909090909090909090909090908040909090909090909090b09090a090804090909090909090909090909090908040909090909090909090909090909080409090b09090a0909090909090909080409090909090909090909090b0909080409090909090909090909090909090805060606060606060606060606060607`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . . . . 2 . . . . . 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 . . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 . . 2 . . . . . . . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast1,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight2,sprites.dungeon.floorLight4], TileScale.Sixteen);
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
