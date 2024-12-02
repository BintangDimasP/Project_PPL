import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Header } from "../components";

const TipsPolaMakananSehat = () => {
  const tips = [
    {
      id: '1',
      title: 'Makan Lebih Banyak Sayur',
      description: 'Tambahkan sayuran hijau seperti bayam, brokoli, dan kale ke dalam menu harian Anda.',
      image: 'https://a-cdn.sindonews.net/dyn/732/content/2014/11/16/152/924809/pentingnya-sayur-dan-buah-5eO-thumb.jpg',
    },
    {
      id: '2',
      title: 'Hindari Gula Berlebih',
      description: 'Kurangi konsumsi makanan manis seperti kue, soda, dan permen.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13mElGAuSOiHsuP1sVNonY_B9vlLfmxCC9sGaBgvSgzancMTrbJEW4KeUDo-vwRiALVo&usqp=CAU',
    },
    {
      id: '3',
      title: 'Perbanyak Minum Air',
      description: 'Minumlah minimal 8 gelas air setiap hari untuk menjaga hidrasi.',
      image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//90/MTA-4013882/gordon-s_gordon-s_dry_750_ml_-750_ml-_full02.jpg',
    },
  ];

  const renderTip = ({ item }) => (
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
      {/* Tambahkan Header */}
      <Header title="Tips Makanan Sehat" />

      {/* Konten Halaman */}
      <FlatList
        data={tips}
        renderItem={renderTip}
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
  },
  list: {
    padding: 20,
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

export default TipsPolaMakananSehat;
