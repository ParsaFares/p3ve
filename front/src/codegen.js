import * as R from 'ramda'
import { saveAs } from 'file-saver'

var CLASS_NAME = 'SceneName'
var FILE_NAME = 'game.js'

function codegen(objs) {
    // objs: [obj]
    var code = ''
    // Add class and constructor to code
    code +=
        'class ' +
        CLASS_NAME +
        ' extends Phaser.Scene {\n' +
        'constructor() {\n' +
        "super({ key: '" +
        CLASS_NAME +
        "' })\n" +
        '}\n\n'

    // Prepare paths for preload func
    var paths =
        // R.uniqBy(
        //     a => a[1],
        R.map(o => [o.fname, o.path], objs)
    // )

    // Call preload func and add to code
    code += preload(paths) + '\n'

    // Call create func and add to code
    code += create(objs) + '\n'

    // Add update to code and close curly brackets
    code += 'update() { }\n' + '}'

    // Save the file
    var blob = new Blob([code], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, FILE_NAME)
}

function preload(paths) {
    // Makes preload section
    var tcode = ''
    // Add preload itself
    tcode += 'preload() {\n' + '// Bellow added by p3ve\n'

    // Add image load funcs
    for (const e of paths) {
        tcode += "this.load.image('" + e[0] + "', '" + e[1] + "')\n"
    }

    // Add the end of preload
    tcode += '// Above added by p3ve\n' + '}\n'

    return tcode
}

function create(attributes) {
    // Makes create section
    var tcode = ''
    // Add create itself
    tcode += 'create() {\n' + '// Bellow added by p3ve\n'

    // Add image add funcs
    for (const e of attributes) {
        tcode +=
            'this.add.image(' +
            e.width +
            ', ' +
            e.height +
            ', \'' +
            e.fname +
            '\')\n' +
            '.setAngle(' +
            e.angle +
            ')\n' +
            '.setDepth(' +
            e.z +
            ')\n' +
            '.setPosition(' +
            e.left +
            ', ' +
            e.top +
            ')\n' +
            '.setFlip(' +
            e.flipX +
            ', ' +
            e.flipY +
            ')\n' +
            '.setName(\'' +
            e.name +
            '\')\n' +
            '.setScale(' +
            e.scaleX +
            ', ' +
            e.scaleY +
            ')\n'
    }

    // Add the end of create
    tcode += '// Above added by p3ve\n' + '}\n'

    return tcode
}

export default codegen