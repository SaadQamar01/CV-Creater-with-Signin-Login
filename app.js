var i,j,k,z,x,got,skillsList=0,portfolioList=0,skillArry=[],portfolioArry=[];
var gender_value;

// var input = document.getElementById("your_input");
// var file = input.value.split("\\");
// document.getElementById('dp1').src=file;
// var fileName = file[file.length-1];
// console.log(fileName);

function empty(){
 document.getElementById('fname').value="";
document.getElementById('lname').value="";
document.getElementById('uemail').value="";
document.getElementById('upass').value="";
document.getElementById('uage').value="";
}
///////////////////////////////////////  SignUP  ///////////////////////////
function MySignUp(){
var userFirstName=document.getElementById('fname').value;
var userLastName=document.getElementById('lname').value;
var userName=userFirstName+" "+userLastName;
var userEmail=document.getElementById('uemail').value;
var userPass=document.getElementById('upass').value;
var userAge=document.getElementById('uage').value;
var gender = document.getElementsByName('gender'); //start radio button
var male=gender[0].checked;
if(male==true){
gender_value="Male"
}
else{
    gender_value="Female";
}                                              //End Radio button
var user={
uName: userName,
uPass: userPass,
uEmail:userEmail,
userAge:userAge,
userGender:gender_value,
uPersonalInfoData:PersonalInfoData=["","","","","",""],
uQualificationData:QualificationData=["","","","",""],
uCertificationData:CertificationData=["","","",""],
userSkills:userSkills="",
userPortfolio:userPortfolio=""
// userProfilePic:userProfilePic=""
};
localStorage.removeItem('userNumber');
if(userFirstName===""||userLastName===""||userPass===""||userEmail===""||userAge===""){
alert("Please Enter All Information Those Are Required");
}
else{
    var check;
var getUser=localStorage.getItem('users');
    if(getUser===null){
    var allUser=[];
    allUser=[user];
    localStorage.setItem('users',JSON.stringify(allUser));
    empty();
    }
    else{
            getUser=JSON.parse(getUser);
    for (i=0; i < getUser.length; i++) {
 if(userEmail==getUser[i].uEmail){      //CheckEmail
        check=false;
        alert(userEmail+" is exist!!! please enter another email");
        break;
}
    else{
        check=true;
    }}
if(check===true){
    var UsersArry=[];
    for (i=0; i < getUser.length; i++) {
    UsersArry[i]=getUser[i];
}  
UsersArry[i]=user;
localStorage.setItem('users',JSON.stringify(UsersArry));
empty();
}}}}
////////////////////////////////   SignIn   /////////////////////////////////////////
function MySignIn(){
 var userEmail=document.getElementById('uemail1').value;
var userPass=document.getElementById('upass1').value;
if(userEmail==""||userPass==""){
alert("Please Enter Email & Password");
}
else{
    var check1=false;
    var getUser=localStorage.getItem('users');
    getUser=JSON.parse(getUser);
    for ( k=0; k < getUser.length; k++) {
    if((userEmail==getUser[k].uEmail)&&(userPass==getUser[k].uPass)){
      check1=true;
      break;
}}
if(check1==true){
    localStorage.setItem("userNumber",k);
  window.location = "profile.html";
}
else{
   alert("Wrong Email And Password");
}
}}
////////////////////////////////   deleteAllAccounts   /////////////////////////////////////////
var size=localStorage.length+1;
function deleteAllAccounts(){                        
for (z=1;z<=size;z++) {
    localStorage.removeItem('user'+z);
    localStorage.clear();
}
alert("Accounts has been deleted");
}
////////////////////////////////   deleteAccounts   /////////////////////////////////////////
function deleteAccount(){ 
var userInName=prompt("Enter your exist email");
var userInPass=prompt("Enter your exist password");
    var check2=false;
    var getUser=localStorage.getItem('users');
    getUser=JSON.parse(getUser);
    for ( x=0; x < getUser.length; x++) {
    if((userInName==getUser[x].uEmail)&&(userInPass==getUser[x].uPass)){
        getUser.splice(x,1);
      check2=true;
      break;
}}
if(check2==true){
localStorage.setItem('users',JSON.stringify(getUser)); 
  alert("Your Account has been deleted");
}
else{
    alert("Sorry!!! Email Does't Exist");
}
}
function personalInfo(){
var fatherName=document.getElementById('fName').value;
var maritalStatus=document.getElementById('mStatus').value;
var cnic=document.getElementById('cnic').value;
var religion=document.getElementById('religion').value;
var phone=document.getElementById('phone').value;
var language=document.getElementById('language').value;
if(fatherName==""||maritalStatus==""||cnic==""||phone==""||religion==""||language==""){
    alert("Please fill All Requirements");
}
else{
    var userNum=localStorage.getItem('userNumber');
    var getUser=localStorage.getItem('users');
    getUser=JSON.parse(getUser);
getUser[userNum].uPersonalInfoData=[fatherName,maritalStatus,cnic,religion,phone,language];
localStorage.setItem('users',JSON.stringify(getUser));
document.getElementById('setfName').innerHTML=fatherName;
document.getElementById('setmStatus').innerHTML=maritalStatus;
document.getElementById('setcnic').innerHTML=cnic;
document.getElementById('setreligion').innerHTML=religion;
document.getElementById('setPhNo').innerHTML=phone;
document.getElementById('setlanguage').innerHTML=language;
document.getElementById('hide1').className = "hide";
}}
function qualificationInfo(){
var intituteName=document.getElementById('IN').value;
var LevelOfEdu=document.getElementById('LOE').value;
var FieldOfStudy=document.getElementById('FOS').value;
var MarksScore=document.getElementById('MS').value;
var PassingYear=document.getElementById('PY').value;
if(intituteName==""||LevelOfEdu==""||FieldOfStudy==""||MarksScore==""||PassingYear==""){
    alert("Please fill All Requirements");
}
else{
    var userNum=localStorage.getItem('userNumber');
    var getUser=localStorage.getItem('users');
    getUser=JSON.parse(getUser);
getUser[userNum].uQualificationData=[intituteName,LevelOfEdu,FieldOfStudy,MarksScore,PassingYear];
localStorage.setItem('users',JSON.stringify(getUser));
document.getElementById('setIN').innerHTML=intituteName;
document.getElementById('setLOE').innerHTML=LevelOfEdu;
document.getElementById('setFOS').innerHTML=FieldOfStudy;
document.getElementById('setMS').innerHTML=MarksScore;
document.getElementById('setPY').innerHTML=PassingYear;
document.getElementById('hide2').className = "hide";
}}
function certificationInfo(){
var InstituteName=document.getElementById('IName').value;
var FieldOfStudy=document.getElementById('FOStudy').value;
var Duration=document.getElementById('Duration').value;
var WorkExp=document.getElementById('WE').value;
if(InstituteName==""||FieldOfStudy==""||Duration==""||WorkExp==""){
    alert("Please fill All Requirements");
}
else{
    var userNum=localStorage.getItem('userNumber');
    var getUser=localStorage.getItem('users');
    getUser=JSON.parse(getUser);
getUser[userNum].uCertificationData=[InstituteName,FieldOfStudy,Duration,WorkExp];
localStorage.setItem('users',JSON.stringify(getUser));
document.getElementById('setIName').innerHTML=InstituteName;
document.getElementById('setFOStudy').innerHTML=FieldOfStudy;
document.getElementById('setDuration').innerHTML=Duration;
document.getElementById('setWE').innerHTML=WorkExp;
document.getElementById('hide3').className = "hide";
}}
function ApplicantData(){
    var userNum=localStorage.getItem('userNumber');
    var getUser=localStorage.getItem('users');
    getUser=JSON.parse(getUser);
document.getElementById('fullName').innerHTML=getUser[userNum].uName;
document.getElementById('applicantID').innerHTML=Number(userNum)+1;
document.getElementById('applicantEmail').innerHTML=getUser[userNum].uEmail;
document.getElementById('applicantAge').innerHTML=getUser[userNum].userAge;
document.getElementById('applicantGender').innerHTML=getUser[userNum].userGender;
}
function data(){
    ApplicantData();
 var userNum=localStorage.getItem('userNumber');
var getUser=localStorage.getItem('users');
    getUser=JSON.parse(getUser);
 var fName=getUser[userNum].uPersonalInfoData[0];
 var profilePic=getUser[userNum].userProfilePic1;
 var skill=getUser[userNum].userSkills[0];
 var portfolio=getUser[userNum].userPortfolio[0];
 var qualificaton=getUser[userNum].uQualificationData[0];
 var certification=getUser[userNum].uCertificationData[0];
if(fName!=""){
    personalData();
}
if(skill!=""){
    skillData();
}
if(portfolio!=""){
    portfolioData();
}
if(qualificaton!=""){
    qualificationData();
}
if(certification!=""){
    certificationData();
}
if(profilePic!=""){
    profilePicData();
}
if(fName==""){
    edit();
}
if(qualificaton==""){
    edit1();}
if(certification==""){
    edit2();}
}
function personalData(){
    var userNum=localStorage.getItem('userNumber');
    var getUser=localStorage.getItem('users');
    getUser=JSON.parse(getUser);
 var fName=getUser[userNum].uPersonalInfoData[0];   
 var maritalStatus=getUser[userNum].uPersonalInfoData[1];   
  var cnic=getUser[userNum].uPersonalInfoData[2];   
 var religious=getUser[userNum].uPersonalInfoData[3];   
 var phone=getUser[userNum].uPersonalInfoData[4];   
 var language=getUser[userNum].uPersonalInfoData[5];  
document.getElementById('setfName').innerHTML=fName;
document.getElementById('setmStatus').innerHTML=maritalStatus;
document.getElementById('setcnic').innerHTML=cnic;
document.getElementById('setreligion').innerHTML=religious;
document.getElementById('setPhNo').innerHTML=phone;
document.getElementById('setlanguage').innerHTML=language;
document.getElementById('hide1').className = "hide";
}
function skillData(){
    var userNum=localStorage.getItem('userNumber');
    var getUser=localStorage.getItem('users');
    getUser=JSON.parse(getUser);
    var creatTag=document.createElement("LI");
    var i=0;
while(i<getUser[userNum].userSkills.length){
    var creatTag=document.createElement("LI");
    var textTag=document.createTextNode(getUser[userNum].userSkills[i]);
    creatTag.appendChild(textTag);
    document.getElementById("skills").appendChild(creatTag).className="newLi";
    i++;
}}
function portfolioData(){
    var userNum=localStorage.getItem('userNumber');
    var getUser=localStorage.getItem('users');
    getUser=JSON.parse(getUser);
    var createTag=document.createElement("LI");
    var i=0;
while(i<getUser[userNum].userPortfolio.length){
    var createTag=document.createElement("LI");
    var textTag=document.createTextNode(getUser[userNum].userPortfolio[i]);
    createTag.appendChild(textTag);
    document.getElementById("allPortfolio").appendChild(createTag).className="newLi";
    i++;
}}
function qualificationData(){
    var userNum=localStorage.getItem('userNumber');
    var getUser=localStorage.getItem('users');
    getUser=JSON.parse(getUser);

 var intituteName=getUser[userNum].uQualificationData[0];   
 var LevelOfEdu=getUser[userNum].uQualificationData[1];   
  var FieldOfStudy=getUser[userNum].uQualificationData[2];   
 var MarksScore=getUser[userNum].uQualificationData[3];   
 var PassingYear=getUser[userNum].uQualificationData[4];

document.getElementById('setIN').innerHTML=intituteName;
document.getElementById('setLOE').innerHTML=LevelOfEdu;
document.getElementById('setFOS').innerHTML=FieldOfStudy;
document.getElementById('setMS').innerHTML=MarksScore;
document.getElementById('setPY').innerHTML=PassingYear;
document.getElementById('hide2').className = "hide";
}
function certificationData(){
    var userNum=localStorage.getItem('userNumber');
    var getUser=localStorage.getItem('users');
    getUser=JSON.parse(getUser);

 var InstituteName=getUser[userNum].uCertificationData[0];   
 var FieldOfStudy=getUser[userNum].uCertificationData[1];   
  var Duration=getUser[userNum].uCertificationData[2];   
 var WorkExp=getUser[userNum].uCertificationData[3];   

document.getElementById('setIName').innerHTML=InstituteName;
document.getElementById('setFOStudy').innerHTML=FieldOfStudy;
document.getElementById('setDuration').innerHTML=Duration;
document.getElementById('setWE').innerHTML=WorkExp;

document.getElementById('hide3').className = "hide";
}
function edit(){
 document.getElementById('hide1').className = "show";

var fName=document.getElementById('setfName').innerHTML;
var Status= document.getElementById('setmStatus').innerHTML;
var cnic= document.getElementById('setcnic').innerHTML;
var religion=document.getElementById('setreligion').innerHTML;
var phone=document.getElementById('setPhNo').innerHTML;
var language=document.getElementById('setlanguage').innerHTML;

document.getElementById('setfName').innerHTML="";
document.getElementById('setmStatus').innerHTML="";
document.getElementById('setcnic').innerHTML="";
document.getElementById('setreligion').innerHTML="";
document.getElementById('setPhNo').innerHTML="";
document.getElementById('setlanguage').innerHTML="";

document.getElementById('fName').value=fName;
document.getElementById('mStatus').value=Status;
document.getElementById('cnic').value=cnic;
document.getElementById('religion').value=religion;
document.getElementById('phone').value=phone;
document.getElementById('language').value=language;  
}
function edit1(){
 document.getElementById('hide2').className = "show";

var intituteName=document.getElementById('setIN').innerHTML;
var LevelOfEdu= document.getElementById('setLOE').innerHTML;
var FieldOfStudy= document.getElementById('setFOS').innerHTML;
var MarksScore=document.getElementById('setMS').innerHTML;
var PassingYear=document.getElementById('setPY').innerHTML;

document.getElementById('setIN').innerHTML="";
document.getElementById('setLOE').innerHTML="";
document.getElementById('setFOS').innerHTML="";
document.getElementById('setMS').innerHTML="";
document.getElementById('setPY').innerHTML="";

document.getElementById('IN').value=intituteName;
document.getElementById('LOE').value=LevelOfEdu;
document.getElementById('FOS').value=FieldOfStudy;
document.getElementById('MS').value=MarksScore;
document.getElementById('PY').value=PassingYear;
}
function edit2(){
 document.getElementById('hide3').className = "show";

var InstituteName=document.getElementById('setIName').innerHTML;
var FieldOfStudy= document.getElementById('setFOStudy').innerHTML;
var Duration= document.getElementById('setDuration').innerHTML;
var WorkExp=document.getElementById('setWE').innerHTML;

document.getElementById('setIName').innerHTML="";
document.getElementById('setFOStudy').innerHTML="";
document.getElementById('setDuration').innerHTML="";
document.getElementById('setWE').innerHTML="";

document.getElementById('IName').value=InstituteName;
document.getElementById('FOStudy').value=FieldOfStudy;
document.getElementById('Duration').value=Duration;
document.getElementById('WE').value=WorkExp;

}
function skills(){
    var userNum=localStorage.getItem('userNumber');
    var getUser=localStorage.getItem('users');
    getUser=JSON.parse(getUser);
    var inputUser =document.getElementById("skill").value;
       if(inputUser==""){
           alert("Please Enter Your Skills");
       }
else{
    if(skillsList==0){
    for(var i=0;i<getUser[userNum].userSkills.length;i++){
   skillArry[i]=getUser[userNum].userSkills[i];
   skillsList=getUser[userNum].userSkills.length;
    }}
    var creatTag=document.createElement("LI");
    skillArry[skillsList]=inputUser;
    var textTag=document.createTextNode(skillArry[skillsList]);
    creatTag.appendChild(textTag);
    document.getElementById("skills").appendChild(creatTag).className="newLi";
    getUser[userNum].userSkills=skillArry;
    localStorage.setItem('users',JSON.stringify(getUser));
    inputUser =document.getElementById("skill").value="";
    skillsList++;
}}
function portfolio(){
    var userNum=localStorage.getItem('userNumber');
    var getUser=localStorage.getItem('users');
    getUser=JSON.parse(getUser);
    var inputUser =document.getElementById("portfolio").value;
       if(inputUser==""){
           alert("Please Enter Your Skills");
       }
else{
    if(portfolioList==0){
    for(var i=0;i<getUser[userNum].userPortfolio.length;i++){
   portfolioArry[i]=getUser[userNum].userPortfolio[i];
   portfolioList=getUser[userNum].userPortfolio.length;
    }}
    var creatTag=document.createElement("LI");
    portfolioArry[portfolioList]=inputUser;
    var textTag=document.createTextNode(portfolioArry[portfolioList]);
    creatTag.appendChild(textTag);
    document.getElementById("allPortfolio").appendChild(creatTag).className="newLi";
    getUser[userNum].userPortfolio=portfolioArry;
    localStorage.setItem('users',JSON.stringify(getUser));
    inputUser =document.getElementById("portfolio").value="";
    portfolioList++;
}}
function profilePic(){
        var arr=[];
       var preview = document.getElementById('dp1'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var userNum=localStorage.getItem('userNumber');
    var getUser=localStorage.getItem('users');
    getUser=JSON.parse(getUser);
    // getUser[userNum].userProfilePic1=preview;
    // getUser[userNum].userProfilePic2=file;
    // localStorage.setItem('users',JSON.stringify(getUser));    
       var reader  = new FileReader();
       reader.onloadend = function () {
           preview.src = reader.result;
       }
       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }
  function profilePicData(){
//        var userNum=localStorage.getItem('userNumber');
//     var getUser=localStorage.getItem('users');
//     getUser=JSON.parse(getUser);
//    var preview=getUser[userNum].userProfilePic;  
//    var file=getUser[userNum].userProfilePic;
//        var reader  = new FileReader();
//        reader.onloadend = function () {
//            preview.src = reader.result;
//        }
//        if (file) {
//            reader.readAsDataURL(file); //reads the data as a URL
//        } else {
//            preview.src = "";
//        }
  }