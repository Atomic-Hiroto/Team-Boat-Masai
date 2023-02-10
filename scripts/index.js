// navigation function
function showMain(){
  window.location.href = "index.html";
}

// drop down for categories
function showDiv() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// automatic slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500); // Change image every 2.5 seconds
}

function plusSlides(n) {
  console.log("here")
  showSlides(slideIndex += n);
}

// items for best boat

var boatcart = JSON.parse(localStorage.getItem("boat-cart")) || []
var boatlogin = JSON.parse(localStorage.getItem("boat-login")) || []


// best for boat objects
// would come from backend normally
var data = [ 
  {
    save:"SUPER SAVER",
    img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/grey_300x.png?v=1668599490",
    sold:"77% sold",
    name:"Airdopes 141",
    price:"1,099",
    off:"76% off",
    ogprice:"4,490",
    rating:"4.8",
    reviews:"599",
  },
  {
    save:"SUPER SAVER",
    img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_3_300x.png?v=1655719698",
    sold:"81% sold",
    name:"Rockerz 245 V2",
    price:"1,099",
    off:"63% off",
    ogprice:"2,990",
    rating:"4.8",
    reviews:"206",
  },
  {
    save:"SUPER SAVER",
    img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/wave-call--4_300x.png?v=1658295340",
    sold:"75% sold",
    name:"Wave Call",
    price:"1,799",
    off:"75% off",
    ogprice:"7,990",
    rating:"4.9",
    reviews:"41",
  },
  {
    save:"300 OFF ON FLAT300",
    img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/35ca6350-d6f3-4bc2-a742-01b2c88d80c4_300x.png?v=1673005509",
    sold:"77% sold",
    name:"Rockerz 255 Pro+",
    price:"1,299",
    off:"67% off",
    ogprice:"3,990",
    rating:"4.8",
    reviews:"401",
  },
  {
    save:"400 OFF ON BIG400",
    img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_357b6c8e-1332-4864-bf5c-b83ca9caf4bc_300x.png?v=1641980343",
    sold:"75% sold",
    name:"Airdopes 181",
    price:"1,599",
    off:"47% off",
    ogprice:"2,990",
    rating:"4.9",
    reviews:"36",
  }
]

displayBest(data)

function displayBest(l){
  document.getElementById("bestBoat").textContent = ""
  l.map(function(elem,idx){
    var div = document.createElement("div")

    var span = document.createElement("span")
    if(elem.save.includes("SUPER")){
      span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
      <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"></path>
    </svg>` +elem.save
    span.style.backgroundColor = "#fcc50b"
    }else{
      span.textContent = "₹" + elem.save
      span.style.backgroundColor = "#28a745"
      span.style.color = "white"
    }
    
    div.append(span)

    var img = document.createElement("img")
    img.setAttribute("src",elem.img)
    div.append(img)

    var dive = document.createElement("div")
    var el = elem.sold.split(" ").join("<br>")
    dive.innerHTML = el
    div.append(dive)

    var innerdiv = document.createElement("div")
    var idiv1 = document.createElement("div")

    var p1 = document.createElement("p")
    p1.textContent = elem.name
    var p2 = document.createElement("p")
    p2.textContent = "₹"+elem.price
    var p3 = document.createElement("p")
    p3.textContent = elem.off
    var p4 = document.createElement("p")
    p4.textContent = elem.ogprice
    idiv1.append(p2,p3,p4)
    p4.style.textDecoration = "line-through"
    idiv2 = document.createElement("div")
    var p5 = document.createElement("p")
    p5.innerHTML = "<span style='color:#05A143'>★</span>"+elem.rating
    var p6 = document.createElement("p")
    p6.textContent = elem.reviews + " reviews"
    idiv2.append(p5,p6)
    var p7 = document.createElement("p")
    p7.textContent = "₹15 Extra Discount on UPI"
    
    btn = document.createElement("button")
    btn.textContent = "ADD TO CART"
    btn.addEventListener("click",function(){
      for(var i=0;i<boatcart.length;i++){
        if(boatcart[i].name == elem.name){
          alert("Item already added to cart")
          return
        }
      }
      elem.quan = 1
      boatcart.push(elem)
      localStorage.setItem("boat-cart",JSON.stringify(boatcart))
      updateCart()
    })

    innerdiv.append(p1,idiv1,idiv2,p7,btn)
    div.append(innerdiv)
    document.getElementById("bestBoat").append(div);
  })
}

// show login div
function showLogin() {
  document.querySelector(".show2").classList.toggle("show3");
}



/* show cart sliding div */
let openPanelButton = document.getElementById("open-panel");
let closePanelButton = document.getElementById("close-panel");
let cartPanel = document.querySelector(".cart-panel");

openPanelButton.onclick = () => {
    cartPanel.classList.add("open");
    openPanelButton.classList.add("hide");
    document.querySelector("nav").style.position = "static"
    document.querySelector(".fa-magnifying-glass").style.display = "none"
    updateCart()
}

closePanelButton.onclick = () => {
    cartPanel.classList.remove("open");
    openPanelButton.classList.remove("hide");
    document.querySelector("nav").style.position = "sticky"
    document.querySelector(".fa-magnifying-glass").style.display = "block"
}

function updateCart(){
  document.getElementById("cc").textContent = ""
  if(boatcart.length==0){
    var p = document.createElement("p")
    p.textContent = "Your cart is empty"
    p.style.textAlign = "center"
    p.style.marginTop = "250px"
    var btn = document.createElement("button")
    btn.textContent = "START SHOPPING"
    btn.style.backgroundColor = "#FF0000"
    btn.style.border = "0"
    btn.style.width = "40%"
    btn.style.margin = "auto"
    btn.style.marginTop = "20px"
    btn.style.borderRadius = "8px"
    btn.style.padding = "10px 35px"
    btn.style.color = "white"
    btn.style.fontWeight = "600"
    document.getElementById("cc").append(p,btn)
  }else{
    boatcart.map(function(elem,idx){
      document.getElementById("cc").style.justifyContent = "flex-start"
      // ITEM CONTAINER
      var icontainer = document.createElement("div")
      icontainer.style.borderBottom = "1px solid lightgray"
      icontainer.style.display = "flex"
      icontainer.classList.add("icontain")
      var img1 = document.createElement("img")
      img1.setAttribute("src",elem.img)
      img1.style.width = "92px"
      var idiv1 = document.createElement("div")
      var p1 = document.createElement("p")
      p1.textContent = elem.name
      var p2 = document.createElement("p")
      p2.innerHTML = "₹"+elem.price + " <span>" +"₹"+ elem.ogprice + "</span>"
      var p3 = document.createElement("p")
      var span1 = document.createElement("span")
      span1.textContent = "-"
      span1.addEventListener("click",function(){
        if(elem.quan>1){
          elem.quan--
          localStorage.setItem("boat-cart",JSON.stringify(boatcart))
          updateCart()
        }
      })
      var span2 = document.createElement("span")
      span2.textContent = elem.quan
      var span3 = document.createElement("span")
      span3.textContent = "+"
      span3.addEventListener("click",function(){
          elem.quan++
          localStorage.setItem("boat-cart",JSON.stringify(boatcart))
          updateCart()
      })
      p3.append(span1,span2,span3)
      idiv1.append(p1,p2,p3)
      var img2 = document.createElement("img")
      img2.setAttribute("src","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_1_93145e45-8530-46aa-9fb8-6768cc3d80d2.png?v=1633783107")
      img2.style.width = "16px"
      img2.style.height = "16px"
      img2.addEventListener("click",function(){
        boatcart = boatcart.filter(function(e,i){
          return idx!=i
        })
        localStorage.setItem("boat-cart",JSON.stringify(boatcart)) 
        updateCart()
      })
      icontainer.append(img1,idiv1,img2)

      document.getElementById("cc").append(icontainer)
    })
  }
  document.getElementById("itemcount").textContent = boatcart.length

  // PRICE AND TOTAL DIV
  document.getElementById("cctotal").textContent = ""
  var div = document.createElement("div")

  var pdiv1 = document.createElement("div")
  var pp1 = document.createElement("p")
  pp1.textContent = "Shipping:"
  var pp2 = document.createElement("p")
  pp2.textContent = "FREE"
  var pdiv2 = document.createElement("div")
  var pp3 = document.createElement("p")
  pp3.textContent = "Total:"
  var pp4 = document.createElement("p")
  var sum = boatcart.reduce(function(acc,ce){
    var total = parseInt((ce.price).split(",").join("")) * parseInt(ce.quan)
    return acc + total
  },0)
  pp4.textContent =  "₹" + sum
  console.log(sum)
  pdiv1.append(pp1,pp2)
  pdiv2.append(pp3,pp4)

  var a1 = document.createElement("a")
  a1.textContent = "Continue Shopping >"
  a1.setAttribute("href","index.html")
  var btn1 = document.createElement("button")
  btn1.textContent = "PLACE ORDER"
  btn1.addEventListener("click",function(){
    window.location.href = "payment.html";
  })
  div.append(pdiv1,pdiv2,a1,btn1)

  document.getElementById("cctotal").append(div)
}

// dropdown categories redirects

function goToWL(){
  window.location.href = "https://www.boat-lifestyle.com/collections/true-wireless-earbuds";
}

function goToWH(){
  window.location.href = "https://www.boat-lifestyle.com/collections/bluetooth-wireless-headphones"
}

function goToW(){
  window.location.href = "https://www.boat-lifestyle.com/collections/smart-watches"
}

function goToBW(){
  window.location.href = "https://www.boat-lifestyle.com/collections/wired-headphones"
}

function goToSS(){
  window.location.href = "https://www.boat-lifestyle.com/collections/bluetooth-speakers"
}

function goToAH(){
  window.location.href = "https://www.boat-lifestyle.com/collections/home-audio"
}

function goToMA(){
  window.location.href = "https://www.boat-lifestyle.com/collections/mobile-accessories"
}

function goToW(){
  window.location.href = "https://www.boat-lifestyle.com/collections/trebel-for-women"
}

function goToLE(){
  window.location.href = "https://www.boat-lifestyle.com/collections/limited-edition"
}

function goToT(){
  window.location.href = "https://www.boat-lifestyle.com/collections/misfit-by-boat"
}

function goToIG(){
  window.location.href = "https://www.boat-lifestyle.com/collections/immortal-gaming"
}