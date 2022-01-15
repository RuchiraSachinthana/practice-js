const adContainers = document.querySelectorAll(".ad-container");

//elements kiyana parameter ekata kamathi namak denna plwn
function animateAd(elements) {
    for (element of elements) {
        if (element.isIntersecting) {
            element.target.classList.add("animate");
        }
    }
}


const options = {};

const io = new IntersectionObserver(animateAd, options);

for (adContainer of adContainers )  {
    io.observe(adContainer);
}
