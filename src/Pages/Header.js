import React from 'react';
import { Text, 
        View,
        StyleSheet,
} from 'react-native';


function Header(props){
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>
                {props.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: 'black',
        alignItems: 'center',
    },

    headerText:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'orange',
    },

});

export default Header;
