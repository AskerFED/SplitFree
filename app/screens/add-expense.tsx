import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the back and tick icons
import { useNavigation } from 'expo-router';

export default function AddExpenseScreen({  }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const navigation = useNavigation();

  const handleSave = () => {
    // Save logic for the expense
    console.log('Expense Saved:', { name, amount });
    // Navigate back after saving
    navigation.goBack();
  };

  return (
    <SafeAreaView  style={styles.container}>
      {/* Sticky Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Expense</Text>
        <TouchableOpacity onPress={handleSave}>
          <Ionicons name="checkmark" size={24} color="#64dd93" />
        </TouchableOpacity>
      </View>

      {/* Form Fields */}
      <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>

      <View style={styles.formWrapper}>

      <Text style={styles.label}>Expense Name</Text>

        <TextInput
          style={styles.input}
          placeholder="Expense Name"
          placeholderTextColor="#777983"
          value={name}
          onChangeText={setName}
        />
        </View>
      <View style={styles.formWrapper}>

        <Text style={styles.label}> Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          placeholderTextColor="#777983"
          value={amount}
          onChangeText={setAmount}
        />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    color:"white",
    paddingTop:40,
    backgroundColor:"#19191a",

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color:"white",

    // backgroundColor: '#111112',
    height: 50,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:"white"

  },
  formContainer: {
    padding: 16,

  },
  formWrapper:{
    flexDirection:"row",
    alignItems: "center",  
    padding:2, 
    paddingBottom:10
  } ,
  label:{
    fontSize: 16,
    color: 'white',  // Label color
    width:"40%",
    paddingLeft:10,
  },
  input: {
    width:"55%",
    height: 40,
    color:"white",
    borderColor: 'darkgrey',
    borderBottomWidth: 0.5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
