import React from "react";
import { Modal } from "antd";

const Modal = (props) => {
    return (
        <Modal
            title="New Contact"
            visible={props.visible}
            onOk={props.onOk}
            onCancel={props.onCancel}
        >
            <form>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={this.state.firstName}
                        onChange={(e) =>
                            this.setState({
                                firstName: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={this.state.lastName}
                        onChange={(e) =>
                            this.setState({
                                lastName: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label>Umur</label>
                    <input
                        type="text"
                        className="form-control"
                        id="age"
                        value={this.state.age}
                        onChange={(e) => this.setState({ age: e.target.value })}
                    />
                </div>
            </form>
        </Modal>
    );
};

export default Modal;
