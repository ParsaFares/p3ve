class SceneName extends Phaser.Scene {
    constructor() {
        super({ key: 'SceneName' })
    }

    preload() {
        // Bellow added by p3ve
        this.load.image('sky', 'assets/sky.png')
        // Above added by p3ve
    }
    create() {
        // Bellow added by p3ve
        this.add.image(400, 300, 'sky')
        // Above added by p3ve
    }
    update() { }
}

[{
    "type": "rect",
    "left": 50,
    "top": 50,
    "width": 20,
    "height": 20,
    "fill": "green",
    "overlayFill": null,
    "stroke": null,
    "strokeWidth": 1,
    "strokeDashArray": null,
    "scaleX": 1,
    "scaleY": 1,
    "angle": 0,
    "flipX": false,
    "flipY": false,
    "opacity": 1,
    "selectable": true,
    "hasControls": true,
    "hasBorders": true,
    "hasRotatingPoint": false,
    "transparentCorners": true,
    "perPixelTargetFind": false,
    "rx": 0,
    "ry": 0
}]