gallerie = []
gallerie.push({"source" : "img/honda.jpg", "category" : "car"});
gallerie.push({"source" : "img/artist 1.webp", "category" : "artist"});
gallerie.push({"source" : "img/fond 1.jpg", "category" : "background"});
gallerie.push({"source" : "img/artist 5.webp", "category" : "artist"});
gallerie.push({"source" : "img/bmw.jpg", "category" : "car"});
gallerie.push({"source" : "img/artist 6.webp", "category" : "artist"});
gallerie.push({"source" : "img/fond 2.jpg", "category" : "background"});
gallerie.push({"source" : "img/land-cruiser.jpg", "category" : "car"});
gallerie.push({"source" : "img/artist 12.webp", "category" : "artist"});
gallerie.push({"source" : "img/fond 3.jpg", "category" : "background"});
gallerie.push({"source" : "img/tesla.jpg", "category" : "car"});
gallerie.push({"source" : "img/fond 4.jpg", "category" : "background"});

gallery = document.getElementById("gallery");

for(elt in gallerie){
    addBloc = '<div class="bloc-img ' + gallerie[elt]["category"] + '"><img src="' + gallerie[elt]["source"] + 
        '" class="our-images"></div>';
    gallery.innerHTML += addBloc;
    //console.log(gallerie[elt]["source"]);
    //console.log(gallerie[elt]["category"]);
}

var categorie = document.getElementById("categorie");
var choice = '';
categorie.addEventListener('change', ()=>{
    choice = categorie.value;
    console.log(choice);
    var blocImages = document.getElementsByClassName("bloc-img");
    if(choice != "all"){
        for(let cpt = 0; cpt < blocImages.length; cpt++){
            //console.log(blocImages.length);
            let theImage = blocImages[cpt];
            if(!theImage.classList.contains(choice)){
                theImage.classList.add("hide-image");
            }
            else{
                theImage.classList.remove("hide-image");
            }
        }
    }
    else{
        for(let cpt = 0; cpt < blocImages.length; cpt++){
            blocImages[cpt].classList.remove("hide-image");
        }
    }
});