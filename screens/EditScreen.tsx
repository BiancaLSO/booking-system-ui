import { View, Text } from "react-native";
import { BookingEntity } from "../entities/BookingEntity";

export default function EditScreen(props: any) {
  const booking: BookingEntity = props.route.params.booking;

  return (
    <View>
      <Text>{booking.name}</Text>
    </View>
  );
}
