import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {User} from '../../models/User/User';
import {IUser} from '../../models/User/IUser';

type Props = {
  addUser: (user: IUser) => void;
};

const UserAdder = ({addUser}: Props) => {
  const [current, setCurrent] = useState<string>('');

  const handleAddUser = () => {
    if (current.trim()) {
      addUser(new User(current.trim()));
      setCurrent('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Име на пътник"
        value={current}
        onChangeText={setCurrent}
        onSubmitEditing={handleAddUser}
      />
      <TouchableOpacity
        style={[styles.button, !current.trim() && styles.buttonDisabled]}
        onPress={handleAddUser}
        disabled={!current.trim()}>
        <Icon
          name="person-add"
          size={20}
          color={!current.trim() ? '#a0a0a0' : 'white'}
        />
        <Text
          style={[
            styles.buttonText,
            !current.trim() && styles.buttonTextDisabled,
          ]}>
          Добави
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1976d2',
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 4,
    gap: 8,
  },
  buttonDisabled: {
    backgroundColor: '#e0e0e0',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextDisabled: {
    color: '#a0a0a0',
  },
});

export default UserAdder;
