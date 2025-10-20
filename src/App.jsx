import React, { useState } from 'react'
import './App.css'
const App = () => {
    const [firstName, setFirstName] = useState(" ");
    const [lastName, setLastName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subject, setSubject] = useState({
      english: true,
      math: false,
      physics: false
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState();
    const [selectOption, setSelectOption] = useState("");
    const [about, setAbout] = useState("");
    
    const handleSubmit = (e) => {
      e.prevent.default();
      console.log(
        firstName,
        lastName,
        email,
        contact,
        gender,
        subject,
        resume,
        url,
        selectOption,
        about
      )
    };

    const handleSubjectChange = (sub) => {
        setSubject((prev) => ({
          ...prev, [sub]: !prev[sub]
        }))
    };


    const handleReset = () => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setContact("");
      setGender("male");
      setSubject({
        english: true,
        math: false,
        physics: false
      });
      setResume("");
      setUrl();
      setSelectOption("");
      setAbout("");
    };



  return (
    <div className='App'>
      <h1>React-Form</h1>
      <fieldset>
        <form action="#" method='get'>
          <label for="firstname">FirstName*</label>
          <input type="text" name='firstname' id='firstname'value={firstName} onChange={(e) => {
            setFirstName(e.target.value)
          }}  placeholder='Enter Your First Name' required/>
          <label for="lastname">LastName*</label>
          <input type="text" name='lastname' id='lastname' placeholder='Enter Your Last Name'  value={lastName} onChange={(e) => {
            setLastName(e.target.value)
          }}/>
          <label for="email">Email*</label>
          <input type="email" name='email' id='email' placeholder='Enter Email'required value={email} onChange={(e) => {
            setEmail(e.target.value)
          }}/>
          <label for="tel">Contact*</label>
          <input type="tel" name='contact' id='contact' placeholder='Enter Your Number' required value={contact} onChange={(e) => {
            setContact(e.target.value)
          }}/>
          <label for="gender">Gender*</label>
          <input type="radio" name='gender' id='male' value="male" checked={gender === "male"} onChange={(e) => {
            setGender(e.target.value)
          }}/> Male 
          <input type="radio" name='gender' id='female' value="female" checked={gender === "female"} onChange={(e) => {
            setGender(e.target.value)
          }}/> Female
          <input type="radio" name='gender' id='other' value="other" checked={gender === "other"} onChange={(e) => {
            setGender(e.target.value)
          }}/> Other 
          <label for="subject">Your best Subject*</label>
          <input type="checkbox" name='subject' id='english' value="english" checked={subject.english === true} onChange={(e) => {
            handleSubjectChange("english")
          }}/> English
          <input type="checkbox" name='subject' id="math" value="math" checked={subject.math === true} onChange={(e) => {
            handleSubjectChange("math")
          }}/> Math
          <input type="checkbox" name='subject' id="physics" value="physics" checked={subject.physics === true} onChange={(e) => {
            handleSubjectChange("physics")
          }}/> Physics
          <label for="file">Upload file*</label>
          <input type="file" name='file' id='file' placeholder='Enter Upload file' required onChange={(e) => {
            setResume(e.target.files[0])
          }}/>
          <label for="url">URL*</label>
          <input type="url" name='url' id='url' placeholder='Your url' value={url} onChange={(e) => {
            setUrl(e.target.value)
          }}/>
          <label for="select">Select Your Choice</label>
          <select name="select" id="select" required  value={selectOption} onChange={(e) => {
            setSelectOption(e.target.value)
          }}>
            <option value="" disabled selected={selectOption === ""}>Select your Ans</option>
            <optgroup label='beginner'>
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JAVASCRIPT</option>
            </optgroup>
            <optgroup label='Advance'>
              <option value="4">REACT</option>
              <option value="5">NODE</option>
              <option value="6">Express</option>
              <option value="t">MONGODB</option>
            </optgroup>
          </select>
          <label for="about">About</label>
          <textarea type="text" name='about' id='about' cols="30" rows="10" placeholder='Enter Yourself' required onChange={(e) => {
            setAbout(e.target.value)
          }}></textarea>
          <label for="button">Submit OR Reset</label>
          <button type='submit' value="submit" onClick={() => handleReset()}>Submit</button>
          <button type='reset' value="reset" onClick={(e) => handleSubmit(e)}>Reset</button>
        </form>
      </fieldset>
    </div>
  )
}

export default App
