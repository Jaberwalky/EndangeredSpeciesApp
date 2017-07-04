window.addEventListener('load', function(){




  var height = document.body.scrollHeight
  var main = document.getElementById("main-div");
  main.style.height = height + "px";

  var slider = document.getElementById("rangeSlider")

  slider.addEventListener('input', function(){
    getAllJson(renderAll.bind(this));
  })

  var renderAll = function(data){
    document.getElementById("box-container").innerHTML = "";
    data.forEach(function(animal){
      renderContainer(animal, this.value)
    }.bind(this));
  }



  getAllJson(renderAll);
  // console.log(document.getElementsByClassName("circle-div"))

});



var getAllJson = function(callback){

  var request = new XMLHttpRequest();
  var url = "http://localhost:3005/species/all";

  request.open("GET", url);
  request.send();

  request.addEventListener('load', function() {
    if (request.status === 200) {
      var jsonString = request.responseText;
      var data = JSON.parse(jsonString);
      callback(data);
    }
  });
}

var renderContainer = function(animal, year){

  var div = document.createElement("div");
  div.className = "circle-div";
  div.id = animal.id;
  var outer = document.getElementById("box-container")

  var head = document.createElement("p");
  head.innerText = animal.name;
  div.appendChild(head)

  div.appendChild(renderCircle(animal, year));

  div.addEventListener('click', function(event){
    console.log("Animal within click event : ", animal)
    renderSidebar(animal);
    side.scrollTop(0)
  })
  outer.appendChild(div);
}

var renderSidebar = function(animal){
  var side = document.getElementById("side-content");
  side.innerHTML = "";
  var header = document.createElement("h2");
  header.innerText = animal.name;
  side.appendChild(header);
  var image = document.createElement("img");
  image.src = "images/" + animal.id + ".jpg"
  side.appendChild(image)
  var main = document.createElement("p")
  main.innerHTML = animal.narrative.habitat;
  side.appendChild(main)
  // TODO: complete data
}

var renderCircle = function(animal, year){
  var bgCircle = document.createElement("div");
  bgCircle.className = "bg-circle";
  var inner = renderInnerCircle(animal, year)
  bgCircle.appendChild(inner);
  return bgCircle;
}

var renderInnerCircle = function(animal, year){
  if (!year){ year = 1999}
  var currentStatus = getCurrentStatus(animal, year);
  var innerCircle = document.createElement("div");

  var newClass;
  if (currentStatus === "Vulnerable"){
    newClass = "vulnerable"
  } else {
    newClass = "endangered"
  }

  innerCircle.className = "inner-circle " + newClass;
  return innerCircle;
}

var getCurrentStatus = function(animal, currentYear){
  var assessmentArray = animal.result
  var arrayLength = assessmentArray.length

  var index = 0;
  while ( index < (arrayLength-1) && (Number(assessmentArray[index].year) > Number(currentYear))){
    index++;
  }

  var currentStatus = assessmentArray[index].category;
  return currentStatus;

}
