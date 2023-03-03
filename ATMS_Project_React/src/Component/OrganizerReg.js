import { useReducer, useState } from "react";

function OrganizerReg(){

    const init = {
        organization_name: { value: "", touched: false, valid: false, error: "" },
        registration_no: { value: "", touched: false, valid: false, error: "" },
        email: { value: "", touched: false, valid: false, error: "" },
        city: { value: "", touched: false, valid: false, error: "" },
        mobile: { value: "", touched: false, valid: false, error: "" },
        user_name: { value: "", touched: false, valid: false, error: "" },
        password: { value: "", touched: false, valid: false, error: "" },
        // confirmpassword: { value: "", touched: false, valid: false, error: "" },
        status:0,
        formvalid: false
    }



    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                const { name, value, touched, valid, error, formvalid } = action.data
                //console.log(formvalid)
                return { ...state, [name]: { value, touched, valid, error }, formvalid }

            case 'reset':
                return init;

        }
    }

    const [state, dispatch] = useReducer(reducer, init);
    const [pwdtype, setPwdtype] = useState("password");


    const validateData = (name, value) => {
        let valid = false;
        let error = "";
        switch (name) {

            case 'user_name': var pattern = /^[A-Za-z0-9_.-]{3,10}$/
                if (pattern.test(value)) {
                    valid = true;
                    error = "";
                }
                else {
                    valid = false;
                    error = "User name invalid"
                }
                break;


            case 'password': var pattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&*]{5,}$/
                if (pattern.test(value)) {
                    valid = true;
                    error = "";
                }
                else {
                    valid = false;
                    error = "Password invalid"
                }
                break;
            // case 'confirmpassword':
            //     if (state.password.value === value) {
            //         valid = true;
            //         error = "";
            //     }
            //     else {
            //         valid = false;
            //         error = "Passwords do not match"
            //     }
            //     break;

        }
        return { valid, error };
    }

    const handleChange = (name, value) => {
        const { valid, error } = validateData(name, value)
        let formvalid = true;
        /*if(state.firstName.valid === true && state.lastName.valid === true && state.email.valid === true && state.password.valid === true && state.confirmpassword.valid === true)
            formvalid = true;*/
        for (const key in state) {
            console.log(key + " : " + state[key].valid)
            if (state[key].valid === false) {
                formvalid = false;
                break;
            }
        }
        console.log(formvalid)
        dispatch({ type: 'update', data: { name, value, touched: true, valid, error, formvalid } })
    }

    const onFocusout = (name, value) => {
        const { valid, error } = validateData(name, value)
        let formvalid = true;
        /*if(state.firstName.valid === true && state.lastName.valid === true && state.email.valid === true && state.password.valid === true && state.confirmpassword.valid === true)
            formvalid = true;*/
        for (const key in state) {
            console.log(key + " : " + state[key].valid)
            if (state[key].valid === false) {
                formvalid = false;
                break;
            }
        }
        dispatch({ type: 'update', data: { name, value, touched: true, valid, error, formvalid } })
    }

    return(
        <div>
            <h3>Organizer Registration</h3>
            <div className="container">

                <form>

                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="organization_name"> Organization Name : </label>
                            <input type="text" name="organization_name" className="form-control" placeholder="Organization Name"
                                onChange={(e) => handleChange("organization_name", e.target.value)} />
                            <div className="error-msg"> {state.organization_name.error}</div>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="registration_no"> Registration Number : </label>
                            <input type="text" name="registration_no" className="form-control" placeholder="Registration Number"
                                onChange={(e) => handleChange("registration_no", e.target.value)} />
                            <div className="error-msg"> {state.registration_no.error}</div>
                        </div>
                        {/* onChange={handleChange("last_name")} />    */}
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="email"> Email : </label>
                            <input type="email" name="email" className="form-control" placeholder="E-mail"
                                onChange={(e) => handleChange("email", e.target.value)} />

                            <div className="error-msg"> {state.email.error}</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="mobile"> mobile: </label>
                            <input type="text" name="mobile" className="form-control"
                                onChange={(e) => handleChange("mobile", e.target.value)} />

                            <div className="error-msg"> {state.mobile.error}</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="city"> Enter city: </label>
                            <input type="text" name="city" className="form-control"
                                onChange={(e) => handleChange("city", e.target.value)} />

                            <div className="error-msg"> {state.mobile.error}</div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="user_name">  User Name: </label>
                        <input type="text" name="user_name" className="form-control" placeholder="User Name"
                            onChange={(e) => handleChange("user_name", e.target.value)} />
                        <div className="error-msg"> {state.user_name.error}</div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="password"> Password : </label>
                            <div className="input-group">
                                <input type={pwdtype} name="password" className="form-control" placeholder="Password" />
                                <button type="button" className="btn btn-primary" onClick={() => { setPwdtype(pwdtype === "password" ? "text" : "password") }} >
                                    {pwdtype === "password" ? <i className="fa fa-eye-slash" /> : <i className="fa fa-eye" />}
                                </button>
                            </div>
                            <div className="error-msg"> {state.password.error} </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="confirmpassword"> Confirm Password : </label>
                            <input type="password" name="confirmpassword" className="form-control" placeholder="Confirm Password"
                                onChange={(e) => handleChange("confirmpassword", e.target.value)}
                                onBlur={(e) => onFocusout("confirmpassword", e.target.value)} />
                            <div className="error-msg"> {state.confirmpassword.error}</div>
                        </div>
                    </div> */}
                    <div className="mb-3">
                        <button type="submit" disabled={state.formvalid}>Create Account</button>  
                    </div>
                </form>
                {JSON.stringify(state)}
            </div>
        </div>
    )
}
export default OrganizerReg;