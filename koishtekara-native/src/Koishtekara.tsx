import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import UserAdder from './components/main/UserAdder';
import UserEntry from './components/UserEntry';
import CarPicker from './components/main/CarPicker';
import {IUser} from './models/User/IUser';

const Koishtekara = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const removeUser = (user: IUser) => {
    setUsers(users.filter(u => u.id !== user.id));
  };

  const addUser = (user: IUser) => {
    setUsers(prev => [...prev, user]);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.card}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Добави хора</Text>
          <UserAdder addUser={addUser} />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Списък с пътници ({users.length})</Text>
          <View style={styles.chipContainer}>
            {users.map(u => (
              <UserEntry key={u.id} user={u} removeUser={removeUser} />
            ))}
            {users.length === 0 && (
              <Text style={styles.emptyText}>Няма добавени хора.</Text>
            )}
          </View>
        </View>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => console.log(users)}>
          <Text style={styles.actionButtonText}>Реши кой ще кара!</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.card, styles.carPickerCard]}>
        <Text style={styles.sectionTitle}>Избор на автомобил</Text>
        <CarPicker numberOfPeople={users.length} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  carPickerCard: {
    marginTop: 8,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  emptyText: {
    fontStyle: 'italic',
    color: '#888',
    marginTop: 8,
  },
  actionButton: {
    backgroundColor: '#2e7d32', // Green success color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Koishtekara;
