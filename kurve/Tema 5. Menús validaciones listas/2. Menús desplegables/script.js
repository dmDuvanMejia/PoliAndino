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