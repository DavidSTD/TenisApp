import { Image, Text, View, StyleSheet, ScrollView } from "react-native"

import {TENIS} from '../data/dummy_data'
import TeniDetail from "../components/TeniDetail"

function TeniDetailScree({route, navigation}) {
    const teniId = route.params.teniId

    const selectedTeni = TENIS.find((teni) => teni.id === teniId)

    return(
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedTeni.imageUrl }} />
            <Text style={styles.title}>{selectedTeni.title}</Text>

            <View>
                <Text style={styles.subtitle}>Datos</Text>
                {selectedTeni.datos.map(datos => <Text style={styles.textContent} key={datos}>{datos}</Text>)}
                <Text style={styles.subtitle}>Descripción</Text>
                {selectedTeni.informacion.map(informacion => <Text style={styles.textContent} key={informacion}>{informacion}</Text>)}
            </View>
        </ScrollView>
    )

}

export default TeniDetailScree

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 4,
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        textAlign: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    textContent: {
        fontSize: 14,
        margin: 4,
        marginVertical: 3,
        marginHorizontal: 24    
    }


})
