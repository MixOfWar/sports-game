class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <h1 className='headingText'> Welcome to {this.props.name} </h1>
        <Team name={this.props.teamNameOne} logo={this.props.teamLogoOne} />
        <Team name={this.props.teamNameTwo} logo={this.props.teamLogoTwo} />
      </div>
    );
  }
}
