const inputRange = document.querySelector(".input-range");
const views = document.querySelector(".main-text span");
const price = document.querySelectorAll(".price-amt span");
const checkboxInput = document.querySelector(".billing input");

let price_10k = 8;
let price_50k = 12;
let price_100k = 16;
let price_500k = 24;
let price_1M = 36;

const normalPrice = () => {

    if(inputRange.value == 0) {
        views.textContent = "10k";
       price.forEach((pr) => {
        pr.textContent = `$${price_10k}.00`
       })
    }

    else if(inputRange.value == 25) {
        views.textContent = "50k";
        price.forEach((pr) => {
         pr.textContent = `$${price_50k}.00`
        })
    }

    else if(inputRange.value == 50) {
        views.textContent = "100k";
        price.forEach((pr) => {
         pr.textContent = `$${price_100k}.00`
        })
    }

    else if(inputRange.value == 75) {
        views.textContent = "500k";
        price.forEach((pr) => {
         pr.textContent = `$${price_500k}.00`
        })
    }

    else if(inputRange.value == 100) {
        views.textContent = "1M";
        price.forEach((pr) => {
         pr.textContent = `$${price_1M}.00`
        })
    }
}


const discountedPrice = () => {

    if(inputRange.value == 0) {
        views.textContent = "10k";
       price.forEach((pr) => {
        pr.textContent = `$${price_10k - (price_10k * 0.25)}.00`
       })
    }

    else if(inputRange.value == 25) {
        views.textContent = "50k";
        price.forEach((pr) => {
         pr.textContent = `$${price_50k - (price_50k * 0.25)}.00`
        })
    }

    else if(inputRange.value == 50) {
        views.textContent = "100k";
        price.forEach((pr) => {
         pr.textContent = `$${price_100k - (price_100k * 0.25)}.00`
        })
    }

    else if(inputRange.value == 75) {
        views.textContent = "500k";
        price.forEach((pr) => {
         pr.textContent = `$${price_500k - (price_500k * 0.25)}.00`
        })
    }

    else if(inputRange.value == 100) {
        views.textContent = "1M";
        price.forEach((pr) => {
         pr.textContent = `$${price_1M - (price_1M * 0.25)}.00`
        })
    }
    
}
 

inputRange.addEventListener("input", () => {
    normalPrice();
});

checkboxInput.addEventListener("change", () => {
    if (checkboxInput.checked) {
        inputRange.addEventListener("input", () => {
            discountedPrice();
        });
    } 

    else {
        inputRange.addEventListener("input", () => {
            normalPrice();
        });
    }

});


