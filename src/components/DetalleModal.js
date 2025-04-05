import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetalleModal = ({ visible, pieza, onClose }) => {
    if (!pieza) return null;
    
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Detalle de la pieza</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Icon name="close" size={24} color="#333" />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.separator} />
                    
                    <View style={styles.infoContainer}>
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Pieza:</Text>
                            <Text style={styles.value}>{pieza.nombre}</Text>
                        </View>
                        
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Marca:</Text>
                            <Text style={styles.value}>{pieza.marca}</Text>
                        </View>
                        
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>No. Serie:</Text>
                            <Text style={styles.value}>{pieza.serie}</Text>
                        </View>
                        
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Fecha de cambio:</Text>
                            <Text style={styles.value}>{pieza.fecha}</Text>
                        </View>
                    </View>
                    
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={onClose}
                    >
                        <Text style={styles.buttonText}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '85%',
        height: '85%',
        backgroundColor: 'white',
        borderRadius: 15,
        paddingBottom: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    closeButton: {
        padding: 5,
    },
    separator: {
        height: 1,
        backgroundColor: '#e9ecef',
        marginBottom: 15,
    },
    infoContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    label: {
        fontSize: 16,
        color: '#6c757d',
        width: 120,
        fontWeight: '500',
    },
    value: {
        fontSize: 16,
        color: '#2c3e50',
        flex: 1,
        fontWeight: '400',
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 370,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default DetalleModal;