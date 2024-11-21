import { Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, Icon } from 'react-native-paper';

export const formatNumber = q => {
    return q.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
};

export default function CustomerListItem({ customer, phone, totalMoney, loyalty, onPress }) {
    return (

        <TouchableOpacity style={styles.service} onPress={onPress}>
            <View style={{ flex: 1, }}>
                <Text style={styles.serviceName} >
                    Customer: {customer}
                </Text>
                <Text style={styles.serviceName}>
                    Phone: {phone}
                </Text >
                <Text style={styles.servicePrice}>Total money:{formatNumber(totalMoney)}</Text>

            </View >
            <View style={{ flexBasis: 100, alignItems: 'center', alignContent: 'center' }}>
                <Icon style={styles.iconSide} source="crown" size={30} color="red" />
                <Text style={styles.servicePrice}> {loyalty}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    service: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginTop: 10,
    },
    serviceName: {
        fontSize: 14,
    },
    servicePrice: {
        fontSize: 12,
        color: 'red'
    },

    iconSide: {
        flexBasis: 100
    }
});
