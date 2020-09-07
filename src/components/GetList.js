import React, { Component } from 'react';
import axios from 'axios';

class GetList extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        }
    }
    componentDidMount(){
        const url = "http://jsonplaceholder.typicode.com/posts"
        axios.get(url)
            .then(response => {
                this.setState({
                    posts : response.data
                })
            })
            .then(err =>{
                console.log(err);
            })
    }

    loadContent(){
        return this.state.posts.map(post => (
            <p key={post.id}> {post.title}</p>
        ))
    }
    render() {
        return (
            <div>
                {this.loadContent()}
            </div>
        );
    }
}

export default GetList;