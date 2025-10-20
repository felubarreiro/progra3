import React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

class Card extends Component{
    render(){
        return(
            <View>
            <Text>{this.props.title}</Text>
            <Text>{this.props.price}</Text>
            <Text>{this.props.description}</Text>
            <Text>{this.props.category}</Text>
            {/* <Image style={styles.imagen} 
                  source={require({this.props.imagen})}
                  reziseMode='contain'/> */}
            <Text>{this.props.rating}</Text>
            </View>
        )
    }
}

export default Card