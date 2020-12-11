const productDetails = () => {
  let x = document.getElementById("productDetails");
  let y = document.getElementById("sizeAndFit")
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none"
  } else {
    x.style.display = "none";
  }
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