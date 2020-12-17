const productDetails = () => {
  let x = document.getElementById("productDetails");
  let y = document.getElementById("sizeAndFit")
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none"
  } else {
    x.style.display = "none";
  }


// this part will hide everything to start out with

let elements = ["productDetails", "sizeAndFit"]
console.log(elements)
elements.forEach( element => {
  let focusElement = document.getElementById(element)
  focusElement.style.display = "none";

})

const elementSwitcher = (id) => {
  elements.forEach( element => {
    let focusElement = document.getElementById(element)
    if (id !== element) {
      focusElement.style.display = "none"
    }
    if(id === element){
      if (focusElement.style.display === "none"){
        focusElement.style.display = "block";
      } else {
        focusElement.style.display = "none";
      }
    }
  })
};

const sizeAndFit = () => {
  let x = document.getElementById("sizeAndFit");
  let y = document.getElementById("productDetails")
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
};
