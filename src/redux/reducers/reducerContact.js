import * as types from "../types";
import { message } from "antd";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: [],
    dataDelete: [],
};

export default function reducerContact(state = initialState, action) {
    switch (action.type) {
        case `${types.GETCONTACT}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            };
        case `${types.GETCONTACT}_PENDING`:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            };
        case `${types.GETCONTACT}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                data: action.payload.data,
            };
        case `${types.DELETECONTACT}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            };
        case `${types.DELETECONTACT}_PENDING`:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            };
        case `${types.DELETECONTACT}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                dataDelete: action.payload.data,
            };

        case `${types.ADDCONTACT}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            };
        case `${types.ADDCONTACT}_PENDING`:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            };
        case `${types.ADDCONTACT}_FULFILLED`:
            message.success("Success Add Contact");
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
            };
        default:
            return state;
    }
}
