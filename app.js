function App(props) {
  return (
    <div className='app'>
      <Game
        name='Moda Center'
        teamNameOne='Trail Blazers'
        teamLogoOne='./trailblazerslogo.webp'
        teamNameTwo='Celtics'
        teamLogoTwo='./celticsTeamLogo.jpg'
      />
    </div>
  );
}

//Render the application
ReactDOM.render(<App />, document.getElementById('root'));
