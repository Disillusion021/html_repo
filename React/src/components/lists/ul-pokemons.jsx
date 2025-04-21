class UlPokemons extends React.Component {
  render() {
    console.log(this.props)
    return (
      <ul>
        {
          // this.state.filterPokemons.map(p => <li key={p.url}>{p.name}</li>)
        }
      </ul>
    )
  }
}