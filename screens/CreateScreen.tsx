import axios from "axios";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  DatePickerIOS,
  TouchableOpacity,
} from "react-native";

export default function CreateScreen(props: any) {
  const [name, setName] = useState();
  const [numberOfPeople, setNumberOfPeople] = useState();
  const [date, setDate] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [comment, setComment] = useState();

  const createBooking = async () => {
    axios
      .post("http://localhost:3000/bookings", {
        name,
        numberOfPeople,
        date,
        phone,
        email,
        comment,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChange={() => setName}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Number of people"
          value={numberOfPeople}
          onChange={() => setNumberOfPeople}
        ></TextInput>
        {/* <DatePickerIOS placeholder="Name" value={date}
          onChange={() => setDate}></DatePickerIOS> */}
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChange={() => setPhone}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChange={() => setEmail}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Comment"
          value={comment}
          onChange={() => setComment}
        ></TextInput>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={() => createBooking()}>
          <Text style={styles.text}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 13,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,

    alignSelf: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
  },
  text: {
    textAlign: "center",
  },
  btnContainer: {
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
