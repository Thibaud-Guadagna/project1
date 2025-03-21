function sendMail() {
    let form = {
        name: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        email: document.getElementById("email").value,
        objet: document.getElementById("objet").value,
        message: document.getElementById("message").value,
    }
    const serviceID = "service_f6pnqxa";
    const templateID = "wildeats";
    emailjs.send(serviceID, templateID, form).then(
        alert("Email envoyé"));
}
