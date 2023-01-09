let td = '<td class="border columnas"></td>';
let tr = '<tr class="filas"></tr>';
let x = 'x';
let o = 'o';
let p = 'p';
let filas = document.getElementsByClassName("filas");
let columnas = document.getElementsByClassName("columnas");
for(let i=0; i<2; i++){
    td += '<td class="border columnas"></td>';
}
filas[0].insertAdjacentHTML("beforebegin", tr);
for(let i=0; i<filas.length; i++){
    filas[i].innerHTML = td;
}
for(let i=0; i<columnas.length; i++){
    columnas[i].innerHTML = x;
}
