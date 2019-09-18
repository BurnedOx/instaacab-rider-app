import React from 'react';
import {
    Modal,
    View
} from 'react-native';

const CustomModal = props => (
    <Modal transparent={true} visible={props.show} animationType="slide">
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        }}>
            <View style={{
                width: 300,
                height: 400,
                backgroundColor: "#fff",
                padding: 40,
                justifyContent: "center",
                alignItems: "center"
            }}>
                {props.children}
            </View>
        </View>
    </Modal>
);

export default CustomModal;