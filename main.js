//création de la liste des des données(les todo)

let todo = {
    titre : prompt("enter the title of a todo"),
    detail : prompt("enter detail of your todo"),
    dateDebut : prompt("Enter de start date"),
    dateFin : prompt("enter the end date"),
    Ajouter(){
        return todo.push(this.titre)
    }
};





// selection du div qui contiendra la listes des todo

let Mylist = document.querySelector(".myList");



// ajouter des éléments html pour récevoir les propriétés de todo

let todoTitle =document.createElement("li");
todoTitle.innerText = todo.titre;

let todoDetail = document.createElement("li");
todoDetail.innerText = todo.detail;

let todoDateStart = document.createElement("li");
todoDateStart.innerText = todo.dateDebut;

let todoDateEnd = document.createElement("li");
todoDateEnd.innerText = todo.dateFin;

let listNonOrdonne = document.querySelector("ul");
Mylist.appendChild(listNonOrdonne);






//creation des données

listNonOrdonne.appendChild(todoTitle);
listNonOrdonne.appendChild(todoDetail);
listNonOrdonne.appendChild(todoDateStart);
listNonOrdonne.appendChild(todoDateEnd);





let bouton = document.querySelector(".ajouter");

bouton.addEventListener("click",()=> {
    let line = document.createElement("hr");
    
    let todo = {
        titre : prompt("enter the title of a todo"),
        detail : prompt("enter detail of your todo"),
        dateDebut : prompt("Enter de start date"),
        dateFin : prompt("enter the end date"),
        Ajouter(){
            return todo.push(this.titre)
        }
    };
    // ajouter des éléments html pour récevoir les propriétés de todo

let todoTitle =document.createElement("li");
todoTitle.innerText = todo.titre;

todoTitle.style.color = "brown";
todoTitle.style.fontSize = "30px";
todoTitle.style.fontWeight = "bold";

let todoDetail = document.createElement("li");
todoDetail.innerText = todo.detail;

todoDetail.style.fontWeight = "bold";


let todoDateStart = document.createElement("li");
todoDateStart.innerText = todo.dateDebut;

let todoDateEnd = document.createElement("li");
todoDateEnd.innerText = todo.dateFin;

let listNonOrdonne = document.querySelector("ul");

//ajout de la ligne en dessous de chaque tache
listNonOrdonne.appendChild(line);









//creation des données

listNonOrdonne.appendChild(todoTitle);
listNonOrdonne.appendChild(todoDetail);
listNonOrdonne.appendChild(todoDateStart);
listNonOrdonne.appendChild(todoDateEnd);



});


let remover = document.querySelector(".supprimer");

remover.addEventListener("click",()=>{
    
    listNonOrdonne.innerText = "";
  


    
})





