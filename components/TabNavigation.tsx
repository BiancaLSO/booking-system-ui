import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateScreen from "../screens/CreateScreen";
import StackNavigation from "./StackNavigation";

export type TabMain = {
  List: undefined;
  Create: undefined;
};

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="List"
        component={StackNavigation}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Create" component={CreateScreen} />
    </Tab.Navigator>
  );
}
