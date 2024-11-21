import { useState } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { addCustomer, addService } from '../services/apiServices';

export default function AddCustomer({ navigation }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async () => {
        const data = await addCustomer(name, phone);

        if (data) {
            navigation.navigate('Customer_List');
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={styles.container}>
                <Text style={styles.label}>Customer name *</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Must type"

                />
                <Text style={styles.label}>Phone numberssss *</Text>
                <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
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
