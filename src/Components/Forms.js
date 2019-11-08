import React, {Component} from 'react';
import axios from 'axios';

export default class Forms extends Component{
  constructor(props){
    super(props)
    this.state={
      bookings:[],
      Destination:"",
      harga_Penawaran:""
    }
  }
  componentDidMount(){
    var config={
        method:'GET',
        url: `https://esbbcext01.beacukai.go.id:8082/DetilBooking/`,
        headers:{'Content-Type':'application/json'},
      }
      axios.request(config).then(response=>{
        this.setState({
          bookings:response.data
        })
        console.log('response: ',response.data[0].hargaPenawaran+" "+response.data[0].booking.id_User);
        }).catch(error=>{console.log('error: ',error)})
  }
  render(){
    return(
    <div className="col-md-6">
    <div className="card"style={{marginTop:"20px"}}>
      <div className="card-body">
        {this.state.bookings.map(anggota=>
          <div key={anggota.id} className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 offset-md-1" >
                    <p style={{color:'grey'}} >Platform Name</p>
                    <p className="card-title" style={{marginTop:"10px"}}>{anggota.booking.destination}</p>
                  </div>
                  <div className="col-md-4">
                    <p style={{color:'grey'}}>3 Trucks</p>
                    <p className="card-title" style={{marginTop:"10px", fontSize:"20px"}}>Rp. {anggota.hargaPenawaran}</p>
                  </div>
                  <div className="col-md-2 offset+md+1">
                    <button className="btn btn-info" style={{width:"70px"}}> VIEW </button>
                    <button className="btn btn-success" style={{width:"70px",marginTop:"10px"}}>BOOK</button>
                  </div>
                </div>
          </div>
        </div>)}
      </div>
    </div>
    </div>
    )
  }
}