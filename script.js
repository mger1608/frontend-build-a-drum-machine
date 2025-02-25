const drumArray = [
  { key: "Q", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3", description: "Heater 1" },
  { key: "W", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3", description: "Heater 2" },
  { key: "E", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3", description: "Heater 3" },
  { key: "A", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3", description: "Heater 4" },
  { key: "S", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3", description: "Clap" },
  { key: "D", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3", description: "Open-HH" },
  { key: "Z", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3", description: "Kick-n'-Hat" },
  { key: "X", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3", description: "Kick" },
  { key: "C", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3", description: "Closed-HH" },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: drumArray,
      currentDisplay: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress= this.handleKeyPress.bind(this);
  }
  
  handleClick(pad) {
    const audio = document.getElementById(pad.key);
    audio.play();
    this.setState({currentDisplay: pad.description});
  }
  
  handleKeyPress(event) {
    const keyPressed = event.key.toUpperCase();
    const pad = this.state.keys.find((p) => p.key === keyPressed);
    if (pad) {
      const audio = document.getElementById(pad.key);
      audio.play();
      this.setState({currentDisplay: pad.description});
    }
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  
  render() {
    return (
      <div id = "drum-machine">
        <div id = "display">
          {this.state.currentDisplay}
        </div>
        <div>
          {this.state.keys.map((pad) => (
          <div 
            className = "drum-pad" 
            id = {pad.description} 
            key = {pad.key}
            onClick = {() => this.handleClick(pad)}
           >
            {pad.key}
            <audio className = "clip" id = {pad.key} src = {pad.src}></audio> 
          </div>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
