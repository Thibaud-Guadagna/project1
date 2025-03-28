// Panier //
document.addEventListener("DOMContentLoaded", function () {
	const openbtn = document.getElementById("pictopanier");
	const closebtn = document.getElementById("closebtn");
	const sideBar = document.getElementById("panier");

	openbtn.addEventListener("click", () => {
		console.log("Ouverture du panier");
		sideBar.classList.toggle("translate-x-full");
	});

	closebtn.addEventListener("click", () => {
		console.log("Fermeture du panier");
		sideBar.classList.add("translate-x-full");
	});
});

document.addEventListener("DOMContentLoaded", () => {
	// Menu Burger //
	const button = document.getElementById("burgerBtn");
	const button1 = document.getElementById("burgerBtn1");
	const bar1 = document.getElementById("barre1");
	const bar2 = document.getElementById("barre2");
	const bar3 = document.getElementById("barre3");
	const menu = document.getElementById("openMenu");

	button.addEventListener("click", () => {
		button.classList.add("z-999999");
		menu.classList.toggle("translate-x-full");
		console.log("click");

		bar1.classList.toggle("rotate-45");
		bar1.classList.toggle("translate-y-2.5");

		bar2.classList.toggle("opacity-0");

		bar3.classList.toggle("-rotate-45");
		bar3.classList.toggle("-translate-y-2.5");
	});
	button1.addEventListener("click", () => {
		button.classList.add("z-999999");
		menu.classList.toggle("translate-x-full");
		console.log("click");

		bar1.classList.toggle("rotate-45");
		bar1.classList.toggle("translate-y-2.5");

		bar2.classList.toggle("opacity-0");

		bar3.classList.toggle("-rotate-45");
		bar3.classList.toggle("-translate-y-2.5");
	});

	// Bouton Commander //
	const boutoncommander = document.querySelector(".boutoncommander");
	boutoncommander.addEventListener("click", () => {
		alert(
			"Votre commande a bien été prise en compte. \n Elle sera disponible dans 30 minutes à la caféteria. \n Réglement sur place.\n Merci",
		);
	});

	//Filtres
	const buttons = document.querySelectorAll(".filtres button");

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const category = button.id;
			const asides = document.querySelectorAll("aside");

			asides.forEach((aside) => {
				if (category === "all" || aside.classList.contains(category)) {
					aside.style.display = "block";
				} else {
					aside.style.display = "none";
				}
			});
		});
	});
});
