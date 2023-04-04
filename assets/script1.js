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
// let minus = document.querySelectorAll('.fa-minus');
// let content = document.querySelectorAll('.content');
// console.log(content)

// for(let i=0;i<minus.length;i++){
//     minus[i].addEventListener("click",()=>{
//         minusfunc(i)
//     })
// }

// function minusfunc(i){
//     if (content[i].style.display === "none"){
//         content[i].style.display='block'
//         minus[i].innerHTML=`<i class="fa-solid fa-minus"></i>`;
//     }
//     else{
//         content[i].style.display='none'
//         minus[i].innerHTML=`<i class="fa-solid fa-plus"></i>`;
//     }
// };
// fetch("assets/first.json")
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data.products)
            
//             let product = data.products.find(products => product_id === products.id)
//             console.log(product)
//             let name_search = document.getElementById('search-name');
//             name_search.innerHTML =`<h3> Search -${product.name}</h3>`
//             let product_searched = document.getElementById('searchcard');
//             product_searched.innerHTML = `<div class="search-card">
     
//         <span class="seller">${product.badge}</span>
       
//        <div class="search-image">
//            <img src=${product.image} width="170">
//        </div>
        
        
        
//        <div class="search-details">
//            <h2>${product.name}</h2>
//            <span>${product.modal}</span>
//        </div>
        
//        <div class="search-pricing">
//            <h3>${product.price}</h3>
//        </div>
       
       
//         <div class="search-buttons">
//            <button>Add to Cart</button>
//            <button>Buy</button>
//        </div>
    
             
//    </div>`
//         }) 
    
