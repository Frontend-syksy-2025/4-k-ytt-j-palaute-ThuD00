import { useState } from 'react'
import './App.css'

/*type Feedback = {
  name: string;
  message: string;
  timestamp: string;
};*/

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [timestamp, setTimestamp] = useState("");
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
  };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    // estää sivun uudelleen latauksen / refresh -toiminnon. 
    // KÄYTETÄÄN AINA FORM -LOMAKKEISSA.
    if (!name.trim() || !message.trim()) {
      alert("Täytä molemmat kentät!");
      return;
    }

    setSubmittedName(name);
    setSubmittedMessage(message);
    setTimestamp(new Date().toLocaleString());

    setName("");
    setMessage("");
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input 
      placeholder="Your name"
      value={name}
      onChange={handleNameChange}
      />
      <br />
      <textarea 
      placeholder="Your feedback"
      value={message}
      onChange={handleMessageChange}
      />
      <br />
      <input type="submit" value="Submit" />
    </form>

    {submittedName && submittedMessage&& (
        <div>
          <p><strong>{submittedName}</strong> ({timestamp})</p>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default App