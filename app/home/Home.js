import React, { PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from 'absImportPaths/app/style/styles.style';
// import styles from '../style/styles.style';   // WORKS

function Home() {
  return (
    <View>
      <Text>Hello world!!!</Text>
      <Text>Hello world!!!</Text>
      <Text style={styles.red}>Hello world!!!</Text>
      <Text style={styles.red}>Hello world!!!</Text>
      <Text style={styles.red}>Hello world!!!</Text>
      <Text>Hello world!!!</Text>
    </View>
  );
}

export default Home;
