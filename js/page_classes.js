let TabSelector = new class TabSelector {
    constructor() {
        this.tabContent = document.getElementById("main-content-box").getElementsByClassName("main-content-elements");
        this.numTabs = document.getElementsByClassName("navbar-button").length;
    }

    pageSelect(pageNum) {
        for (var i = 0; i < this.numTabs; i++) {
            if (i == pageNum) {
                this.tabContent[i].style.display = "flex";
            } else {
                this.tabContent[i].style.display = "none";
            };
        };
    }

    exists() {
        console.log("Tab Selector Ready.");
    }
}

let FoodGrid = new class FoodGrid {
    constructor() {
        this.foodLinks = {"Mushrooms": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shiitake_mushroom_in_Vegetable_store_in_Yuen_Long.jpg/512px-Shiitake_mushroom_in_Vegetable_store_in_Yuen_Long.jpg", "Tofu": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Tofu_4.jpg/512px-Tofu_4.jpg", "Sprouts": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/2019_Jan_18_-_Kumbh_Mela_-_Sprouts.jpg/512px-2019_Jan_18_-_Kumbh_Mela_-_Sprouts.jpg", "Ghee": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Home_made_Ghee.jpg/512px-Home_made_Ghee.jpg", "Eggs": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Six_eggs_views_from_the_top_on_a_white_background.jpg/512px-Six_eggs_views_from_the_top_on_a_white_background.jpg", "Root Vegetables": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Turnip_2622027.jpg/512px-Turnip_2622027.jpg"};

        this.ingrdtCard = document.getElementById("food-grid").getElementsByTagName("p");

        this.setImages()
    }

    expandCard(index) {
        for (var i = 0; i < this.ingrdtCard.length; i++) {
            if (index == Object.keys(this.foodLinks)[i]) {
                console.log("worked!");
                this.ingrdtCard[i].style.padding = "10%";
            } else {
                this.ingrdtCard[i].style.padding = "0 0 0 0";
            };
        };
    }

    setImages() {
        for (var i = 0; i < this.ingrdtCard.length; i++) {
            this.ingrdtCard[i].style.backgroundImage = "url(" + this.foodLinks[this.ingrdtCard[i].innerText] + ")";
        };
    }
}