
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For search and add icons
import { useNavigation } from 'expo-router';


const HomeScreen=() =>{
  const navigation = useNavigation();
  const groups = [
    { id: '1', name: 'Trip to Japan', description: 'Expenses for the Japan trip' },
    { id: '2', name: 'Family Dinner', description: 'Split family dinner expenses' },
    { id: '3', name: 'Project Expenses', description: 'Shared project resources' },
    { id: '4', name: 'Project Expenses', description: 'Shared project resources' },
    { id: '5', name: 'Project Expenses', description: 'Shared project resources' },
    { id: '6', name: 'Project Expenses', description: 'Shared project resources' },
    { id: '7', name: 'Project Expenses', description: 'Shared project resources' },
    { id: '8', name: 'Project Expenses', description: 'Shared project resources' },
    { id: '9', name: 'Project Expenses', description: 'Shared project resources' },
    { id: '10', name: 'Project Expenses', description: 'Shared project resources' },
    { id: '11', name: 'Project Expenses', description: 'Shared project resources' },
    { id: '12', name: 'Projeckmknn', description: 'Shared project resources' },
    // Add more groups as needed
  ];

  const renderGroupItem = ({ item }) => (
    <ThemedView style={styles.groupContainer}>
      <ThemedText style={{fontSize:16,fontWeight:"500",color:"white"}} >{item.name}</ThemedText>
      <ThemedText style={{color:"#abb6c3",fontSize:13}}>{item.description}</ThemedText>
    </ThemedView>
  );

  return (
    <View style={styles.mainSection}>
      <View style={styles.headerContainer}>
            {/* Left Side: SplitBro text */}
            <ThemedText style={styles.headerTitle} type="title">Split Bro</ThemedText>

            {/* Right Side: Icons */}
            <View style={styles.headerIcons}>
              <Ionicons name="search" size={18} color="white" style={styles.icon} />
              <Ionicons name="person-add-outline" size={18} color="white" style={styles.icon} />
            </View>
          </View>
        {/* Section: Groups List */}
        <FlatList
          data={groups}
          keyExtractor={(item) => item.id}
          renderItem={renderGroupItem}
          contentContainerStyle={styles.groupList}
        />

        {/* Bottom padding to make space for the sticky button */}
        {/* <View style={{ height:10}} /> */}

      {/* Sticky Button: Add Expense */}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('screens/add-expense')}>
        <Ionicons style={styles.addButtonIcon}  name="add" size={20} color="white" />
        <ThemedText style={styles.addButtonText}  >Add Expense</ThemedText>
      </TouchableOpacity>
    </View>
    
  );
}


const styles = StyleSheet.create({
  mainSection:{
    // backgroundColor: '#111112',
    flex:1,
    fontFamily:"monospace"
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    // backgroundColor: '#111112',
    height: 50,
  },
  headerTitle: {
    fontSize: 22,
    color: 'white',
    fontFamily:"Roboto",
    fontWeight:"bold"

  },
  headerIcons: {
    flexDirection: 'row',
    color:"#acb6c3",
    fontSize:15
  },
  icon: {
    marginLeft: 15,
  },
  groupList: {
    paddingHorizontal: 0,
    // margin: 10,
    // borderRadius: 8,
  },
  groupContainer: {
    backgroundColor: '#19191a',
    color:"white",
    padding: 10,
    paddingTop:15,
    // borderBottomWidth:0.5,
    // borderBottomColor:"#48484b",
    paddingHorizontal:20,
    marginVertical: 0,
    // borderRadius: 10,
    fontFamily:"Roboto"

  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#7c59e2',
    borderRadius: 50,
    padding: 10,
    paddingEnd:18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    flexDirection:"row"
  },
  addButtonIcon:{
    paddingRight:3
  },
  addButtonText:{
    fontWeight:"500",
    fontSize:15
  }
});



export default HomeScreen;