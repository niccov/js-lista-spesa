/*Data una lista della spesa (memorizzata in un array),
stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
_________________________________________________________________________________
-dichiarare array 
-dichiarare la variabile corrispondente allo spazio in HTML dove andrà il risultato del ciclo while
-dichiarare la variabile sentinella i
-inizializzare il ciclo while con la variabile sentinella che deve essere maggiore della lunghezza del array
  .creare la variabile per fare in modo che ogni ciclo aggiunga un list item
  .dichiarare che ogni list item stampi un elemento del array
  .appendere ogni elemento list item con un elemento del array nella pagina HTML
*/

//dichiarare array 
const listaSpesa = ["latte", "caffe", "pere", "dopobarba"];

//dichiarare la variabile corrispondente allo spazio in HTML dove andrà il risultato del ciclo while
let listElement = document.getElementById("spazio-lista");

//dichiarare la variabile sentinella i
let i = 0;

//inizializzare il ciclo while con la variabile sentinella che deve essere maggiore della lunghezza del array
while (i < listaSpesa.length) {

    //creare la variabile per fare in modo che ogni ciclo aggiunga un list item
    let element = document.createElement("li");
    element.style.listStyle = "none";
    //dichiarare che ogni list item stampi un elemento del array
    element.innerHTML = listaSpesa[i];
    //appendere ogni elemento list item con un elemento del array nella pagina HTML
    listElement.append(element);

    i++;
}

