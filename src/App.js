import "../src/App.css";

const PROD_URL =
  "https://app.tasktag.com/register/signup-with-email?invitation_token=";
const DEV_URL =
  "https://beta.app.tasktag.com/register/signup-with-email?invitation_token=";

const App = () => {
  let invitation_token = "";
  let env_prod = false;

  const queryParameters = new URLSearchParams(window.location.search);

  invitation_token = queryParameters.get("invitation_token") ?? "";
  env_prod = queryParameters.get("env_prod") ?? "";
  if (invitation_token == null) {
    invitation_token = window.sessionStorage.getItem("invitation_token") ?? "";
    env_prod = window.sessionStorage.getItem("env_prod") ?? "";
    console.log("invitation_token", invitation_token);
    console.log("env_prod", env_prod);
  } else {
    console.log("invitation_token else", invitation_token);
    console.log("env_prod else", env_prod);
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

          <div className="center-div">
            <p className="text">
              If you already have the task tag application. Please click on this
              button
            </p>

            <div className="button">
              <a href={"com.eloveit.tasktag://register/" + invitation_token}>
                Open TaskTag App
              </a>
            </div>
            <br></br>

            <p className="text">
              If you don't have the task tag application. Please click on this
              button+{env_prod}
            </p>

            <div className="button">
              {env_prod ? (
                <a target="_blank" href={PROD_URL + invitation_token}>
                  Open TaskTag Web
                </a>
              ) : (
                <a target="_blank" href={DEV_URL + invitation_token}>
                  Open TaskTag Web
                </a>
              )}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default App;
