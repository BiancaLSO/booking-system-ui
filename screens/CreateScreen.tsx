import axios from "axios";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  DatePickerIOS,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import { BookingsContext } from "../components/TabNavigation";

export default function CreateScreen(props: any) {
  const [name, setName] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [date, setDate] = useState(new Date());
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const { addBooking } = useContext(BookingsContext);

  const createBooking = async () => {
    axios
      .post("https://0b6f-5-179-80-205.eu.ngrok.io/bookings", {
        name,
        numberOfPeople,
        date,
        phone,
        email,
        comment,
      })
      .then((response) => {
        console.log(response.data);
        addBooking(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    clearForm();
  };

  const clearForm = () => {
    setName("");
    setNumberOfPeople("");
    setDate(new Date());
    setPhone("");
    setEmail("");
    setComment("");
  };

  return (
    <ScrollView>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          returnKeyType={"next"}
          autoFocus={true}
          onChangeText={(text) => setName(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Number of people"
          value={numberOfPeople}
          autoFocus={true}
          returnKeyType={"next"}
          onChangeText={(text) => setNumberOfPeople(text)}
        ></TextInput>
        <DatePickerIOS
          maximumDate={new Date(2100, 11, 31)}
          date={date}
          onDateChange={(date) => setDate(date)}
        ></DatePickerIOS>
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          autoFocus={true}
          returnKeyType={"next"}
          onChangeText={(text) => setPhone(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          autoFocus={true}
          returnKeyType={"next"}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Comment"
          value={comment}
          autoFocus={true}
          returnKeyType={"next"}
          onChangeText={(text) => setComment(text)}
        ></TextInput>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={createBooking}>
          <Text style={styles.text}>Create</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
