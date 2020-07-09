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

export const DetailContact = (id) => ({
    type: types.DETAILCONTACT,
    payload: axios({
        method: "get",
        url: `${HOST}/contact/${id}`,
    }),
});

export const EditContact = (id, data) => ({
    type: types.EDITCONTACT,
    payload: axios({
        method: "put",
        data,
        url: `${HOST}/contact/${id}`,
    }),
});
