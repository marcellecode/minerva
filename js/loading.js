var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1000); // aumentei o tempo para ilustração
}

function showPage() {
   document.getElementById("loader").style.display = "none";
   document.getElementById("myDiv").style.display = "block";
}