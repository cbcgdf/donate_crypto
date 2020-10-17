import React from 'react';
import maskbookLogo from './maskbook.svg'
import lfhLogo from './lfh.jpeg'
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./header.png" alt=""/>
      </header>
      <h3 className="title">什么是加密货币？</h3>
      <div class="intro">
        <p>
          加密货币（英文：Cryptocurrency，常常用复数Cryptocurrencies，又译密码货币，密码学货币）
          是一种使用密码学原理来确保交易安全及控制交易单位创造的交易媒介。 加密货币是数字货币（或称虚拟货币）的一种 。
          比特币在2009年成为第一个去中心化的加密货币，这之后加密货币一词多指此类设计。
          自此之后数种类似的加密货币被创造，它们通常被称作altcoins。 加密货币基于去中心化的共识机制 ，与依赖中心化监管体系的银行金融系统相对。
        </p>
        <p>
          中国、瑞典、英国和新加坡等的中央银行已经研究法定数字货币用例。
        </p>
      </div>  
      <div>
        <Button variant="contained" color="primary" fontSize="large" size="large">打开 Coinbase</Button> 
      </div>
      <footer>
        <img className="maskbookLogo" src={maskbookLogo} alt="logo" />
        <img className="lfhLogo" src={lfhLogo} alt="logo" />
      </footer>
    </div>
  );
}

export default App;
