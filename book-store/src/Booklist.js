import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';

export default class Booklist extends React.Component{
    state={
        items:[],

    };
 
    componentDidMount(){
        axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=T1cHAy86uf1YG584FytW3VY1oAxn9ArW')
        .then(res=>{
            console.log(res.data.results);
            this.setState({items: res.data.results});
        });
        
    }
    render(){
        return(
            <div className="booklist">
                <h1><span>New York Times</span> best-selling books</h1>
            <ul>
                {this.state.items.map(item => <li><Card className="card">
  <Card.Body>
    <Card.Title className="cardtitle">{item.list_name}</Card.Title>
   
    <Link className="cardlink" to={`/viewdetails/${item.list_name}`}>View More Details</Link>
  </Card.Body>
</Card></li>)}
                
             </ul>
                
        </div>  
        )
    }

}