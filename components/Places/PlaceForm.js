import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  function changeTitle(enteredText) {
    setEnteredTitle(enteredText);
  }

  return (
    <ScrollView>
      <View>
        <Text>Title</Text>
        <TextInput onChange={changeTitle} value={enteredTitle} />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({});
