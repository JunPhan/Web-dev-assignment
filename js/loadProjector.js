fetch("../projector.json")
  .then((response) => response.json())
  .then((data) => {
    renderProjectors(data.projectors);
  })
  .catch((error) => console.error("Error fetching projectors:", error));

function renderProjectors(projectors) {
  var projectorListDiv = document.getElementById("projector-list");
  var html = "";

  var i = 0;
  while (i < projectors.length) {
    var projector = projectors[i];
    html += `
                <div class="col-lg-3 col-md-12 mb-4">
                    <div class="rounded-3 card h-100">
                        <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                        <img class="w-100" src="${
                          projector.src
                        }" alt="projector_img">
                    </div>
                    <div class="card-body projector-card-bg">
                        <h5 class="card-title mb-3">${projector.name}</h5>
                        <p>Danh mục: ${projector.category}</p>
                        <h6 class="mb-3 text-danger">Giá: ${projector.price} VNĐ</h6>
                        <p>${projector.description}</p>
                        
                    </div>
                    <div class="d-flex justify-content-center projector-card-bg">
                    <a href="/Product detail/Product01.html"><button type="button" class="btn add-cart-btn mb-3 rounded-pill fw-bold text-white " >Thêm vào giỏ hàng</button></a>
                    </div>

                    </div>
                    
                </div>
        `;
    i++;
  }

  projectorListDiv.innerHTML = html;
}
