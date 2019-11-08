import React, {Component} from 'react';

export default class Bookings extends Component{
    render(){
        return(
            <div className="card">
          <div className="card-header" style={{backgroundColor:'#28C76F', color:'#002661'}}>
              <p style={{float:'left',fontSize:"20px"}}>Trucking>Book Truck</p>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-2">
                  <div className="form-group">
                    <label>B/L Number</label>
                    <input type="text" className="form-control" placeholder="Number"/>
                  </div>
                </div>
                <div className="col-md-3">
                <div className="form-group">
                <label>FROM</label>
                <input type="text" className="form-control" placeholder="From"/>
              </div>
                </div>
                <div className="col-md-3">
                <div className="form-group">
                <label>TO</label>
                <input type="text" className="form-control" placeholder="To"/>
              </div>
                </div>
                <div className="col-md-2">
                <div className="form-group">
                <label>Depo</label>
                <input type="text" className="form-control" placeholder="Depo"/>
              </div>
              </div>
                <div className="col-md-2">
                <button className="btn btn-info" style={{marginTop:"30px"}}>Search</button>
                </div>
                
              </div>

              <div className="row">
                <div className="col-md-3">
                <div className="form-group">
                <label>PLAN DATE</label>
                <input type="date" className="form-control" placeholder="Plan Date"/>
              </div>

                </div>

                <div className="col-md-3">
                <div className="form-group">
                <label>Booking Date</label>
                <input type="date" className="form-control" placeholder="Booking Date"/>
              </div>
                </div>

                <div className="col-md-3">

                <div className="form-group">
                <label>BL Date</label>
                <input type="date" className="form-control" placeholder="Data"/>
              </div>
                </div>
                </div>
              <div className="row">
                <div className="col-md-3">
                <div className="form-group">
                <label>SP2 Valid Date</label>
                <input type="date" className="form-control" placeholder="SP2 Valid Date"/>
              </div>

                </div>
                
              
                <div className="col-md-3">
                <div className="form-group">
                <label>SPC Valid Date</label>
                <input type="date" className="form-control" placeholder="SPC Valid Date"/>
              </div>

                </div>
              </div>
              <div className="row">

                <div className="col-md-3">

                <div className="form-group">
                <label>Container Nomer</label>
                <input type="text" className="form-control" placeholder="Container Nomer"/>
              </div>
                </div>
                <div className="col-md-3">

                <div className="form-group">
                <label>Container Size</label>
                <input type="text" className="form-control" placeholder="Container Size"/>
              </div>
                </div>

                <div className="col-md-3">

                <div className="form-group">
                <label>Combiner Type</label>
                <input type="text" className="form-control" placeholder="Combiner Type"/>
              </div>
                </div>

              </div>
            </form>
          </div>
        </div>
        )
    }
}