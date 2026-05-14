
const darkModeBtn =
document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});



const newsletterForm =
document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit",
function(event){

    event.preventDefault();

    alert(
        "Thanks for subscribing to GreenTech!"
    );

});
