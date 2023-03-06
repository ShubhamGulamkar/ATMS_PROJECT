import { useReducer, useState } from "react";
import { Button, Form } from "react-bootstrap"





function Event() {
     
    const init = {

        event_name: "",
        location: "",
        datetime: "",
        duration: "",
        overview: "",
        difficulty_level: "",
        thing_to_carry: "",
        pickup_location: "",
        pickup_time: "",
        drop_location: "",
        drop_time: "",
        inclusion: "",
        exclusion: "",
        safety_guideline: "",
        rulebook: "",
        cancellation_policy: "",
        price: "",
        //routemap: "",
        total_seat: "",
        category_id:1,
        organizer_id:10
    
    }
    
    //reducer function  
    const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.fld]: action.val }
        case 'reset':
            return init;
    }
    }

const [event, dispatch] = useReducer(reducer, init);
//const [msg,setMsg] = useState("");

    //event handling of Submit Button
    const sendData = (e) => {
        e.preventDefault();
        console.log(event);
        console.log(JSON.stringify(event));
        //oject for REST Api 
        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(event)
            
            


        }
        fetch("http://localhost:8080/addEvent", reqOptions)  //fetch api
        .then(resp => resp.text())
        alert("Event Data Send To REST Api ");
            

            
    }

    return (

        <div className="container">

            <form>

                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="event_name"> Event Name : </label>
                            <input type="text" name="event_name" className="form-control" placeholder="Event Name"
                                onChange={(e) => { dispatch({ type: 'update', fld: 'event_name', val: e.target.value }) }} /> 
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="location"> location : </label>
                            <input type="text" name="location" className="form-control" placeholder="location Name"
                                onChange={(e) => { dispatch({ type: 'update', fld: 'location', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="datetime"> datetime : </label>
                            <input type="datetime-local" name="datetime" className="form-control" 
                                onChange={(e) => { dispatch({ type: 'update', fld: 'datetime', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="duration"> duration : </label>
                            <input type="text" name="duration" className="form-control" 
                                onChange={(e) => { dispatch({ type: 'update', fld: 'duration', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="overview"> overview : </label>
                            <input type="text" name="overview" className="form-control" 
                                onChange={(e) => { dispatch({ type: 'update', fld: 'overview', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="difficulty_level"> difficulty_level Name : </label>
                            <input type="text" name="difficulty_level" className="form-control" 
                                onChange={(e) => { dispatch({ type: 'update', fld: 'difficulty_level', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="thing_to_carry"> thing_to_carry : </label>
                            <input type="text" name="thing_to_carry" className="form-control" 
                                onChange={(e) => { dispatch({ type: 'update', fld: 'thing_to_carry', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="pickup_location"> pickup_location : </label>
                            <input type="text" name="pickup_location" className="form-control" 
                                onChange={(e) => { dispatch({ type: 'update', fld: 'pickup_location', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="pickup_time"> pickup_time : </label>
                            <input type="datetime-local" name="pickup_time" className="form-control" 
                                onChange={(e) => { dispatch({ type: 'update', fld: 'pickup_time', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="drop_location"> drop_location : </label>
                            <input type="text" name="drop_location" className="form-control" placeholder="Event Name"
                                onChange={(e) => { dispatch({ type: 'update', fld: 'drop_location', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="drop_time"> drop_time : </label>
                            <input type="datetime-local" name="drop_time" className="form-control"
                                onChange={(e) => { dispatch({ type: 'update', fld: 'drop_time', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="inclusion"> inclusion : </label>
                            <input type="text" name="inclusion" className="form-control" 
                                onChange={(e) => { dispatch({ type: 'update', fld: 'inclusion', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="exclusion"> exclusion : </label>
                            <input type="text" name="exclusion" className="form-control" 
                                onChange={(e) => { dispatch({ type: 'update', fld: 'exclusion', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="safety_guideline"> safety_guideline : </label>
                            <input type="text" name="safety_guideline" className="form-control" 
                                onChange={(e) => { dispatch({ type: 'update', fld: 'safety_guideline', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="rulebook"> rulebook : </label>
                            <input type="text" name="rulebook" className="form-control" 
                                onChange={(e) => { dispatch({ type: 'update', fld: 'rulebook', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="cancellation_policy"> cancellation_policy : </label>
                            <input type="text" name="cancellation_policy" className="form-control" 
                                onChange={(e) => { dispatch({ type: 'update', fld: 'cancellation_policy', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="price"> price : </label>
                            <input type="number" name="price" className="form-control" 
                                onChange={(e) => { dispatch({ type: 'update', fld: 'price', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="routemap"> routemap : </label>
                            <input type="file" name="routemap" className="form-control" 
                                onChange={(e) => { dispatch({ type: 'update', fld: 'routemap', val: e.target.value }) }} /> 
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="total_seat"> Total Seats : </label>
                            <input type="number" name="total_seat" className="form-control" 
                                onChange={(e) => { dispatch({ type: 'update', fld: 'total_seat', val: e.target.value }) }} /> 
                        </div>
                    </div>
                    <Button variant="primary" type="submit" onClick={(e)=>{sendData(e)}}>
                    Submit
                </Button>
                <Button variant="primary" type="reset" onClick={()=>{dispatch({type:'reset'})}} >
                    Reset
                </Button>
            </form>

            <p>{JSON.stringify(event)}</p>
            {/* <p>{msg}</p> */}

        </div>
    )

}
export default Event;