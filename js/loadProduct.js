fetch("../products.json")
  .then((response) => response.json())
  .then((data) => {
    renderProducts(data.products);
  })
  .catch((error) => console.error("Error fetching products:", error));

function renderProducts(products) {
  var productListDiv = document.getElementById("product-list");
  var html = "";

  var i = 0;
  while (i < products.length) {
    var product = products[i];
    html += `
                <div class="col-lg-3 col-md-12 mb-4">
                    <div class="rounded-3 card h-100">
                        <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                        <img class="w-100" src="${
                          product.src
                        }" alt="product_img">
                    </div>
                    <div class="card-body product-card-bg">
                        <h5 class="card-title mb-3">${product.name}</h5>
                        <p>Danh mục: ${product.category}</p>
                        <h6 class="mb-3 text-danger">Giá: ${product.price} VNĐ</h6>
                        <p>${product.description}</p>
                        
                    </div>
                    <div class="d-flex justify-content-center product-card-bg">
                            <button type="button" class="btn add-cart-btn mb-3 rounded-pill fw-bold text-white">Thêm vào giỏ hàng</button>
                    </div>

                    </div>
                    
                </div>
        `;
    i++;
  }

  productListDiv.innerHTML = html;
}
