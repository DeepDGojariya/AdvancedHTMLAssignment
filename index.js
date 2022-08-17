//Collecting Form Data
var product_form = document.getElementById("product-form");
product_form.addEventListener("submit", (event) => {
    //event.preventDefault();
    var product_name = document.getElementById("product_name").value
    var unit = document.getElementById("unit").value
    var price = document.getElementById("price").value
    var desc = document.getElementById("product_desc").value
    var product_detail = {
        name:product_name,
        unit:unit,
        price:price,
        desc:desc
    }
    
    localStorage.setItem(product_name,JSON.stringify(product_detail))
    product_form.reset()//resetting input fields after submit
})



