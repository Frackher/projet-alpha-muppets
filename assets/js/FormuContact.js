

var envoyer=document.querySelector('#envoyer');
envoyer.addEventListener('click', recupDonnees);

function recupDonnees(){


    var contactName=document.querySelector('#contact-name');
    var contactEmail=document.querySelector('#contact-email');
    var contactMessage=document.querySelector('#contact-message');

    var tabMessage=[contactName.value,contactEmail.value,contactMessage.value].join(';');

    $.post('/alphamuppets/formulaireContact.php', {elements: tabMessage})


}