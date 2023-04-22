arize.start('3dviewer', {
    'glbURL': 'https://demo.arize.io/furniture/src/3d/furniture.glb',
    'presentationSpeed': '0.09',
    presentation: 'false',
    presentationDelay: '3',
    'aRButtonText': 'View AR',
    showVariantBtn: 'false',
    showARBtn: 'true',
    autoAnimationPlay: 'true',
    onGlbReady: () => {
        arize.startAnim(arize.glbAsset.resource.animations[1], true);
        arize.animatedObject = false;
        console.log('3D file is loaded successfully!');
        orbitCameraInfo();
        arize.rootEntity.children[2].enabled = false;
        arize.rootEntity.children[3].enabled = false;
    }
});

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255
    } : null;
}

function orbitCameraInfo() {
    var orbitCameraStart = arize.getOrbitCameraTransform();
    globalThis.targetPitchStatus = orbitCameraStart[0];
    globalThis.targetYawStatus = orbitCameraStart[1];
    globalThis.targetDistanceStatus = orbitCameraStart[2];

    document.getElementById('targetPitch').value = targetPitchStatus;
    document.getElementById('targetYaw').value = targetYawStatus;
    document.getElementById('targetDistance').value = targetDistanceStatus;
    document.getElementById('targetDistance').max = targetDistanceStatus;
    return orbitCameraStart;
}

// Default Values
var shadowStatus = 0.5;
var intensityStatus = 0.5;
var presentationStatus = 'false';
var delayStatus = '3';
var speedStatus = '0.09';
var transformXStatus = '0';
var transformYStatus = '0';
var transformZStatus = '0';

// Cushion
const texture1 = 'https://demo.arize.io/furniture/src/3d/Cushin/Furniture_Cushin_BaseColor1.jpg';
const texture2 = 'https://demo.arize.io/furniture/src/3d/Cushin/Furniture_Cushin_BaseColor2.jpg';
const texture3 = 'https://demo.arize.io/furniture/src/3d/Cushin/Furniture_Cushin_BaseColor3.jpg';
const texture4 = 'https://demo.arize.io/furniture/src/3d/Cushin/Furniture_Cushin_BaseColor4.jpg';

// Sofa
const texture5 = 'https://demo.arize.io/furniture/src/3d/Sofa/Furniture_Sofa_BaseColor1.jpg';
const texture6 = 'https://demo.arize.io/furniture/src/3d/Sofa/Furniture_Sofa_BaseColor2.jpg';
const texture7 = 'https://demo.arize.io/furniture/src/3d/Sofa/Furniture_Sofa_BaseColor3.jpg';
const texture8 = 'https://demo.arize.io/furniture/src/3d/Sofa/Furniture_Sofa_BaseColor4.jpg';

// Leg 1
const texture9 = 'https://demo.arize.io/furniture/src/3d/Legs/T1/Furniture_Legs_BaseColorT1-1.jpg';
const texture10 = 'https://demo.arize.io/furniture/src/3d/Legs/T1/Furniture_Legs_BaseColorT1-2.jpg';
const texture11 = 'https://demo.arize.io/furniture/src/3d/Legs/T1/Furniture_Legs_BaseColorT1-3.jpg';
const texture12 = 'https://demo.arize.io/furniture/src/3d/Legs/T1/Furniture_Legs_BaseColorT1-5.jpg';

// Leg 2
const texture13 = 'https://demo.arize.io/furniture/src/3d/Legs/T2/Furniture_Legs_BaseColorT2-1.jpg';
const texture14 = 'https://demo.arize.io/furniture/src/3d/Legs/T2/Furniture_Legs_BaseColorT2-2.jpg';
const texture15 = 'https://demo.arize.io/furniture/src/3d/Legs/T2/Furniture_Legs_BaseColorT2-3.jpg';
const texture16 = 'https://demo.arize.io/furniture/src/3d/Legs/T2/Furniture_Legs_BaseColorT2-4.jpg';

// Leg 3
const texture17 = 'https://demo.arize.io/furniture/src/3d/Legs/T3/Furniture_Legs_BaseColorT3-1.jpg';
const texture18 = 'https://demo.arize.io/furniture/src/3d/Legs/T3/Furniture_Legs_BaseColorT3-2.jpg';
const texture19 = 'https://demo.arize.io/furniture/src/3d/Legs/T3/Furniture_Legs_BaseColorT3-3.jpg';
const texture20 = 'https://demo.arize.io/furniture/src/3d/Legs/T3/Furniture_Legs_BaseColorT3-4.jpg';

document.addEventListener('DOMContentLoaded', function () {

    // Shadow
    // Toggle
    var shadow = document.getElementById('shadow');
    if (shadow) {
        shadow.onchange = (e) => {
            this.checkboxValue = e.target.checked ? intensityStatus : 0;
            shadowStatus = this.checkboxValue;
            arize.setShadow(shadowStatus);
            console.log('shadowStatus: ' + shadowStatus);
            if (shadowStatus === 0) {
                document.getElementById('intensity').disabled = true;
            } else {
                document.getElementById('intensity').disabled = false;
            }
        }
    }

    // Intensity
    var intensity = document.getElementById('intensity');
    if (intensity) {
        intensity.onclick = function () {
            intensityStatus = intensity.value;
            arize.setShadow(intensityStatus);
            console.log('intensityStatus: ' + intensityStatus);
        }
    }

    // Presentation
    var presentation = document.getElementById('presentation');
    if (presentation) {
        presentation.onchange = (e) => {
            this.checkboxValue = e.target.checked ? 'true' : 'false';
            presentationStatus = this.checkboxValue;
            setPresentation(presentationStatus, delayStatus, speedStatus);
            console.log('presentationStatus: ' + presentationStatus);
        }
    }

    // Color Pickers
    // Background
    var colorPickerBackground = document.getElementById('colorPickerBackground');
    if (colorPickerBackground) {
        colorPickerBackground.onchange = function () {
            var rgbColor = hexToRgb(colorPickerBackground.value);
            var modelFrame = document.getElementById('viewer');
            modelFrame.style.backgroundColor = "rgba(" + (rgbColor.r) * 255 + "," + (rgbColor.g) * 255 + "," + (rgbColor.b) * 255 + ",1)";
            console.log('colorPickerBackground: ' + 'rgba(' + rgbColor.r + ',' + rgbColor.g + ',' + rgbColor.b + ',1)');
        }
    }

    // Ambient
    var colorPickerAmbient = document.getElementById('colorPickerAmbient');
    if (colorPickerAmbient) {
        colorPickerAmbient.onchange = function () {
            var rgbColor = hexToRgb(colorPickerAmbient.value);
            arize.setAmbientlight(rgbColor.r, rgbColor.g, rgbColor.b);
            console.log('colorPickerAmbient: ' + 'rgba(' + rgbColor.r + ',' + rgbColor.g + ',' + rgbColor.b + ',1)');
        }
    }

    // Texture One Series
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
            arize.updateTexture(arize.rootEntity.children[1].render.meshInstances[0].material, texture5);
        }
    }

    // TextureTwoTwo
    var textureTwoTwo = document.getElementById('textureTwoTwo');
    if (textureTwoTwo) {
        textureTwoTwo.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[1].render.meshInstances[0].material, texture6);
        }
    }

    // TextureTwoThree
    var textureTwoThree = document.getElementById('textureTwoThree');
    if (textureTwoThree) {
        textureTwoThree.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[1].render.meshInstances[0].material, texture7);
        }
    }

    // TextureTwoFour
    var textureTwoFour = document.getElementById('textureTwoFour');
    if (textureTwoFour) {
        textureTwoFour.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[1].render.meshInstances[0].material, texture8);
        }
    }
    // 3. Texture Three Series
    // TextureThreeOne
    var textureThreeOne = document.getElementById('textureThreeOne');
    if (textureThreeOne) {
        textureThreeOne.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[4].render.meshInstances[0].material, texture9);
        }
    }

    // TextureThreeTwo
    var textureThreeTwo = document.getElementById('textureThreeTwo');
    if (textureThreeTwo) {
        textureThreeTwo.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[4].render.meshInstances[0].material, texture10);
        }
    }

    // TextureThreeThree
    var textureThreeThree = document.getElementById('textureThreeThree');
    if (textureThreeThree) {
        textureThreeThree.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[4].render.meshInstances[0].material, texture11);
        }
    }

    // TextureThreeFour
    var textureThreeFour = document.getElementById('textureThreeFour');
    if (textureThreeFour) {
        textureThreeFour.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[4].render.meshInstances[0].material, texture12);
        }
    }
    // 4. Texture Four Series
    // TextureFourOne
    var textureFourOne = document.getElementById('textureFourOne');
    if (textureFourOne) {
        textureFourOne.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[2].render.meshInstances[0].material, texture13);
        }
    }

    // TextureFourTwo
    var textureFourTwo = document.getElementById('textureFourTwo');
    if (textureFourTwo) {
        textureFourTwo.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[2].render.meshInstances[0].material, texture14);
        }
    }

    // TextureFourThree
    var textureFourThree = document.getElementById('textureFourThree');
    if (textureFourThree) {
        textureFourThree.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[2].render.meshInstances[0].material, texture15);
        }
    }

    // TextureFourFour
    var textureFourFour = document.getElementById('textureFourFour');
    if (textureFourFour) {
        textureFourFour.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[2].render.meshInstances[0].material, texture16);
        }
    }
    // 5. Texture Five Series
    // TextureFiveOne
    var textureFiveOne = document.getElementById('textureFiveOne');
    if (textureFiveOne) {
        textureFiveOne.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[3].render.meshInstances[0].material, texture17);
        }
    }

    // TextureFiveTwo
    var textureFiveTwo = document.getElementById('textureFiveTwo');
    if (textureFiveTwo) {
        textureFiveTwo.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[3].render.meshInstances[0].material, texture18);
        }
    }

    // TextureFiveThree
    var textureFiveThree = document.getElementById('textureFiveThree');
    if (textureFiveThree) {
        textureFiveThree.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[3].render.meshInstances[0].material, texture19);
        }
    }

    // TextureFiveFour
    var textureFiveFour = document.getElementById('textureFiveFour');
    if (textureFiveFour) {
        textureFiveFour.onclick = function () {
            arize.updateTexture(arize.rootEntity.children[3].render.meshInstances[0].material, texture20);
        }
    }

    // Reflection Map (envNeutral, envHelipad, envTropicalBeach, envWinterFrost1)
    var reflectionMap = document.getElementById('reflection-map');
    if (reflectionMap) {
        reflectionMap.onchange = function () {
            console.log('reflectionMap: ' + reflectionMap.value);
            arize.changeEnvMap(reflectionMap.value);
        }
    }

    // Delay
    var delay = document.getElementById('delay');
    if (delay) {
        delay.onchange = function () {
            delayStatus = delay.value;
            console.log('delay: ' + delayStatus);
            setPresentation(presentationStatus, delayStatus, speedStatus);
        }
    }

    // Speed
    var speed = document.getElementById('speed');
    if (speed) {
        speed.onchange = function () {
            speedStatus = speed.value;
            console.log('speed: ' + speedStatus);
            setPresentation(presentationStatus, delayStatus, speedStatus);
        }
    }

    var transformX = document.getElementById('transform-x');
    if (transformX) {
        transformX.onchange = function () {
            transformXStatus = transformX.value;
            console.log('transformX: ' + transformXStatus);
            arize.rootEntity.setEulerAngles(transformXStatus, transformYStatus, transformZStatus);
        }
    }
    var transformY = document.getElementById('transform-y');
    if (transformY) {
        transformY.onchange = function () {
            transformYStatus = transformY.value;
            console.log('transformY: ' + transformYStatus);
            arize.rootEntity.setEulerAngles(transformXStatus, transformYStatus, transformZStatus);
        }
    }
    var transformZ = document.getElementById('transform-z');
    if (transformZ) {
        transformZ.onchange = function () {
            transformZStatus = transformZ.value;
            console.log('transformZ: ' + transformZStatus);
            arize.rootEntity.setEulerAngles(transformXStatus, transformYStatus, transformZStatus);
        }
    }

    // Orbit Camera
    var targetPitch = document.getElementById('targetPitch');
    if (targetPitch) {
        targetPitch.onchange = function () {
            targetPitchStatus = targetPitch.value;
            console.log('targetPitch: ' + targetPitchStatus);
            arize.moveOrbitCameraTo(targetPitchStatus, targetYawStatus, targetDistanceStatus);
        }
    }
    var targetYaw = document.getElementById('targetYaw');
    if (targetYaw) {
        targetYaw.onchange = function () {
            targetYawStatus = targetYaw.value;
            console.log('targetYaw: ' + targetYawStatus);
            arize.moveOrbitCameraTo(targetPitchStatus, targetYawStatus, targetDistanceStatus);
        }
    }
    var targetDistance = document.getElementById('targetDistance');
    if (targetDistance) {
        targetDistance.onchange = function () {
            targetDistanceStatus = targetDistance.value;
            console.log('targetDistance: ' + targetDistanceStatus);
            arize.moveOrbitCameraTo(targetPitchStatus, targetYawStatus, targetDistanceStatus);
        }
    }

    var legOneStatus = false;
    var legTwoStatus = false;
    var legThreeStatus = false;

    // LEGS
    // Leg ONE
    var legOne = document.getElementById('legOneImage');
    if (legOne) {
        legOne.onclick = function () {
            
            arize.rootEntity.children[2].enabled = false;
            arize.rootEntity.children[3].enabled = false;
            arize.rootEntity.children[4].enabled = true;

            document.querySelector('#legOneImage').classList.add('border-primary');
            document.querySelector('#legTwoImage').classList.remove('border-primary');
            document.querySelector('#legThreeImage').classList.remove('border-primary');
            
            document.querySelector('#legOne').classList.remove('hide');
            document.querySelector('#legTwo').classList.add('hide');
            document.querySelector('#legThree').classList.add('hide');

            legOneStatus = true;
            console.log('legOne: ' + legOneStatus);
        }
    }
    // Leg TWO
    var legTwo = document.getElementById('legTwoImage');
    if (legTwo) {
        legTwo.onclick = function () {
            
            arize.rootEntity.children[2].enabled = true;
            arize.rootEntity.children[3].enabled = false;
            arize.rootEntity.children[4].enabled = false;

            document.querySelector('#legOneImage').classList.remove('border-primary');
            document.querySelector('#legTwoImage').classList.add('border-primary');
            document.querySelector('#legThreeImage').classList.remove('border-primary');
            
            document.querySelector('#legOne').classList.add('hide');
            document.querySelector('#legTwo').classList.remove('hide');
            document.querySelector('#legThree').classList.add('hide');

            legTwoStatus = true;
            console.log('legTwo: ' + legTwoStatus);
        }
    }
    // Leg THREE
    var legThree = document.getElementById('legThreeImage');
    if (legThree) {
        legThree.onclick = function () {
            
            arize.rootEntity.children[2].enabled = false;
            arize.rootEntity.children[3].enabled = true;
            arize.rootEntity.children[4].enabled = false;

            document.querySelector('#legOneImage').classList.remove('border-primary');
            document.querySelector('#legTwoImage').classList.remove('border-primary');
            document.querySelector('#legThreeImage').classList.add('border-primary');
            
            document.querySelector('#legOne').classList.add('hide');
            document.querySelector('#legTwo').classList.add('hide');
            document.querySelector('#legThree').classList.remove('hide');

            legThreeStatus = true;
            console.log('legThree: ' + legThreeStatus);
        }
    }

    // Screenshot
    var screenshot = document.getElementById('screenshot');
    if (screenshot) {
        screenshot.onclick = function () {
            console.log('Screenshot');
            arize.takeScreenshot();
        }
    }
});