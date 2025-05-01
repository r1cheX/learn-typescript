function categorizeBox(length: number, width: number, height: number, mass: number): string {
    const limitAnyDimensionBox = Math.pow(10, 4);
    const limitVolume = Math.pow(10, 9);
    const limitMass = 100;
    const volumeBox = length * width * height;

    const isBulky = isBoxBulky(length, limitAnyDimensionBox, width, height, mass, volumeBox, limitVolume);
    const isHeavy = mass >= limitMass
   
    if(isBulky && isHeavy){
        return "Both";
    }

    if (!isBulky && !isHeavy){
        return "Neither";
    }

    if(isBulky && !isHeavy){
        return "Bulky";
    }

    if(isHeavy && !isBulky){
        return "Heavy";
    }

    return "";
};

function isBoxBulky(length: number, limitAnyDimensionBox: number, width: number, height: number, mass: number, volumeBox: number, limitVolume: number) {
    return length >= limitAnyDimensionBox || width >= limitAnyDimensionBox
        || height >= limitAnyDimensionBox || mass >= limitAnyDimensionBox
        || volumeBox >= limitVolume;
}


const lengthp = 0;
const width = 0;
const height = 0;
const mass = 0;

console.log('Categorize Box-->', categorizeBox(lengthp, width, height, mass)); // Heavy


