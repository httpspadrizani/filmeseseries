var cor= "preto";

function MudarCor() {
    if (cor === "preto") {
        document.body.style.backgroundColor = "white";
    }
    else {
        document.body.style.backgroundColor = "black";
        cor = "preto";
    }
}

