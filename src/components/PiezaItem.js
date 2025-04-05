import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DetalleModal from './DetalleModal';

const PiezaItem = ({ pieza, onDelete }) => {
    const [modalVisible, setModalVisible] = useState(false);
    
    // Función para confirmar eliminación
    const confirmarEliminacion = () => {
        Alert.alert(
            "Confirmar eliminación",
            `¿Estás seguro de eliminar la pieza "${pieza.nombre}"?`,
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                { 
                    text: "Eliminar", 
                    onPress: () => onDelete(pieza.id),
                    style: "destructive"
                }
            ]
        );
    };
    
    // Función para abrir el modal
    const abrirModal = () => {
        setModalVisible(true);
    };
    
    // Función para cerrar el modal
    const cerrarModal = () => {
        setModalVisible(false);
    };
    
    return (
        <>
            <TouchableOpacity 
                style={styles.container}
                onPress={abrirModal}
                activeOpacity={0.7}
            >
                <View style={styles.headerSection}>
                    <Text style={styles.nombre}>{pieza.nombre}</Text>
                    <TouchableOpacity 
                        style={styles.deleteButton}
                        onPress={(e) => {
                            e.stopPropagation(); // Evita que se propague al TouchableOpacity padre
                            confirmarEliminacion();
                        }}
                    >
                        <Icon name="delete" size={22} color="#ff6b6b" />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.separator} />
                <View style={styles.footerSection}>
                    <View style={styles.dateInfo}>
                        <Icon name="event" size={20} color="#4CAF50" />
                        <Text style={styles.fechaLabel}>Fecha de cambio:</Text>
                        <Text style={styles.fecha}>{pieza.fecha}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            
            <DetalleModal
                visible={modalVisible}
                pieza={pieza}
                onClose={cerrarModal}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        overflow: 'hidden',
    },
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    nombre: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
        flex: 1,
    },
    deleteButton: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: '#fff5f5',
        zIndex: 1,
    },
    separator: {
        height: 1,
        backgroundColor: '#e9ecef',
    },
    footerSection: {
        padding: 16,
    },
    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    fechaLabel: {
        fontSize: 14,
        color: '#6c757d',
    },
    fecha: {
        fontSize: 15,
        fontWeight: '600',
        color: '#2c3e50',
    }
});

export default PiezaItem;