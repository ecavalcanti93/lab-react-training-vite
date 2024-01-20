function DriverCard(props) {

    const {name, rating, img, car} = props;

    function driverStars(){
        if (rating <= 0.49) {
            return "☆☆☆☆☆";
        } else if (rating <= 1.49) {
            return "★☆☆☆☆";
        } else if (rating <= 2.49) {
            return "★★☆☆☆";
        } else if (rating <= 3.49) {
            return "★★★☆☆";
        } else if (rating <= 4.49) {
            return "★★★★☆";
        } else {
            return "★★★★★";
        }
    }

    return(
        <div className="permiso">            
            <div>
                <img className="image-driver"src={img}></img>
            </div>

            <div>
                <p>{name}</p>
                <p>{driverStars()}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;