function myFunction(){
   document.write("<br>Hi, nice meeting you! Iam interview management chatbot....<br>");
   var person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.write("<br>Hello " + person + "!");
  } 

percentage=prompt("Do you want any help regarding interviews...Then answer my question What is your percentage in b.tech?Input must me less 100!");
    if(percentage>0 && percentage<=50){
	var comp1=["lenova","airtel","idea","uninor","reliance","samsung","maruthisuzuki"];
   var random_comp1 = comp1[Math.floor( 
                    Math.random() * comp1.length)]
        document.write("you can try in "+random_comp1);}
    else if(percentage>=50 && percentage<70){
	var comp2=["siemens","convergys","zensar","larsen","techMahindra","tataMotors","mindTree","accenture","Hp","Hcl","Dell"];
    var random_comp2 = comp2[Math.floor( 
                    Math.random() * comp2.length)]
	document.write("It is better to try in "+random_comp2);
    }
    else{
	var comp3=["cognizant","Infosys","Flipart","heuwai"];
 var random_comp3 = comp3[Math.floor( 
                    Math.random() * comp4.length)]
	document.write("<br>you can have a best try in "+random_comp3);
    }
    var ans=prompt("ok "+person +" you can have a better experience in trying some mock tests...What do you say "+"(1.yes or 2.no)");
    if (ans=="yes"){
    document.write("<br>ok  "+person+" you are ready I think..Let's start the preparation ");
    
}
}
