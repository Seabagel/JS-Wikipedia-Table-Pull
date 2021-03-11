var rows = document.getElementsByTagName("table")[1].rows;
var values = [];
var tableLength = rows[0].cells.length;

function run(collumn) {
    for (let i = 1; i < rows.length; i++) {
        var coll = rows[i];
        var cell = coll.cells[collumn];
        values += `"${cell.innerText}",\n`;
    }
}

for (let j = 1; j < tableLength; j++) {
    run(j);
}
