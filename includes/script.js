function dragOver(e) {
    e.preventDefault();
}

function startDrag(e){
    e.dataTransfer.setData("text",e.target.id);
}

function dropDrag (e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    if (e.toElement.childNodes.length <= 2) {
        e.target.appendChild(document.getElementById(data));
    }
}