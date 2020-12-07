const success = new Audio('./audio/success.mp3');
const fail = new Audio('./audio/fail.mp3');

class Team extends React.Component {
  state = {
    shotsPercentage: 0,
    shotsTaken: 0,
    score: 0,
    shotsCompleted: 0,
  };

  shoot = () => {
    this.setState((state) => {
      return { shotsTaken: state.shotsTaken + 1 };
    });
    let rando = Math.floor(Math.random() * 4);
    if (rando === 1) {
      this.setState((state) => {
        return { score: state.score + 1, shotsCompleted: state.shotsCompleted + 1 };
      });
      success.play();
    } else if (rando === 2) {
      this.setState((state) => {
        return { score: state.score + 2, shotsCompleted: state.shotsCompleted + 1 };
      });
      success.play();
    } else if (rando === 3) {
      this.setState((state) => {
        return { score: state.score + 3, shotsCompleted: state.shotsCompleted + 1 };
      });
      success.play();
    } else {
      fail.play();
    }
    this.setState((state) => {
      return { shotsPercentage: Math.round((state.shotsCompleted / state.shotsTaken) * 100) };
    });
  };

  render() {
    return (
      <div className='teamDiv'>
        <img className='teamImg' src={this.props.logo} alt='team logo' />
        <h2>{this.props.name}</h2>
        <p>Shots Taken: {this.state.shotsTaken}</p>
        <p>Score: {this.state.score}</p>
        <p>Shots Percentage: {this.state.shotsPercentage}%</p>
        <button onClick={this.shoot}>Shoot</button>
      </div>
    );
  }
}
