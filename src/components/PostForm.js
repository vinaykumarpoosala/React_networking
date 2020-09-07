import React, { Component } from 'react';
import Axios from 'axios';

class PostForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            userId:'',
            title:'',
            body:''
        }
        this.validForm = this.validForm.bind(this);
        this.savePost = this.savePost.bind(this)
    }

    validForm=()=>{
        let isValid = true;
        let userId = this.state.userId;
        let title = this.state.title;
        let body = this.state.body
        if(!userId){
            alert("Enter user name");
            isValid=false;
        }
        if(!title){
            alert("Enter title");
            isValid=false;
        }
        if(!body){
            alert("Enter body");
            isValid=false;
        }

        return isValid;

    }
    savePost(event){
        event.preventDefault();
        const url = "http://jsonplaceholder.typicode.com/posts";
        const valid = this.validForm();
        if(valid){
            Axios.post(url,{
                data:this.state
            })
            .then(response =>{
                console.log(response)
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] :event.target.value
        })
    }
    render() {
        return (

<div className="d-flex justify-content-center align-items-center container ">
                
                <div className="row">
                
                
                
                
                <form>
                    <div className="form-group"> 
                    <label htmlFor="userId" className="control-label">User Id</label>
                    <input type="text"
                    className = "form-control"
                     name = "userId" 
                    onChange = {this.handleChange}
                    placeholder="userId"
                    className="form-control"
                    />
                    </div>
                  
                    <div className="form-group"> 
                    <label htmlFor="title" className="control-label">Title</label>

                    <input type="text" 
                    className="form-control"
                    name = "title" 
                    onChange = {this.handleChange}
                    placeholder="title"

                    />
</div>
                   
                    <div className="form-group"> 
                    <label htmlFor="body" className="control-label">Body</label>
                    <input type="text" 
                    name = "body" 
                    className="form-control"
 
                    onChange = {this.handleChange}
                    placeholder="body"

                    />

                    </div>
                    
                    </form>
                    <button onClick = {this.savePost} className="btn btn-success"> Save</button>


                    
                    </div>
                    
            </div>
           
        );
    }
}

export default PostForm;