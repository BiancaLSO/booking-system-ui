import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { BookingEntity } from "../entities/BookingEntity";
import CreateScreen from "../screens/CreateScreen";
import DeleteScreen from "../screens/DeleteScreen";
import EditScreen from "../screens/EditScreen";
import ListScreen from "../screens/ListScreen";

export type StackMain = {
  List: undefined;
  Edit: { booking: BookingEntity };
  Delete: { booking: BookingEntity };
};

export type TabMain = {
  List: undefined;
  Create: undefined;
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    // <Tab.Navigator>
    //   <Tab.Screen name="List" component={ListScreen} />
    //   <Tab.Screen name="Create" component={CreateScreen} />
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{ title: "Bookings" }}
      />
      <Stack.Screen
        name="Edit"
        component={EditScreen}
        options={{ title: "Modify your booking" }}
      />
      <Stack.Screen
        name="Delete"
        component={DeleteScreen}
        options={{ title: "Delete" }}
      />
    </Stack.Navigator>
    // </Tab.Navigator>
  );
}
