import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";
interface I_Infobox {
  text: string;
  link: string;
  btnText: string;
}
const Infobox = ({ text, link, btnText }: I_Infobox) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl">{text}</p>

      <Link className="neo-brutalism-white neo-btn" to={link}>
        {btnText}
        <img src={arrow} alt={`Next. ${{ btnText }}.`} />
      </Link>
    </div>
  );
};

export default Infobox;
