import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';


export default class ApiCall extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null,
            dataSource: null,
            apiTitle : null,
            apiDescription : null,
        }
    }


    async componentDidMount() {
        try {
            const response = await fetch("https://reactnative.dev/movies.json");
            const responseJson = await response.json();
            // const apiTitle = responseJson.title;
            // const apiDescription = responseJson.description;
            const dataSource = responseJson.movies;
            // console.log(apiTitle);
            // console.log(apiDescription);
            this.setState({
                isLoading: false,
                // data: responseJson,
                dataSource: dataSource,
                // apiTitle: apiTitle,
                // apiDescription: apiDescription,
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
        else {
            let movies = this.state.dataSource.map((val,key)=> {
                return (
                    <View key={key} style={styles.view}>
                        <Text style={styles.number}>
                            {val.id}.
                        </Text>
                        <Text style={styles.header}>
                            "{val.title}"
                        </Text>
                        <Text style={styles.header}>
                            ({val.releaseYear})
                        </Text>
                        <Text style={styles.text}>
                            {val.apiTitle}
                        </Text>
                        
                    </View>
                )
            })
            return (
                <View>
                    {movies}
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    view:{
        paddingTop:50,
        flexDirection:'row',
        justifyContent:'space-around',
        height:'100%',
        width:'100%',
    },
    number:{
        color:'darkgrey'
    },
    header:{
        color:'black'
    },
    text:{
        color:'red'
    },
    loader:{
        alignItems:'center',
        color:'red',
    },
});