import React, { useRef, useState } from "react";
import "./Body.css";
import QRCode from "qrcode.react";
// import ShareIcon from "@mui/icons-material/Share";
import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";

function Body() {
  const [inputText, setInputText] = useState("");
  const [qrCodeText, setQRCodeText] = useState("");

  const generateQrCode = () => {
    setQRCodeText(inputText);
  };

  const shareData = () => {};

  const downloadQRCode = () => {
    const qrCodeURL = document
      .getElementById("qrCodeEl")
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL);
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  };

  const onShare = {
    files: <QRCode />,
    url: "google.com",
  };

  return (
    <div className="body">
      <span className="bodyTextToQR">
        <input
          type="text"
          value={inputText}
          className="bodyTextToQRtext"
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter Text ..."
        />
        <button onClick={generateQrCode} className="bodyTextToQRbutton">
          Generate QR
        </button>
      </span>

      <div className="bodyContainer">
        <QRCode
          className="qrcode"
          id="qrCodeEl"
          size={500}
          value={qrCodeText}
        />

        <button className="download" onClick={downloadQRCode}>
          Download
        </button>
      </div>
      <p>Created by Rounit Sinha</p>
    </div>
  );
}

export default Body;
