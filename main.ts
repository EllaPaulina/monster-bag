namespace SpriteKind {
    export const egg = SpriteKind.create()
    export const cracked1 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.cracked1, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        otherSprite.setKind(SpriteKind.cracked1)
        Egg.setImage(assets.image`crack 2`)
        sprites.destroy(Egg, effects.spray, 200)
        info.changeScoreBy(1)
        info.changeCountdownBy(1)
        myEnemy = sprites.create(img`
            . . f f f . . . . . . . . . . . 
            f f f c c . . . . . . . . f f f 
            f f c c c . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f c 3 b c 3 b c f b b c c c . 
            f c b b b b b b c f b c b c c . 
            c c 1 b b b 1 b c b b c b b c . 
            c b b b b b b b b b c c c b c . 
            c b 1 f f 1 c b b c c c c c . . 
            c f 1 f f 1 f b b b b f c . . . 
            f f f f f f f b b b b f c . . . 
            f f 2 2 2 2 f b b b b f c c . . 
            . f 2 2 2 2 2 b b b c f . . . . 
            . . f 2 2 2 b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        pause(200)
        myEnemy.follow(Main_character, 90)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.egg, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        otherSprite.setKind(SpriteKind.cracked1)
        Egg.setImage(assets.image`crack 1`)
        pause(100)
    }
})
let myEnemy: Sprite = null
let Egg: Sprite = null
let Main_character: Sprite = null
game.splash("Welcome to Moster Bag")
tiles.setCurrentTilemap(tilemap`level2`)
Main_character = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Main_character, 100, 100)
scene.cameraFollowSprite(Main_character)
info.startCountdown(60)
info.setScore(0)
game.onUpdateInterval(5000, function () {
    Egg = sprites.create(assets.image`uncracked`, SpriteKind.egg)
    Egg.setPosition(randint(0, 160), randint(0, 160))
})
