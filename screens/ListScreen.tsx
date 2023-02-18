import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";
import { useEffect, useState } from "react";
import { Platform, View, Text, FlatList, Button } from "react-native";
import { SafeAreaView } from "react-navigation";
import Booking from "../components/Booking";
import { StackMain } from "../components/Navigation";
import { BookingEntity } from "../entities/BookingEntity";

type bookingScreenProp = StackNavigationProp<StackMain, "Edit">;

export default function ListScreen() {
  const [bookings, setBookings] = useState([]);
  const navigation = useNavigation<bookingScreenProp>();

  const local = Platform.OS === "android" ? "localhost" : "10.0.2.2";

  useEffect(() => {
    const fetchBookings = async () => {
      axios
        .get("http://" + local + ":3000/booking")
        .then((response) => {
          console.log(response.data);
          setBookings(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchBookings();
  }, []);

  return (
    <View>
      <Text>This is the list screen</Text>
      <SafeAreaView>
        <FlatList
          data={bookings}
          renderItem={({ item }: { item: BookingEntity }) => (
            <Booking booking={item} />
          )}
          keyExtractor={(item) => "" + item.id}
        />
      </SafeAreaView>
      {/* <Button
        onPress={() => navigation.navigate("Edit")}
        title="Go to Edit Screen"
      /> */}
    </View>
  );
}
