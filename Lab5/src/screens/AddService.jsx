import { useState } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { addService } from '../services/apiServices';

export default function AddService({ navigation }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('0');

  const handleSubmit = async () => {
    const data = await addService(name, price);

    if (data) {
      navigation.navigate('TabNavigator');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style={styles.container}>
        <Text style={styles.label}>Service name *</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Must type"

        />
        <Text style={styles.label}>Price *</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
        />
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={handleSubmit}>
          Add
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,


  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    color: 'lightgrey'
  },
  button: {
    borderRadius: 10,
  },
  buttonText: {
    padding: 5,
    fontWeight: 'bold',
  },
});
