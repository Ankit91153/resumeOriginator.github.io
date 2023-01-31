// Add new Skills*****************************************
function addNewSfield(){
    
    let newExp=document.createElement("textarea");//kya insert karna h
    newExp.classList.add("form-control");
    newExp.classList.add("SField");
    newExp.classList.add("my-2");
    newExp.setAttribute("rows",4);
    newExp.setAttribute("placeholder","Enter Your Skill");

    let SField=document.getElementById("SField");//button ke pehle
    let experience=document.getElementById("skill");//kaha insert karna h

    skill.insertBefore(newExp,SField);
}
// Add new Experience*****************************************
function addNewExfield(){
    
    let newExp=document.createElement("textarea");//kya insert karna h
    newExp.classList.add("form-control");
    newExp.classList.add("weField");
    newExp.classList.add("my-2");
    newExp.setAttribute("rows",4);
    newExp.setAttribute("placeholder","Enter Your Experience");

    let weField=document.getElementById("weField");//button ke pehle
    let experience=document.getElementById("experience");//kaha insert karna h

    experience.insertBefore(newExp,weField);
}

// Add new qualication*****************************************

function addNewQfield(){
    // console.log("Hello ");
    let newExp=document.createElement("textarea");//kya insert karna h
    newExp.classList.add("form-control");
    newExp.classList.add("qField");
    newExp.classList.add("my-2");
    newExp.setAttribute("rows",4);
    newExp.setAttribute("placeholder","Enter Your Qualification");

    let qField=document.getElementById("qualifield");//button ke pehle
    let qualification=document.getElementById("qualification");//kaha insert karna h

    qualification.insertBefore(newExp,qField);
}
// Add new Language*****************************************

function addNewlfield(){
    // console.log("Hello ");
    let newExp=document.createElement("textarea");//kya insert karna h
    newExp.classList.add("form-control");
    newExp.classList.add("LField");
    newExp.classList.add("my-2");
    newExp.setAttribute("rows",4);
    newExp.setAttribute("placeholder","Enter Your Language");

    let lField=document.getElementById("lField");//button ke pehle
    let language=document.getElementById("language");//kaha insert karna h

    language.insertBefore(newExp,lField);
}

// Add new interest**************************************************

function addNewIfield(){

    let newExp=document.createElement("input");
    newExp.classList.add('form-control');
    newExp.classList.add('IField');
    newExp.classList.add('my-2');
    newExp.setAttribute('placeholder',"Enter Your Interest");


    let interest=document.getElementById("interest");
    let IField =document.getElementById("IField");

    interest.insertBefore(newExp,IField);

}


// Generate Cv
 function generateCv(){
    // alert("ankit is going");
    // name linked*************
   
    let nameField=document.getElementById('nameField').value;
    let nameT=document.getElementById("nameT");
    nameT.innerHTML=nameField;
    // head linked*************
    let headField=document.getElementById('headField').value;
    let headT=document.getElementById("headT");
    headT.innerHTML=headField;
    // Personal Information*************
    let contactField=document.getElementById('contactField').value;
    let phoneT=document.getElementById("phoneT");
    phoneT.innerHTML=contactField;
    let emailField=document.getElementById('emailField').value;
    let emailT=document.getElementById("emailT");
    emailT.innerHTML=emailField;

    let dobField=document.getElementById('dobField').value;
    let dobT=document.getElementById("dobT");
    dobT.innerHTML=dobField;
    let addressField=document.getElementById('addressField').value;
    let addressT=document.getElementById("addressT");
    addressT.innerHTML=addressField;


    // important links

    let linkedinField=document.getElementById('linkedinField').value;
    let linkedinT=document.getElementById("linkedinT");
    linkedinT.innerHTML=linkedinField;
    let instagramField=document.getElementById('instagramField').value;
    let instaT=document.getElementById("instaT");
    instaT.innerHTML=instagramField;
    let githubField=document.getElementById('githubField').value;
    let gitT=document.getElementById("gitT");
    gitT.innerHTML=githubField;


    // skills

    let SField=document.getElementsByClassName("SField");

    let strSkill="";
    for( let e of SField){
        strSkill=strSkill+`<li> ${e.value}</li>`;
    }

    document.getElementById("ST").innerHTML=strSkill;


    // language

    let LField=document.getElementsByClassName("LField");

    let strLang="";
    for( let e of LField){
        strLang=strLang+`<li> ${e.value}</li>`;
    }

    document.getElementById("LT").innerHTML=strLang;


    // Interest

    let IField=document.getElementsByClassName("IField");

    let strInt="";
    for( let e of IField){
        strInt=strInt+`<li> ${e.value}</li>`;
    }

    document.getElementById("IT").innerHTML=strInt;

    // objective 

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    // Experience
    let weField=document.getElementsByClassName("weField");

    let strExp="";
    for( let e of weField){
        strExp=strExp+`<li> ${e.value}</li>`;
    }

    document.getElementById("ET").innerHTML=strExp;
    // Qualification
    let qualifield=document.getElementsByClassName("qField");

    let strQua="";
    for( let e of qualifield){
        strQua=strQua+`<li> ${e.value}</li>`;
    }

    document.getElementById("QT").innerHTML=strQua;


    let file=document.getElementById("imgField").files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=function(){
    document.getElementById("showProfile").src=reader.result;
    document.getElementById("showProfile").style.width = "900";
    }
    // hide 
    document.getElementById("form").style.display="none";
    document.getElementById("template").style.display="block";

    // print

    function print(){
        window.print();
    }




 }