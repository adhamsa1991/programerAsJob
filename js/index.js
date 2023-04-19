function onInint() {
    console.log('ready');
}


function getUserName() {
    var userName = document.querySelector('.userName').value;
    // alert('hii')
    console.log('for ' + userName);
    var newUser = document.querySelector('.nameUser')
    newUser.innerHTML = userName

}