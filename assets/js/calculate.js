function calculateTriangleArea(){
    // get triangle base value
    const bestField = document.getElementById('triangle-base');
    const baseValueText = bestField.value;
    const base  = parseFloat(baseValueText)
    console.log(base);
    // get triangle height value
    const heightField= document.getElementById('triangle-height');
    const heightValueText= heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);
    const area = 0.5 * base * height;
    console.log(area);
    const areaSpan = document.getElementById('Triangle-area');
    areaSpan.innerText = area;
    
    addToCalculationEntry('Triangle', area);
}
// Rectangle Fucntion
function CalculateRectangleArea(){
const WidthFiled = document.getElementById('rectangle-W');
const WidthValueText = WidthFiled.value;
const width = parseFloat(WidthValueText);
console.log(width);

const LengthField = document.getElementById('rectangle-L');
const LengthValueText = LengthField.value;
const length = parseFloat(LengthValueText);
console.log(length);

const rArea = width * length
const rectangleArea = document.getElementById('rectangle-area');
rectangleArea.innerText = rArea;

addToCalculationEntry('Rectangle', rArea);
}

// Reuse able function  ----> reduce duplicate code { Parallelogram }

function CalculateParallelogramArea(){
    const base = getInputValue('Parallelogram-b');
    const hight = getInputValue('Parallelogram-h');
    if(isNaN(base)||isNaN(hight)){
        alert('Place insert Number ')
    }
    const area = base * hight;
    setElementInnerText('Parallelogram-area',area);

    addToCalculationEntry('Parallelogram', area);
}
// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value; 
}
// reuseable set span, p, div etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
// Ellipse function
function calculateEllipseArea(){
    const A = getInputValue('ellips-frist-radius');
    const B = getInputValue('ellips-second-radius');
    if (isNaN(A) || isNaN(B)){
        alert('Place insert Number');
        return;
    }
    const area =   A * B * 3.1416 ;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellips-area', areaTwoDecimal);

    addToCalculationEntry('Ellipse', areaTwoDecimal);
}
// Rhombus function 
function CalculateRhombusArea(){
    const mejarment1 = getInputValue('Rhombus-d1');
    const mejarment2 = getInputValue('Rhombus-d2');
    if (isNaN(mejarment1) || isNaN(mejarment2)){
        alert('Please insert Number')
        return;
    }
    const area = 0.5 * mejarment1 * mejarment2;
    setElementInnerText('Rhombus-area',area);
    addToCalculationEntry('Rhombus', area);
} 

// 
function CalculatePentagonArea(){
    const mejarment1 = getInputValue('Pentagon-b');
    const mejarment2 = getInputValue('Pentagon-h');
    if(isNaN(mejarment1) || isNaN(mejarment2)){
        alert('Please insert Number');
        return;
    }
    const area = 0.5 * mejarment1 * mejarment2;
    setElementInnerText('Pentagon-area',area);

    // add to calculate area
    addToCalculationEntry('pentagon', area);
}
// Add to calculation entry


function addToCalculationEntry(areaType, area){
    
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count+1}.${areaType} ${area} cm <sup>2</sup> <button class='btn btn-sm btn-success'>Convert</button>`;
    calculationEntry.appendChild(p);
}