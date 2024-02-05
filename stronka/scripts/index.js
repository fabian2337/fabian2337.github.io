let number_no = 0;
function hejClick() {

    window.location.href = "3.html";

}
function dalejClick() {

    window.location.href = "2.html";

}


function yesClick() {

    window.location.href = "yes.html";

}

function noButtonHover() {
    let noButton = document.getElementById('noButton');

    if (number_no < 5) {
        if(number_no == 0) {
            let yesButton = document.getElementById('yesButton');
            yesButton.style.marginRight = '136px';
            noButton.style.position = "absolute";
        }
        let x = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
        let y = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
        number_no++;
    }
    else {
        
        alert("Chyba źle przeczytałaś\nPozwól że ci pomogę.");
        noButton.style.opacity = 0;
        noButton.style.visibility = "hidden";
    }

}