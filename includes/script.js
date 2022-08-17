function dragOver(e) {
    e.preventDefault();
}

function startDrag(e){
    e.dataTransfer.setData("text",e.target.id);
}

function dropDrag (e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    var movedSlice = Number((e.target.className).slice(-1));
    console.log(movedSlice)
    var comingFrom = Number((document.getElementById(data).parentElement.className.slice(-1)));
    var sliceDifferent = movedSlice - comingFrom;
    var allowedSlice = [-1, 1, 3,-3];
    var isAllowed = allowedSlice.includes(sliceDifferent);
    console.log(isAllowed)
    if ( (isAllowed) && (document.getElementById(e.target.id).innerHTML.replace(/\s+/g, "").length == 0) ) {
        e.target.appendChild(document.getElementById(data));
    }
}