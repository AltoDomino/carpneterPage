import { Gallery } from "./src/gallery";
import { Contact } from "./src/contact";
import { Main } from "./src/main";

let currentView: HTMLElement | null = null;

const root = document.getElementById("whole")

const renderMainView = () => {
  const mainView = Main(() => renderMainView());
  renderView(mainView);
};

const renderShopView = () => {
  const contactView = Contact(() => renderShopView());
  renderView(contactView);
};

const renderExpView = () => {
  const GalleryView = Gallery(() => renderExpView());
  renderView(GalleryView);
};

const renderView = (newView: HTMLElement) => {
  if (root && currentView) {
    root.replaceChild(newView, currentView);
    currentView = newView;
  } else if (root) {
    root.appendChild(newView);
    currentView = newView;
  }
};

const topContainer =document.createElement("div")
const buttonContainer = document.createElement("div")
const mailPhone = document.createElement("div")
const mail = document.createElement("a")
const phone  = document.createElement("a")
const wood = document.createElement("img")
wood.src="./daddy/woood.png"  

mail.href="mailto:zygmuntduraj@wp.pl"
phone.href ="tel:+48501780726"
mail.innerHTML="zygmuntduraj@wp.pl"
phone.innerHTML= "501 780 726"
topContainer.style.display="flex"
topContainer.style.justifyContent="space-between"
topContainer.style.flexDirection = "row"

mailPhone.appendChild(mail)
mailPhone.appendChild(phone)
mailPhone.style.display="flex"
mailPhone.style.flexDirection="column"
mailPhone.style.gap="5px"

const galleryButton = document.createElement("button");
galleryButton.classList.add("GALERIA");
galleryButton.innerHTML ="GALERIA"
galleryButton.onclick = renderExpView;

const contactButton = document.createElement("button");
contactButton.classList.add("KONTAKT");
contactButton.innerHTML = "O FIRMIE";
contactButton.onclick = renderMainView;

const aboutButton = document.createElement("button");
aboutButton.classList.add("OFIRMIE");
aboutButton.innerHTML = "KONTAKT";
aboutButton.onclick = renderShopView;



buttonContainer.appendChild(galleryButton);
buttonContainer.appendChild(contactButton);
buttonContainer.appendChild(aboutButton);
topContainer.appendChild(buttonContainer)
topContainer.appendChild(mailPhone)

root?.appendChild(topContainer);
root?.appendChild(wood)

renderMainView();
