import React, {Component} from 'react';
import WatsonData from './WatsonData';
import TwitterProfile from './TwitterProfile';
import History from './History';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';


class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: localStorage.getItem('mernToken'),
            user: this.props.user
        }
    }

    componentDidMount() {
        /* Here is where a call for the persons profile needs to be made. Once the verification is made the credentials will be stored in the
        state. The credentials will be passed down as props to all the other components so that when a component loads the information will
        be much faster to show up. */
    }


    render(){
        // var tokenLength = (this.state.user.name).length
        // if(tokenLength === 0){
        //     return <Redirect to ='/signin'/>
        // };
        return(
            <div>
                <Router>

                    <div className="row">
                      <div className="col s12 m6">
                          <div className="card">
                            <div className="card-content white-text">
                              //filler image. this is where the user's profile image will eventually go: 
                                <img src="http://images.archant.co.uk/polopoly_fs/1.4371969.1452244455!/image/image.jpg_gen/derivatives/landscape_630/image.jpg" className="circle responsive-img" height="100" width="100" />
                                <span className="card-title">Welcome to your WYM Profile, {this.state.user.name}!</span>

                            </div>
                            <div className="card-action profileLinks">
                                <Link to ='/history'>Saved Wyms</Link>
                                <Link to ='/twitterprofile'>Twitter</Link>
                                <Link to ='/'>Upload new text</Link>
                            </div>
                          </div>
                        </div>
                        <Route path = '/history' component = { History }/>
                        <Route path = '/twitterprofile' render={(props) => ( 
                            <TwitterProfile {...props} user={this.state.user} />
                            )} />
                    </div>
                </Router>
              <div>
                <WatsonData />
                </div>

          </div>
        )
    }
}

export default Profile;
