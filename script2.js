function create1(tag){
    var ele = document.createElement(tag);    
    return ele;
}
function create2(tag,content){
    var ele = document.createElement(tag);
    ele.innerHTML=content;
    return ele;
}
function create3(tag,attrname,attrvalue){
    var ele=document.createElement(tag);    
    ele.setAttribute(attrname,attrvalue);       
    return ele;
}
function create4(tag,attrname,attrvalue,content){
    var ele=document.createElement(tag);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;    
    return ele;
} 
function create5(tag,a1,v1,a2,v2,a3,v3){
    var ele = document.createElement(tag);
    ele.setAttribute(a1,v1);
    ele.setAttribute(a2,v2);
    ele.setAttribute(a3,v3);    
    ele.setAttribute('required', '');
    return ele;
}
function create6(tag,a1,v1,a2,v2,a3,v3,a4,v4){
    var ele = document.createElement(tag);
    ele.setAttribute(a1,v1);
    ele.setAttribute(a2,v2);
    ele.setAttribute(a3,v3);
    ele.setAttribute(a4,v4);    
    return ele;
}

var container = create3("div","class","container");
var row = create3("div","class","row");
var col = create3("div","class","col-md-4");
var left = create3("div","class","left");
var p = create2("p","<h2>Form:</h2>");

var forms = create3("form","id","form");

var labelfn = create4("label","for","first-name","FIRST  NAME:");
var bfn = create1("br");


var inputfn = create5("input","type","text","id","first-name","placeholder","First Name");
var bfn1 = create1("br");


var labell = create4("label","for","last-name","LAST  NAME:");
var bl = create1("br");
var inputl = create5("input","type","text","id","last-name","placeholder","Last Name");
var bl1 = create1("br");

var labelg = create2("label","GENDER:&nbsp;");
var inputm = create6("input","type","radio","name","gender","id","MALE","value","Male");
var labelm = create2("label","&nbsp;Male&nbsp;");
var inputf = create6("input","type","radio","name","gender","id","FEMALE","value","Female");
var labelf = create2("label","&nbsp;Female");
var bg = create1("br");
//choice of food
var labelfood = create4("label","for","food","Choice of Food:&nbsp;<h6>(Choose atleast 2)</h6>");
var bf = create1("br");

var inputf1 = create6("input","type","checkbox","name","food","id","north-indian","value","North- Indian");
var labelf1 = create2("label","&nbsp;North-Indian");
var bf1 = create1("br");

var inputf2 = create6("input","type","checkbox","name","food","id","south-indian","value","South Indian");
var labelf2 = create2("label","&nbsp;South-Indian");
var bf2 = create1("br");

var inputf3 = create6("input","type","checkbox","name","food","id","japanese","value","japanese");
var labelf3 = create2("label","&nbsp;Japanese");
var bf3 = create1("br");

var inputf4 = create6("input","type","checkbox","name","food","id","chinese","value","chinese");
var labelf4 = create2("label","&nbsp;Chinese");
var bf4 = create1("br");

var inputf5 = create6("input","type","checkbox","name","food","id","seafood","value","Sea Food");
var labelf5 = create2("label","&nbsp;Sea Food");
var bf5 = create1("br");

var labela = create4("label","for","address","ADDRESS:");
var ba = create1("br");
var text = create5("textarea","type","text","id","address","placeholder","Address");
var ba1 = create1("br");

var labelp = create4("label","for","pincode","PIN:");
var bp = create1("br");
var inputp = create5("input","type","text","id","pincode","placeholder","Pincode");
var bp1 = create1("br");

var labels = create4("label","for","state","STATE:");
var bs = create1("br");
var inputs = create5("input","type","text","id","state","placeholder","State");
var bs1 = create1("br");

var labelc = create4("label","for","country","COUNTRY:");
var bc = create1("br");
var inputc = create5("input","type","text","id","country","placeholder","Country");
var bc1 = create1("br");

var button = create5("button","type","button","id","submit","onclick","okay()");
button.innerHTML = "SUBMIT";

var col1 = create3("div","class","col-md-8");
col1.innerHTML = `
<h2> Database</h2>
<table class="table border">
<head>
    <tr>
        <th>First - Name</th>
        <th>Last - Name</th>
        <th>Gender</th>
        <th>Food</th>
        <th>Address</th>
        <th>Pincode</th>
        <th>State</th>
        <th>Country</th>
    </tr>
</head>
<tbody id="tb"></tbody>
</table>`

forms.append(labelfn,bfn,inputfn,bfn1,labell,bl,inputl,bl1,labelg,inputm,labelm,inputf,labelf,bg,
    labelfood,bf,inputf1,labelf1,bf1,inputf2,labelf2,bf2,inputf3,labelf3,bf3,inputf4,labelf4,bf4,inputf5,labelf5,bf5,
    labela,ba,text,ba1,labelp,bp,inputp,bp1,labels,bs,inputs,bs1,labelc,bc,inputc,bc1,button);

left.append(p,forms);
col.append(left);
row.append(col,col1);
container.append(row);
document.body.append(container);
