export const login = (account) => {
    return {
        type: "LOGIN",
        payload: account
    }
}

export const deposit = (balance) => {
    return {
        type: "DEPOSIT",
        payload: balance
    }
}