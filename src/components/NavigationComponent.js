import React, { Component } from 'react';

class NavigationComponent extends Component {
    render() {
        return (
         <div className="container">
          <div className="nav-header">
              <h1 className="company"><em>Tata Consultancy Services</em></h1>
            <ul className="nav nav-tabs" id="navId">
                
                <li className="nav-item">
                    <a href="/" className="nav-link active">Home</a>
                </li>
                
                <li className="nav-item">
                    <a href="/getList" className="nav-link">Get List</a>
                </li>
                <li className="nav-item">
                    <a href="/postForm" className="nav-link">Post Form</a>
                </li>
                
                
            </ul>
            
           
            
          
            </div>    
           
            </div>
        );
    }
}

export default NavigationComponent;