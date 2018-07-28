import React ,{Component} from 'react';


class login extends Component{
    render(){
        return(
            <div className="login">
            <input type="text" placeholder="enter username" className="firstname"/>
            <input type="pasword" placeholder="enter password" className="password"/>
            <button type="submit">login</button>
            </div>
        );
    }
}
export default login;