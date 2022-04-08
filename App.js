import HomeScreen from "./Screens/HomeScreen";
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducer";

export default function App() {
 
  const store = createStore(reducer);

  return( 
  <RootSiblingParent>
      <Provider store={store}>
          <HomeScreen />
      </Provider>
  </RootSiblingParent>
  )
}

{/* <StackNav /> */}
{/* <Signupscreen /> */}