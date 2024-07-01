const TaskTagWebLink = (props) => {
  const PROD_URL =
    "https://app.tasktag.com/register/signup-with-email?invitation_token=";
  const DEV_URL =
    "https://beta.app.tasktag.com/register/signup-with-email?invitation_token=";

  const url = props.env_prod === false ? PROD_URL : DEV_URL;
  console.log(props.env_prod, props.invitation_token);
  console.log(url);
  return (
    <a
      id={props.env_prod ? "1" : "2"}
      target="_blank"
      href={`${url}${props.invitation_token}`}
      rel="noreferrer"
    >
      Open TaskTag Web
    </a>
  );
};
export default TaskTagWebLink;
