let infos = document.querySelector('#butInfo');

infos.addEventListener("click", function () {
    swal({
        title: "Plus d'infos!",
        text: "L\'édition génomique ou modification localisée de séquence génomique (genome editing pour les anglophones)" +
            " regroupe un ensemble de techniques de manipulation du génome visant à la modification du matériel (et donc de l\'information) génétique. " +
            "Ces techniques sont plus précises et ciblées que les techniques OGM historiques qui voient ces organismes transformés par transgenèse qui " +
            "introduit des modifications génétiques au niveau d\'un site « au hasard » dans le génome.",
        button: false,
    })
});