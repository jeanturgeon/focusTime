import React, {useState} from 'react';
import {RoundedButton} from '../components/RoundedButton';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../utils/colors'
import {spacing} from '../utils/sizes';


export const Focus =(props) => {

  const [subject, setSubject] = useState(null);

  return(
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} onChangeText={setSubject} label='What would you like to focus on?'></TextInput>
      <View style={styles.button}>
        <RoundedButton title='+' size={50} onPress={() => props.addSubject(subject)}/>  
      </View>      
    </View>
  </View>

)};

const styles = StyleSheet.create({
  container: {
    
  },
  button: {
    justifyContent:'center'
  },  
  textInput: {
    flex: 1,
    marginRight: spacing.sm,    
  },
  inputContainer: {    
    flexDirection: 'row',
    padding: spacing.lg,
    justifyContent: 'flex-start',
  },
})