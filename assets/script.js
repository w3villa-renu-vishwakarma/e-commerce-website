function toggleWhyBuyCategories(elem) {
    let activElem = document.getElementsByClassName("active-why-buy")[0];
    activElem.classList.remove("active-why-buy");
    elem.classList.add("active-why-buy");
    displayWhyBuyUs(elem.innerHTML.trim());
}
fetch("assets/first.json")
    .then((response) => response.json())
    .then((data) => {
        const ul = document.getElementById("home_products");
        for (let i = 0; i < data.products.length; i++) {
            const product = data.products[i];
            var li = document.createElement("li");
            li.innerHTML = `
            <div class="card" style="width: 250px;">
              <div class="badge-overlay">
                <!-- Change Badge Position, Color, Text here-->
                <span class="top-left badge ">${product.badge}</span>
              </div>
            <span
                class="position-absolute top-10 start-100 translate-middle badge1  badge-danger">
                ${product.sale}
            </span>
            
            <img src=${product.image} class="card-img-top" width="100%" height="300px">
            <hr style="color: lightgray;" class="left-right-padding">
            <div class="card-body pt-0 px-0">
                <div class=" name d-flex left-right-padding">
                    <a class="d-flex flex-column text-muted mb-1">
                    ${product.brand}                    </a>
                    <a class="d-flex flex-column text-muted mb-2">${product.model}
                    </a>
                </div>
                <strong class="pl-3" style="padding-left: 10px;">${product.name}</strong>
                <p class="left-right-padding">${product.price}  &nbsp; <s style="color: red;">${product.cutprice}</s></p>
                <div class="add left-right-padding mx-3 mt-3 d-block">
                    <input type="number" class="quantity__input" value="1">
                    
                    <button type="button" id="cart-btn">ADD TO
                            CART</button>&nbsp; 
                    <i class="fa-regular fa-heart mb-2"></i> &nbsp; &nbsp;
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
                <div class=" buy-ques left-right-padding d-flex flex-row justify-content-between p-3 mid">
                    <p class="d-flex flex-column mb-1">
                        <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>&nbsp;&nbsp;Buy Now
                    </p> &nbsp;
                    <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question"
                            style="color: red;"></i>&nbsp;&nbsp;Question
                    </p>
                </div>
            </div>
           </div>`
            ul.appendChild(li);
        }
    });
let data = [];

fetch("assets/first.json")
    .then((response) => response.json())
    .then((res) => {
        data = res.products;
    })
document.getElementById('search').addEventListener('keyup', (e) => {
    let keyword = e.target.value.toLowerCase();
    let filterdata = data.filter((item) => {
        return (
            item.name.toLowerCase().includes(keyword)
        )
    })
    display(filterdata)
    if(e.keyCode === 13)
    {
        console.log("hiih");
        let keyword = e.target.value.toLowerCase();
        let filterdata = data.filter((item) => {
            return (
                item.name.toLowerCase().includes(keyword)
            )
        })
       console.log(filterdata);
       sessionStorage.setItem("pro_id",JSON.stringify(filterdata));
        window.location.href = "search.html";

    }
})

const display = (items) => {
    document.getElementById('list').innerHTML = items.map((item) => {
        let { name, model, price, brand, image, id } = item;
        return (
            `<div class=" container-one d-flex" onclick="search(${id});sessionStorage.setItem('p_id', ${id});
            " id="filter">

                <div class="images">
                    <img src=${image} height="80px" width="100px" />
                </div>
                <div class="name">
                    <p>${name}</p>
                    <span class="price">
                        <p>${price}</p>
                    </span>
                    <br>
                    

                </div>
            </div>
                `
        )
    }).join('')
}
display(data)
// searching item
function search(product_id) {
    
    window.location.href = "search.html";
    

}

// modal 
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");

const trigger = document.querySelector(".trigger");
const trigger2 = document.querySelector(".trigger2");

const closeButton = document.querySelector(".close-button");
const closeButton2 = document.querySelector(".close-button2");


function toggleModal() {
    modal.classList.toggle("show-modal");
}
function toggleModal2() {
    modal2.classList.toggle("show-modal2");

}
trigger2.addEventListener("click", toggleModal2);
trigger.addEventListener("click", toggleModal);

closeButton.addEventListener("click", toggleModal);
closeButton2.addEventListener("click", toggleModal2);

//    searching
let rangeMin = 100;
        const range = document.querySelector(".range-selected");
        const rangeInput = document.querySelectorAll(".range-input input");
        const rangePrice = document.querySelectorAll(".range-price input");
        rangeInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minRange = parseInt(rangeInput[0].value);
                let maxRange = parseInt(rangeInput[1].value);
                if (maxRange - minRange < rangeMin) {
                    if (e.target.className === "min") {
                        rangeInput[0].value = maxRange - rangeMin;
                    } else {
                        rangeInput[1].value = minRange + rangeMin;
                    }
                } else {
                    rangePrice[0].value = minRange;
                    rangePrice[1].value = maxRange;
                    range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
                    range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
                }
            });
        });
        rangePrice.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minPrice = rangePrice[0].value;
                let maxPrice = rangePrice[1].value;
                if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
                    if (e.target.className === "min") {
                        rangeInput[0].value = minPrice;
                        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
                    } else {
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                    }
                }
            });
        });

        