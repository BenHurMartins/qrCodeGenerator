import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import QRCode from "react-native-qrcode";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      showModal: false
    };
  }

  toggleShowModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.showModal}
        >
          <View style={styles.containerModal}>
            <View>
              <QRCode
                value={this.state.text} // <-- here we point the value to generate the QRCode
                size={200}
                fgColor={"#F5FCFF"}
              />
              <Button
                onPress={() => this.toggleShowModal()}
                title="Close Modal"
              />
            </View>
          </View>
        </Modal>
        <View
          style={{
            marginTop: 30,
            marginBottom: 30,
            height: "30%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TextInput
            style={{
              height: "100%",
              width: "95%",
              marginTop: 50,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10
            }}
            multiline={true}
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </View>
        <Button
          onPress={() => this.toggleShowModal()}
          title="Generate QRCode"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  containerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 10
  }
});
