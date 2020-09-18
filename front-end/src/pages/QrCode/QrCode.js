import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import QRCode from 'qrcode';
import { formatRelative } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Container, Box, BoxTitle, BoxText } from "../Home/HomeStyles";

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

  const calcDate = (date) => date ? new Date(date).toLocaleString() : new Date();

  return (
    <Container>
    <h1>{`${formatRelative(calcDate(times), new Date(), { locale: ptBR })}`}</h1>
    <p>
      {/* <time dateTime={times}>{times}</time> */}
      
      <img src={url}></img>
    </p>
    </Container>
  );
}

