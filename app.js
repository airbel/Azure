'use strict'
const switcher = document.querySelector('.btu');
const byw = document.getElementById("btn")

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});

byw.addEventListener('click',function(){
    const AChset = document.getElementById("chug") ;
    var ACh = AChset.textContent;
    if (ACh === "哈哈哈") {
        document.getElementById("chug").innerHTML = ("哈x3");
    }else if (ACh === "哈x3"){
        document.getElementById("chug").innerHTML = ("哈哈哈");
    }
});


