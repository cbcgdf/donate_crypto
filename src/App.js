import React from 'react';
import maskbookLogo from './maskbook.svg'
import lfhLogo from './lfh.jpeg'
import ylfLogo from './ylf.jpeg'
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./header.png" alt=""/>
      </header>
      <h3 className="title">Cryptocurrency Donation</h3>
      <div class="intro">
        <p class="important">
        “展望未来，我国青年一代必将大有可为，也必将大有作为。
        这是“长江后浪推前浪”的历史规律，也是“一代更比一代强”的青春责任。
        广大青年要勇敢肩负起时代赋予的重任，志存高远，脚踏实地，
        努力在实现中华民族伟大复兴的中国梦的生动实践中放飞青春梦想。
        时间之河川流不息，每一代青年都有自己的际遇和机缘，
        都要在自己所处的时代条件下谋划人生、创造历史。
        青年是标志时代的最灵敏的晴雨表，时代的责任赋予青年，时代的光荣属于青年。” -- 习近平寄语青年
        </p>
        <p>
        中国绿发会青年领袖基金旨在携手立足于科技创新与文化艺术领域的青年领袖，共同推动世界可持续发展，
        解决社会最迫切的发展问题。我们将携手在行业内已经具备一定影响力以及创新实践路径的青年人，
        共同推动科技创新及文化艺术在促进社会发展场景中有秩序遵纪守法地实践与落地。
        </p>
        <p>
        本项目旨在为具有官方资质及经过审核的公益及慈善项目募集资金，
        促进公众参与，提高募资效率，帮助公益项目的落地，并支持社会影响力人才的培养与发展。
        </p>
        <p>
        我们相信，任何人，不论国籍宗教行业背景都有参与贡献到社会公共事业建设中的权利与义务，
        结果导向是我们的准则，所有被捐赠项目均经过相关官方基金会的严格审核，并接受社会公众监督。
        </p>     
        <p>
        Youth Leader Fund (CBCGDF) aims for sustainable development and solves for the most urgent problems in social development alongside the youth leaders in tech innovations and culture & art. The fund also emphasizes beneficial commerce and helps explore technology for humanity’s well-being. The fund will partner up with influential youth leaders who have already navigated innovative pathways to further explore and practice in an organized manner how tech innovation and culture & art can help to strive for the great renewal of the Chinese nation.
        </p>  
        <p>
        Funds raised in this project will be devoted to research and hackathons for tech for the public good and sustainable growth. By and large, this project aims to stimulate public participation, enhance fundraising efficiency, help charity projects to be carried out, and support developing talents for social impact.
        </p>  
        <p>
        We believe anyone, no matter nationality, religion, background, all have a duty to participate in building public good. All the projects receiving donation are strictly reviewed by relevant official foundations and welcome oversight from the public.
        </p>                                     
      </div>  
      <div>
        <Button onClick={()=> {
          window.open('https://commerce.coinbase.com/checkout/4964dddd-419d-49c6-8051-1b9d74c8f9cb')
        }} variant="contained" color="primary" fontSize="large" size="large">捐款虚拟货币</Button> 
      </div>
      <footer>
        <img className="maskbookLogo" src={maskbookLogo} alt="logo" />
        <img className="lfhLogo" src={lfhLogo} alt="logo" />        
        <img className="ylfLogo" src={ylfLogo} alt="logo" />
      </footer>
    </div>
  );
}

export default App;
