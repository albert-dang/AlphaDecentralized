import React, {Component} from 'react'
import './navbar.css'

export default class Navbar extends React.Component{
    render(){
        return (
            <div>
              <ul id='nav'>
                <li><a href="#"></a>Analyze</li>
                <li><a href="#">Research</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
        )
    }
}