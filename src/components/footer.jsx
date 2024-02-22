import '../styles/footer.css'

const Footer = ({tema}) => {
    return ( 
        <div>
            <h3 className={`footer__h3 ${tema}`}> ® Diseñado y Codificado por _Enzoolionel</h3>
        </div>
     );
}
 
export default Footer;