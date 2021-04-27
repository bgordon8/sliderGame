for (let i = 25; i > 0; i--) {
  let slider = document.createElement("div");
  slider.setAttribute("class", "slider animate");
  slider.setAttribute("id", "slider" + i);
  document.getElementById("slide_game").append(slider);
}

function stopSliding(slider) {
  var sliderCurrent = document.getElementById("slider" + slider);
  var sliderAbove = document.getElementById("slider" + (slider + 1));
  if (slider === 1) {
    var sliderBelow = sliderCurrent;
  } else {
    var sliderBelow = document.getElementById("slider".concat(slider - 1));
  }
  var left = window.getComputedStyle(sliderCurrent).getPropertyValue("left");
  sliderCurrent.classList.remove("animate");
  sliderCurrent.style.left = left;
  var width = parseInt(
    window.getComputedStyle(sliderCurrent).getPropertyValue("width")
  );
  var leftBelow = parseInt(
    window.getComputedStyle(sliderBelow).getPropertyValue("left")
  );
  var left = parseInt(left);
  var difference = left - leftBelow;
  var absDifference = Math.abs(difference);
  if (difference > 0) {
    left = left + absDifference;
  } else {
    left = left - difference;
    sliderCurrent.style.left = left.toString().concat("px");
  }
  var offset = (width - absDifference).toString().concat("px");
  sliderCurrent.style.width = offset;
  sliderAbove.style.width = offset;
  sliderAbove.style.visibilty = "visible";
  var onclick = "stopSliding(" + (slider + 1) + ")";
  document.getElementById("btn").setAttribute("onclick", onclick);
}
