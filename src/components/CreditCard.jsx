import Visa from "../assets/images/visa.png"
import MasterCard from "../assets/images/master-card.svg"

function CreditCard(props){

    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    
    const divStyle = {
        backgroundColor: bgColor,
        color: color
    }

    const formattedMonth = expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;

    const cardNumber = `**** **** **** ${number.slice(-4)}`

    return(
        <div className="box-card">
        <div className="creditcard" style={divStyle}>
            <img className="flagcard" src={type === "Visa" ? Visa : MasterCard} alt="" />
            <p>{cardNumber}</p>
            <p>Expires {formattedMonth}/{expirationYear}</p>
            <p>{owner}</p>
        </div>
        </div>
    )
}

export default CreditCard;