import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state, // por las dudas desestructuro por si llego a tener mas cosas, y solo quiero reemplazar logged y name
                logged: true,
                user: action.payload
            }
        case types.logout:
            return {
                logged: false
                // no pongo el nombre porque ya no existe mas
            }
        default:
            return state;
    }
}