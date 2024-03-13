// import "./main.css"

export const Main = (changePage:(newPage : "main" ) => void) =>{
    const mainView = document.createElement("div")
    const description = document.createElement("div") 

    const logo = document.createElement("img")
    logo.style.height = "280px"
    logo.style.width = '280px'
    logo.src="./daddy/logo.jpg"
    logo.alt="logo"
    logo.style.paddingLeft= "550px"
    description.innerHTML="Usługi Stolarskie Zygmunta Duraja\nTwoim partnerem w realizacji marzeń o doskonałym wnętrzu.\nJesteśmy doświadczoną firmą stolarską z ponad 30-letnim doświadczeniem,\nspecjalizującą się w rzemieślniczym kunszcie oraz najwyższej jakości materiałach.\n\nZapewniamy kompleksową obsługę – od koncepcji po realizację, zawsze z dbałością o Twoje potrzeby i oczekiwania.\nDzięki naszemu zaangażowaniu i perfekcjonizmowi, każdy detal staje się elementem wyjątkowego designu."
    description.style.whiteSpace = "pre-line"
    description.style.textAlign = "center" ;
    description.style.fontSize = "22px"
    description.style.paddingTop="30px"
    
    mainView.appendChild(logo)
    mainView.appendChild(description)
    return mainView
    
}
