import React from 'react';
import Row from './row'
import HeadRow from './headrow'
import "./css/style.css";

 const LeaderBoard = () => {
     return (  
         <>
         <table id="table">
            <HeadRow />
            <Row number="1"nume="Mihai" joc="Metin2" scor="12000" />
            <Row number="2"nume="Elvis" joc="transformice" scor="9000" />
            <Row number="3"nume="Preotul" joc="Tanki" scor="7300" />
            <Row number="4"nume="Creatina98" joc="Eterium" scor="6600" />
            <Row number="5"nume="Lucian" joc="Paladins" scor="4000" />
            <Row number="6"nume="Cloudy" joc="Dota 2" scor="2000" />
            <Row number="7"nume="The GOD" joc="League of Legends" scor="1000" />
            <Row number="8"nume="Gues2212" joc="Slider" scor="900" />
         </table>
         </>
     );
 }
  
 export default LeaderBoard;