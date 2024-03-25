let year;
 

document.getElementById('myButton').onclick = function(){
    let age = document.getElementById("myText").value;
year = 2024 - age;
year = Number(year);
document.getElementById('myH3').textContent = year;
}
