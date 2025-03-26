document.addEventListener('DOMContentLoaded', () => {
    // Bouton + //
    const addTocartButtons = document.querySelectorAll('.add');
    const cartList = document.querySelector('.menuPanier'); // Endroit où je veux que le panier s'affiche
    const cartTotal = document.querySelector('.total');
    let icone = document.getElementById('count');

    // Je stocke les plats ajoutés dans un tableau vide pour le moment
    let cart = [];
    let compteur = 0;
   
    
    button.addEventListener('click', updateCompteur);
    
    
    // J'ajoute un évènement click sur chaque bouton + //
    addTocartButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // Je récupère les attributs des boutons que j'ai indiqué dans mon HTML //
            const name = button.getAttribute('name'); // Nom du Plat //
            const price = parseFloat(button.getAttribute('value')); // Prix du Plat //
        
            
            
            
            
            // ParseFloat parce que value dans le fichier html est une string et je veux un nombre pour faire des calculs //
            
            // J'ajoute le plat dans le panier
            cart.push({ name: name, price: price });
            
            
            // Je mets à jour l'affichage du panier en appelant ma fonction qui va ajouter le montant des plats au total du panier
            updateCart();
            updateCompteur();
        });
    });
    
    function updateCart() {
        cartList.innerHTML = "<h3>Mon Panier<h3>"; // J'utilise innerHTML pour éviter que les éléments s'ajoutent en boucle 
        let total = 0;
        
        // Cart est le tableau vide que j'ai créé avant et je fais une boucle dedans qui parcourt les plats (que j'ai ajoutés) avec Index
        cart.forEach((item, index) => {
            total += item.price; // À chaque tour j'ajoute le prix du plat ajouté au total
            const plats = document.createElement('div'); // J'ajoute le plat dans l'endroit où je veux qu'il s'affiche
            plats.classList.add('flex', 'justify-between', 'items-center', 'border-b', 'py-2'); // Style Tailwind
            
            plats.textContent = `${item.name} - ${item.price.toFixed(2)}€`; // Je définis comment va être affiché dans le menu le LI que je viens de créer (toFixed sert à afficher 2 chiffres après la virgule)
            
            // Je mets un bouton pour retirer un objet du panier //
            const removeBtn = document.createElement('button');
            removeBtn.textContent = '❌'; // J'ajoute concrètement ce bouton
            removeBtn.addEventListener('click', () => { // J'ajoute le fait que sur le click on enlève l'item
                cart.splice(index, 1); // Splice supprime un élément du tableau 
                updateCart();
                updateCompteur();
            });
            
            // J'ajoute le bouton de suppression dans le li du plat
            plats.appendChild(removeBtn);
            
            // J'ajoute le plat à la liste du panier
            cartList.appendChild(plats);
        });
        
        // J'ajoute le total dans la section du panier
        cartTotal.textContent = `Total: ${total.toFixed(2)}€`;
    }
    function updateCompteur(){
        icone.textContent = cart.length;
        compteur ++;
    }
    console.log(cartList)
});