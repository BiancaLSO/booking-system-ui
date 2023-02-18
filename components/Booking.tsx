import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";
import { BookingEntity } from "../entities/BookingEntity";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackMain } from "./Navigation";

type bookingScreenProp = StackNavigationProp<StackMain, "Edit">;

export default function Booking({ booking }: { booking: BookingEntity }) {
  const navigation = useNavigation<bookingScreenProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Edit", { booking })}>
      <Text>
        {booking.name} {booking.phone}
      </Text>
    </TouchableOpacity>
  );
}
