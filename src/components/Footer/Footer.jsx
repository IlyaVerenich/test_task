import f from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={f.container}>
        <a href="#">Contacts</a>
        <a href="#">FAQ</a>
        <a href="#">About</a>
      </div>
    </footer>
  );
}

export default Footer;
