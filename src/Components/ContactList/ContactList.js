import React from "react";
import ImageUser from "../../assets/user.jpg";

const ContactList = (props) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card m-2">
                <img
                    src={
                        props.data.photo !== "N/A"
                            ? props.data.photo
                            : ImageUser
                    }
                    className="card-img-top"
                    alt="user"
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {`${props.data.firstName} ${props.data.lastName}`}
                    </h5>
                    <p className="card-text">Age : {props.data.age}</p>
                    {/* <Link
                        to={{ pathname: "/contact-detail/" + props.data.id }}
                        className="btn btn-primary"
                    >
                        Go somewhere
                    </Link> */}
                    <div className="align-self-center">
                        <button
                            type="button"
                            className="btn btn-warning m-2"
                            onClick={props.onEdit}
                        >
                            Edit Contact
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger m-2"
                            onClick={props.onDelete}
                        >
                            Delete Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactList;
