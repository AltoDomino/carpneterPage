// import "./gallery.css"

export const Gallery = (changePage:(newPage : "gallery" ) => void) =>{
    const GalleryView = document.createElement("div")

    const stairs = document.createElement("img")
    const kitchen = document.createElement("img")
    const floor = document.createElement("img")
    const wardrobe = document.createElement("img")

    stairs.src="./daddy/schody.jpg"
    stairs.alt="stairs"
    stairs.style.height="450px"
    stairs.style.width="450px"

    kitchen.src="./daddy/kuchnia.jpg"
    kitchen.alt="kitchen"
    kitchen.style.height="450px"
    kitchen.style.width="450px"
    kitchen.style.paddingLeft="950px"

    floor.src="./daddy/podloga.jpg"
    floor.alt="floor"
    floor.style.height="450px"
    floor.style.width="450px"

    wardrobe.src="./daddy/meble.jpg"
    wardrobe.alt="wardrobe"
    wardrobe.style.height="450px"
    wardrobe.style.width="450px"
    wardrobe.style.paddingLeft="950px"


    GalleryView.appendChild(stairs)
    GalleryView.appendChild(kitchen)
    GalleryView.appendChild(floor)
    GalleryView.appendChild(wardrobe)

    GalleryView.style.display="flex"
    GalleryView.style.flexDirection="column"
    GalleryView.style.justifyContent="space-evenly"
    GalleryView.style.gap="30px"
    GalleryView.style.paddingTop="50px"
    

    return GalleryView
}
