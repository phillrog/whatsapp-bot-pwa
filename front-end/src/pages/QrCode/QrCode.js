import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import QRCode from 'qrcode';
import { formatRelative, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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

  const calcDate = (date) => new Date(date);

  return (
    
    <p>     
      <h1>
      {calcDate(times)}</h1>
      {/* <time dateTime={times}>{times}</time> */}
      {/* {formatRelative(new Date(times.split('Z')[0]), new Date(), { locale: ptBR })} */}
      <img src={url}></img>
    </p>
  );
}

