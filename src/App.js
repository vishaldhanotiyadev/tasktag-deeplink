import {useState} from 'react'

function App() {
  const [error, setError] = useState();
  return (
    <html>
      <body>
        <div className="App">
          <h1>{error}</h1>

          <p>
            <a
              onErrorCapture={(error) => {
                setError(error);
              }}
              href="com.eloveit.tasktag://register/4948d9c1-0c63-4cf9-983f-52fc30af7eb4"
            >
              Open TaskTag
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}

export default App;
