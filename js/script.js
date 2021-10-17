let user = document.getElementById('userN');
let pass = document.getElementById('pass');
let flag=1;
function formValidate(){
    if(user.value == ''){
        let userError = document.getElementById('userErr').innerHTML='Username is Empty*';
        flag=0;
     
    }else if(user.value.length < 3){
        let userError = document.getElementById('userErr').innerHTML='Not less than 3 character*';
        flag=0;
    }else{
        let userError = document.getElementById('userErr').innerHTML='';
        flag=1;
    }


    if(pass.value==""){
        let passError = document.getElementById('passErr').innerHTML="Password Empty*"
        flag=0;
    }else{
        let passError = document.getElementById('passErr').innerHTML="";
        flag=1;
    }


    if(flag){
        return true;
    }else{
        return false;
    }
}