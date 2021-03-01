import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import {Network} from './src/network';
import {API} from './src/constants';
import moment from 'moment';

const App = () => {
  const [data, setData] = React.useState('');
  React.useEffect(() => {
    Network.post(API.launches, {}).then(response => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FlatList
          data={data.docs}
          renderItem={({item, index}) => (
            <TouchableHighlight key={item.key}>
              <View style={styles.card}>
                <Text>Success: {item?.success.toString()}</Text>
                <Text>Name: {item?.name}</Text>
                <Text>ID: {item?.id}</Text>
                <Text>
                  Date: {moment(item?.date_utc).format('hh:mm a, d/MM/YYYY')}
                </Text>
                <Text>Details: {item?.details}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginHorizontal: 16,
    marginTop: 8,
  },
});

export default App;
