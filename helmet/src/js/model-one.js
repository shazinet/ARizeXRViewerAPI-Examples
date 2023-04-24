arize.start('3dviewer', {
    'glbURL': 'https://demo.arize.io/helmet/src/3d/helmet.glb',
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
const texture1 = 'https://demo.arize.io/helmet/src/3d/Joe_Rocket_Helmet_BaseColor1.jpg';
const texture2 = 'https://demo.arize.io/helmet/src/3d/Joe_Rocket_Helmet_BaseColor2.jpg';
const texture3 = 'https://demo.arize.io/helmet/src/3d/Joe_Rocket_Helmet_BaseColor3.jpg';
const texture4 = 'https://demo.arize.io/helmet/src/3d/Joe_Rocket_Helmet_BaseColor4.jpg';

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

    // 1. Texture Series
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

    // Screenshot
    var screenshot = document.getElementById('screenshot');
    if (screenshot) {
        screenshot.onclick = function () {
            console.log('Screenshot');
            arize.takeScreenshot();
        }
    }
});