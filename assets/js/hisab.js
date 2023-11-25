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