let products = document.querySelectorAll(".product")

let checkOut = () => {
    let products = document.querySelectorAll(".product")
    let subTotal = document.querySelector("#cart-subtotal p:nth-child(2)")
    let subTax = document.querySelector("#cart-tax p:nth-child(2)")
    let ship = document.querySelector("#cart-shipping p:nth-child(2)")
    let total = document.querySelector("#cart-total p:nth-child(2)")
    let productsTotal = document.querySelectorAll(".product-line-price")
    
    let sum = 0
    productsTotal.forEach(item => sum += +item.innerText)
    subTotal.innerText = sum.toFixed(2)
    subTax.innerText = (sum * 0.18).toFixed(2)
    if(subTotal.innerText == 0 || subTotal.innerText> 299){
        
        ship.innerText = "0.00"
    }else{
        ship.innerText = "15.00"
    }
    console.log(products);
    total.innerText = (+sum *1.18 + +ship.innerText).toFixed(2)
}
checkOut()






products.forEach(product => {
    product.addEventListener("click", (e)=>{
        let quantity = product.querySelector("#product-quantity")

        let singleAmount = product.querySelector("strong")
        
        let totalSingleProduct = product.querySelector(".product-line-price")
        

        if(e.target.classList.contains("fa-plus")){
            
            quantity.innerText++
        }

        if(e.target.classList.contains("fa-minus")){
            if(quantity.innerText > 1){quantity.innerText--}
            else{product.remove()}
        }

        if(e.target.classList.contains("remove-product")){
            product.remove()
        }

        totalSingleProduct.innerText = (Number(quantity.innerText) * Number(singleAmount.innerText)).toFixed(2)


        checkOut()
    })
})


