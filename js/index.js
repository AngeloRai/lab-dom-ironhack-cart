// ITERATION 1


function updateSubtotal(product) {
  
  let price = document.querySelectorAll(".price span").innerText;
  let quantity = document.querySelectorAll(".quantity input").value;
    
  let subtotalPrice = parseFloat(price) * parseInt(quantity);
  
  document.querySelector(".subtotal span").innerText = subtotalPrice;
    
  return subtotalPrice;
}

function calculateAll() {
  
  // ITERATION 2
  const total = 0
  const productList = document.querySelectorAll(".price span")
  // const multiProduct = productList.first;
  
  for (let i = 0; i < productList.length; i++) {
    let subTotal = updateSubtotal(productList[i]);
    total += subTotal
  }
  // ITERATION 3
  document.querySelector("#total-value span").innerText = total;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
