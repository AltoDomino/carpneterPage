// import "./contact.css"

export const Contact = (changePage:(newPage : "contact" ) => void): HTMLElement =>{
    const stayInTouch = document.createElement ("div")
    const contactView = document.createElement("div")
    const form =  document.createElement("form") as HTMLFormElement
    const inputName =  document.createElement("textArea") as HTMLTextAreaElement
    const inputMail =  document.createElement("input") as HTMLInputElement
    const to = document.createElement("input") as HTMLInputElement
    const subject = document.createElement("input") as HTMLInputElement
    const submit = document.createElement("input") as HTMLInputElement

    inputName.name = "text"
    inputName.id = "text"
    inputName.placeholder= "WIADOMOŚĆ"
    inputName.style.height= "100px"
    inputName.style.width= "500px"
    inputMail.type="email"
    inputMail.name="myEmail"
    inputMail.placeholder= "MÓJ MAIL "
    inputMail.style.width = "300px"
    subject.name = "topic"
    subject.placeholder= "TEMAT"
    subject.style.width="300px"
    to.type= "email"
    to.name= "emailTo"
    to.placeholder= "ODBIORCA"
    to.style.width="300px"
    submit.type = "submit"
    submit.innerHTML="wyślij"
    form.action="/send-mail"
    form.method= "POST"
    form.style.display= "flex"
    form.style.justifyContent = "space-evenly"
    form.style.flexDirection = "column"
    form.style.gap= "30px"
    form.style.alignItems= "center"
    stayInTouch.innerHTML = "SKONTAKTUJ SIĘ Z NAMI"
    stayInTouch.style.fontSize= "50px"
    
    form.appendChild(stayInTouch)
    form.appendChild(subject)
    form.appendChild(inputName)
    form.appendChild(inputMail)
    form.appendChild(to)
    form.appendChild(submit)
    contactView.appendChild(form)


    const send = async()=>{
     const sendRespone= fetch("http://send-mail")
    const mail =(await sendRespone).json()
    }

    return contactView

        }
