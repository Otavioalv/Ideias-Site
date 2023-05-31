function show(id) {
    var divImagens = document.getElementById(id);
    divImagens.classList.toggle('d-none');
}


var checkLike = true
function like() {
    var heartLike = document.querySelectorAll('.heartLike-1');

    if(checkLike){
        checkLike = false

        heartLike.forEach((icon) =>  {
            icon.classList.remove('bi-heart');
            icon.classList.add('bi-heart-fill');
        });
    }
    else{
        checkLike = true

        heartLike.forEach((icon) => {
            icon.classList.remove('bi-heart-fill');
            icon.classList.add('bi-heart');
        });
    }

    console.log(checkLike)
}