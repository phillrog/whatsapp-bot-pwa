import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import QRCode from 'qrcode';

const ENDPOINT = "http://localhost:4001";

export default function QrCode () {
  const [times, setTimes] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setTimes(data);
    });
    
    socket.on("QRCODE", data => {
        console.log(data);
        QRCode.toDataURL(data, function (err, url) {
            setUrl(url);
          })
      });
  }, []);

  return (
    <p>
      It's <time dateTime={times}>{times}</time>
      <img src={url}></img>
    </p>
  );
}