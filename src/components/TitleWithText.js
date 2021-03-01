import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const TitleWithText = props => {
  return (
    <View style={styles.container}>
      <Text>{props?.primaryText}</Text>
      <View />
      <Text>{props?.secondaryText}</Text>
    </View>
  );
};

export default TitleWithText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
