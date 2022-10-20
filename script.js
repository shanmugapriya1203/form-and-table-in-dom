function okay(){
    //getvalues
   
    var fname = document.getElementById("first-name").value;
    var lname = document.getElementById("last-name").value;
    var gender = document.querySelector(`input[name="gender"]:checked`).value;
    var foods = food();
    var address = document.getElementById("address").value;
    var pin = document.getElementById("pincode").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    //post on table
    var tr = document.createElement("tr");
    var td1 = tr.appendChild(document.createElement("td"));
    var td2 = tr.appendChild(document.createElement("td"));
    var td3 = tr.appendChild(document.createElement("td"));
    var td4 = tr.appendChild(document.createElement("td"));
    var td5 = tr.appendChild(document.createElement("td"));
    var td6 = tr.appendChild(document.createElement("td"));
    var td7 = tr.appendChild(document.createElement("td"));
    var td8 = tr.appendChild(document.createElement("td"));
    td1.innerHTML = fname;
    td2.innerHTML = lname;
    td3.innerHTML = gender;
    td4.innerHTML = foods;
    td5.innerHTML = address;
    td6.innerHTML = pin;
    td7.innerHTML = state;
    td8.innerHTML = country;
    document.getElementById("tb").appendChild(tr);
    var my_form = document.getElementById("form");
    my_form.reset();   
}
//get selected checkbox value
function food(){
    var temp=[];    
var food1 = document.getElementsByName("food");
for (var i = 0; i < food1.length; i++) {
    if (food1[i].checked){
        temp.push(food1[i].value);
     }
}    
if(temp.length>=2){
    return temp.join(" ");     
}else{
    alert("select minimum 2");    
    
}
};