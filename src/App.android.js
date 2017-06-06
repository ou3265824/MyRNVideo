import Home from './home/HomeActivity';
import Launch from './home/LaunchActivity';
import Login from './user/LoginActivity';

import {StackNavigator} from 'react-navigation';

const App=StackNavigator({
    Launch:{screen:Launch},
    Home:{screen:Home},
    Login:{screen:Login},
    
});

export default App;