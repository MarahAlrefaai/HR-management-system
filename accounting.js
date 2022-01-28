'use strict';
let parsArray=[];
gettingArray();
let tableContainer=document.getElementById("cont");
let table1 =document.createElement("table");
table1.setAttribute("class","tstyle");
tableContainer.appendChild(table1);
//-----------------------------
let numofemp=0;//count number of employee
function employee (EmployeeID,FullName,Department,Level)
{
  this.employeeId=EmployeeID;
  this.fullname=FullName;
  this.department=Department;
  this.level=Level;
}
function countsalary(level){
 
  if(level=="Senior"){
    return (7.5*( Math.floor(Math.random() * (2000 - 1500) ) + 1500));
  }
  else{if(level=="Mid-Senior"){
    return ( 7.5*(  Math.floor(Math.random() * (1500 - 1000) ) + 1000));
  }else{if(level=="Junior"){
    return (7.5*(  Math.floor(Math.random() * (1000 - 500) ) + 500));
  }}}};
function gettingArray(){
//now i want to get the array from the local storage 
let getArray=localStorage.getItem("employee");
 parsArray=JSON.parse(getArray);
console.log(parsArray);

for (let i=0;i<parsArray.length;i++){
 new employee(parsArray[i].employeeId,parsArray[i].fullname,parsArray[i].department,parsArray[i].level);
 
}
} 

function createDepartmentInfo(depname,tr){
  //add number of employee
  let th=document.createElement("th");
  th.textContent=numofemp_dep(depname)+"";
  th.setAttribute("class","tstyle");
  tr.appendChild(th);
  //-------------------
  //add avg  of salary of employees in each department
  let th1=document.createElement("th");
  th1.textContent=avgsalary(depname)+""
  th1.setAttribute("class","tstyle");
  tr.appendChild(th1);
  //---------------------
  let th2=document.createElement("th");
  th2.textContent=totalOfallemp()+""
  th2.setAttribute("class","tstyle");
  tr.appendChild(th2);
}
function totalOfallemp(){
  let sum=0;
  for (let i=0;i<parsArray.length;i++){
{
  sum +=countsalary(parsArray[i].level);

}

return sum;

  }
}
function avgsalary(depname){
  let sum=0;
  for (let i=0;i<parsArray.length;i++){
    if(parsArray[i].department==depname){
     sum +=countsalary(parsArray[i].level);
    }

  }
  return (sum/numofemp_dep(depname));

}
function avgsalaryalldep(){
  let sum=0;
  for (let i=0;i<parsArray.length;i++){
     sum +=countsalary(parsArray[i].level);
    }
  return (sum/parsArray.length);

}
function totalsalaryforallemps(){
  let sum=0;
  for (let i=0;i<parsArray.length;i++){
     sum +=countsalary(parsArray[i].level);
    }
  return sum;

}
function numofemp_dep(depname){
  numofemp=0;
  for (let i=0;i<parsArray.length;i++){
   if(parsArray[i].department==depname){
    numofemp=numofemp+1;
    /*console.log(parsArray[i].department);
    console.log(parsArray[i].fullname);*/
   }}
   return numofemp;
}
function createrows(){
//first row
let tr1=document.createElement("tr");
tr1.setAttribute("class","tstyle");
table1.appendChild(tr1);
let th1=document.createElement("th");
th1.textContent=" Department name ";
th1.setAttribute("class","tstyle");
tr1.appendChild(th1);
//--------
let th2=document.createElement("th");
th2.textContent=" Number of employee ";
th2.setAttribute("class","tstyle");
tr1.appendChild(th2);
//---------
let th3=document.createElement("th");
th3.textContent=" Average salary of department ";
th3.setAttribute("class","tstyle");
tr1.appendChild(th3);
//---------
let th4=document.createElement("th");
th4.textContent=" Total salary ";
th4.setAttribute("class","tstyle");
tr1.appendChild(th4);
//-------------------------------------
//now create scond row 
let tr2=document.createElement("tr");
tr2.setAttribute("class","tstyle");
table1.appendChild(tr2);
let th21=document.createElement("th");
th21.textContent=" Administration ";
th21.setAttribute("class","tstyle");
tr2.appendChild(th21);
//here add dep info 
createDepartmentInfo("Administration",tr2);
//======================================
let tr3=document.createElement("tr");
tr3.setAttribute("class","tstyle");
table1.appendChild(tr3);
let th31=document.createElement("th");
th31.textContent=" Marketing ";
th31.setAttribute("class","tstyle");
tr3.appendChild(th31);

//here add dep info 
createDepartmentInfo("Marketing",tr3);
//======================================
let tr4=document.createElement("tr");
tr4.setAttribute("class","tstyle");
table1.appendChild(tr4);
let th41=document.createElement("th");
th41.textContent=" Development ";
th41.setAttribute("class","tstyle");
tr4.appendChild(th41);

//here add dep info 
createDepartmentInfo("Development",tr4);
//======================================
let tr5=document.createElement("tr");
tr5.setAttribute("class","tstyle");
table1.appendChild(tr5);
let th51=document.createElement("th");
th51.textContent=" Finance ";
th51.setAttribute("class","tstyle");
tr5.appendChild(th51);

//here add dep info 
createDepartmentInfo("Finance",tr5);
//---------------------------------
//add table footer 
let tfooter=document.createElement("tfoot");
tfooter.setAttribute("class","tstyle");
table1.appendChild(tfooter);
let tr6=document.createElement("tfoot");
tr6.setAttribute("class","tstyle");
tfooter.appendChild(tr6);
//put info
let td=document.createElement("td");
td.setAttribute("class","tstyle");
td.textContent="# of employee ";
tr6.appendChild(td);

let td1=document.createElement("td");
td1.setAttribute("class","tstyle");
td1.textContent=(parsArray.length-1);
tr6.appendChild(td1);

let td3=document.createElement("td");
td3.setAttribute("class","tstyle");
td3.textContent="avg all dep" ;
tr6.appendChild(td3); 

let td2=document.createElement("td");
td2.setAttribute("class","tstyle");
td2.textContent=avgsalaryalldep();
tr6.appendChild(td2);

let td4=document.createElement("td");
td4.setAttribute("class","tstyle");
td4.textContent="total all dep" ;
tr6.appendChild(td4); 

let td5=document.createElement("td");
td5.setAttribute("class","tstyle");
td5.textContent=totalsalaryforallemps();
tr6.appendChild(td5);


}

createrows();






