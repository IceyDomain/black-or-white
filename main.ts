namespace SpriteKind {
    export const Monkey = SpriteKind.create()
    export const Owner = SpriteKind.create()
    export const Manager = SpriteKind.create()
    export const Nigger = SpriteKind.create()
    export const PlayerOwner = SpriteKind.create()
    export const NicerNigger = SpriteKind.create()
    export const BadNigger = SpriteKind.create()
    export const BetterPlayer = SpriteKind.create()
    export const BetterMonkey = SpriteKind.create()
    export const Text = SpriteKind.create()
    export const MiniMenu = SpriteKind.create()
}
namespace StatusBarKind {
    export const ExperienceBar = StatusBarKind.create()
    export const Task = StatusBarKind.create()
    export const Timer = StatusBarKind.create()
    export const Nigger = StatusBarKind.create()
    export const NextDay2 = StatusBarKind.create()
    export const GreaterTask = StatusBarKind.create()
    export const Money = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Nigger, function (sprite, otherSprite) {
    otherSprite.sayText("Why the fk you try and wake me up ")
    info.changeLifeBy(-5)
    tiles.placeOnRandomTile(sprite, assets.tile`myTile`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    if (Slave_Money.value < 30) {
        game.showLongText("NEED MORE MONEY", DialogLayout.Center)
    } else if (Slave_Money.value >= 30) {
        for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
            tiles.setTileAt(value, assets.tile`myTile22`)
            tiles.setWallAt(value, false)
        }
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.BetterMonkey, assets.tile`myTile0`, function (sprite, location) {
    info.changeScoreBy(10)
    Sugar_Cane_Task.value += 10
    tiles.setTileAt(location, assets.tile`myTile7`)
})
sprites.onOverlap(SpriteKind.Nigger, SpriteKind.Nigger, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, assets.tile`myTile`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Owner, function (sprite, otherSprite) {
    if (Sugar_Cane_Task.value >= 200) {
        tiles.placeOnRandomTile(otherSprite, assets.tile`myTile`)
        scene.cameraFollowSprite(otherSprite)
        Slave_owner.follow(Slave_Manager, 40)
    } else {
    	
    }
})
statusbars.onStatusReached(StatusBarKind.Money, statusbars.StatusComparison.GT, statusbars.ComparisonType.Fixed, 0, function (status) {
    Slave_Money.setLabel("$" + status.value)
})
statusbars.onStatusReached(StatusBarKind.Task, statusbars.StatusComparison.GTE, statusbars.ComparisonType.Percentage, 100, function (status) {
    tiles.setWallAt(tiles.getTileLocation(59, 42), false)
    sprites.destroy(Sugar_Cane_Task)
    mySprite.sayText("")
    Slave_Bar.value += 5
    Slave_Money.value += 1
})
scene.onOverlapTile(SpriteKind.BetterPlayer, assets.tile`myTile0`, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Manager, function (sprite, otherSprite) {
    otherSprite.sayText("GET AWAY FROM ME YOU MONKEY")
    sprite.setImage(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f e 1 f e e f 1 e f . . 
        . f e e e e e e e e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e e f 7 7 7 7 7 7 f e e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
    pause(5000)
    Slave_Bar.value += -1
    tiles.placeOnRandomTile(otherSprite, assets.tile`myTile6`)
    tiles.setWallAt(otherSprite.tilemapLocation(), true)
})
scene.onOverlapTile(SpriteKind.Monkey, assets.tile`myTile0`, function (sprite, location) {
    info.changeScoreBy(1)
    Sugar_Cane_Task.value += 1
    tiles.setTileAt(location, assets.tile`myTile7`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    if (info.score() >= 1000) {
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnTile(sprite, tiles.getTileLocation(13, 28))
        for (let index = 0; index < 20; index++) {
            Black_Nigger = sprites.create(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f e e f b f e f f . 
                . f e e e 1 f e e f 1 e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e e f 2 2 2 2 2 2 f e e . . 
                . . e d f 2 2 2 2 2 2 f d e . . 
                . . e e f e e 5 5 e e f e e . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `, SpriteKind.Nigger)
            Black_Nigger.sayText("ZZZ...")
            tiles.placeOnRandomTile(Black_Nigger, assets.tile`myTile`)
        }
    }
})
statusbars.onStatusReached(StatusBarKind.Nigger, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Fixed, 20, function (status) {
    game.showLongText("now you can rest for today", DialogLayout.Bottom)
    sprites.destroy(Black_Man_Task)
    tiles.setCurrentTilemap(tilemap`level2`)
    if (game.ask(game.askForNumber("How long do you want to rest for", 1), (true as any) == (1 as any))) {
        Days += 1
        game.splash("Day:" + Days)
        game.splash("Day 2")
        tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 14))
        for (let index = 0; index < 20; index++) {
            Black_Nigger = sprites.create(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f e e f b f e f f . 
                . f e e e 1 f e e f 1 e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e e f 2 2 2 2 2 2 f e e . . 
                . . e d f 2 2 2 2 2 2 f d e . . 
                . . e e f e e 5 5 e e f e e . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `, SpriteKind.BadNigger)
            tiles.placeOnRandomTile(Black_Nigger, assets.tile`myTile`)
            Black_Nigger.setStayInScreen(true)
            Black_Nigger.follow(mySprite, 30)
        }
        tiles.placeOnTile(Slave_owner, tiles.getTileLocation(9, 15))
        scene.cameraFollowSprite(Slave_owner)
        Slave_owner.sayText("Now I want you and the other black monkeys to get 20000 sugar cane since you woke them up I'll let them follow you I will also give you one dollar if you complete this task", 5000, false)
        pause(5000)
        tiles.placeOnRandomTile(Slave_owner, assets.tile`myTile6`)
        Sugar_Cane_Task = statusbars.create(20, 4, StatusBarKind.GreaterTask)
        Sugar_Cane_Task.max = 20000
        Sugar_Cane_Task.value = 0
        Sugar_Cane_Task.attachToSprite(mySprite)
        Sugar_Cane_Task.setColor(5, 13, 15)
        Sugar_Cane_Task.setLabel("Sugar")
        Sugar_Cane_Task.positionDirection(CollisionDirection.Left)
        Slave_Bar.value += 100
        scene.cameraFollowSprite(mySprite)
        mySprite.sayText("Collect 20000 sugar")
    }
})
info.onScore(1000, function () {
    game.showLongText("Go to the black cave and wake up the other blacks - Slave Owner", DialogLayout.Bottom)
    sprites.destroyAllSpritesOfKind(SpriteKind.Manager)
    sprites.destroy(Sugar_Cane_Task)
    tiles.setWallAt(Slave_owner.tilemapLocation(), true)
    Black_Man_Task = statusbars.create(20, 4, StatusBarKind.Nigger)
    Black_Man_Task.max = 20
    Black_Man_Task.value = 0
    Black_Man_Task.attachToSprite(mySprite)
    Black_Man_Task.positionDirection(CollisionDirection.Left)
})
info.onScore(1000000, function () {
    Slave_Bar.value += 20
    info.changeScoreBy(-1000000)
})
sprites.onOverlap(SpriteKind.Monkey, SpriteKind.Nigger, function (sprite, otherSprite) {
    otherSprite.sayText("Aww thank you for waking me up monkey")
    pause(5000)
    Black_Man_Task.value += 1
    Slave_Bar.value += 5
    sprites.destroy(otherSprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.kind() == SpriteKind.Player) {
        mySprite.setImage(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f e f f e f e e e e f . . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `)
        mySprite.setKind(SpriteKind.Monkey)
        info.startCountdown(30)
        if (tiles.tileAtLocationEquals(mySprite.tilemapLocation(), assets.tile`myTile`)) {
            for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
                tiles.setWallAt(value, false)
            }
        }
    } else if (mySprite.kind() == SpriteKind.BetterPlayer) {
        mySprite.setImage(img`
            .......fffffff...........
            .....ffeeeeeeef..........
            .....ffeeeeeeef..........
            ....fdddddddeeeff........
            ..fffffdddffddefff.......
            ..fffffdddffddefff.......
            .cdddeeeddddddedddff.....
            .cdddeeeddddddedddff.....
            .cccddddddcdddeddffff....
            .cddccccccddddeddfbbdf...
            .cddccccccddddeddfbbdf...
            ..ccddddddddeeefffdddf...
            ....cddddddeeefffeffff...
            ....cddddddeeefffeffff...
            .....fffffeeffeeeeff.....
            .....fffffeeffeeeeff.....
            .....ffeeeeeeeeeeffff....
            ....feeeeeeeeeffffeef....
            ....feeeeeeeeeffffeef....
            ..fffeeeeeefffffffeef....
            ..fffeeeeeefffffffeef....
            .fbbdffeeefbbbffffeef....
            .fdddffeeefdddbffffff....
            .fdddffeeefdddbffffff....
            .fffffffffffffffffff.....
            `)
        mySprite.setKind(SpriteKind.BetterMonkey)
        info.startCountdown(50)
        if (tiles.tileAtLocationEquals(mySprite.tilemapLocation(), assets.tile`myTile`)) {
            for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
                tiles.setWallAt(value, false)
            }
        }
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile`)
})
sprites.onOverlap(SpriteKind.Owner, SpriteKind.Manager, function (sprite, otherSprite) {
    sprite.follow(otherSprite, 0)
    if (randint(0, 10) == 1) {
        game.splash("go to the sugar cane fields and work")
        tiles.placeOnRandomTile(Slave_owner, assets.tile`myTile6`)
        scene.cameraFollowSprite(mySprite)
        mySprite.sayText("Collect 200 sugar cane")
        Sugar_Cane_Task = statusbars.create(20, 4, StatusBarKind.Task)
        Sugar_Cane_Task.max = 200
        Sugar_Cane_Task.value = 0
        Sugar_Cane_Task.attachToSprite(mySprite)
        Sugar_Cane_Task.setColor(5, 13)
        Sugar_Cane_Task.setLabel("Sugar")
        Sugar_Cane_Task.positionDirection(CollisionDirection.Left)
    } else if (randint(0, 10) == 2) {
        game.splash("go to the sugar cane fields and work")
        tiles.placeOnRandomTile(Slave_owner, assets.tile`myTile6`)
        scene.cameraFollowSprite(mySprite)
        mySprite.sayText("Collect 400 sugar cane")
        Sugar_Cane_Task = statusbars.create(20, 4, StatusBarKind.Task)
        Sugar_Cane_Task.max = 400
        Sugar_Cane_Task.value = 0
        Sugar_Cane_Task.attachToSprite(mySprite)
        Sugar_Cane_Task.setColor(5, 13)
        Sugar_Cane_Task.setLabel("Sugar")
        Sugar_Cane_Task.positionDirection(CollisionDirection.Left)
    } else if (randint(0, 10) == 3) {
        game.splash("go to the sugar cane fields and work")
        tiles.placeOnRandomTile(Slave_owner, assets.tile`myTile6`)
        scene.cameraFollowSprite(mySprite)
        mySprite.sayText("Collect 600 sugar cane in time or get wipped = lose 20 life")
        Sugar_Cane_Task = statusbars.create(20, 4, StatusBarKind.Task)
        Sugar_Cane_Task.max = 600
        Sugar_Cane_Task.value = 0
        Sugar_Cane_Task.attachToSprite(mySprite)
        Sugar_Cane_Task.setColor(5, 13)
        Sugar_Cane_Task.setLabel("Sugar")
        Sugar_Cane_Task.positionDirection(CollisionDirection.Left)
        info.startCountdown(50)
    }
})
info.onCountdownEnd(function () {
    mySprite.setImage(img`
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
        `)
    mySprite.setKind(SpriteKind.Player)
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        tiles.setWallAt(value, true)
    }
    if (Sugar_Cane_Task.max == 600) {
        info.changeLifeBy(-20)
        mySprite.sayText("")
    }
})
statusbars.onStatusReached(StatusBarKind.ExperienceBar, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Fixed, 100, function (status) {
    Slave_Bar.setLabel("Better Slave")
    Slave_Bar.max = 200
    mySprite.setKind(SpriteKind.BetterPlayer)
})
let Black_Man_Task: StatusBarSprite = null
let Black_Nigger: Sprite = null
let Sugar_Cane_Task: StatusBarSprite = null
let mySprite2: Sprite = null
let Slave_Manager: Sprite = null
let Slave_owner: Sprite = null
let Slave_Money: StatusBarSprite = null
let Slave_Bar: StatusBarSprite = null
let mySprite: Sprite = null
let Days = 0
scene.setBackgroundImage(img`
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222f22222222222
    22222222222222222222222f2222222222222222222222222222222222222222222fff222222222222222222222222222222222f2222222222222222222222222222222222222222222fff2222222222
    2222222222222222222222fff22222222222222222222222222222222222222222fffff2222222222222222222222222222222fff22222222222222222222222222222222222222222fffff222222222
    22222222222222222222222f2222222222222222222222222222222222222222222fff222222222222222222222222222222222f2222222222222222222222222222222222222222222fff2222222222
    2222222222222222222222222222222222222222222222222111222222222222222f2f22222222222222222222222222222222222222222222222222222222222111222222222222222f2f2222222222
    22222d11d2222222222222222222222222222222222222221111122222222222222222222222222222222d11d22222222222222222222222222222222222222211111222222222222222222222222222
    22221111112222222222222222222222222222222221122111111d2222222222222222222222222222221111112222222222222222222222222222222221122111111d22222222222222222222222222
    2221111111d22222222222222222222222222222221111d1111111122222222222222222222222222221111111d22222222222222222222222222222221111d111111112222222222222222222222222
    22211111111d11222222222222222222222222222d1111111111111d22222222222222222222222222211111111d11222222222222222222222222222d1111111111111d222222222222222222222222
    221111111111111222222222222222222222222d11111111111111111d2222222222222222222222221111111111111222222222222222222222222d11111111111111111d2222222222222222222222
    1d1111111111111d21112222222222222222222222222222222222222222222266622222222222211d1111111111111d2111222222222222222222222222222222222222222222226662222222222221
    1111111111111111111112222222222222222222222222222222222222222226776622222222221111111111111111111111122222222222222222222222222222222222222222267766222222222211
    1111111111166666111112222222222222f2222222222222222222222222226677762222222222111111111111166666111112222222222222f222222222222222222222222222667776222222222211
    111111111166777661111111d22222222fff2222222222222222222222222267777662222222d111111111111166777661111111d22222222fff2222222222222222222222222267777662222222d111
    22222222266777776622222222222222fffff222222222222222222222222267777762222222222222222222266777776622222222222222fffff2222222222222222222222222677777622222222222
    222222222677777776222222222222222fff22222222222222222222222222677777622222222222222222222677777776222222222222222fff22222222222222222222222222677777622222222222
    222222226677777776622222222222222f2f22222222222222222222222222677777622222222222222222226677777776622222222222222f2f22222222222222222222222222677777622222222222
    222222226777777777622222222222222222222222222222222f2222222222677777622222222222222222226777777777622222222222222222222222222222222f2222222222677777622222222222
    22222222677777777762222662222222222222222222222222fff22222222267777762222222222222222222677777777762222662222222222222222222222222fff222222222677777622222222222
    222222226777777777622267762222222222222222222222222f2222266222677777622222222222222222226777777777622267762222222222222222222222222f2222266222677777622222222222
    2222222267777777776226677662222222222222222222222222222267762267777762222222222222222222677777777762266776622222222222222222222222222222677622677777622222222222
    2222222267777777776226777762222222222222222222222222222267762267777762222222222222222222677777777762267777622222222222222222222222222222677622677777622222222222
    2222222267777777776226777762222222222222222222222222222267762267777762222222222222222222677777777762267777622222222222222222222222222222677622677777622222222222
    6666222267777777776666777762222222222666666222222222222267762267777762222222222666662222677777777766667777622222222226666662222222222222677622677777622222222226
    7776622267777777777777777762222222226666666622222222222267762267777762226622226677766222677777777777777777622222222266666666222222222222677622677777622266222266
    7777622267777777777777777622222222266666666662222222222267762267777762267662266777776222677777777777777776222222222666666666622222222222677622677777622676622667
    7777762267777777777777776622222222266666666662222222222267762267777762267762267777777622677777777777777766222222222666666666622222222222677622677777622677622677
    7777762267777777776666666222222222666666666662222222222267762267777762267762267777777622677777777766666662222222226666666666622222222222677622677777622677622677
    7777776267777777776222222222222222666666666662222222222267776667777762677762267777777762677777777762222222222222226666666666622222222222677766677777626777622677
    7777776267777777776222222222222222666666666666222222222266777777777766677766667777777762677777777762222222222222226666666666662222222222667777777777666777666677
    7777776267777777776222666666666222666666666666222222222226677777777776677666677777777762677777777762226666666662226666666666662222222222266777777777766776666777
    7777776667777777776266677777776662666666666666222222222222666677777777777666677777777766677777777762666777777766626666666666662222222222226666777777777776666777
    7777776667777777776667777777777766666666666666222266666622222677777777777666677777777766677777777766677777777777666666666666662222666666222226777777777776666777
    7777776667777777776677777777777776666666666666266677777666222677777777776666677777777766677777777766777777777777766666666666662666777776662226777777777766666777
    7777777667777777776777777777777777666666666666667777777776622677777766666666677777777776677777777767777777777777776666666666666677777777766226777777666666666777
    7777777667777777766777777777777777666666666666677777777777662677777766666666677777777776677777777667777777777777776666666666666777777777776626777777666666666777
    7777777667777777767777777777777777766666666666777777777777766677777766666666677777777776677777777677777777777777777666666666667777777777777666777777666666666777
    7777777667777777667777777777777777766666666666777777777777766677777766666666677777777776677777776677777777777777777666666666667777777777777666777777666666666777
    7777777667777777677777777777777777776666666666777777777777766677777766666666677777777776677777776777777777777777777766666666667777777777777666777777666666666777
    7777777667777733333333777777777777776666666666777777773333333377777766666666677777777776677777333333337777777777777766666666667777777733333333777777666666666777
    777777766777333dddddd3333777777777776666666666777777333dddddd3333777666666666777777777766777333dddddd3333777777777776666666666777777333dddddd3333777666666666777
    7777777666333ddddddddddd33377777777766666666667777333ddddddddddd33376666666667777777777666333ddddddddddd33377777777766666666667777333ddddddddddd3337666666666777
    77777776633ddddddddddddddd3337777777666666666677733ddddddddddddddd3336666666677777777776633ddddddddddddddd3337777777666666666677733ddddddddddddddd33366666666777
    7777777333dddddddddddddddddd3333777766666666666333dddddddddddddddddd3333666667777777777333dddddddddddddddddd3333777766666666666333dddddddddddddddddd333366666777
    33777333ddddddddddddddddddddddd33333333333666333ddddddddddddddddddddddd33333333333777333ddddddddddddddddddddddd33333333333666333ddddddddddddddddddddddd333333333
    d33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33ddddd
    ddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333ddddddd
    ddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33dddddddddd
    ddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33dddddddddddd
    dddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddd
    dddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddd
    dddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddd
    dddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
game.splash("A totally normal Game")
Days = 1
if (game.ask("Are you black ", true)) {
    game.splash("work on the slave plantaions")
    tiles.setCurrentTilemap(tilemap`level2`)
    mySprite = sprites.create(img`
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
    controller.moveSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(43, 15))
    mySprite.setStayInScreen(true)
    Slave_Bar = statusbars.create(40, 5, StatusBarKind.ExperienceBar)
    Slave_Bar.setFlag(SpriteFlag.RelativeToCamera, true)
    Slave_Bar.setPosition(64, 8)
    Slave_Bar.setColor(15, 12)
    Slave_Bar.setLabel("Slave")
    Slave_Bar.max = 100
    Slave_Bar.value = 0
    Slave_Money = statusbars.create(40, 5, StatusBarKind.Money)
    Slave_Money.max = 1000000
    Slave_Money.value = 0
    Slave_Money.setPosition(70, 22)
    Slave_Money.setFlag(SpriteFlag.RelativeToCamera, true)
    Slave_Money.setColor(7, 2)
    Slave_owner = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 1 e e e f f f f 
        f f f 1 1 1 e e f f f f 
        f f f 1 1 1 1 e e f f f 
        f 1 e 1 1 1 1 1 1 e 1 f 
        f 1 1 f f 1 1 f f 1 1 f 
        f b 1 1 1 1 1 1 1 1 b f 
        . f b 1 1 b b 1 1 b f . 
        . f f b 1 1 1 1 b f f . 
        b 1 f b d d d d b f 1 b 
        1 1 f d d d d d d f 1 1 
        1 1 f 6 6 6 6 6 6 f 1 1 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Owner)
    tiles.placeOnTile(Slave_owner, tiles.getTileLocation(45, 20))
    scene.cameraFollowSprite(Slave_owner)
    Slave_owner.setFlag(SpriteFlag.GhostThroughWalls, true)
    info.setLife(50)
    for (let index = 0; index < 20; index++) {
        Slave_Manager = sprites.create(img`
            . . . . . . . c c c . . . . . . 
            . . . . . . c b 5 c . . . . . . 
            . . . . c c c 5 5 c c c . . . . 
            . . c c b c 5 5 5 5 c c c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . f 5 5 5 b b b b 5 5 5 c . . 
            . . f f 5 5 5 5 5 5 5 5 f f . . 
            . . f f f b f d d f b f f f . . 
            . . f f f 1 f d d f 1 f f f . . 
            . . . f f d d d d d d f f . . . 
            . . . d d f d d d d f d d . . . 
            . . d b c b 5 b b 5 b f b d . . 
            . . d d f 5 5 5 5 5 5 f d d . . 
            . . . . c b 5 5 5 5 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.Manager)
        tiles.placeOnRandomTile(Slave_Manager, assets.tile`myTile`)
    }
    if (0 == 0) {
        Slave_owner.follow(Slave_Manager, 40)
    }
} else if (game.ask("Are you white ", true)) {
    mySprite2 = sprites.create(img`
        . . . . 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 b 1 1 1 . . 
        1 1 1 1 1 1 b b 1 1 1 b . 
        1 1 1 b 1 1 1 1 1 1 1 b . 
        b b b 1 1 1 d d 1 1 b b . 
        1 1 1 1 1 d d 1 1 b b 1 . 
        1 f f b f d d f b f f 1 . 
        . f d 1 f d d f 1 d f . . 
        . f d d d d d d d d f . . 
        . f f f d d d d f f f . . 
        f d f b 1 1 1 1 b f d f . 
        d d f 1 1 1 1 1 1 f d d . 
        d d f 6 6 6 6 6 6 f d d . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.PlayerOwner)
    controller.moveSprite(mySprite2)
    tiles.setCurrentTilemap(tilemap`level10`)
    scene.cameraFollowSprite(mySprite)
} else {
	
}
game.onUpdateInterval(50000, function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
})
