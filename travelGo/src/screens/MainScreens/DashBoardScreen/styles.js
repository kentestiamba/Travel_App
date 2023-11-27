import { Dimensions, StyleSheet } from 'react-native';
import constants from '../../../constants'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#fff",
    },

    font400: {
        fontSize: 16,
        color: '#000',
        fontFamily: constants.fonts.workSans400
    },

    font700: {
        fontSize: 20,
        color: '#000',
        fontFamily: constants.fonts.reemKufiInk700
    },

    font900: {
        fontSize: 27,
        color: '#000',
        fontFamily: constants.fonts.roboto900
    },

});

export default styles;