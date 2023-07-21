import React from 'react';
import axios from 'axios';
import './Main.css';
import { Card } from 'react-bootstrap';
import { Link  } from 'react-router-dom';


export default class Book extends React.Component{
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
        const { name } = this.props; 
        
        return(
           
            <div className="booklist">
                <h1>Book Details</h1>
                
                {this.state.items.map(item =>(item.display_name.toLowerCase().replace(/-/g, '').trim() === name.toLowerCase().replace(/-/g, '').trim())?<Card className="cardbook">
  <Card.Body>
    <Card.Title className="cardtitle">Name : {item.display_name}</Card.Title>
    <Card.Title className="cardtitle">Published Date : {item.newest_published_date}</Card.Title>
   
    <Link className="cardlink" to="/booklist">Back to List</Link>
  </Card.Body>
</Card>: (null))}


                {/* {this.state.items.map(item =><Card className="card">
  <Card.Body className="book">
    <Card.Title className="cardtitle">{item.display_name}</Card.Title>
    <Card.Title className="cardtitle">{item.display_author}</Card.Title>
   
    <Link className="cardlink" to="./booklist">Back to List</Link>
  </Card.Body>
</Card>)} */}
           </div>     
          
        )
    }

}
