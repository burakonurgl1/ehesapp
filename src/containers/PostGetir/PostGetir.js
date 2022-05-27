import React, { Component } from 'react'
import axios from 'axios'
//import Comments from '../Comments/Comments'
import './PostGetir.css'

class PostGetir extends Component {
    constructor (props) {
        
        super(props)
        this.state = {
          showMore: false,
          postlar: [],
          yorumlar: [],
          show: false, 
          setShow: false,
          id: null,
        }
      }
      
      dahaAz(){
        this.setState({showMore: false})
        document.getElementById("dahaFazla").style.display = "";
        document.getElementById("dahaAz").style.display = "none";
      }

      handleClick() {
        this.setState({showMore: true})
        document.getElementById("dahaFazla").style.display = "none";
        document.getElementById("dahaAz").style.display = "";
      }

    yorumCek(postİd){
      axios.get('https://jsonplaceholder.typicode.com/posts/'+postİd+'/comments')
          .then(res => {
            const yorumlar = res.data;
            this.setState({ yorumlar });
          })
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then(res => {
            const postlar = res.data;
            this.setState({ postlar });
            
            document.getElementById("dahaAz").style.display = "none";
            document.getElementById("modal").style.display = "none";
          })
      }
    
    handleClose = () => this.setShow(false);
    handleShow = (postİd) => {
      this.setShow(true); 
      this.yorumCek(postİd)
    };
    setShow(durum){
      if(durum === false){
        document.getElementById("id01").style.display = "none";
      }else{
        document.getElementById("id01").style.display = "block";
      }
    }
    render() {
        const numberOfItems = this.state.showMore ? this.state.postlar.length : 3
        return (
            <div className='container'>
          <div className='row'>
            {this.state.postlar.slice(0, numberOfItems)
            .map(post =>
                <div className="col-md-4 " key={post.id}>
                    <div className="card mb-4 shadow-sm postMain">
                        <img alt='asd' src='https://images03.nicepage.com/c461c07a441a5d220e8feb1a/6f2c39f11d865e0fa0a86acf/business-people-sitting-office-desk-working-project_1098-17930.jpg?version='></img>
                        <div className="card-body">
                            <b><h6 className='baslik'>{post.title}</h6></b>
                            <p className="card-text aciklama">{post.body}</p>
                            <div className="text-center">
                                <a href='#yorumlar' onClick={()=> this.handleShow(post.id)} className='postButton'>Yorumları Oku</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            )}
            </div>
            <div className='text-center'>
                <button onClick={()=> this.handleClick()} id="dahaFazla" className='dahaFazla'>Daha Fazla Göster</button><br></br>
                <button onClick={()=> this.dahaAz()} id="dahaAz" className='dahaAz dahaFazla'>Daha Az Göster</button>
            </div>
            <div id="id01" className="w3-modal">
                <div className="w3-modal-content">
                  <div className="w3-container">
                    <button onClick={()=> this.handleClose()}  className="w3-button w3-display-topright">&times;</button><br></br>
                    {
                      this.state.yorumlar
                      .map(yorum =>
                        <div className='yorumMain'>
                          <h6>İsim: {yorum.name} <span>(E-mail: {yorum.email})</span></h6>
                          <p>{yorum.body}</p>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
        </div>
        )
    }
}
export default PostGetir