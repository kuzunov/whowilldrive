import React, {useEffect, useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {Position} from '../../models/Position/Position';
import Seat from '../Seat';

type Props = {numberOfPeople?: number};

const CarPicker = ({numberOfPeople: _numberOfPeople}: Props) => {
  const [seatsCount, setSeatsCount] = useState<number>(0);
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    const positionsArray: Position[] = [];
    let driverSlot = true;
    for (let i = 1; i <= seatsCount; i++) {
      positionsArray.push(new Position(i, driverSlot));
      if (driverSlot) {
        driverSlot = false;
      }
    }
    setPositions(positionsArray);
  }, [seatsCount]);

  const removeSeat = (_seat: Position) => {
    setSeatsCount(prev => Math.max(0, prev - 1));
  };

  const handleSeatsChange = (text: string) => {
    const val = parseInt(text, 10);
    setSeatsCount(isNaN(val) || val < 0 ? 0 : val);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Брой места в колата</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={seatsCount > 0 ? seatsCount.toString() : ''}
          onChangeText={handleSeatsChange}
          placeholder="Въведете брой"
        />
      </View>

      <View style={styles.gridContainer}>
        {positions.map(p => (
          <View key={p.id} style={styles.gridItem}>
            <Seat position={p} removeSeat={removeSeat} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
    marginLeft: 4,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Try to space them evenly
  },
  gridItem: {
    width: '48%', // roughly half width with a bit of gap
    marginBottom: 16,
    alignItems: 'center',
  },
});

export default CarPicker;
