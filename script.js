// Code by Sofia Silva
function displayChanges() {
   var livedReplacer = document.getElementById("livedReplacer");
   var number4Replacer = document.getElementById("number4Replacer");
   var driveReplacer = document.getElementById("driveReplacer");
   var normalReplacer = document.getElementById("normalReplacer");
   var strangeReplacer = document.getElementById("strangeReplacer");
   var mysteriousReplacer = document.getElementById("mysteriousReplacer");
   var holdReplacer = document.getElementById("holdReplacer");
   var grunningsReplacer = document.getElementById("grunningsReplacer");
   var drillsReplacer = document.getElementById("drillsReplacer");
   var beefyReplacer = document.getElementById("beefyReplacer");
   var neckReplacer = document.getElementById("neckReplacer");
   var largeReplacer = document.getElementById("largeReplacer");
   var thinReplacer = document.getElementById("thinReplacer");
   var craningReplacer = document.getElementById("craningReplacer");
   var smallReplacer = document.getElementById("smallReplacer");
   var secretReplacer = document.getElementById("secretReplacer");

  /*  var newLived = document.getElementsByClassName("lived")[0];
  // got to use [0] beacause it is getting the ElementsByClassName as an array!
   it's better to use querySelector(".classname")*/
    var newLived = document.querySelector(".lived");
    var newNumber4 = document.querySelector(".number4");
    var newDrive = document.querySelector(".drive");
    var newNormal = document.querySelector(".normal");
    var newStrange = document.querySelector(".strange");
    var newMysterious = document.querySelector(".mysterious");
    var newHold = document.querySelector(".hold");
    var newGrunnings = document.querySelector(".grunnings");
    var newDrills = document.querySelector(".drills");
    var newBeefy = document.querySelector(".beefy");
    var newNeck = document.querySelector(".neck");
    var newLarge = document.querySelector(".large");
    var newThin = document.querySelector(".thin");
    var new2Neck = document.querySelector(".secondNeck");
    var newCraning = document.querySelector(".craning");
    var newSmall = document.querySelector(".small");
    var newSecret = document.querySelector(".secret");

    newLived.innerText = livedReplacer.value;
    newNumber4.innerText = number4Replacer.value;
    newDrive.innerText = driveReplacer.value;
    newNormal.innerText = normalReplacer.value;
    newStrange.innerText = strangeReplacer.value;
    newMysterious.innerText = mysteriousReplacer.value;
    newHold.innerText = holdReplacer.value;
    newGrunnings.innerText = grunningsReplacer.value;
    newDrills.innerText = drillsReplacer.value;
    newBeefy.innerText = beefyReplacer.value;
    newNeck.innerText = neckReplacer.value;
    newLarge.innerText = largeReplacer.value;
    newThin.innerText = thinReplacer.value;
    new2Neck.innerText = neckReplacer.value;
    newCraning.innerText = craningReplacer.value;
    newSmall.innerText = smallReplacer.value;
    newSecret.innerText = secretReplacer.value;
}
var submitButton = document.getElementById("submit");
var finalTextContainer = document.querySelector(".finalTextContainer");
submitButton.addEventListener('click', function(e){
  if (document.querySelector("input").value === "") {
    alert("Make sure to fill all the boxes");
  } else {
    var formContent = document.querySelector("#formContent");
    var seeOriginalButton = document.querySelector("#seeOriginal");
    finalTextContainer.style = 'display: block';
    formContent.style = 'display: none';
    seeOriginalButton.style ='display: block';
    e.preventDefault();
  }
});

var seeOriginalButton = document.querySelector("#seeOriginal");
var originalTextContainer = document.querySelector(".originalTextContainer");
  seeOriginalButton.addEventListener('click', function() {
  if (seeOriginalButton.className === "button unToggled") {
    originalTextContainer.style = 'display: block';
    finalTextContainer.style = 'display: none';
    seeOriginalButton.innerText = "Go Back";
    seeOriginalButton.classList.toggle("unToggled");
  } else {
    originalTextContainer.style = 'display: none';
    finalTextContainer.style = 'display: block';
    seeOriginalButton.classList.toggle("unToggled");
    seeOriginalButton.innerText = "Compare to Original";
  }
});
