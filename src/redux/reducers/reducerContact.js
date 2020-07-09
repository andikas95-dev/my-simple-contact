import * as types from "../types";
import { message } from "antd";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: [],
    dataDelete: [],
    detailContact: [],
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

        case `${types.DETAILCONTACT}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            };
        case `${types.DETAILCONTACT}_PENDING`:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            };
        case `${types.DETAILCONTACT}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                detailContact: action.payload.data,
            };

        case `${types.EDITCONTACT}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            };
        case `${types.EDITCONTACT}_PENDING`:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            };
        case `${types.EDITCONTACT}_FULFILLED`:
            message.success("Success Edit Contact");
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
