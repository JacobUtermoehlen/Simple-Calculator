
function appendOperation(operation) {
    document.getElementById("calcDisplay").innerHTML += operation
}

function calcResult() {
    let container = document.getElementById("calcDisplay");
    let result = eval(container.innerHTML);
    container.innerHTML = result;
}