
const MY_APP = {
    
    typeWriteEffect : () => {
        //declare variables
        const words = ["Pour la RECRUDESCENCE...", "...des loisirs SIMPLES,", "dans le RESPECT de la NATURE."];
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
    
            timeOut = isDeleting ? 50 : 150;
    
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

    lazyLoading: () => {

        const targets = document.querySelectorAll("[data-lazy]");
        console.log(targets);

        window.addEventListener('scroll', (event) => {

            targets.forEach( a_node => {
                console.log('CHIT');
                const rect = a_node.getBoundingClientRect().top;
                if (rect <= window.innerHeight) {
                    const src = a_node.getAttribute('data-lazy');
                    a_node.setAttribute('src', src);
                }
            })
        })
    }
}


setTimeout(() => {
    MY_APP.typeWriteEffect();
}, 7500);

MY_APP.textRotation();

MY_APP.lazyLoading();