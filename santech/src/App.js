import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import '@fontsource/roboto/700.css';

import Navbar from './Navbar'
//Home--AboutUS--Careers--Contacts
import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs'
import Careers from './Components/Careers/Careers'
import ContactUs from './Components/ContactUs/ContactUs'

// EngineeringServices--Industries
import Aerospace from './Components/EngineeringServices/Industries/Aerospace/Aerospace'
import Agriculture from './Components/EngineeringServices/Industries/Agriculture/Agriculture'
import Appliances from './Components/EngineeringServices/Industries/Appliances/Appliances'
import Automative from './Components/EngineeringServices/Industries/Automative/Automative'
import Engines from './Components/EngineeringServices/Industries/Engines/Engines'
import HeavyMachinery from './Components/EngineeringServices/Industries/HeavyMachinery/HeavyMachinery'

// EngineeringServices--Services
import DataConversion from './Components/EngineeringServices/Services/DataConversion/DataConversion'
import DesignSupport from './Components/EngineeringServices/Services/DesignSupport/DesignSupport'
import ProductDevelopment from './Components/EngineeringServices/Services/ProductDevelopment/ProductDevelopment'

// StaffingSolutions
import StaffingSolutions from './Components/StaffingSolutions/StaffingSolutions'

// TrainingServices
import Analyst from './Components/TrainingServices/Analyst/Analyst'
import DesignEngineers from './Components/TrainingServices/DesignEngineers/DesignEngineers'
import IndustrialDesigners from './Components/TrainingServices/IndustrialDesigners/IndustrialDesigners'
import PipingCablingDesigners from './Components/TrainingServices/PipingCablingDesigners/PipingCablingDesigners'
import ProductionEngineers from './Components/TrainingServices/ProductionEngineers/ProductionEngineers'
import SoftSkillsTraining from './Components/TrainingServices/SoftSkillsTraining/SoftSkillsTraining'
import WiringHarness from './Components/TrainingServices/WiringHarness/WiringHarness'

function App() {
  return (
    <div className="App">
      
<BrowserRouter>
<Navbar/>

<Routes>

{/* Home--AboutUS--Careers--Contacts */}
  <Route path='/' element={<Home/>}/>
  <Route path='/AboutUs' element={<AboutUs/>}/>
  <Route path='/Careers' element={<Careers/>}/>
  <Route path='/ContactUs' element={<ContactUs/>}/>

  {/* EngineeringServices--Industries */}
  <Route path='/Aerospace' element={<Aerospace/>}/>
  <Route path='/Agriculture' element={<Agriculture/>}/>
  <Route path='/Appliances' element={<Appliances/>}/>
  <Route path='/Automative' element={<Automative/>}/>
  <Route path='/Engines' element={<Engines/>}/>
  <Route path='/HeavyMachinery' element={<HeavyMachinery/>}/>

  {/* EngineeringServices--Services */}
  <Route path='/DataConversion' element={<DataConversion/>}/>
  <Route path='/DesignSupport' element={<DesignSupport/>}/>
  <Route path='/ProductDevelopment' element={<ProductDevelopment/>}/>

  {/* StaffingSolutions */}
  <Route path='/StaffingSolutions' element={<StaffingSolutions/>}/>

{/* TrainingServices */}
  <Route path='/Analyst' element={<Analyst/>}/>
  <Route path='/DesignEngineers' element={<DesignEngineers/>}/>
  <Route path='/IndustrialDesigners' element={<IndustrialDesigners/>}/>
  <Route path='/PipingCablingDesigners' element={<PipingCablingDesigners/>}/>
  <Route path='/ProductionEngineers' element={<ProductionEngineers/>}/>
  <Route path='/SoftSkillsTraining' element={<SoftSkillsTraining/>}/>
  <Route path='/WiringHarness' element={<WiringHarness/>}/>

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
