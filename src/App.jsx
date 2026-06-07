import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/elements/Navbar.jsx'
import MainPage from './components/display/pages/mainpages/MainPage.jsx'
import ThemeBar from './components/display/pages/mainpages/ThemeBar.jsx'
import Semester1 from './components/display/pages/semesterpages/Semester1.jsx'
import Semester2 from './components/display/pages/semesterpages/Semester2.jsx'
import Semester3 from './components/display/pages/semesterpages/Semester3.jsx'
import Semester4 from './components/display/pages/semesterpages/Semester4.jsx'
import Semester5 from './components/display/pages/semesterpages/Semester5.jsx'
import Semester6 from './components/display/pages/semesterpages/Semester6.jsx'
import Semester7 from './components/display/pages/semesterpages/Semester7.jsx'
import Semester8 from './components/display/pages/semesterpages/Semester8.jsx'
import About from './components/display/pages/mainpages/About.jsx'
import SoftwareArchitecture from './components/display/pages/subjectpages/software_architecture.jsx'
import Mathematics from './components/display/pages/subjectpages/mathematics.jsx'
import AdvancedProgramming from './components/display/pages/subjectpages/advanced_programming.jsx'
import Cybersecurity from './components/display/pages/subjectpages/cybersecurity.jsx'
import HumanCenteredSoftware from './components/display/pages/subjectpages/human_centered_software.jsx'
import ModelbasedSoftware from './components/display/pages/subjectpages/modelbased_software.jsx'
import ScientificTheory from './components/display/pages/subjectpages/scientific_theory.jsx'
import BigData from './components/display/pages/subjectpages/big_data.jsx'
import Computersystems from './components/display/pages/subjectpages/computersystems.jsx'
import ObjectProgramming from './components/display/pages/subjectpages/object_programming.jsx'
import Statistics from './components/display/pages/subjectpages/statistics.jsx'
import DataManagement from './components/display/pages/subjectpages/data_management.jsx'
import ProjectManagement from './components/display/pages/subjectpages/project_management.jsx'
import ArtificialIntelligence from './components/display/pages/subjectpages/artificial_intelligence.jsx'
import DiscreteMathematics from './components/display/pages/subjectpages/discrete_mathematics.jsx'
import AlgorithmsDatastructures from './components/display/pages/subjectpages/algorithms_datastructures.jsx'
import OperativeSystems from './components/display/pages/subjectpages/operative_systems.jsx'
import CyberPhysicalSystems from './components/display/pages/subjectpages/cyber_physical_systems.jsx'
import useTheme from './hooks/useTheme'

export default function App() {
  // initialize theme from localStorage and apply styles
  useTheme()
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/themebar" element={<ThemeBar />} />
        <Route path="/semester/1" element={<Semester1 />} />
        <Route path="/semester/2" element={<Semester2 />} />
        <Route path="/semester/3" element={<Semester3 />} />
        <Route path="/semester/4" element={<Semester4 />} />
        <Route path="/semester/5" element={<Semester5 />} />
        <Route path="/semester/6" element={<Semester6 />} />
        <Route path="/semester/7" element={<Semester7 />} />
        <Route path="/semester/8" element={<Semester8 />} />
        <Route path="/about" element={<About />} />
        <Route path="/subject/software_architecture" element={<SoftwareArchitecture />} />
        <Route path="/subject/mathematics" element={<Mathematics />} />
        <Route path="/subject/advanced_programming" element={<AdvancedProgramming />} />
        <Route path="/subject/cybersecurity" element={<Cybersecurity />} />
        <Route path="/subject/human_centered_software" element={<HumanCenteredSoftware />} />
        <Route path="/subject/modelbased_software" element={<ModelbasedSoftware />} />
        <Route path="/subject/scientific_theory" element={<ScientificTheory />} />
        <Route path="/subject/big_data" element={<BigData />} />
        <Route path="/subject/computersystems" element={<Computersystems />} />
        <Route path="/subject/object_programming" element={<ObjectProgramming />} />
        <Route path="/subject/statistics" element={<Statistics />} />
        <Route path="/subject/data_management" element={<DataManagement />} />
        <Route path="/subject/project_management" element={<ProjectManagement />} />
        <Route path="/subject/artificial_intelligence" element={<ArtificialIntelligence />} />
        <Route path="/subject/discrete_mathematics" element={<DiscreteMathematics />} />
        <Route path="/subject/algorithms_datastructures" element={<AlgorithmsDatastructures />} />
        <Route path="/subject/operative_systems" element={<OperativeSystems />} />
        <Route path="/subject/cyber_physical_systems" element={<CyberPhysicalSystems />} />
      </Routes>
    </div>
  )
}
