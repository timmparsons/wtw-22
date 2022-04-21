import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MovieSearchbox from './components/MovieSearchbox';

interface Movie {
  s: string;
  results: Array<string>;
  selected: object
}

interface MovieTitle {
  title: string
}

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        What To Watch
      </Text>
      <MovieSearchbox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223343',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 70,
    paddingHorizontal: 20
  },
  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20
  },
  searchbox: {
    fontSize: 20,
    fontWeight: '300',
    padding: 20,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 40
  }
});
