function IdCard(props){

    const {firstName, lastName, gender, height, birth, picture} = props;

    return(
        <div className="box-idcard">
        <div className="image-card">
            <img src={picture}></img>
        </div>
        <div className="description">
            <p><b>First Name</b>: {firstName}</p>
            <p><b>Last Name</b>: {lastName}</p>
            <p><b>Gender</b>: {gender}</p>
            <p><b>Height</b>: {height.toString()}cm</p>
            <p><b>Birth</b>: {birth.toDateString()}</p>
        </div>
        
    </div>

    )

}

export default IdCard;