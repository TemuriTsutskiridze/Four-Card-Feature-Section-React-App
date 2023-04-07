import './styles/css/App.css';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <main>

        <Section 
          className = "red"
          title = "Supervisor"  
          text = "Monitors activity to identify project roadblocks"
          image = "../../images/icon-supervisor.svg"
        />

        <div class = "midSection">
          <Section 
            className = "blue"
            title = "Team Builder"  
            text = "Scans our talent network to create the optimal team for your project"
            image = "../../images/icon-team-builder.svg"
          />

          <Section 
            className = "cyan"
            title = "Karma"  
            text = "Regularly evaluates our talent to ensure quality"
            image = "../../images/icon-karma.svg"
          />
        </div>
      
        <Section 
          className = "yellow"
          title = "Calculator"  
          text = "Uses data from past projects to provide better delivery estimates"
          image = "../../images/icon-calculator.svg"
        />
      </main>
    </div>
  );
}

export default App;
