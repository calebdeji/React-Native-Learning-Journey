import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./pages/AppLearning/AppLearning";
import TechFriendScreen from "./pages/TechFriendsList/TechFriendsList";

const mainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    TechFriend: { screen: TechFriendScreen }
});

const App = createAppContainer(mainNavigator);

export default App;
