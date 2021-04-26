import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.headerText}>Header</Text>
       </View>
      <View style={styles.body}>
                <Text style={styles.bodyText}>Body</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Footer</Text>
            </View>
    </View>
  );
}

const styles = {
  container: {
      flex: 1,
      backgroundColor: '#EEEEEE',
      margin: 5,
      padding: 5
    
  },
  header: {
    flex: 0.5,
    backgroundColor: '#000000',
    justifyContent: "center",
  },
  body: {
    flex: 3,
    backgroundColor: '#ffff00',
    justifyContent: "center",
},
  
  footer: {
    flex: 0.5,
    backgroundColor: '#ec2a00',
    justifyContent: "center",
},

  headerText: {
      color: 'white',
      fontSize: 50,
      textAlign: 'center',
      
},
  bodyText: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
},
footerText: {
  color: 'white',
  fontSize: 50,
  textAlign: 'center',
},

};

