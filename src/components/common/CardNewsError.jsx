import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";

const CardNewsError = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={handleClick} type="primary">
          Back Home
        </Button>
      }
    />
  );
};

export default CardNewsError;
