import { NavigationContainer } from '@react-navigation/native';
import StarterStack from './navigators/StarterStack';
import { Provider } from 'react-redux';
import appStore from './configs/appStore';

export default function App() {
  return (
   <Provider store={appStore}>
      <NavigationContainer>
          <StarterStack/>
      </NavigationContainer>
   </Provider>
  );
}

