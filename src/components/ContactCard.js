import React from "react";

const ContactCard = (props) => {
    const {id,name,email} = props.Contact;

    return( <div className = "item">
    <div className="contact">
    <div className="header"> {name}</div>
    <div>{email}</div>
    </div>
    <i className="trash alternate outline icon">
        style={{color:"red", margineTop:"7px"}}
    </i>
    </div>);

};

export default ContactCard;