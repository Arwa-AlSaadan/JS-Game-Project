

let blackRock = document.getElementById("black-rock")
let sunRock = document.getElementById("sun-rock")
let lizard = document.getElementById("lizard")
let rockMessage = document.getElementById("rockMessage")

let m = document.getElementById("p")
let m1 = document.getElementById("p1")
let m2 = document.getElementById("p2")

let rockStick = document.getElementById("rock-stick")
let rockPalm = document.getElementById("rock-palm")
let redRock = document.getElementById("red-rock")
let treasureImg = document.getElementById("treasure-img")

let stickRockFlag= "false"
let sunRockFlag= "false"
let rockPalmFlag = "false"
let redRockFlag = "false"


blackRock.addEventListener("click",()=>{
    blackRock.style.cssText=" rotate: -15deg;";
    rockMessage.style.display="block";
    lizard.style.display="block";
    m.innerText="";
    m1.innerText="ابنشدك عن عذرا جماد وعوّدت حيوان وعادت مثل ما كانت جماد وفاز راعيها وهذي حكمة الفرد الحكيم منزّل القرآن وقوم كذبت فيها وقوم صدقت فيها";
    m2.innerText="واصل مشوارك وارفع الحصاة اللي عند جوابك";

    stickRockFlag= "true";
})


rockStick.addEventListener("click",()=>{
    if(stickRockFlag == "true"){
    rockStick.style.cssText=" rotate: -15deg;";
    rockMessage.style.display="block";
    m.innerText="الله علييييك";
    m1.innerText="الحين خل الشمس وراك ورح لأقرب حصاة على يسارك ";
    m2.innerText="";

    sunRockFlag = "true";

    } else  {
        rockMessage.style.display="block";
        m1.innerText="حبّه حبّه وراك مستعجل ياوليدي";
        m2.innerText="مافيه شي يجي بالساهل";
    }
})


sunRock.addEventListener("click",()=>{
  
    if (sunRockFlag == "true"){
    sunRock.style.cssText="  rotate: -15deg;";
    rockMessage.style.display="block";
    m.innerText="كفووو";
    m1.innerText="ابنشدك عن رمز للكرم ويوجد في شعار مملكتنا الحبيبة";
    m2.innerText="واصل مشوارك وارفع الحصاة اللي عند جوابك";

    rockPalmFlag = "true";

    }else{
        rockMessage.style.display="block";
        m1.innerText="حبّه حبّه وراك مستعجل ياوليدي";
        m2.innerText="مافيه شي يجي بالساهل";
    }
})


rockPalm.addEventListener("click",()=>{
    if (rockPalmFlag == "true"){
    rockPalm.style.cssText="  rotate: -15deg;";
    rockMessage.style.display="block";
    m.innerText="يا رهييييب";
    m1.innerText="ابنشدك عن شي يشكل ثلثين من جسم الانسان";
    m2.innerText="واصل مشوارك وارفع أكبر حصاة عند جوابك";

    redRockFlag = "true";

   } else {
        rockMessage.style.display="block";
        m1.innerText="حبّه حبّه وراك مستعجل ياوليدي";
        m2.innerText="مافيه شي يجي بالساهل";
   }
})

redRock.addEventListener("click",()=>{
    if (redRockFlag == "true"){
    redRock.style.cssText="  rotate: -15deg;";
    // treasureImg.style.display="block";
    rockMessage.style.display="block";
    m.innerText="";
    m1.innerText="مبروووووك وصلت للكنز";
    m2.innerText=" ";
    createFallingCoins(40);
    

    }
    else {
        rockMessage.style.display="block";
        m1.innerText="حبّه حبّه وراك مستعجل ياوليدي";
        m2.innerText="مافيه شي يجي بالساهل";
    }
})



function createFallingCoins(num) {
    let container = document.getElementById("image-container");

    for (let i = 0; i < num; i++) {
      let coin = document.createElement('div');
      coin.classList.add('falling-coin');
      coin.style.left = `${Math.random() * 100}%`;
      coin.style.animationDelay = `${Math.random() * 6}s`;
      container.appendChild(coin);
    }
  }
  




