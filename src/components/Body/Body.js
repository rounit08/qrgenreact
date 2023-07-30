import React, { useState } from "react";
import "./Body.css";
import QRCode from "qrcode.react";

function Body() {
  const [inputText, setInputText] = useState("");
  const [qrCodeText, setQRCodeText] = useState("");

  const generateQrCode = () => {
    setQRCodeText(inputText);
  };


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
      <div className="space">
      <div className="bodyContainer">
        <QRCode className="qrcode" id="qrCodeEl" size={200} value={qrCodeText} />

        <button className="download" onClick={downloadQRCode}>
          Download
        </button>
      </div>
      </div>
      <p>Created by Rounit Sinha</p>
    </div>
  );
}

export default Body;
