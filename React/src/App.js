// 创建一个名叫App的类组件
class App extends React.Component {
  constructor() {
    console.log("验证生命周期: 构造函数") // 第一步
    super()
    this.state = {
      pokemons: [],
      filterPokemons: [],
      eggs: ["皮丘蛋"],
    }
  }

  componentDidMount() {
    console.log("验证生命周期: 组件已挂载") // 第三步
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(json => {
        this.setState(
          () => ({ pokemons: json.results, filterPokemons: json.results }),
          () => console.log(this.state) // 还有eggs,说明setState是浅合并,只会覆盖传入的属性,没传入的属性继续保留
        )
      })
  }

  onChangeHandle = event => {
    const filterPokemons = this.state.pokemons.filter(pokemon => {
      return pokemon.name.includes(event.target.value)
    })
    this.setState(
      () => { return { filterPokemons: filterPokemons } },
      () => console.log(this.state)
    )
  }

  render() {
    console.log("验证生命周期: 渲染") // 第二步 第四步重新渲染(会造成闪屏)
    return (
      <>
        <h1>口袋妖怪</h1>
        <input type="search" onChange={this.setState}></input>
        <ul-pokemons></ul-pokemons>
      </>
    )
  }
}