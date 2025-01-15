import React from "react";
import Button from "../../Button"; 
import pdf from '../../../assets/brouchere/Euphoria.pdf'

const DownloadButton = () => {
  const handleDownload = () => {
    // Optionally log or perform actions before download
    console.log("Downloading PDF...");
  };

  return (
    <Button href={pdf} onClick={handleDownload} name="Euphoria_25.pdf">
     Brochure for Euphoria 2025
      </Button>
  );
};

export default DownloadButton;
