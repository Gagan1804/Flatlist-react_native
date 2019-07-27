import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";

import flatListData from "../data/FlatListData";

class FlatListItem extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor:
            this.props.index % 2 == 0 ? "mediumseagreen" : "tomato"
        }}
      >
        <Text style={styles.flatListItem}>{this.props.item.name}</Text>
        <Text style={styles.flatListItem}>
          {this.props.item.foodDescription}
        </Text>
      </View>
    );
  }
}

export default class FlatLisT extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 22 }}>
        <FlatList
          data={flatListData}
          renderItem={({ item, index }) => {
            //console.log(`Item = ${JSON.stringify(item)}, index= ${index}`);
            console.log("Ayyeee");
            return <FlatListItem item={item} index={index} />;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatListItem: {
    color: "#fff",
    padding: 10,
    fontSize: 15
  }
});
