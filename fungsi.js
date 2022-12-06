const tombolKiri = document.querySelector('.tombolKiri');
const tombolKanan = document.querySelector('.tombolKanan');
const objeck = {noId:1}
const gbr1 = document.querySelector('#gbr1');
const gbr2 = document.querySelector('#gbr2');
const gbr3 = document.querySelector('#gbr3');
const gbr4 = document.querySelector('#gbr4');
const gbr5 = document.querySelector('#gbr5');
const gbr6 = document.querySelector('#gbr6');
const gb1 = document.querySelector('#gb1');
const gb2 = document.querySelector('#gb2');
const gb3 = document.querySelector('#gb3');
const gb4 = document.querySelector('#gb4');
const gb5 = document.querySelector('#gb5');
const gb6 = document.querySelector('#gb6');
const navH = document.querySelector('.kotakLogoMenu');
const navHg= document.querySelector('.KotakLogoMenuData');

navH.addEventListener('click',function(){
    if(navHg.style.transform==('translateX(-149px)')){
        navHg.style.transform=('translateX(0px)');
    }else{navHg.style.transform=('translateX(-149px)')}
})

const tambah =()=>{
    if(objeck.noId <=5){
        objeck.noId++
    }
}
const kurang=()=>{
    if(objeck.noId >=1){
        objeck.noId--
    }
}

const pindah =()=>{
    if(objeck.noId==2){
        gbr1.style.display=('none');
        gbr2.style.display=('block');
    }
    else if(objeck.noId==3){
        gbr2.style.display=('none');
        gbr3.style.display=('block');
    }
    else if(objeck.noId==4){
        gbr3.style.display=('none');
        gbr4.style.display=('block');
    }
    else if(objeck.noId==5){
        gbr4.style.display=('none');
        gbr5.style.display=('block');
    }
    else if(objeck.noId==6){
        gbr5.style.display=('none');
        gbr6.style.display=('block');
    }
    
}

const pindah2=()=>{
    if(objeck.noId==5){
        gbr6.style.display=('none');
        gbr5.style.display=('block');
    }
    
    else if(objeck.noId==4){
        gbr5.style.display=('none');
        gbr4.style.display=('block');
    }
    else if(objeck.noId==3){
        gbr4.style.display=('none');
        gbr3.style.display=('block');
    }
    else if(objeck.noId==2){
        gbr3.style.display=('none');
        gbr2.style.display=('block');
    }
    else if(objeck.noId==1){
        gbr2.style.display=('none');
        gbr1.style.display=('block');
    }
    
}

tombolKanan.addEventListener('click',function(){
    tambah()
    pindah()
    console.log(objeck.noId)
})

tombolKiri.addEventListener('click',function(){
    kurang()
    pindah2()
    console.log(objeck.noId)
})
gb1.addEventListener('click',function(){
    objeck.noId=1
    console.log(objeck.noId)
    gbr1.style.display=('block');
    gbr2.style.display=('none');
    gbr3.style.display=('none');
    gbr4.style.display=('none');
    gbr5.style.display=('none');
    gbr6.style.display=('none');
    
})

gb2.addEventListener('click',function(){
    objeck.noId=2
    console.log(objeck.noId)
    gbr1.style.display=('none');
    gbr2.style.display=('block');
    gbr3.style.display=('none');
    gbr4.style.display=('none');
    gbr5.style.display=('none');
    gbr6.style.display=('none');
    
})
gb3.addEventListener('click',function(){
    objeck.noId=3
    console.log(objeck.noId)
    gbr1.style.display=('none');
    gbr2.style.display=('none');
    gbr3.style.display=('block');
    gbr4.style.display=('none');
    gbr5.style.display=('none');
    gbr6.style.display=('none');
    
})
gb4.addEventListener('click',function(){
    objeck.noId=4
    console.log(objeck.noId)
    gbr1.style.display=('none');
    gbr2.style.display=('none');
    gbr3.style.display=('none');
    gbr4.style.display=('block');
    gbr5.style.display=('none');
    gbr6.style.display=('none');
    
})
gb5.addEventListener('click',function(){
    objeck.noId=5
    console.log(objeck.noId)
    gbr1.style.display=('none');
    gbr2.style.display=('none');
    gbr3.style.display=('none');
    gbr4.style.display=('none');
    gbr5.style.display=('block');
    gbr6.style.display=('none');
    
})
gb6.addEventListener('click',function(){
    objeck.noId=6
    console.log(objeck.noId)
    gbr1.style.display=('none');
    gbr2.style.display=('none');
    gbr3.style.display=('none');
    gbr4.style.display=('none');
    gbr5.style.display=('none');
    gbr6.style.display=('block');
    
})

