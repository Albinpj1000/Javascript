//write a modular reusable code to find area, circumference and Diameter of 4 disfferent circles of given radius
// 4, 1, 2, 3

const radius = [4, 1, 2, 3];

//----area----
const Area = (radius)=>{
  return radius*radius
}

// circumference
const circum = (radius)=>{
  return 2 * Math.PI * radius;
}

// diameter
const Diameter = (radius)=>{
  return 2*radius
  }

//calculate
  const Calculate = (logic,radius)=>{
    const output = [];
    for(let i=0; i<radius.length;i++){
      output.push(logic(radius[i]))
    }
    return output
    }

console.log(Calculate(Area,radius));
console.log(Calculate(circum,radius));
console.log(Calculate(Diameter,radius));














