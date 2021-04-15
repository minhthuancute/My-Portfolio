
$(function () {

   const productDetail = localStorage.getItem("productDetail")

   const product = JSON.parse(productDetail);
   renderProduct(product, ".container");

});

// ultimate

function renderProduct(product, selector) {

   $(
      `<a href="../detail.html">
            <div class="product">
               <p>${product.name}</p>
               <img src="https://picsum.photos/seed/picsum/200/300" alt="">
            </div>
         </a>`
   ).appendTo(selector)

}