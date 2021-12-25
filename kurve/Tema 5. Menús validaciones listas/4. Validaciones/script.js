function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function(event) {
    if( !event.target.matches('.dropbtn') ){
        let dropdowns = document.getElementsByClassName('dropdown-content');
        for (let index = 0; index < dropdowns.length; index++) {
            const element = dropdowns[index];
            if ( element.classList.contains('show') ) {
                element.classList.remove('show');
            }      
        }
    }
}

function validateForm() {
    let nom1 = document.forms['myForm']['nombre'].value;
    let nom2 = document.forms['myForm']['nombre2'].value;

    if( nom1 == '' ) {
        alert('El campo Primer Nombre es requerido');
        return false;
    }
    if( nom2 == '' ) {
        alert('El campo Segundo Nombre es requerido');
        return false;
    }
}