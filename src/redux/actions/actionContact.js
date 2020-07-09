import * as types from "../types";
import axios from "axios";
import { HOST } from "../../Env/server";

export const GetDataContact = () => ({
    type: types.GETCONTACT,
    payload: axios({
        method: "get",
        url: `${HOST}/contact`,
    }),
});

export const DeleteContact = (id) => ({
    type: types.DELETECONTACT,
    payload: axios({
        method: "delete",
        url: `${HOST}/contact/${id}`,
    }),
});

export const AddContact = (data) => ({
    type: types.ADDCONTACT,
    payload: axios({
        method: "post",
        data,
        url: `${HOST}/contact`,
    }),
});
