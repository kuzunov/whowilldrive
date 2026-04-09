import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IUser} from '../models/User/IUser';

type Props = {
  user: IUser;
  removeUser: (user: IUser) => void;
};

const UserEntry = ({user, removeUser}: Props) => {
  return (
    <View style={styles.chip}>
      <Icon name="face" size={20} color="#1976d2" style={styles.icon} />
      <Text style={styles.label}>{user.username}</Text>
      <TouchableOpacity
        onPress={() => removeUser(user)}
        style={styles.deleteButton}>
        <Icon name="cancel" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#1976d2',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  icon: {
    marginRight: 4,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginRight: 4,
  },
  deleteButton: {
    padding: 2,
  },
});

export default UserEntry;
