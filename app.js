const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "EYEBOGLER Tshirt",
    price: 550,
    colors: [
      {
        code: "#7d9ba3",
        img: "./img/t11.png",
      },
      {
        code: "#cc9d35",
        img: "./img/t12.png",
      },
    ],
  },
  {
    id: 2,
    title: "BEAR HOUSE Shirt",
    price: 750,
    colors: [
      {
        code: "maroon",
        img: "./img/shirt2.png",
      },
      {
        code: "gray",
        img: "./img/shirt4.png",
      },
    ],
  },
  {
    id: 3,
    title: "ROADSTER Mens Jeans",
    price: 1500,
    colors: [
      {
        code: "skyblue",
        img: "./img/blue jeans 2.png",
      },
      {
        code: "black",
        img: "./img/black jeans 2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater Mens Shoes",
    price: 1200,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "TITAN Mens Watch",
    price: 1700,
    colors: [
      {
        code: "gray",
        img: "./img/titan2.png",
      },
      {
        code: "maroon",
        img: "./img/titan4.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs." + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});




const scriptURL = 'https://script.google.com/macros/s/AKfycbySd0i0qlPJZ0o_HnEa7jkm0-hQVIOVyQM1gTH8LhsMgM8HGFR1ZqQwl_f_MxPfh8wn/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML= "Thank you for subscribing !";
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset();
            })
            .catch(error => console.error('Error!', error.message))
        })
