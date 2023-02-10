var womensData = [
    {
      image: "s8.jpg",
      name: "Airdopes 131" ,
      finalPrice: 1099,
      discount: 63,
      mrp: 2990,
      rating: 4.8,
      review: 1298,
    },
    {
      image: "a2.avif",
      name: "Rockerz 260 v1" ,
      finalPrice: 1999,
      discount: 52,
      mrp: 2490,
      rating: 4.2,
      review: 1238,
    },
    {
      image: "s2.jpg",
      name: "Wave Connect" ,
      finalPrice: 2999,
      discount: 57,
      mrp: 6999,
      rating: 4.1,
      review: 1198,
    },
    {
      image: "s8.jpg",
      name: "BassHeads 220" ,
      finalPrice: 699,
      discount: 30,
      mrp: 999,
      rating: 4.2,
      review: 1198,
    },
    {
      image: "s4.png",
      name: "103 wireless" ,
      finalPrice: 799,
      discount: 60,
      mrp: 1990,
      rating: 4.8,
      review: 1298,
      },
];

var forfrends = [
  {
    image: "a1.avif",
    name: "Rockerz 255 pro" ,
    finalPrice: 1090,
    discount: 69,
    mrp: 2990,
    rating: 4.8,
    review: 383,
  },
  {
    image: "s8.jpg",
    name: "Airdopes 131" ,
    finalPrice: 1099,
    discount: 63,
    mrp: 2990,
    rating: 4.8,
    review: 1298,
  },
  {
    image: "s5.jpg",
    name: "Immortal 121" ,
    finalPrice: 1699,
    discount: 51,
    mrp: 3499,
    rating: 4.8,
    review: 80,
  },
  {
    image: "s7.jpg",
    name: "Xtends" ,
    finalPrice: 2699,
    discount: 66,
    mrp: 7990,
    rating: 4.8,
    review: 146,
  },
  {
    image: "s11.jpg",
    name: "Deuce 330" ,
    finalPrice: 299,
    discount: 57,
    mrp: 699,
    rating: 4.6,
    review: 129,
    },
];



var forbottom = [
  {
    image: "s7.jpg",
    name: "Stone 131" ,
    finalPrice: 899,
    discount: 53,
    mrp: 1990,
    rating: 4.8,
    review: 1298,
  },
  {
    image: "s1.jpg",
    name: "Airdopes 441 pro..." ,
    finalPrice: 2199,
    discount: 63,
    mrp: 6990,
    rating: 4.1,
    review: 12,
  },
  {
    image: "s8.jpg",
    name: "Airdopes 121 v2" ,
    finalPrice: 1299,
    discount: 57,
    mrp: 2990,
    rating: 4.8,
    review: 526,
  },
  {
    image: "s10.jpg",
    name: "Airdopes 131" ,
    finalPrice: 1099,
    discount: 63,
    mrp: 2990,
    rating: 4.8,
    review: 1298,
  },
  {
    image: "s9.jpg",
    name: "Storam call" ,
    finalPrice: 1299,
    discount: 63,
    mrp: 2390,
    rating: 4.1,
    review: 128,
    },
];

    topp();
    function topp(){
       womensData.map(function(elem, index){
        var divmain = document.createElement("div")
        divmain.setAttribute("id", "main")

        var divleft = document.createElement("div")
        divleft.setAttribute("id", "left")

        var divtag = document.createElement("div")
        divtag.setAttribute("id", "tag")

        var light = document.createElement("span")
        light.innerHTML = '<i class="fa-solid fa-bolt-lightning"></i>'

        var tagcontent = document.createElement("span")
        tagcontent.textContent = " New Launch"

        divtag.append(light, tagcontent)

        var imgprod = document.createElement("img")
        imgprod.setAttribute("src", elem.image)
        imgprod.setAttribute("id","image")
    divleft.append(divtag,imgprod)
       

        var divright = document.createElement("div")
        divright.setAttribute("id", "right")

        var divname = document.createElement("div")
        divname.setAttribute("id", "name")
        divname.textContent = elem.name
    // divright.append(divname)
        var divpricebox = document.createElement("div")
        divpricebox.setAttribute("id", "priceBox")

        var divfinalprice = document.createElement("div")
        divfinalprice.setAttribute("id", "finalprice")
        divfinalprice.textContent = "Rs." +elem.finalPrice

        var divdiscount = document.createElement("div")
        divdiscount.setAttribute("id", "discount")
        divdiscount.textContent = elem.discount+ "%";

        var divmrp = document.createElement("div")
        divmrp.setAttribute("id", "mrp")
        divmrp.textContent = "Rs." +elem.mrp;

        divpricebox.append(divfinalprice, divdiscount, divmrp)
        // divright.append(divname, divpricebox)

        var divreview = document.createElement("div")
        divreview.setAttribute("id", "review")

        var p_review = document.createElement("p")
        
        var spanstar = document.createElement("span")
        spanstar.innerHTML = '<i class="fa-solid fa-star"></i>'+"  "
        spanstar.setAttribute("id", "star")

        var spanrate = document.createElement("span")
        spanrate.textContent = elem.rating +"    reviews"

        p_review.append( spanstar,spanrate)
        divreview.append(p_review)
        // divright.append(divname, divpricebox, divreview)

        var upitag = document.createElement("p")
        upitag.textContent = "Rs.15 Extra Discount on UPI"

        var divcart = document.createElement("div")
        divcart.setAttribute("id", "cartdiv")

        var cartbutton = document.createElement("button")
        cartbutton.textContent = "ADD TO CART"

        cartbutton.setAttribute("class","button");
        cartbutton.addEventListener("click",function(){
          // for(var i=0;i<boatcart.length;i++){
          //   if(boatcart[i].name == elem.name){
          //     alert("Item already added to cart")
          //     return
          //   }
          // }
          var temp = {
              img: elem.image,
              name: elem.name,
              price: elem. finalPrice,
              off:elem.discount,
              ogprice: elem.mrp,
              rating: elem.rating,
              reviews: elem.review,
              quan: 1,

          }
          
          boatcart.push(temp)
          localStorage.setItem("boat-cart",JSON.stringify(boatcart))
          updateCart()
        })
        
        


        divcart.append(cartbutton)

    //    divleft.append(divtag,imgprod)

        divright.append(divname, divpricebox, divreview, upitag, divcart)

        divmain.append(divleft, divright)
        
         
        document.getElementById("item").append(divmain)

    })
    }
    


   

mid();
function mid(){
    //event.preventDefault();
    forfrends.map(function(elem,index){
    var divmain = document.createElement("div")
    divmain.setAttribute("id", "main")

    var divleft = document.createElement("div")
    divleft.setAttribute("id", "left")

    var divtag = document.createElement("div")
    divtag.setAttribute("id", "tag")

    var light = document.createElement("span")
    light.innerHTML = '<i class="fa-solid fa-bolt-lightning"></i>'

    var tagcontent = document.createElement("span")
    tagcontent.textContent = " SUPER SAVER"

    divtag.append(light, tagcontent)

    var imgprod = document.createElement("img")
    imgprod.setAttribute("src", elem.image)
    imgprod.setAttribute("id","image")
divleft.append(divtag,imgprod)
   

    var divright = document.createElement("div")
    divright.setAttribute("id", "right")

    var divname = document.createElement("div")
    divname.setAttribute("id", "name")
    divname.textContent = elem.name
// divright.append(divname)
    var divpricebox = document.createElement("div")
    divpricebox.setAttribute("id", "priceBox")

    var divfinalprice = document.createElement("div")
    divfinalprice.setAttribute("id", "finalprice")
    divfinalprice.textContent = "Rs."+elem.finalPrice

    var divdiscount = document.createElement("div")
    divdiscount.setAttribute("id", "discount")
    divdiscount.textContent = elem.discount+"%"

    var divmrp = document.createElement("div")
    divmrp.setAttribute("id", "mrp")
    divmrp.textContent = "Rs." +elem.mrp

    divpricebox.append(divfinalprice, divdiscount, divmrp)
    // divright.append(divname, divpricebox)

    var divreview = document.createElement("div")
    divreview.setAttribute("id", "review")

    var p_review = document.createElement("p")
    
    var spanstar = document.createElement("span")
    spanstar.innerHTML = '<i class="fa-solid fa-star"></i>'+"  "
    spanstar.setAttribute("id", "star")

    var spanrate = document.createElement("span")
    spanrate.textContent = elem.rating +"    reviews"

    p_review.append( spanstar,spanrate)
    divreview.append(p_review)
    // divright.append(divname, divpricebox, divreview)

    var upitag = document.createElement("p")
    upitag.textContent = "Rs.15 Extra Discount on UPI"

    var divcart = document.createElement("div")
    divcart.setAttribute("id", "cartdiv")

    var cartbutton = document.createElement("button")
        cartbutton.textContent = "ADD TO CART"

        cartbutton.setAttribute("class","button");
        cartbutton.addEventListener("click",function(){
          // for(var i=0;i<boatcart.length;i++){
          //   if(boatcart[i].name == elem.name){
          //     alert("Item already added to cart")
          //     return
          //   }
          // }
          var temp = {
              img: elem.image,
              name: elem.name,
              price: elem. finalPrice,
              off:elem.discount,
              ogprice: elem.mrp,
              rating: elem.rating,
              reviews: elem.review,
              quan: 1,

          }
          
          boatcart.push(temp)
          localStorage.setItem("boat-cart",JSON.stringify(boatcart))
          updateCart()
        })
        
        


        divcart.append(cartbutton)


//    divleft.append(divtag,imgprod)

    divright.append(divname, divpricebox, divreview, upitag, divcart)

    divmain.append(divleft, divright)
    
     
    document.getElementById("friends").append(divmain)

})
}

bott()
function bott(){
    //event.preventDefault();
    forbottom.map(function(elem,index){
    var divmain = document.createElement("div")
    divmain.setAttribute("id", "main")

    var divleft = document.createElement("div")
    divleft.setAttribute("id", "left")

    var divtag = document.createElement("div")
    divtag.setAttribute("id", "tag")

    var light = document.createElement("span")
    light.innerHTML = '<i class="fa-solid fa-bolt-lightning"></i>'

    var tagcontent = document.createElement("span")
    tagcontent.textContent = " SUPER SAVER"

    divtag.append(light, tagcontent)

    var imgprod = document.createElement("img")
    imgprod.setAttribute("src", elem.image)
    imgprod.setAttribute("id","image")
divleft.append(divtag,imgprod)
   

    var divright = document.createElement("div")
    divright.setAttribute("id", "right")

    var divname = document.createElement("div")
    divname.setAttribute("id", "name")
    divname.textContent = elem.name
// divright.append(divname)
    var divpricebox = document.createElement("div")
    divpricebox.setAttribute("id", "priceBox")

    var divfinalprice = document.createElement("div")
    divfinalprice.setAttribute("id", "finalprice")
    divfinalprice.textContent = "Rs."+elem.finalPrice

    var divdiscount = document.createElement("div")
    divdiscount.setAttribute("id", "discount")
    divdiscount.textContent = elem.discount+"%"

    var divmrp = document.createElement("div")
    divmrp.setAttribute("id", "mrp")
    divmrp.textContent = "Rs."+elem.mrp

    divpricebox.append(divfinalprice, divdiscount, divmrp)
    // divright.append(divname, divpricebox)

    var divreview = document.createElement("div")
    divreview.setAttribute("id", "review")

    var p_review = document.createElement("p")
    
    var spanstar = document.createElement("span")
    spanstar.innerHTML = '<i class="fa-solid fa-star"></i>'+"  "
    spanstar.setAttribute("id", "star")

    var spanrate = document.createElement("span")
    spanrate.textContent = elem.rating +"    reviews"

    p_review.append( spanstar,spanrate)
    divreview.append(p_review)
    // divright.append(divname, divpricebox, divreview)

    var upitag = document.createElement("p")
    upitag.textContent = "Rs.15 Extra Discount on UPI"

    var divcart = document.createElement("div")
    divcart.setAttribute("id", "cartdiv")

    var cartbutton = document.createElement("button")
        cartbutton.textContent = "ADD TO CART"

        cartbutton.setAttribute("class","button");
        cartbutton.addEventListener("click",function(){
          // for(var i=0;i<boatcart.length;i++){
          //   if(boatcart[i].name == elem.name){
          //     alert("Item already added to cart")
          //     return
          //   }
          // }
          var temp = {
              img: elem.image,
              name: elem.name,
              price: elem. finalPrice,
              off:elem.discount,
              ogprice: elem.mrp,
              rating: elem.rating,
              reviews: elem.review,
              quan: 1,

          }
          
          boatcart.push(temp)
          localStorage.setItem("boat-cart",JSON.stringify(boatcart))
          updateCart()
        })
        
        


        divcart.append(cartbutton)

    divright.append(divname, divpricebox, divreview, upitag, divcart)

    divmain.append(divleft, divright)
    
     
    document.getElementById("bottom").append(divmain)

})
}



// dropdown categories redirects

var boatcart = JSON.parse(localStorage.getItem("boat-cart")) || []
var boatlogin = JSON.parse(localStorage.getItem("boat-login")) || []

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
      console.log(elem);
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
  div.append(pdiv1,pdiv2,a1,btn1)

  document.getElementById("cctotal").append(div)
}
// show login div
function showLogin() {
  document.querySelector(".show2").classList.toggle("show3");
}

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