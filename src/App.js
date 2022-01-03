import './App.css';
import {useState} from 'react'
import img from './image/job-abroad.png';

function App() {
  //let[state,setState] = useState("")
  let [fname,setFname]=useState("");
  let [lname,setLname]=useState("");
  let [title,setTitle]=useState("");
  let [experience,setExp]=useState("");
  let [phone,setPhone]=useState("");
  let [email,setEmail]=useState("");
  let [pass,setPass]=useState("");
  let [selectState,setselectState]=useState("");

  /*const onChangeHandler=(e)=>{
        debugger
  };
  const handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };*/

  const submitHandler=()=>{
debugger
}
  return (
    <div className="App">         
      <title> React Form</title>
      <div className="content"><br/>
          <h2>Get Started With Us! Create Your Account</h2>    
      </div>
      <div className="formLayout"> 
        <div className="formLayoutRight">
          {/* <lable id="lable">* Required Feild</lable><br/> */}<br/>
          <div className="names"><input type="text" id="firstName" name="" placeholder="Enter FirstName" onChange={(e)=>{ setFname(e.target.value)}}></input><br/>
          <input type="text" id="lastName" name=""  placeholder="Enter LastName" onChange={(e)=>{ setLname(e.target.value)}}></input></div><br/>
          <div className="msgdisplay">{((fname.length) && (!isNaN(fname))) ? <div className="ErrMsg">Please Enter valid Name(Alphabets)</div>:""}</div>
          <div className="msgdisplay1">{(lname.length && (!isNaN(lname))) ? <div className="ErrMsg">Please Enter valid Name(Alphabets)</div>:""}</div>
          <div className='names'> <input type="tel" id="phone" name="phone"  placeholder="Enter Mobile Number" maxLength="10" minLength="10" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange={(e)=>{setPhone(e.target.value)}}></input>{phone.length && !(phone.length >= 10) && isNaN(phone) ?<div className="ErrMsg"> Enter valid Phone Number</div>:""}<br/>    
          <input type="email" id="emailId" name=""  placeholder="Enter EmailId" onChange={(e)=>{ setEmail(e.target.value)}}></input>{email.length && (!(email.includes("@") && (email.includes(".")))) ? ("Enter valid Email") :""} </div><br/>
          <div className='names'><input type="password" id="password" name=""  placeholder="Enter Password" onChange={(e)=>{ setPass(e.target.value)}}></input>{(pass.length) ? "Please enter password":""}<br/>
          <input type="password" id="repassword" name=""  placeholder="Re-Enter Password"></input></div><br/>             
          <div className='names'><input type="text" id="userName" name=""  placeholder="Enter JobTitle" onChange={(e)=>{ setTitle(e.target.value)}}></input>{(title.length && (!isNaN(title))) ? <div className="ErrMsg">Please Enter valid Title(Alphabets)</div>:""}<br/>
          <input type="number" id="age" name=""  placeholder="Experience in years" onChange={(e)=>{setExp(e.target.value)}}></input>{(experience.length && isNaN(experience)) ? <div className="ErrMsg">Please Enter valid numbers</div>:""}</div><br/>
          <div className='names'><select onChange={}>
           <option value="Select Technology">Select Technology</option>
            <option value="php">PHP</option>
            <option value="laravel">Laravel</option>
            <option value="angular">Angular</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
          </select><br/>          
          <input type="textarea" id="address" multipleline="" name=""  placeholder="Communication Address"></input></div><br/><br/>
          {/* <lable id="gender">Gender</lable> <input type="radio" id="Female"></input><span>Female</span> */}
          <div className="names"><input type="date" id="date" name=""  placeholder="Select Your Date of Birth"></input>  
          <label><input type="radio" id="gender" value="male" name="gender" ></input>Male
          <input type="radio" id="gender" value="female" name="gender"></input>Female        <br/></label></div>
          <div className='subbutton'><button className="button" type="submit" onClick={submitHandler}>SUBMIT</button></div><br/><br/><br/><br/>
        </div>
       </div>    
    </div>
  );
}
export default App;