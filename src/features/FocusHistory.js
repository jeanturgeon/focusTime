import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = (props) => {
  if (!props.history || props.history.length === 0) {
    return <Text style={styles.title}>We haven't focused on anything yet</Text>;
  }

  const renderItem =({item}) => <Text style={styles.item}>- {item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList 
        data={props.history}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingLeft: spacing.lg,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',    
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
  }
});
