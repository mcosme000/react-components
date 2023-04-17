import Button from './components/button'


const App = () => {
  return (
    <div className="p-5">
      <h1>App</h1>
      <div>
        <div>
          <Button primary large rounded>Primary button</Button>
        </div>
        <div>
          <Button secondary large rounded>Secondary button</Button>
        </div>
        <div>
          <Button success large>Success button</Button>
        </div>
        <div>
          <Button cancel large rounded>Cancel button</Button>
        </div>
        <div>
          <Button small primary rounded>Small primary</Button>
        </div>
        <div>
          <Button small secondary rounded>Small secondary</Button>
        </div>
        <div>
          <Button small success pill>Small success</Button>
        </div>
        <div>
          <Button small cancel>Small cancel</Button>
        </div>

      </div>
    </div>
  )
}

export default App;
