import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { ActivityIndicator, Text, useTheme } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ServiceListItem from '../components/ServiceListItem';
import { addCustomer, getAllCustomers, getAllService } from '../services/apiServices';
import CustomerListItem from '../components/CustomerListItem';

export default function Home({ navigation }) {
  const theme = useTheme();
  const [service, setService] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getAllCustomers();
      setService(data);
      setLoading(false);
    };

    fetchServices();
  }, [refreshing]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>

      <TouchableOpacity
        style={{ position: 'absolute', bottom: 25, right: 25, zIndex: 1 }}
        onPress={() => navigation.navigate('Customer_Add')}
      >
        <AntDesign
          name="pluscircle"
          size={40}
          color={theme.colors.primary} // Set a fallback color for testing
        />
      </TouchableOpacity>



      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View>


          <View style={styles.list}>
            <FlatList
              scrollEnabled={false}
              data={service}
              keyExtractor={({ _id }) => _id}
              renderItem={({ item }) => (
                <CustomerListItem
                  customer={item.name}
                  phone={item.phone}
                  totalMoney={item.totalSpent}
                  loyalty={item.loyalty}
                  onPress={() => {
                    navigation.navigate('Service_Detail', { id: item._id });
                  }}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: {
    width: '100%',
    height: 100,
  },
  titleContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 20,
    gap: 10,
    paddingHorizontal: 10,
  },
  service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    marginTop: 10,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    flexBasis: Dimensions.get('screen').width - 140,
  },
  servicePrice: {
    fontSize: 18,
    flexBasis: 100,
    textAlign: 'right',
  },
  addCustomer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 550,
    right: 20,
    borderRadius: 100,
  }
});
