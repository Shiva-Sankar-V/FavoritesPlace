import { Button } from "react-native";
import { StyleSheet, View } from "react-native";
import { launchCameraAsync } from "expo-image-picker";

const ImagePicker = () => {
  async function takeImageHandler() {
    const image = await launchCameraAsync();
    console.log(image);
  }

  return (
    <View>
      <View></View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({});
