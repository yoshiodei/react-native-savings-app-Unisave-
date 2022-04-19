const initialState = {
    accounts: [
    {
      fullName: "Bilal Zakari",
      phoneNumber: "0206660419",
      email: "bil@mail.com",
      studentID: "4710215",
      password: "1234567890",
      points: 50,
      debt: 50.00,
      wallet: 4186.54,
      nextInterestIncTime: "1652486400000",
      nextInterestIncAmount: "",
      nextLoanIncTime: "1650931200000",
      nextLoanIncAmount: "",
      notification: [],
      transactionReport: [],
      cart:[],
      PIN: 1234,
      QRCode: "dpuVy67ieoUCE",
    },
    { 
      fullName: "Yoshi Odei",
      phoneNumber: "0271242083",
      email: "yoshi@mail.com",
      studentID: "4710219",
      password: "1234567890",
      points: 30,
      wallet: 2986.05,
      nextInterestIncTime: "1652486400000",
      nextInterestIncAmount: "",
      nextLoanIncTime: "1650931200000",
      nextLoanIncAmount: "",
      notification: [],
      transactionReport: [],
      cart:[],
      PIN: 1234,
      debt: 0.00,
      QRCode: "IjeplKd89EvcEt",
    },
    {
      fullName: "Prince Antwi",
      phoneNumber: "0244726391",
      email: "prince@mail.com",
      studentID: "4710218",
      password: "1234567890",
      points: 60, 
      wallet: 8003.15,
      debt: 50.00,
      nextInterestIncTime: "1652486400000",
      nextInterestIncAmount: "",
      nextLoanIncTime: "1650931200000",
      nextLoanIncAmount: "",
      notification: [],
      transactionReport: [],
      cart:[],
      PIN: 1234,  
      QRCode: "iHtjOsP941Et",
    },
  ],
  loggedInAccount: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN": return { ...state , loggedInAccount:[...action.payload] } 
        case "DEPOSIT": return { ...state, loggedInAccount:[action.payload] }
        case "WITHDRAW": return { ...state, loggedInAccount:[action.payload] }
        case "RESET_PIN": return { ...state, loggedInAccount:[action.payload] }
        case "ADD_INTEREST": return { ...state, loggedInAccount:[action.payload] }
        case "ADD_LOAN": return { ...state, loggedInAccount:[action.payload] }
        case "RESET_TIMER": return { ...state, loggedInAccount:[action.payload] }
        case "RESET_LOAN_TIMER": return { ...state, loggedInAccount:[action.payload] }
        case "RESET_PASSWORD": return { ...state, loggedInAccount:[action.payload] }
        case "ADD_TO_CART": return { ...state, loggedInAccount:[action.payload] }
        case "REMOVE_ITEM": return { ...state, loggedInAccount:[action.payload] }
        case "UPDATE_ACCOUNT": return { ...state, loggedInAccount:[action.payload] }
        case "SEND_MONEY": return { ...state, loggedInAccount:[action.payload] }
        default: return state;
    }
} 

export default reducer;