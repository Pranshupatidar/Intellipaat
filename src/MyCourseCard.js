import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MyCourseCard = props => {
  return (
    <View style={styles.cardContainer}>
      <View style={{padding: 10}}>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#000',
          }}>
          {props.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <View style={styles.rating}>
            <Text style={{fontSize: 12, fontWeight: '500', color: 'white'}}>
              4.5
            </Text>
            <Ionicons name={'star'} size={13} color={'white'} />
          </View>
          <Text>32k+ learners</Text>
        </View>
        <Text style={{fontWeight: '500'}}>Co-Created with IBM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    overflow: 'hidden',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'orange',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 20,
    marginRight: 5,
  },
});

export default MyCourseCard;
