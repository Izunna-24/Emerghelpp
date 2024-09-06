import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';


const RegisterMedic = () => {
    const navigation = useNavigation();


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleBecomeAMedicClick = () => {
        if (firstName && lastName && gender && phoneNumber && email && specialization && password) {
            setSubmitted(true);
            navigation.navigate('Dashboard');
        } else {
            Alert.alert("Error", "Please fill in all the fields before submitting!");
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Become A Medic</Text>

                <TextInput
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                    style={styles.input}
                    placeholderTextColor={"black"}
                />
                <TextInput
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                    style={styles.input}
                    placeholderTextColor={"black"}
                />

                <View style={styles.input}>
                    <Text>Gender</Text>
                    <Picker
                        SelectedValue = {gender}
                        style={styles.picker}
                        onValueChange={(itemValue) => setGender(itemValue)}
                    >
                        <Picker.Item label="Select Gender" value=""/>
                        <Picker.Item label="Male" value = "Male"/>
                        <Picker.Item label="Female" value = "Female" />

                    </Picker>
                </View>

                <TextInput
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="number-pad"
                    style={styles.input}
                    placeholderTextColor={"black"}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    style={styles.input}
                    placeholderTextColor={"black"}
                />

                <View style={styles.input}>
                    <Text>Specialization</Text>
                    <Picker
                        SelectedValue = {specialization}
                        style={styles.picker}
                        onValueChange={(itemValue) => setSpecialization(itemValue)}
                    >
                        <Picker.Item label="Select Specialization" value=""/>
                        <Picker.Item label="cardiology" value = "cardiology"/>
                        <Picker.Item label="neurology" value = "neurology" />
                        <Picker.Item label="orthopedics" value = "orthopedics" />
                        <Picker.Item label="Pediatrics" value = "Pediatrics" />
                        <Picker.Item label="Nurse" value = "Nurse" />
                        <Picker.Item label="Lab Scientist" value = "Lab Scientist" />
                        <Picker.Item label="Para Medic" value = "Para Medic" />
                        <Picker.Item label="Optometrist" value = "Optometrist" />
                        <Picker.Item label="Doctor" value="Doctor"/>
                        <Picker.Item label="Surgeon" value="Surgeon"/>
                    </Picker>
                </View>

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                    placeholderTextColor={"black"}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleBecomeAMedicClick}
                >
                    <Text style={styles.buttonText}>Become A Medic</Text>
                </TouchableOpacity>

                {submitted && (
                    <View style={styles.successMessage}>
                        <Text style={styles.successText}>Medic profile created!</Text>
                    </View>
                )}

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backLink}
                >
                    <AntDesign name="arrowleft" size={16} color="#ff8381" />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>

                <Text style={styles.footerText}>
                    Already have an account?
                    <Text
                        style={styles.dashboardLink}
                        onPress={() => navigation.navigate('Dashboard')}
                    >
                        Dashboard
                    </Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        padding: 40,
        height: 20,
    },
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
        width: '100%',
        maxWidth: 400,
        transform: [{ scale: 1.05 }],
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderColor: '#cccccc',
        color: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 12,
        marginBottom: 12,
    },

    picker: {
        height: 50,
        width: '100%',
    },

    selectInput: {
        flex: 1,
    },
    button: {
        backgroundColor: '#ff8381',
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    successMessage: {
        marginTop: 20,
        backgroundColor: '#d4edda',
        padding: 10,
        borderRadius: 5,
    },
    successText: {
        color: '#155724',
    },
    backLink: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    backText: {
        color: '#ff8381',
        marginLeft: 8,
    },
    footerText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#ff8381',
        fontWeight: 'bold',
    },
    dashboardLink: {
        color: '#ff8381',
        textDecorationLine: 'underline',
        marginLeft: 4,
    },
});

export default RegisterMedic;