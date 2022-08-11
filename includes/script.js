function dragOver(e) {
    e.preventDefault();
}

function startDrag(e){
    console.log(e.target.id)
    e.dataTransfer.setData("text",e.target.id);
}

function dropDrag (e) {
    // e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}