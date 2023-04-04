// wishlist 
async function wishlist(event, productId) {
    window.location.href = "wishlist.html"
    event.preventDefault();
    const wresponse = await fetch("assets/first.json")
    const wdata = await wresponse.json();
    const wproduct = wdata.products.find(wproduct => wproduct.id === productId);
    let wcart = document.getElementById("wishlist-element");
    wcart.innerHTML += `<div class="card" style="width: 18rem;">
      <img src="${wproduct.image}" class="card-img-top" alt="..." height="300px" width="300px">
      <div class="card-body">
        <h5 class="card-title">${wproduct.name}</h5>
        <h4 class="card-title">${wproduct.model}</h4>
        <a href="#" class="btn btn-primary" onclick="delete_cart(this)">Delete</a>
      </div>
    </div>`
}