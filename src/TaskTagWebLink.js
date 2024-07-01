const TaskTagWebLink = ({ env_prod, invitation_token }) => {
  const PROD_URL =
    "https://app.tasktag.com/register/signup-with-email?invitation_token=";
  const DEV_URL =
    "https://beta.app.tasktag.com/register/signup-with-email?invitation_token=";

  const url = env_prod ? PROD_URL : DEV_URL;

  return (
    <a
      id={env_prod ? "1" : "2"}
      target="_blank"
      href={`${url}${invitation_token}`}
      rel="noreferrer"
    >
      Open TaskTag Web
    </a>
  );
};
export default TaskTagWebLink;
