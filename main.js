const userForm = document.querySelector('#userForm');
const sbBtn = document.querySelector('#sbBtn');

sbBtn.addEventListener('click', function(){
    const form = new FormData(userForm);
    for(var val of form.values()){
        console.log(val);
    }
});