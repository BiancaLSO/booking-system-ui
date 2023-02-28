import { StatusBar, StyleSheet } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { SafeAreaView } from "react-navigation";
import Booking from "../components/Booking";
import { BookingEntity } from "../entities/BookingEntity";

export default function ListScreen() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      axios
        .get("https://7248-109-58-197-226.eu.ngrok.io/bookings")
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
      <Text style={styles.title}>Bookings</Text>
      <SafeAreaView>
        <FlatList
          data={bookings}
          renderItem={({ item }: { item: BookingEntity }) => (
            <Booking booking={item} />
          )}
          keyExtractor={(item) => "" + item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25,
  },
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
