'use strict';
//hello im events 2 


let allemp=[];
let empinfocard=document.getElementById("empinfocard");
function employee (EmployeeID,FullName,Department,Level)
{
  this.employeeId=EmployeeID;
  this.fullname=FullName;
  this.department=Department;
  this.level=Level;
  allemp.push(this);
  
}

employee.prototype.render=function(empid1,empinfocard1){

let parentdiv=document.createElement("div");
parentdiv.setAttribute("class","card");
empinfocard1.appendChild(parentdiv);

  let createimg=document.createElement("img");
  createimg.setAttribute("src","images/itsme.jpg");
  createimg.setAttribute("alt","hello");
  createimg.style.width="170px"
  parentdiv.appendChild(createimg);


  let div3=document.createElement("div");
  parentdiv.appendChild(div3);
  let nh2=document.createElement("h5");
  nh2.textContent="name: "+ this.fullname+"-id : "+this.employeeId+"\n department: "+this.department+"-level: "+this.level+"\n"+ empid1
  div3.appendChild(nh2);

};
//add function
employee.prototype.salary=function(level){
 
  if(level=="Senior"){
    return 7.5*( Math.floor(Math.random() * (2000 - 1500) ) + 1500);
  }
  else{if(level=="Mid-Senior"){
    return 7.5*(  Math.floor(Math.random() * (1500 - 1000) ) + 1000);
  }else{if(level=="Junior"){
    return 7.5*(  Math.floor(Math.random() * (1000 - 500) ) + 500);
  }}}};

let Ghazi= new employee(1000	,"Ghazi Samer",	"Administration"	,"Senior");
let Lana =new employee(1001,"Lana Ali","Finance","Senior");
let  Tamara=new employee(1002,	"Tamara Ayoub",	"Marketing",	"Senior");
let  Safi=new employee(1003	,"Safi Walid"	,"Administration"	,"Mid-Senior");
let Omar=new employee(1004	,"Omar Zaid",	"Development",	"Senior");
let Rana=new employee(1005,	"Rana Saleh",	"Development",	"Junior");
let Hadi =new employee(1006,	"Hadi Ahmad",	"Finance"	,"Mid-Senior");


//now i want to start dom for task 8 
let arrOFoption=["Administration","Marketing","Development","Finance"];
let arrOFlevel=["Junior","Mid-Senior","Senior"];
let div1=document.getElementById("user1");
//text area to full name
//lebel for full name 

let lebel1=document.createElement("label");
lebel1.setAttribute("for","text");
lebel1.textContent="Full name : ";
div1.appendChild(lebel1);
let textarea=document.createElement("input");
textarea.setAttribute("type","text");
textarea.setAttribute("id","fname");
textarea.setAttribute("name","fname");
textarea.style.width="100px";
textarea.style.marginRight="5px";
textarea.style.marginBottom="5px";
div1.appendChild(textarea);
//image (lebel text area )
let lebel2=document.createElement("label");
lebel2.setAttribute("for","text");
lebel2.textContent="Image URL : ";
div1.appendChild(lebel2);
let textarea1=document.createElement("input");
textarea1.setAttribute("type","text");
textarea1.setAttribute("id","fname");
textarea1.setAttribute("name","fname");
textarea1.style.width="100px";
div1.appendChild(textarea1);
//--------------------------------------------
//choose department
let sform=document.createElement("form");
let sList=document.createElement("SELECT");
div1.appendChild(sform);
sform.appendChild(sList);
for(let i=0;i<arrOFoption.length;i++){
let opList=document.createElement("option");
opList.textContent=arrOFoption[i];

sList.appendChild(opList);
}
console.log(div1);
//----------------------------------------------
//choose level
let sList1=document.createElement("SELECT");
sform.appendChild(sList1);
for(let i=0;i<arrOFoption.length;i++){
let opList1=document.createElement("option");
opList1.textContent=arrOFlevel[i];
sList1.style.margin="5px";
sList1.appendChild(opList1);
}
//-------------------------------------------
//function to create 4 digit id 
employee.prototype.empid=function (){
  var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
return seq;
}
//----------------------------------------------
//create submit button 
var selecteddep="";
  var selectedlev="";
  var enterfulname="";
 
function btnfun(){
   selecteddep = sList.options[sList.selectedIndex].text;
   selectedlev = sList1.options[sList1.selectedIndex].text;
   enterfulname = textarea.value;
  let newemp =new employee(1006,enterfulname,selecteddep,selectedlev);
  displayemp();
}
function displayemp()
{
  empinfocard.innerHTML="";
  for(let i =0;i<allemp.length;i++){
    allemp[i].render(allemp[i].empid(),empinfocard);
  }

}
let subButton=document.createElement("input");
subButton.setAttribute("type","submit");
subButton.setAttribute("value","Submit");
subButton.style.width="100px";
subButton.style.background="#008b8b";
subButton.style.color="white";
div1.appendChild(subButton);
subButton.addEventListener("click",btnfun);

//-------------------------------------------
 /*for(let i =0;i<allemp.length;i++){
    allemp[i].render(allemp[i].empid(),empinfocard);
  }*/
  displayemp();


