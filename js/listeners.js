// Event Listeners

document.getElementById("loading").style.display= "none";

document.getElementsByClassName("navbar-button")[0].style.boxShadow = "0 -0.5vh 0 #b8bb26 inset"; //Initial selected tab.
TabSelector.pageSelect(0);

window.addEventListener("scroll", function() {
    const topPageButtonKeyframes = [
        {opacity: 0}, 
        {opacity: 1}
    ];

    var pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, 
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ); //Thanks StackExchange.

    if ((window.scrollY || document.documentElement.scrollTop) > (pageHeight * 0.1) && (document.getElementById("top-page-button").style.display == "")) {
        document.getElementById("top-page-button").animate(topPageButtonKeyframes, {duration: 500, fill: "forwards"});
        document.getElementById("top-page-button").style.display = "flex";
        
    } else if ((window.scrollY || document.documentElement.scrollTop) < (pageHeight * 0.1) && (document.getElementById("top-page-button").style.display == "flex")) {
        document.getElementById("top-page-button").style.display = "";
    };
});

document.getElementById("top-page-button").addEventListener("click", function() {
    window.scrollY = 0;
    document.documentElement.scrollTop = 0;
});

document.querySelectorAll(".navbar-button").forEach(tab => {
    tab.addEventListener("click", function() {
        for (var i = 0; i < document.getElementsByClassName("navbar-button").length; i++) {
            if (document.getElementsByClassName("navbar-button")[i].innerText == tab.innerText) {
                document.getElementsByClassName("navbar-button")[i].style.boxShadow = "0 -0.5vh 0 #b8bb26 inset";
                TabSelector.pageSelect(i);
            } else {
                document.getElementsByClassName("navbar-button")[i].style.boxShadow = "0 -0.5vh 0 #fabd2f inset";
            };
        };
    });
});

document.getElementById("food-cards-titles").querySelectorAll("p").forEach(card => {
    card.addEventListener("click", function(event) {
        FoodGrid.expandCard(event.target.innerText);
    });
});

document.getElementById("game-reviews-panels").querySelectorAll("span p").forEach(button => {
    button.addEventListener("click", function(event) {
        GameReviews.slider(event.target.innerText);
    });
});