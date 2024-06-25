import "../src/App.css";
function App() {
  let invitation_token = "";

  const queryParameters = new URLSearchParams(window.location.search);
  invitation_token = queryParameters.get("invitation_token") ?? "";
  if (invitation_token == null) {
    invitation_token = window.sessionStorage.getItem("invitation_token") ?? "";
    console.log("invitation_token", invitation_token);
  } else {
    console.log("invitation_token", invitation_token);
  }

  return (
    <html>
      <body>
        <div className="App">
          <img
            alt="tt"
            width={150}
            height={150}
            src={require("./res/appIcon.png")}
          />

          <div>
            <div className="button-app">
              <a href={"com.eloveit.tasktag://register/" + invitation_token}>
                Open TaskTag App
              </a>
            </div>
            <br></br>
    
            <div className="button-web">
              <a target="_blank"
                href={
                  "https://app.tasktag.com/register?invitation_token=" +
                  invitation_token
                } rel="noreferrer">
                Open TaskTag mobile
              </a>
            </div>
            <div className="button-web">
              <a target="_blank"
                href={
                  "https://app.tasktag.com/register/signup-with-email?invitation_token=" +
                  invitation_token
                } rel="noreferrer">
                Open TaskTag Web
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
