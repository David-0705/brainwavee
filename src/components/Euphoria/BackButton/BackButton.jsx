import { useNavigate } from "react-router-dom";

import Button from "../../Button";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1); // Navigate back to the previous page
    } else {
      navigate("/instruction"); // Fallback to the home page
    }
  };

  return (
    <Button onClick={handleBackClick} white>
      <p className="h6 -ml-5">&lt;= Back</p>
    </Button>
  );
};

export default BackButton;
