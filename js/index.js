const product = [
  {
    id: 1,
    name: "Nike Yoga Lower",
    price: 3499.0,
    img: "./img/men1.jpg",
    cata: "men",
  },
  {
    id: 2,
    name: "Nike black Lower",
    price: 4999.0,
    img: "./img/men2.jpg",
    cata: "men",
  },
  {
    id: 3,
    name: "Nike Tshirt & Lower",
    price: 7999.0,
    img: "./img/men3.jpg",
    cata: "men",
  },
  {
    id: 4,
    name: "Nike Blue Tshirt",
    price: 999.0,
    img: "./img/women1.jpg",
    cata: "women",
  },
  {
    id: 5,
    name: "Nike black Jogger",
    price: 3599.0,
    img: "./img/women2.jpg",
    cata: "women",
  },
  {
    id: 6,
    name: "Nike White Shoes",
    price: 8999.0,
    img: "./img/Women3.jpg",
    cata: "women",
  },
  {
    id: 7,
    name: "Nike GYM Shoes",
    price: 6599.0,
    img: "./img/shoes.jpg",
    cata: "shoes",
  },
  {
    id: 8,
    name: "Nike Sport Shoes",
    price: 7999.0,
    img: "./img/shoes1.jpg",
    cata: "shoes",
  },
  {
    id: 9,
    name: "Nike Running Shoes",
    price: 4599.0,
    img: "./img/shoes3.jpg",
    cata: "shoes",
  },
];

let men_div = "";
let women_div = "";
let shoes_div = "";
for (let i = 0; i < product.length; i++) {
  if (product[i].cata == "men") {
    men_div += `<div class="col-4">
    <img src=${product[i].img} width="100%" alt="" /><br /><br />
        <h4>${product[i].name}</h4>
        <h5><span>&#x20B9; </span>${product[i].price}</h5>
        <button type="button" class="btn btn-dark rounded-pill">Buy Now</button>
    </div>`;
  } else if (product[i].cata == "women") {
    women_div += `<div class="col-4">
    <img src=${product[i].img} width="100%" alt="" /><br /><br />
    <h4>${product[i].name}</h4>
    <h5><span>&#x20B9; </span>${product[i].price}</h5>
    <button type="button" class="btn btn-dark rounded-pill">Buy Now</button>
  </div>`;
  } else if (product[i].cata == "shoes") {
    shoes_div += `<div class="col-4">
    <img src=${product[i].img} width="100%" alt="" /><br /><br />
    <h4>${product[i].name}</h4>
    <h5><span>&#x20B9; </span>${product[i].price}</h5>
    <button type="button" class="btn btn-dark rounded-pill">Buy Now</button>
  </div>`;
  }
}
document.getElementById("men_product").innerHTML = men_div;
document.getElementById("women_product").innerHTML = women_div;
document.getElementById("shoes_product").innerHTML = shoes_div;

function searchData() {
  let data = document.getElementById("search_data").value;
  let Show_div = "";
  //   location.replace("./search.html");
  for (let i = 0; i < product.length; i++) {
    if (data == "") {
      location.replace("./index.html");
    } else if (product[i].name.toLowerCase().includes(data)) {
      Show_div += `<div class="col-4">
    <img src=${product[i].img} width="100%" alt="" /><br /><br />
    <h4>${product[i].name}</h4>
    <h5><span>&#x20B9; </span>${product[i].price}</h5>
    <button type="button" class="btn btn-dark rounded-pill">Buy Now</button>
  </div>`;
    }
  }
  document.getElementById("search_product").innerHTML = Show_div;
}
