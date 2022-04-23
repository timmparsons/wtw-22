import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { DISCOVER_API } from '../api/api';

export default function MovieSearchbox() {

  useEffect(() => {
    fetch(DISCOVER_API, {})
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <View>
      );
    }
    
const styles = StyleSheet.create({
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
