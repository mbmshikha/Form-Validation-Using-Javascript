let myForm=document.getElementById('signup');
console.log('myForm',myForm);
console.log(myForm.elements);
//console.log(myForm.elements['uname'].value);
let uname;
let pwrd;
let emailid;
let gender;
let subjects;
let selectedsubjects=[];
const NAME_REQUIRED=' Please Enter User Name';
const EMAIL_REQUIRED=' Please Enter Email ID';
const VALID_EMAIL_MESSAGE='Enter Valid Email ID';
const EMAIL_REG_EX =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

myForm.addEventListener('submit',(event)=>
{
	
	event.preventDefault();
	
	uname=myForm.elements['uname'];
	emailid=myForm.elements['emailid'];
	console.log(uname,emailid);
	console.log("my validation");
	var isNameValid=hasValue(uname,NAME_REQUIRED);
	var isEmailValid=hasValue(emailid,EMAIL_REQUIRED)&&isValidEmail(emailid,VALID_EMAIL_MESSAGE);
	console.log(isNameValid,isEmailValid);
	gender=myForm.elements['group1'];
	console.log("gender",gender);
	subjects=myForm.querySelectorAll("input[type='checkbox']");
	//subjects=myForm.elements['group2'];
	console.log("subjects ",subjects);
	subjects.forEach((subject)=>
	{
		console.log("sub",subject.checked);
		if(subject.checked)
			selectedsubjects.push(subject);
	});
	
	
	if(isNameValid&&isEmailValid)
		myForm.submit();
	
});
document.querySelector('input').addEventListener('input',(event)=>
{
	console.log('input',event.currentTarget.value);
	
})

function hasValue(input,msg)
{
	console.log("check valid :",uname.value.trim());
	if(uname.value.trim()==="")
	{
		return showError(input,msg);
	}
	return true;
}
function isValidEmail(input,msg)
{
	let val=input.value.trim();
	console.log(val,EMAIL_REG_EX.test(val));
	if(EMAIL_REG_EX.test(val))
		return true;
	return showError(input,msg);
	
}
function showError(input,msg)
{
	
	showMessage(input,msg);
	return false;
}

function showMessage(input,msg)
{
	let errorElement=input.parentNode.querySelector("small");
	errorElement.innerText=msg;
	errorElement.setAttribute("class",'errorMsg');
}

