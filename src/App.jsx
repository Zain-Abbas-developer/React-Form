import React from 'react'

const App = () => {
  return (
    <div>
      <h1>React-Form</h1>
      <fieldset>
        <form action="#" method='get'>
          <label for="firstname">FirstName*</label>
          <input type="text" name='firstname' id='firstname' placeholder='Enter Your First Name' />
          <label for="lastname">LastName*</label>
          <input type="text" name='lastname' id='lastname' placeholder='Enter Your Last Name' />
          <label for="email">Email*</label>
          <input type="email" name='email' id='email' placeholder='Enter Email'/>
          <label for="tel">Contact*</label>
          <input type="tel" name='contact' id='contact' placeholder='Enter Your Number'/>
          <label for="gender">Gender*</label>
          <input type="radio" name='gender' id='male' value="male" /> Male 
          <input type="radio" name='gender' id='female' value="female" /> Female
          <input type="radio" name='gender' id='other' value="other" /> Other 
          <label for="subject">Your best Subject*</label>
          <input type="checkbox" name='subject' id='english' value="english"/> English
          <input type="checkbox" name='subject' id="math" value="math"/> Math
          <input type="checkbox" name='subject' id="physics" value="physics"/> Physics
          <label for="file">Upload file*</label>
          <input type="file" name='file' id='file' placeholder='Enter Upload file'/>
          <label for="url">URL*</label>
          <input type="url" name='url' id='url' placeholder='Your url' />
          
        </form>
      </fieldset>
    </div>
  )
}

export default App
