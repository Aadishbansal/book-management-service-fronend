const Alert = (props) => {
  const message = props.message ? props.message : "Something went wrong";
  return (
    <div
      className={`alert alert-warning d-flex align-items-center ${props.className}`}
      role="alert"
    >
      <div>{message}</div>
    </div>
  );
};
export default Alert;
