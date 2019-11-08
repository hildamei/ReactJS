import React, {Component} from 'react';

export default class Maps extends Component{
    render(){
        return(
            <div className="card" style={{marginTop:"20px"}}>
                <div className="card-body">
                <iframe src="https://www.google.com/maps/d/embed?mid=1OuL7iKWM6235vkVD4SdQ7gDcnig" style={{width:"100%",height:"400px"}}></iframe>

                </div>

            </div>
        )
    }
}
