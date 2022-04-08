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
      nextInterestIncTime: "",
      nextInterestIncAmount: "",
      nextLoanIncTime: "",
      nextLoanIncAmount: "",
      notification: [],
      purchaseReceipt: [],
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
      nextInterestIncTime: "",
      nextInterestIncAmount: "",
      nextLoanIncTime: "",
      nextLoanIncAmount: "",
      notification: [],
      purchaseReceipt: [],
      PIN: 1234,
      debt: 0.00,
      QRCode: "IjeplKd89EvcEt",
    },
    {
      fullName: "Price Antwi",
      phoneNumber: "0244726391",
      email: "prince@mail.com",
      studentID: "4710218",
      password: "1234567890",
      points: 60,
      wallet: 8003.15,
      debt: 50.00,
      nextInterestIncTime: "",
      nextInterestIncAmount: "",
      nextLoanIncTime: "",
      nextLoanIncAmount: "",
      notification: [],
      purchaseReceipt: [],
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
        default: return state;
    }
} 

export default reducer;