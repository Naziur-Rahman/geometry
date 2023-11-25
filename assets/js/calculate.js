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
}

// Reuse able function  ----> reduce duplicate code { Parallelogram }

function CalculateParallelogramArea(){
    const base = getInputValue('Parallelogram-b');
    console.log(base);

    const hight = getInputValue('Parallelogram-h');
    console.log(hight);

    const area = base * hight;
    setElementInnerText('Parallelogram-area',area);
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
    const area =   A * B * 3.1416 ;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellips-area', areaTwoDecimal);
}
// Rhombus function 
function CalculateRhombusArea(){
    const mejarment1 = getInputValue('Rhombus-d1');
    const mejarment2 = getInputValue('Rhombus-d2');
    const area = 0.5 * mejarment1 * mejarment2;
    setElementInnerText('Rhombus-area',area);
} 

// 
function CalculatePentagonArea(){
    const mejarment1 = getInputValue('Pentagon-b');
    const mejarment2 = getInputValue('Pentagon-h');
    const area = 0.5 * mejarment1 * mejarment2;
    setElementInnerText('Pentagon-area',area);
}