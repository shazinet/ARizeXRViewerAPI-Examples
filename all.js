const texture1 = 'https://demo.arize.io/xxx/src/3d/yyy';
const texture2 = 'https://demo.arize.io/xxx/src/3d/yyy';
const texture3 = 'https://demo.arize.io/xxx/src/3d/yyy';
const texture4 = 'https://demo.arize.io/xxx/src/3d/yyy';
const texture5 = 'https://demo.arize.io/xxx/src/3d/yyy';
const texture6 = 'https://demo.arize.io/xxx/src/3d/yyy';
const texture7 = 'https://demo.arize.io/xxx/src/3d/yyy';
const texture8 = 'https://demo.arize.io/xxx/src/3d/yyy';
const texture9 = 'https://demo.arize.io/xxx/src/3d/yyy';
const texture10 = 'https://demo.arize.io/xxx/src/3d/yyy';
const texture11 = 'https://demo.arize.io/xxx/src/3d/yyy';
const texture12 = 'https://demo.arize.io/xxx/src/3d/yyy';
    
    // 1. Texture One Series
    // TextureOneOne
    var textureOneOne = document.getElementById('textureOneOne');
    if (textureOneOne) {
        textureOneOne.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[0].render.meshInstances[0].material, texture1);
        }
    }

    // TextureOneTwo
    var textureOneTwo = document.getElementById('textureOneTwo');
    if (textureOneTwo) {
        textureOneTwo.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[0].render.meshInstances[0].material, texture2);
        }
    }

    // TextureOneThree
    var textureOneThree = document.getElementById('textureOneThree');
    if (textureOneThree) {
        textureOneThree.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[0].render.meshInstances[0].material, texture3);
        }
    }

    // TextureOneFour
    var textureOneFour = document.getElementById('textureOneFour');
    if (textureOneFour) {
        textureOneFour.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[0].render.meshInstances[0].material, texture4);
        }
    }
    // 2. Texture Two Series
    // TextureTwoOne
    var textureTwoOne = document.getElementById('textureTwoOne');
    if (textureTwoOne) {
        textureTwoOne.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[1].render.meshInstances[0].material, texture1);
        }
    }

    // TextureTwoTwo
    var textureTwoTwo = document.getElementById('textureTwoTwo');
    if (textureTwoTwo) {
        textureTwoTwo.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[1].render.meshInstances[0].material, texture2);
        }
    }

    // TextureTwoThree
    var textureTwoThree = document.getElementById('textureTwoThree');
    if (textureTwoThree) {
        textureTwoThree.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[1].render.meshInstances[0].material, texture3);
        }
    }

    // TextureTwoFour
    var textureTwoFour = document.getElementById('textureTwoFour');
    if (textureTwoFour) {
        textureTwoFour.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[1].render.meshInstances[0].material, texture4);
        }
    }
    // 3. Texture Three Series
    // TextureThreeOne
    var textureThreeOne = document.getElementById('textureThreeOne');
    if (textureThreeOne) {
        textureThreeOne.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[2].render.meshInstances[0].material, texture1);
        }
    }

    // TextureThreeTwo
    var textureThreeTwo = document.getElementById('textureThreeTwo');
    if (textureThreeTwo) {
        textureThreeTwo.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[2].render.meshInstances[0].material, texture2);
        }
    }

    // TextureThreeThree
    var textureThreeThree = document.getElementById('textureThreeThree');
    if (textureThreeThree) {
        textureThreeThree.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[2].render.meshInstances[0].material, texture3);
        }
    }

    // TextureThreeFour
    var textureThreeFour = document.getElementById('textureThreeFour');
    if (textureThreeFour) {
        textureThreeFour.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[2].render.meshInstances[0].material, texture4);
        }
    }
    // 4. Texture Four Series
    // TextureFourOne
    var textureFourOne = document.getElementById('textureFourOne');
    if (textureFourOne) {
        textureFourOne.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[3].render.meshInstances[0].material, texture1);
        }
    }

    // TextureFourTwo
    var textureFourTwo = document.getElementById('textureFourTwo');
    if (textureFourTwo) {
        textureFourTwo.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[3].render.meshInstances[0].material, texture2);
        }
    }

    // TextureFourThree
    var textureFourThree = document.getElementById('textureFourThree');
    if (textureFourThree) {
        textureFourThree.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[3].render.meshInstances[0].material, texture3);
        }
    }

    // TextureFourFour
    var textureFourFour = document.getElementById('textureFourFour');
    if (textureFourFour) {
        textureFourFour.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[3].render.meshInstances[0].material, texture4);
        }
    }
    // 5. Texture Five Series
    // TextureFiveOne
    var textureFiveOne = document.getElementById('textureFiveOne');
    if (textureFiveOne) {
        textureFiveOne.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[4].render.meshInstances[0].material, texture1);
        }
    }

    // TextureFiveTwo
    var textureFiveTwo = document.getElementById('textureFiveTwo');
    if (textureFiveTwo) {
        textureFiveTwo.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[4].render.meshInstances[0].material, texture2);
        }
    }

    // TextureFiveThree
    var textureFiveThree = document.getElementById('textureFiveThree');
    if (textureFiveThree) {
        textureFiveThree.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[4].render.meshInstances[0].material, texture3);
        }
    }

    // TextureFiveFour
    var textureFiveFour = document.getElementById('textureFiveFour');
    if (textureFiveFour) {
        textureFiveFour.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[4].render.meshInstances[0].material, texture4);
        }
    }
    // 6. Texture Six Series
    // TextureSixOne
    var textureSixOne = document.getElementById('textureSixOne');
    if (textureSixOne) {
        textureSixOne.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[5].render.meshInstances[0].material, texture1);
        }
    }

    // TextureSixTwo
    var textureSixTwo = document.getElementById('textureSixTwo');
    if (textureSixTwo) {
        textureSixTwo.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[5].render.meshInstances[0].material, texture2);
        }
    }

    // TextureSixThree
    var textureSixThree = document.getElementById('textureSixThree');
    if (textureSixThree) {
        textureSixThree.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[5].render.meshInstances[0].material, texture3);
        }
    }

    // TextureSixFour
    var textureSixFour = document.getElementById('textureSixFour');
    if (textureSixFour) {
        textureSixFour.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[5].render.meshInstances[0].material, texture4);
        }
    }



    // Color Picker Series
    // One
    var colorPickerOne = document.getElementById('colorPickerOne');
    if (colorPickerOne) {
        colorPickerOne.onchange = function () {
            var rgbColor = hexToRgb(colorPickerOne.value);
            arize.changeMatColor(arize.rootEntity.children[0].render.meshInstances[0].material, rgbColor.r, rgbColor.g, rgbColor.b, 1);
            console.log('colorPickerOne: ' + 'rgba(' + rgbColor.r + ',' + rgbColor.g + ',' + rgbColor.b + ',1)');

        }
    }

    // Two
    var colorPickerTwo = document.getElementById('colorPickerTwo');
    if (colorPickerTwo) {
        colorPickerTwo.onchange = function () {
            var rgbColor = hexToRgb(colorPickerTwo.value);
            arize.changeMatColor(arize.rootEntity.children[1].render.meshInstances[0].material, rgbColor.r, rgbColor.g, rgbColor.b, 1);
            console.log('colorPickerTwo: ' + 'rgba(' + rgbColor.r + ',' + rgbColor.g + ',' + rgbColor.b + ',1)');

        }
    }

    // Three
    var colorPickerThree = document.getElementById('colorPickerThree');
    if (colorPickerThree) {
        colorPickerThree.onchange = function () {
            var rgbColor = hexToRgb(colorPickerThree.value);
            arize.changeMatColor(arize.rootEntity.children[2].render.meshInstances[0].material, rgbColor.r, rgbColor.g, rgbColor.b, 1);
            console.log('colorPickerThree: ' + 'rgba(' + rgbColor.r + ',' + rgbColor.g + ',' + rgbColor.b + ',1)');
        }
    }

    // Four
    var colorPickerFour = document.getElementById('colorPickerFour');
    if (colorPickerFour) {
        colorPickerFour.onchange = function () {
            var rgbColor = hexToRgb(colorPickerFour.value);
            arize.changeMatColor(arize.rootEntity.children[3].render.meshInstances[0].material, rgbColor.r, rgbColor.g, rgbColor.b, 1);
            console.log('colorPickerFour: ' + 'rgba(' + rgbColor.r + ',' + rgbColor.g + ',' + rgbColor.b + ',1)');
        }
    }

    // Five
    var colorPickerFive = document.getElementById('colorPickerFive');
    if (colorPickerFive) {
        colorPickerFive.onchange = function () {
            var rgbColor = hexToRgb(colorPickerFive.value);
            arize.changeMatColor(arize.rootEntity.children[4].render.meshInstances[0].material, rgbColor.r, rgbColor.g, rgbColor.b, 1);
            console.log('colorPickerFive: ' + 'rgba(' + rgbColor.r + ',' + rgbColor.g + ',' + rgbColor.b + ',1)');
        }
    }

    // Six
    var colorPickerSix = document.getElementById('colorPickerSix');
    if (colorPickerSix) {
        colorPickerSix.onchange = function () {
            var rgbColor = hexToRgb(colorPickerSix.value);
            arize.changeMatColor(arize.rootEntity.children[5].render.meshInstances[0].material, rgbColor.r, rgbColor.g, rgbColor.b, 1);
            console.log('colorPickerSix: ' + 'rgba(' + rgbColor.r + ',' + rgbColor.g + ',' + rgbColor.b + ',1)');
        }
    }