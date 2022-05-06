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
import MyCourseCard from './MyCourseCard';

const MyCourses = () => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      'https://bigdataonlinetraining.us/academy/mobile_apis/V1/my_course.php?type=getMycourses&user_id=55&search_key=data',
    );
    console.log(response);
    // console.log(JSON.stringify(response).replace('getMycourseshello', ''));
    let clean = JSON.stringify(response).replace('getMycourseshello', '');
    // console.log(clean);

    let json = await clean.json();
    console.log(json);

    // let listData = json.data;
    // for (const n in listData) {
    //   console.log(listData[n].course_details.post_title);
    //   setList(prev => [...prev, listData[n].course_details]);
    // }
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

      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          data={list}
          keyExtractor={item => item.ID}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <MyCourseCard title={item.post_title} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    width: '100%',
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
    margin: 10,
  },
});

export default MyCourses;
