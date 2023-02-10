//  this is for header 
  
  
  
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
      p.style.marginTop = "200px"
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
    
    
    
    
    
    // sceript part for login
    const loginForm = document.querySelector('.inputs');
    const loginEmailInput = loginForm.querySelectorAll('input')[0];
    const loginPasswordInput = loginForm.querySelectorAll('input')[1];
    const loginButton = loginForm.querySelector('button');
    
    loginButton.addEventListener('click', function() {
      const email = loginEmailInput.value;
      const password = loginPasswordInput.value;
      
      if (email.length === 0 || password.length === 0) {
        alert('Both email and password fields are required.');
        return;
      }
      
      const user = JSON.parse(localStorage.getItem(email));
      if (!user) {
        alert('The email address is not registered.');
        return;
      }
      
      if (user.password !== password) {
        alert('The password is incorrect.');
        return;
      }
      
      alert('You are logged in!');
      window.location.href = 'index.html';
    });
    