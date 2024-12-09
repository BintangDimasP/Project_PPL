import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const Olahraga = () => {
  const activities = [
    {
      id: '1',
      title: 'Jogging',
      description: 'Jogging selama 30 menit dapat membantu meningkatkan kesehatan jantung.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5h4QcmIhQFzq58BmbFuRJ2VWQlZMQdsA_4A&usqp=CAU',
    },
    {
      id: '2',
      title: 'Push-Up',
      description: 'Latihan sederhana untuk memperkuat otot dada dan lengan.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThz_HjRGc3lVe2sRp9N_QaZl4Ndp8MePA-Pg&usqp=CAU',
    },
    {
      id: '3',
      title: 'Yoga',
      description: 'Meningkatkan fleksibilitas dan mengurangi stres melalui gerakan yoga.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Aq7JcpxpGhChXkmpr1MJkYc5kYysgrXM8g&usqp=CAU',
    },
  ];

  const renderActivity = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Latihan Olahraga</Text>
      <FlatList
        data={activities}
        renderItem={renderActivity}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default Olahraga;
