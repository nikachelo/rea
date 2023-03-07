import './App.css';

function handleClick() {
  const textBoxValue = document.querySelector('textarea').value;
  fetch('https://limitedrevolvingbrowsers.nikachelidze.repl.co/receive_data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      data: textBoxValue
    })
  })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>დალინკე განცხადება, ბევრი განცხადების შემთხვევაში გამოყავი ის მძიმით</p>  
          <div>
            <textarea rows="10" cols="50"></textarea>
          </div>
          <button onClick={handleClick}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
