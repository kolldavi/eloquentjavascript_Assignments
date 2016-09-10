//Build a table
  
  var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

if (typeof module != "undefined" && module.exports)
  module.exports = MOUNTAINS;


  function buildTable(data) {
    var table =  document.createElement("table");
    var fields = Object.keys(data[0]);
    var tabelRow = document.createElement("tr");
    fields.forEach(function(field){
    var tableHead = document.createElement("th");
    tableHead.textContent = field;
    tabelRow.appendChild(tableHead);
    });
    table.appendChild(tabelRow);
    
    data.forEach(function(obj){
    var row  = document.createElement("tr");
      fields.forEach(function(field){
        var cell  = document.createElement('td');
         cell.textContent  = obj[field];
        if(typeof obj[field] == "number")
           cell.style.textAlign = "right";
         row.appendChild(cell);
      });
      table.appendChild(row);
      });
        return table;

  }


  document.body.appendChild(buildTable(MOUNTAINS));


  // Elements by tag name

  function byTagName(node, tagName) {
      var found = [];
    tagName = tagName.toUpperCase();

    function explore(node) {
      for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];
        if (child.nodeType == document.ELEMENT_NODE) {
          if (child.nodeName == tagName)
            found.push(child);
          explore(child);
        }
      }
    }

    explore(node);
    return found;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2


//The cat’s hat
/*
  var cat = document.querySelector("#cat");
  var hat = document.querySelector("#hat");
  var angle = 0, lastTime = null;
  function animate(time) {
    if (lastTime != null)
      angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 300) + "px";
    hat.style.top = (Math.sin(angle) * -20) + "px";
    hat.style.left = (Math.cos(angle) * -300) + "px";
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  */
  