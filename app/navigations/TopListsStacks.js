import { createStackNavigator } from "react-navigation-stack";
import TopRestaurantsScreen from "../screens/TopRestaurants";

const TopListScreenStacks = createStackNavigator({
  TopLists: {
    screen: TopRestaurantsScreen,
    navigationOptions: () => ({
      title: "Los mejores restaurantes"
    })
  }
});
export default TopListScreenStacks;
