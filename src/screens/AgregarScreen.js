import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AgregarScreen = ({ navigation, route }) => {
    const [nombre, setNombre] = useState('');
    const [marca, setMarca] = useState('');
    const [serie, setSerie] = useState('');
    const [fecha, setFecha] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    // Función para validar que todos los campos obligatorios estén llenos
    const validarCampos = () => {
        if (!nombre.trim() || !marca.trim() || !serie.trim()) {
            Alert.alert(
                "Error",
                "Por favor complete todos los campos obligatorios",
                [{ text: "OK" }]
            );
            return false;
        }
        return true;
    };

    // Función para guardar la pieza y navegar hacia atrás
    const guardarPieza = () => {
        if (validarCampos()) {
            const nuevaPieza = { 
                nombre, 
                marca, 
                serie, 
                fecha: fecha.toISOString().split('T')[0] 
            };
            route.params.agregarPieza(nuevaPieza);
            navigation.goBack();
        }
    };

    // Validacion para que el campo de serie solo acepte números
    const handleSerieChange = (text) => {
        const numericValue = text.replace(/[^0-9]/g, '');
        setSerie(numericValue);
    };

    // Función para manejar el cambio de fecha
    const onChangeDate = (event, selectedDate) => {
        setShowPicker(false);
        if (selectedDate) {
            setFecha(selectedDate);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Registro de piezas</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Pieza: *</Text>
                    <TextInput
                        style={styles.input}
                        value={nombre}
                        onChangeText={setNombre}
                        placeholder="Ingrese el nombre de la pieza"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Marca: *</Text>
                    <TextInput
                        style={styles.input}
                        value={marca}
                        onChangeText={setMarca}
                        placeholder="Ingrese la marca"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>No. Serie: *</Text>
                    <TextInput
                        style={styles.input}
                        value={serie}
                        onChangeText={handleSerieChange}
                        placeholder="Ingrese el número de serie"
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Fecha de Cambio:</Text>
                    <TouchableOpacity
                        style={styles.dateButton}
                        onPress={() => setShowPicker(true)}
                    >
                        <TextInput
                            style={styles.dateInput}
                            value={fecha.toISOString().split('T')[0]}
                            editable={false}
                        />
                    </TouchableOpacity>
                </View>

                {showPicker && (
                    // DateTimePicker para seleccionar la fecha
                    <DateTimePicker
                        value={fecha}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onChangeDate}
                    />
                )}

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.saveButton]}
                        onPress={guardarPieza}
                    >
                        <Text style={styles.buttonText}>Guardar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.cancelButton]}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    formContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputGroup: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
        fontWeight: '500',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    dateButton: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    dateInput: {
        padding: 12,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        flex: 1,
        padding: 15,
        borderRadius: 8,
        marginHorizontal: 5,
    },
    saveButton: {
        backgroundColor: '#4CAF50',
    },
    cancelButton: {
        backgroundColor: '#f44336',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AgregarScreen;