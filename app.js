"use strict";
let allemp=[];
function employee (EmployeeID,FullName,Department,Level)
{
  this.employeeId=EmployeeID;
  this.fullname=FullName;
  this.department=Department;
  this.level=Level;
  allemp.push(this);
  
}
employee.prototype.render=function(){
document.write(`<p>${this.employeeId}    ${this.fullname}    ${this.department}   ${this.level} \n</p>`);
//document.write("<h1>hello<h1>");
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
Ghazi.render();
Lana.render();
Tamara.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render();
console.log(allemp);