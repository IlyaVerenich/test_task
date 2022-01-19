import f from "./Footer.module.css"

function Footer() {
    return(
        <div className={f.container}>
            <a href="#">Contacts</a>
            <a href="#">FAQ</a>
            <a href="#">About</a>
        </div>
    )
}

export default Footer