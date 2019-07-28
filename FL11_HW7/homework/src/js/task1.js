let userEmail = 'user@gmail.com';
let adminEmail = 'admin@gmail.com';
let userPass = 'UserPass';
let adminPass = 'AdminPass';
let inputEmail = prompt('Enter email');
let minEmail = 6;
let minPass = 5;
if(inputEmail === null || inputEmail === ''){
    alert('Canceled');
}else if(inputEmail.length < minPass){
    alert("I don't know any emails having name length less than 6 symbols");
}else if(inputEmail === userEmail || inputEmail === adminEmail){
    let inPass = prompt('Input password');
    if(inPass === null || inPass === ''){
        alert('Canceled');
    }else if(inputEmail === userEmail && inPass === userPass || inputEmail === adminEmail && inPass === adminPass){
        let change = confirm('Do you want to change your password?');
        if(change === true){
            let oldPass = prompt('Input your old password');
            if(oldPass === inPass){
                let newPass = prompt('Enter new password');
                if(newPass.length < minPass){
                    alert('It’s too short password. Sorry.');
                }else if(newPass){
                    let newConfirmPass = prompt('Enter new password again');
                    if(newPass !== newConfirmPass){
                        alert('You wrote the wrong password.');
                    }else if(newPass === newConfirmPass){
                        alert('You have successfully changed your password.');
                    }
                }
            }else{
                alert('Wrong password');
            }
        }else{
            alert('You have failed the change.');
        }
    }else{
        alert('Wrong password');
    }
}else{
    alert('I don’t know you');
}