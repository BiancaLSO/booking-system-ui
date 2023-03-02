import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { BookingEntity } from "../entities/BookingEntity";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackMain } from "./StackNavigation";

type bookingScreenProp = StackNavigationProp<StackMain, "Edit">;

export default function Booking({ booking }: { booking: BookingEntity }) {
  const navigation = useNavigation<bookingScreenProp>();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Edit", { booking })}
    >
      <Text style={styles.text}>
        {booking.name} {booking.phone}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007aff",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
