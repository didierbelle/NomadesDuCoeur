
const MY_APP = {
    
    typeWriteEffect : () => {
        //declare variables
        const words = ["Pour la PRISE DE CONSCIENCE...", "...sur l'ENVIRONNEMENT et la SANTE,", " autour d'activités SIMPLES."];
        let wordCount = 0;
        let letterCount = 0;
    
        let currentText = "";
        let currentWord = "";
    
        let timeOut = 400;
    
        let isDeleting = false;
    
        
        function type(){
            if(wordCount === words.length){
                wordCount = 0;
            }
    
            currentWord = words[wordCount];
    
            if(isDeleting) {
                currentText = currentWord.slice(0, --letterCount);
            } else {
                currentText = currentWord.slice(0, ++letterCount);
            }
    
            document.querySelector("#typewrite").textContent = currentText;
    
            timeOut = isDeleting ? 40 : 150;
    
            if(!isDeleting && currentText.length === currentWord.length){
                timeOut = 2000;
                isDeleting = true;
            } else if(isDeleting && currentText.length === 0){
                timeOut = 1000;
                isDeleting = false;
                wordCount++;
            }
    
            setTimeout(type, timeOut);
        }
        type();
    },

    textRotation : () => {
        const text = document.querySelector("#parent-creator-image-container p");

        text.innerHTML = text.innerText.split("").map(
            (char, i) => 
            `<span style="transform: rotate(${i * 10}deg)">${char}</span>`
        ).join("");
    },

    lazyLoadingImages: target => {
        const io = new IntersectionObserver((entries, observer) => {
            
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    const img = entry.target;
                    const src = img.getAttribute('data-lazy');

                    img.setAttribute('src', src);
                    img.classList.add('fade');

                    observer.disconnect();
                }
            })
        });

        io.observe(target);
    },

    getDate: target => {
        const the_date = new Date().getFullYear();
       target.innerHTML = the_date.toString();
    }

}

const targets = document.querySelectorAll("[data-lazy]");

const birds = [document.querySelector("#bird-1"), document.querySelector("#bird-2"), document.querySelector("#bird-3")];

const textToRotate = document.querySelector("#parent-creator-image-container p");

const dateText = document.querySelector("footer #year");


setTimeout(() => {
    MY_APP.typeWriteEffect();
}, 7500);

MY_APP.textRotation();

MY_APP.getDate(dateText);


targets.forEach(MY_APP.lazyLoadingImages);