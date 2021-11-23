'use strict'
const switcher = document.querySelector('.btn');
const divget = document.getElementById("chug")

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    divget.innerHTML("噗噗噗")
    console.log('current class name: ' + className);
});



