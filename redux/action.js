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

export const withdraw = (balance) => {
    return {
        type: "WITHDRAW",
        payload: balance
    }
}

export const resetPin = (account) => {
    return {
        type: "RESET_PIN",
        payload: account
    }
}

export const addInterest = (interest) => {
    return {
        type: "ADD_INTEREST",
        payload: interest
    }
}

export const resetLoanTimer = (time) => {
    return {
        type: "RESET_LOAN_TIMER",
        payload: time
    }
}

export const addLoan = (loan) => {
    return {
        type: "ADD_LOAN",
        payload: loan
    }
}

export const resetTimer = (time) => {
    return {
        type: "RESET_TIMER",
        payload: time
    }
}

export const resetPassword = (password) => {
    return {
        type: "RESET_PASSWORD",
        payload: password
    }
}

export const addToCart = (cart) => {
    return {
        type: "ADD_TO_CART",
        payload: cart
    }
}

export const removeItem = (cartItem) => {
    return {
        type: "REMOVE_ITEM",
        payload: cartItem
    }
}

export const addUpdatedAccount = (newAccount) => {
    return {
        type: "UPDATE_ACCOUNT",
        payload: newAccount
    }
}

export const sendMoney = (newAccount) => {
    return {
        type: "SEND_MONEY",
        payload: newAccount
    }
}

