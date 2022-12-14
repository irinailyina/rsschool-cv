function externalLinks() {
    let contact = document.getElementsByClassName("contact");
    let links = contact[0].getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
      links[i].target = "_blank";
    }
   }
window.onload = externalLinks;