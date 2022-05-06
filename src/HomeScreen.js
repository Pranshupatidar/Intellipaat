import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FreeCourseCard from './FreeCourseCard';

const HomeScreen = () => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      'https://bigdataonlinetraining.us/academy/mobile_apis/V1/courses.php?type=getcoursebysearch&search_key=Data',
    );
    let json = await response.json();
    let listData = json.data;
    for (const n in listData) {
      console.log(listData[n].course_details.post_title);
      setList(prev => [...prev, listData[n].course_details]);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput placeholder="Search your courses here..." />
        <Ionicons name={'search'} size={25} color={'grey'} />
      </View>
      <View style={styles.category}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#000',
            }}>
            Free courses
          </Text>
          <Text
            style={{
              backgroundColor: 'rgb(234,207,98)',
              padding: 3,
              fontSize: 9,
              fontWeight: '500',
              borderRadius: 2,
              elevation: 5,
              marginHorizontal: 10,
              marginTop: 4,
            }}>
            FREE
          </Text>
        </View>
        <Text style={{color: 'rgb(100,89,178)'}}>See all</Text>
      </View>
      {console.log(list)}
      <View style={{flex: 1}}>
        <FlatList
          data={list}
          keyExtractor={item => item.ID}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <FreeCourseCard title={item.post_title} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  category: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: 'rgb(242,242,242)',
    borderRadius: 8,
  },
});

export default HomeScreen;
