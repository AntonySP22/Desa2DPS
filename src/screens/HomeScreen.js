import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import PieceItem from '../components/PiezaItem';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
    const [piezas, setPiezas] = useState([]);

    // Función para agregar una nueva pieza
    const agregarPieza = (nuevaPieza) => {
        setPiezas([...piezas, nuevaPieza]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.addButton}
                    onPress={() => navigation.navigate('Agregar', { agregarPieza })}
                >
                    <Text style={styles.addButtonText}>Agregar Pieza</Text>
                </TouchableOpacity>
            </View>

            {piezas.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Icon name="build" size={50} color="#ccc" />
                    <Text style={styles.noData}>No hay piezas registradas</Text>
                    <Text style={styles.subText}>Presiona "Agregar Pieza" para comenzar</Text>
                </View>
            ) : (
                // FlatList para mostrar las piezas
                <FlatList
                    data={piezas}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <PieceItem pieza={item} />}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    addButton: {
        backgroundColor: '#4CAF50',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        width: '90%',
    },
    addButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noData: {
        fontSize: 18,
        color: '#999',
        marginTop: 10,
    },
});

export default HomeScreen;