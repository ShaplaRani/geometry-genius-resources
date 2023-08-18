function calculateTriangleArea(){
    //get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValue = baseField.value ;
    const base = parseFloat(baseValue);
    baseField.value = '';

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValue =  heightField.value;
    const height = parseFloat(heightValue);
    heightField.value = '';
    //  calculate area
    const area = 0.5 * base * height;
    // show triangle area
    const areaSpan =document.getElementById('triangle-area');
    areaSpan.innerText = area;
}


function calculateRectangleArea(){
    const  width = getInputValue('rectangle-width');

    const length = getInputValue('rectangle-length');

    const area = width * length;
    setElementInnerText('rectangle-area', area);
}

function calculateParallelogramArea() {


    const  base = getInputValue('parallelogram-base');

    const height = getInputValue('parallelogram-height');

    const area = base * height;
    setElementInnerText('parallelogram-area', area);

}

function calculateEllipseArea(){
    const majorRadius =  getInputValue('Ellipse-major-radius');

    const minorRadius =  getInputValue('Ellipse-minor-radius');

    const area = 3.14 * majorRadius * minorRadius
    setElementInnerText('Ellipse-area' , area)

}

// reusable function
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);

    inputField.value = '';
    return inputFieldValue;


}

function setElementInnerText(elementId , area){
   const element = document.getElementById(elementId);
   element.innerText = area;
}