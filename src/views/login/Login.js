import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <form>
                    <div classNameName="form-group">
                        <label for="exampleInputEmail1">User name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onChange={onChange}>Ingresar</button>
                </form>

                
            </div>
        );
    }
}

export default Login;