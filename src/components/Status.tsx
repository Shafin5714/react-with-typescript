type StatusProps = {
  status: 'loading' | 'success' | 'error' ;
};

export default function Status({status}: StatusProps) {
  let message;
  if (status === "loading") {
    message = "Loading";
  } else if (status === "success") {
    message = "Data fetched Successfully";
  } else if (status === "error") {
    message = "Error fetched data";
  }
  return <div>Status  <span style={{fontWeight:'bold'}}>{message}</span> </div>;
}
