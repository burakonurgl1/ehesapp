import React, { Component } from 'react'
import axios from 'axios'
//import Comments from '../Comments/Comments'
import './PostGetir.css'

export default class PostGetir extends Component {
    
    state = {
        postlar: []
    }
      
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then(res => {
            const postlar = res.data;
            this.setState({ postlar });
          })
      }
    render() {
        return (
            this.state.postlar
            .map(post =>
                <div className="col-md-4 " key={post.id}>
                    <div className="card mb-4 shadow-sm postMain">
                        <img alt='asd' src='https://images03.nicepage.com/c461c07a441a5d220e8feb1a/6f2c39f11d865e0fa0a86acf/business-people-sitting-office-desk-working-project_1098-17930.jpg?version='></img>
                        <div className="card-body">
                            <h6 className='baslik'>{post.title}</h6>
                            <p className="card-text aciklama">{post.body}</p>
                            <div className="text-center">
                                <a href='#asd' className='postButton'>Yorumları Oku</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )
            
        )
    }
}
