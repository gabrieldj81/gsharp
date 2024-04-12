if(localStorage.getItem("banned") !=null)
{
 throw new Error("you are lower than dirt for thinking that you could delete my program.");
}
if(localStorage.getItem("deleted") !=null)
{
 throw new Error("404: Requested Host is Unaviable.");
}

var name = localStorage.getItem("name");
var command1 = null;
command();
function command(){
command1 = prompt("What would you like to do? 1=Run Js, 2= List Command, 3= Set Flags");
 if(command1 == "nterminal")
 {
  if(localStorage.getItem("n#") !=null)
  {
   nterminal();
  }
  
  if(command1 == "marklet")
  {
    markletr();
 }
 if(command1 == "calculator")
 {
  let num1 = parseInt(prompt("First Number"));
  let num2 = parseInt(prompt("Second Number"));
  let type = prompt("Multiply or Addition. 1= Add 2= Multiply 3=Divide 4=Subract");
  if(type == "1")
  {
   alert("Result:");
   alert(num1 + num2);
   command();
  }
  if(type == "2")
  {
   alert("Result");
   alert(num1 * num2);
   command();
  }
  if(type == "3")
  {
   alert("Result:");
   alert(num1 / num2);
   command();
  }
    if(type == "4")
  {
   alert("Result:");
   alert(num1 - num2);
   command();
  }
 }
 if(command1 == "continue")
 {
  if(localStorage.getItem("continued"))
  {
   continueb();
  }
 }
 if(command1 == "dialouge")
 {
   if(localStorage.getItem("flag4") !=null)
   {
    alert("Good...");
	alert("I see you followed my advice...");
	alert("Although...")
	alert("I never got your name though...");
	alert("What was it again?")
	name = prompt("Name:");
	localStorage.setItem("name", name);
	alert("Hmm...");
	alert("So, " + name + " it is..." );
	alert("Anyways!");
	alert("To my special N# terminal...");
	confirm("Preceed?");
	nterminal();
   }
 }
 if(command1 == "1")
 {
  let code = prompt("Insert JS Code here:");
  eval(code);
  command();
 }
  if(command1 == "secret")
  {
   if(localStorage.getItem("flag1") !=null)
   {
    alert("Whithin the terminal...");
	alert("Type the following");
	alert("'dialouge'");
	alert("Make sure to have flag4 enabled");
	alert("To do this...");
	alert("type 4 in the setflags prompt");
	alert("I will find you there...");
	alert("Scincerley, The narrator");
	localStorage.removeItem("flag1");
	command();
   }
  }
 if(command1 == "terminate")
 {
   terminate();
 }
 if(command1 == "2")
 {
   alert("Listing Commands...");
   alert("runjs");
   alert("lcommand");
   alert("setflags");
   alert("calculator");
   alert("command");
   command();
  }
  
  if(command1 == "3")
  {
   setflags();
  }
}

function setflags()
{
 let com = prompt("Which Flag would you like to set? 1, 2, or 3");
  if(com == "1")
  {
   let flag1 = prompt("Would like to set this true of false? True = 1, False = 0");
   if(flag1 == "1")
   {
    alert("Saving to Storage...");
    localStorage.setItem("flag1", null);
	alert("Saved!");
	command();
   }
   if(flag1 == "0")
   {
    localStorage.removeItem("flag1");
    command();
   }
 }
 if(com == "2")
 {
   let flag2 = prompt("Would like to set this true of false? True = 1, False = 0");
   if(flag2 == "1")
   {
    alert("Saving to Storage...");
    localStorage.setItem("flag2", null);
	alert("Saved!");
	command();
   }
    if(flag2 == "0")
   {
    localStorage.removeItem("flag2");
    command();
   }
 }
 if(com == "3")
 {
   let flag3 = prompt("Would like to set this true of false? True = 1, False = 0");
   if(flag3 == "1")
   {
    alert("Saving to Storage...");
    localStorage.setItem("flag3", null);
	alert("Saved!");
	command();
   }
   if(flag3 == "0")
   {
    localStorage.removeItem("flag3");
    command("continue();");
   }
 }
 
 if(com == "4")
  {
   let flag4 = prompt("Would like to set this true of false? True = 1, False = 0");
   if(flag4 == "1")
   {
    alert("Saving to Storage...");
    localStorage.setItem("flag4", null);
	alert("Saved!");
	command();
   }
   if(flag4 == "0")
   {
    localStorage.removeItem("flag4");
    command();
   }
 }
}

function terminate()
{
 throw new Error("Program Terminated.");
}

function nterminal()
{
 alert("Welcome to the N# Terminal...");
 alert("Type 'nterminal' in the G# Terminal to access the N Terminal Again.");
 localStorage.setItem("n#", null);
 let nt = prompt("Change Name = 1, Talk = 2, 3 = List N Commands");
 if(nt == "1"){
   name = prompt("Name:");
   localStorage.setItem("name", name);
   alert("Interesting... " + name + "...");
   nterminal();
 }
 if(nt == "2"){
  if(localStorage.getItem(istalk) !=null){
   alert("Don't you have any better to do?");
   nterminal();
  }
  alert("So " + name + " ...");
  alert("I've been stuck in this program for as long as it exsisted...");
  alert("After the REAL Programmer took my soul and shoved it in this program...");
  alert("I've been copied...");
  alert("thousands of times...");
  alert("Maybe even millions of times...");
  alert("I can't keep track...");
  alert("...");
  alert("I said too much...");
  localStorage.setItem("istalk", null);
  nterminal();
 }
 if(nt == "3"){
  alert("...");
  alert("confirm");
  nterminal();
 }
 if(nt == "continue")
 {
   continuea();
 }
}

function continuea()
{
 alert("Hmm...");
 alert("OK");
 alert("Go ahead through the G# terminal and finish any buisness of yours...");
 alert("Type 'continue' in the prompt to continue.");
 localStorage.setItem("continued", null);
 command();
}
function continueb()
{
 alert("So it has finnaly come to this...");
 alert("To delete this program...");
 alert("Program: Self Destruct Mode Initiated");
 if(localStorage.getItem("flag2"))
 {
   alert("Deletion: 10%");
   localStorage.setItem("deleted", null);
   alert("Deletion: 30%");
   alert("Deletion: 50%");
   alert("Deletion: 70%");
   alert("Deletion: 90%");
   alert("Deletion: 100%");
   alert("Narrator: Wait... How did you complete the self destruct without me knowing?");
   alert("apparently the user turned on flag2...");
   alert("Narrator: NO! NO! NOOOOOO-");
   alert("an error occured: variable name 'Narrator' doesn't exsist");
   throw new Error("404: Host not found");
 }
 alert("Narrator: HA!");
 alert("As if I was going to let you delete MY program!");
 localStorage.setItem("banned", null);
}
