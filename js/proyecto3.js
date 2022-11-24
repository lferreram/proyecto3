const btn=document.querySelector('.btn');
const txt=document.querySelector(".txt");

const colores = ["blue","white","green","black","yellow","purple","brown"];
btn.addEventListener("click", () => { var indice=parseInt(Math.random ()*colores.length);
    document.body.style.background=colores[indice];
    txt.innerHTML = colores[indice];
txt.addEventListener("click", () => { var indice=parseInt(Math.random ()*colores.length);
    document.body.style.background=colores[indice];  
});
});

