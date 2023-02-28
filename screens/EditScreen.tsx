import { View, Text, TextInput, StyleSheet, DatePickerIOS } from "react-native";
import { BookingEntity } from "../entities/BookingEntity";

export default function EditScreen(props: any) {
  const booking: BookingEntity = props.route.params.booking;

  return (
    <View>
      <Text style={styles.title}>Modify your booking</Text>
      <TextInput style={styles.input}>{booking.name}</TextInput>
      <TextInput style={styles.input}>{booking.numberOfPeople}</TextInput>
      {/* <DatePickerIOS>{booking.date}</DatePickerIOS> */}
      <TextInput style={styles.input}>{booking.phone}</TextInput>
      <TextInput style={styles.input}>{booking.email}</TextInput>
      <TextInput style={styles.input}>{booking.comment}</TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    margin: 13,
  },
  input: {
    height: 40,
    margin: 13,
    borderWidth: 1,
    padding: 10,
  },
});
