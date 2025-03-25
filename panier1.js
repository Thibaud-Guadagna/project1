document.addEventListener('DOMContentLoaded', () => {
    // Bouton + //
    const addTocartButtons = document.querySelectorAll('.add');

    const cartList = document.querySelector('.menuPanier'); //Endroit ou je veux que le panier s'affiche
    const cartTotal = document.querySelector('.total');

    // Je stocke les plats ajoutés dans un tableau vide pour le moment
    let cart=[];

    // J'ajoute un évènement click sur chaque bouton + //
    addTocartButtons.forEach(button => {
        button.addEventListener('click', () => {

            // Je récupère les attributs des boutons que j'ai indiqué dans mon HTML //

            const name = button.getAttribute('name'); //Nom du Plat //
            const price =  parseFloat(button.getAttribute('value')); //Prix du Plat //

            //ParseFloat parce que value dans le fichier html est une string et je veux un nombre pour faire des calculs //
            
            //querySelector ne renverrait que le premier bouton trouvé et getElementsById ne fonctionne que si chaque bouton a un id unique ce qui est chiant donc get Attribute fonctionne //

            // J'ajoute le plat dans le panier
            cart.push({ name: name, price: price });

            // Je met à jour l'affiche du panier en appelant ma fonction qui va ajouter le montant des plats au total du panier
            updateCart();
        });
    });

    function updateCart () {
        cartList.innerHTML =""; // J'utilise innerHTML pour éviter que les éléments s'ajoutent en boucle 
        let total = 0


        // Cart est le tableau vide que j'ai crée avant et je fais une boucle dedans qui parcourt les plats (que j'ai ajouté) avec Index
        cart.forEach((item, index) => {
            total += item.price; //A chaque tour j'ajoute le prix du plat ajouté au total
            const plats = document.createElement('li')// j'ajoute le plat dans le menu ou je veux qu'il s'affiche d'ou le createElement
            plats.textContent = `${item.name} - ${item.price.toFixed(2)}€`;// Je défini comment va être affiché dans le menu le LI que je viens de créer (tofixed sert à afficher 2 chiffres après la virgule)
           
            // Je met un bouton pour retirer un objet d'un panier //
            const removeBtn = document.createElement('button')
            removeBtn.textContent'❌' // j'ajoute concrètement ce bouton
            removeBtn.addEventListener('click', () => { //j'ajoute le fait que sur le click on enlève l'item

                cart.splice(index, 1) // Splice supprime un élément du tableau 
                updateCart();
            });
        

        })};