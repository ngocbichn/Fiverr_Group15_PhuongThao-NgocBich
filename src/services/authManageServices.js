import { api } from "../constants/api"

export const authManageServices = {
    signUp: (signUpInfo) => {
        return api.post('auth/signup', signUpInfo)
    },
    signIn: (signInInfo) => {
        return api.post('auth/signin', signInInfo)
    },
}