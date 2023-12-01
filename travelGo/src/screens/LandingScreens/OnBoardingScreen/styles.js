import { Dimensions, StyleSheet } from 'react-native';
import constants from '../../../constants';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFBFB',
    },

    slideContainer: {
        alignItems: 'center',
    },

    childContainer: {
        width: '80%',
        alignItems: 'center',
        paddingBottom: 10,
    },

    footerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '10%',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
    },

    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    iconContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#625FF9',
        borderRadius: 50
    },

    imageParentContainer: {
        width: '100%',
        height: '115%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        resizeMode: 'contain',
        zIndex: -1
    },

    spriteLeft: {
        resizeMode: 'contain',

    },

    spriteRight: {
        resizeMode: 'contain',
    },

    spriteContainerLeft: {
        position: 'absolute',
        width: '100%',
        top: 0,
        bottom: 0,
        left: 0,
    },

    spriteContainerRight: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
    },

    title: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: constants.fonts.workSans600,
        color: '#000',
        textAlign: 'left',
        paddingTop: 16,
    },

    description: {
        fontSize: 18,
        lineHeight: 20,
        fontFamily: constants.fonts.workSans400,
        color: '#000',
        textAlign: 'center',
        paddingTop: 18,
    },

    indicator: {
        height: 8,
        width: 8,
        backgroundColor: '#DEDEDE',
        marginHorizontal: 4,
        borderRadius: 20,
    },

    nextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 5,
    },

    labelText: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: constants.fonts.poppins600,
        color: '#2d73dc',
        textAlign: 'left',
    },

    rightIcon: {
        color: '#FFFF',
        fontSize: 23,
    },

    doneContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#625FF9',
        borderRadius: 30,
        paddingVertical: 10,
    },

    doneText: {
        fontSize: 16,
        lineHeight: 22,
        fontFamily: constants.fonts.poppins600,
        color: '#fff',
        textAlign: 'left',
    },

    backBtn: {
        fontSize: 30,
        borderRadius: 30,
        padding: 8,
        marginTop: 10,
        backgroundColor: '#ACACAC73',
    },

    prevContainer: {
        position: 'absolute',
        top: 20,
        left: 10,
    },

    skip: {

    },

    skipTypo: {
        fontSize: 20,
        lineHeight: 22,
        fontFamily: constants.fonts.workSans600,
        color: '#9D9A9A'
    },

});

export default styles;