// ==========================
// Dark / Light Mode
// ==========================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        themeToggle.innerHTML = "☀️";
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme","light");
            themeToggle.innerHTML = "☀️";

        } else {

            localStorage.setItem("theme","dark");
            themeToggle.innerHTML = "🌙";

        }

    });

}

// ==========================
// Search AI Tools
// ==========================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function(){

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".tool-card");

        cards.forEach(card=>{

            if(card.innerText.toLowerCase().includes(value)){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    });

}

// ==========================
// Back To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
