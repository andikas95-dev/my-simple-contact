import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";

import * as actionContact from "../redux/actions/actionContact";

import Header from "../Components/Header/Header";
import ContactList from "../Components/ContactList/ContactList";

const { confirm } = Modal;

class Home extends Component {
    state = {
        titleModal: "",
        modalNewUserVisible: false,
        id: "",
        firstName: "",
        lastName: "",
        age: "",
        photo: "N/A",
    };

    async componentDidMount() {
        await this.props.GetDataContact();
    }

    DeleteUser = (id) => {
        confirm({
            title: "Are you sure delete this contact?",
            icon: <ExclamationCircleOutlined />,
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk: async () => {
                this.DeleteOk(id);
            },
            onCancel() {},
        });
    };

    DeleteOk = async (id) => {
        await this.props.DeleteContact(id);
        await this.props.GetDataContact();
    };

    AddNewUser = async () => {
        if (this.state.id !== "") {
            const { id, firstName, lastName, age, photo } = this.state;

            if (!Number(age) && age < 100) {
                message.error("Mohon umur diisi dengan angka");
            } else {
                let data = {
                    firstName,
                    lastName,
                    age,
                    photo,
                };

                await this.props.EditContact(id, data);
                this.setState({
                    titleModal: "",
                    modalNewUserVisible: false,
                    id: "",
                    firstName: "",
                    lastName: "",
                    age: "",
                });
                await this.props.GetDataContact();
            }
        } else {
            const { firstName, lastName, age, photo } = this.state;

            if (!Number(age)) {
                message.error("Mohon umur diisi dengan angka");
            } else {
                let data = {
                    firstName,
                    lastName,
                    age,
                    photo,
                };

                await this.props.AddContact(data);
                this.setState({
                    titleModal: "",
                    modalNewUserVisible: false,
                    firstName: "",
                    lastName: "",
                    age: "",
                });
                await this.props.GetDataContact();
            }
        }
    };

    EditUser = async (id) => {
        await this.props.DetailContact(id);

        const detailContact = this.props.dataContact.detailContact.data;
        this.setState({
            titleModal: "Edit Contact",
            modalNewUserVisible: true,
            id,
            firstName: detailContact.firstName,
            lastName: detailContact.lastName,
            age: detailContact.age,
        });
    };

    render() {
        const { dataContact } = this.props;

        if (dataContact.isLoading === true) {
            return <div>Loading</div>;
        } else {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <div className="row">
                            {dataContact.data.data !== undefined ? (
                                dataContact.data.data.map((item) => {
                                    return (
                                        <ContactList
                                            data={item}
                                            key={item.id}
                                            onDelete={() =>
                                                this.DeleteUser(item.id)
                                            }
                                            onEdit={() =>
                                                this.EditUser(item.id)
                                            }
                                        />
                                    );
                                })
                            ) : (
                                <div>data tidak tersedia</div>
                            )}
                        </div>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block fixed-bottom"
                        onClick={() =>
                            this.setState({
                                modalNewUserVisible: true,
                                titleModal: "Add Contact",
                            })
                        }
                    >
                        Add Contact
                    </button>

                    {/*------------------------------ MODAL ADD CONTACT ------------------------------*/}
                    <Modal
                        title={this.state.titleModal}
                        visible={this.state.modalNewUserVisible}
                        onOk={() => this.AddNewUser()}
                        onCancel={() =>
                            this.setState({ modalNewUserVisible: false })
                        }
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
                                    onChange={(e) =>
                                        this.setState({ age: e.target.value })
                                    }
                                />
                            </div>
                        </form>
                    </Modal>
                    {/*------------------------------ END MODAL ADD CONTACT ------------------------------*/}
                </div>
            );
        }
    }
}

const stateToProps = (state) => {
    return {
        dataContact: state.contact,
    };
};
const dispatchToProps = (dispatch) => {
    return {
        GetDataContact: () => dispatch(actionContact.GetDataContact()),
        DeleteContact: (id) => dispatch(actionContact.DeleteContact(id)),
        AddContact: (data) => dispatch(actionContact.AddContact(data)),
        DetailContact: (id) => dispatch(actionContact.DetailContact(id)),
        EditContact: (id, data) =>
            dispatch(actionContact.EditContact(id, data)),
    };
};

export default connect(stateToProps, dispatchToProps)(withRouter(Home));
