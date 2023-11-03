import {useTranslation} from "react-i18next";

function Footer () {

  const {t} = useTranslation("global");

    return(
        <footer className="my_footer">
          <div className="content has-text-centered">
            <p>Put here some information relevant for u, here is your space<br/>
            Whatever u want to say is really good, don't be shy :D</p>
          </div>
        </footer>
    );
}

export default Footer;