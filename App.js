import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform, Button } from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    console.log(`Số điện thoại đã nhập: ${phoneNumber}`);
  };

    const [errorMessage, setErrorMessage] = useState('');
  
    const validatePhoneNumber = (phone) => {
      // Biểu thức Regex kiểm tra số điện thoại Việt Nam
      const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
  
      if (phoneRegex.test(phone)) {
        setErrorMessage('Số điện thoại hợp lệ!');
      } else {
        setErrorMessage('Số điện thoại không hợp lệ!');
      }
    };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="auto" />
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.subtitle}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại BOP House
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      {/* <TouchableOpacity
        style={[styles.button, !phoneNumber && styles.buttonDisabled]}
        onPress={handleContinue}
        disabled={!phoneNumber}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity> */}
      <Button
        title="Kiểm tra"
        onPress={() => validatePhoneNumber(phoneNumber)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 40,
    textAlign: 'left',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});