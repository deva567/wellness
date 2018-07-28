
import React,{Component} from 'react';
import './signup.css';
class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
          type: 'inputtype'
        }
        this.showHide = this.showHide.bind(this);
      }
      showHide(){ 
        this.setState({
          type: this.state.type === 'inputtype' ? 'password' : 'inputtype'
        })  
      }
    render(){
        return(<div className="sign">
        <div >
            <label> Register a new account</label><br/>
            <p>If you're new to Mathruka, register for an account here...</p><br/>
            <p>Already a member?<code>Sign in>></code></p>
            <hr id="hr"/>
            </div>
        <form   className="form-horizontal"> 
            <p id="h1">Personal Details:</p>
            <p  id="field"> * Fields Are Mandatory</p>
            <div className ="form-group">
            <label className="control-label col-sm-3"><label id="field">*</label>Title:</label>
            <div className="col-sm-8"  >
            <select className ="form-control">
                <option>Select One</option>
                <option>Miss</option>
                <option>Ms</option>
                <option>Mrs</option>
                <option>Mr</option>
             </select>
             </div>
             </div>
            <div className ="form-group">
            <label className="control-label col-sm-3"><label id="field">*</label> FirstName:</label>
              <div className="col-sm-8"  >
            <input type="text"   className="form-control" placeholder="FirstName" required/>
             </div>
            </div>
            <div className ="form-group">
            <label className="control-label col-sm-3">MiddleName:</label>
             <div className="col-sm-8"  >
              <input type="text" className="form-control" placeholder="MiddleName"/>
              </div>
             </div>   
             <div className ="form-group">
            <label className="control-label col-sm-3"><label id="field">*</label> LastName:</label>
            <div className="col-sm-8"  >
            <input type="text"  className="form-control" placeholder="LastName" required/>
            </div>
             </div> 
            <div className ="form-group">
            <label className="control-label col-sm-3"> <label id="field">*</label> MobileNumber:</label>
            <div className="col-sm-8"  >
            <input type="number"  className="form-control" required/>
            </div>
             </div> 
            <div className="form-group">
            <label className="control-label col-sm-3"><label id="field">*</label> Email:</label>
            <div className="col-sm-8"  >
            <input type="email"   className ="form-control" placeholder="sample@gmail.com" required/>
            <small id="emailHelp" className="form-text text-muted">This Email should be your Username .</small>
            </div>
             </div> 
            <div className ="form-group">
            <label className="control-label col-sm-3">Gender:</label>
            <div className="col-sm-8"  >
            <select className ="form-control">
                <option>Select One</option>
                <option>Male</option>
                <option>Female</option>
             </select>
             </div>
             </div>
             <div className ="form-group">
             <label className="control-label col-sm-3">Address:</label>
             <div className="col-sm-8"  >
             < textarea className ="form-control" rows="4"/>
             </div>
             </div> 
             <div className ="form-group">
             <label className="control-label col-sm-3"> AddressLine 1:</label>
             <div className="col-sm-8"  >
             <textarea   className ="form-control" rows="2" />
             </div>
             </div> 
             <div className ="form-group">
             <label className="control-label col-sm-3"> AddressLine 2:</label>
             <div className="col-sm-8"  >
             <textarea className ="form-control" rows="2"/>
             </div>
             </div> 
             <div className ="form-group">
             <label className="control-label col-sm-3">City:</label>
             <div className="col-sm-8"  >
             <input type="text" className="form-control"/>
             </div>
             </div> 
             <div className ="form-group">
             <label className="control-label col-sm-3">State:</label>
             <div className="col-sm-8"  >
             <input type="text" className="form-control"/>
             </div>
             </div> 
             <div className ="form-group">
             <label className="control-label col-sm-3">ZipCode:</label>
             <div className="col-sm-8"  >
             <input type="number" className="form-control"/>
             </div>
             </div> 
             <div className="form-group">
             
            <label className="control-label col-sm-3">UserName:</label>
            <div className="col-sm-8"  >
            
            <input type="text" className ="form-control" />
            </div>
             </div> 
             <div className="form-group">
            <label  className="control-label col-sm-3"><label id="field">* </label> SetPassword :</label>
            <div className="col-sm-8"  >
            <input type={this.state.type} className="form-control"  />
            <span  onClick={this.showHide}>{this.state.type === 'inputtype' ? 'Hide' : 'Show'}</span>
            </div>
             </div>
             <div className="form-group"> 
                <div className="col-sm-offset-4 col-sm-6">
            <button type="submit" className="btn btn-success">Create Account<i className="fa fa-fw fa-chevron-right"></i></button>
            </div>
            </div>
            <div>
                <hr id="hr"/>
                <label>
                    Please make sure you read our <code>terms and conditions</code> opens in new window because you're agreeing by creating a Matruka account.
                    </label>
                </div>
           </form>
        </div>
        );
    }
}
export default Signup;