import React, { useState } from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

interface Movie {
  s: string;
  results: Array<string>;
  selected: object
}

interface MovieTitle {
  title: string
}

export default function MovieSearchbox() {
  const API_URL = 'https://api.themoviedb.org/3/movie/popular';
  const API_KEY = 'd5826b4e12c757147537031e74238c63';
  const PARAMS = 'page=1';
  const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

  const [ movie, setMovie ] = useState<Movie>({
    s: 'Enter a movie..',
    results: [],
    selected: {}
  });

  const search = () => {
    axios(BASE_URL + '&s=' + movie.s)
      .then(({ data }) => {
        let results = data.results;
        console.log(data.results)
        setMovie(prevState => {
          return {
            ...prevState, results: results.map((movie: any) => { return movie.original_title })
          }
        })
      })
  };

  return (
    <TextInput style={styles.searchbox}
      onChangeText={text => setMovie(prevState => {
        return { ...prevState, s: text }
      })}
      onSubmitEditing={search}
      value={movie.s} />
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
