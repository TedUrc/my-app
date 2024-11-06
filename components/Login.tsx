import { TouchableOpacity, TextInput, View, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import { verticalScale } from 'react-native-size-matters';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export default function Login(props) {
    return (
        <Formik
            initialValues={{ email: '',
                senha: '',
             }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder='E-mail' />
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={handleChange('senha')}
                        onBlur={handleBlur('senha')}
                        value={values.senha}
                        placeholder='Senha'
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSubmit} >
                        <Text style={styles.text}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#000000',
        borderRadius: 10,
        width: widthPercentageToDP('90%'),
        padding: verticalScale(22),
        marginTop: 22
    },

    text: {
        color: "#F2F4F3",
        fontSize: 22
    },

    textInput: {
        width: widthPercentageToDP('90%'),
        borderColor: '#000000',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#F2F4F3',
        fontSize: 18,
        alignSelf: 'center',
        marginTop: 22,
        padding: verticalScale(19),
    }
})