import React, {useState} from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Position} from '../models/Position/Position';

type Props = {
  position: Position;
  removeSeat: (position: Position) => void;
};

const Seat = ({position, removeSeat}: Props) => {
  const [removeVisible, setRemoveVisible] = useState<boolean>(false);

  const toggleRemove = () => {
    setRemoveVisible(!removeVisible);
  };

  const handleRemove = () => {
    removeSeat(position);
  };

  const isFilled = position.isFilled();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={toggleRemove}
      style={[
        styles.container,
        isFilled ? styles.filledContainer : styles.emptyContainer,
        removeVisible && styles.containerElevated,
      ]}>
      {removeVisible && (
        <TouchableOpacity style={styles.deleteButton} onPress={handleRemove}>
          <Icon name="delete-outline" size={20} color="#d32f2f" />
        </TouchableOpacity>
      )}

      <Image
        source={require('../assets/car-seat_5102957.png')}
        style={[styles.image, !isFilled && styles.imageOpaque]}
        resizeMode="contain"
      />

      <Text
        style={[styles.text, isFilled ? styles.filledText : styles.emptyText]}
        numberOfLines={1}>
        {isFilled ? position.user?.username : 'Свободно'}
      </Text>

      {position.lincenceRequired && (
        <Text style={styles.driverText}>(Шофьор)</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 1,
    maxWidth: 140,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  emptyContainer: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  filledContainer: {
    backgroundColor: '#e3f2fd',
    borderWidth: 1,
    borderColor: '#bbdefb',
  },
  containerElevated: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  deleteButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottomLeftRadius: 12,
    padding: 6,
    zIndex: 10,
  },
  image: {
    width: '50%',
    height: '50%',
    marginBottom: 8,
  },
  imageOpaque: {
    opacity: 0.5,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
  emptyText: {
    color: '#757575',
  },
  filledText: {
    color: '#1565c0',
    fontWeight: 'bold',
  },
  driverText: {
    fontSize: 10,
    color: '#757575',
    marginTop: 2,
  },
});

export default Seat;
