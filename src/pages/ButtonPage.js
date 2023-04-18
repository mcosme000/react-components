import Button from '../components/button'
import { AiOutlineCalendar, AiOutlinePlus } from 'react-icons/ai'

const ButtonPage = () => {

  const handleClick = () => {
    console.log("Click!");
  }

  const handleMouseEnter = () => {
    console.log("Hovering now!!");
  }

  return (
    <div>
      <div>
        <Button large rounded primary onClick={handleClick}>
          <AiOutlineCalendar/>
          Primary button</Button>
      </div>
      <div>
        <Button success large rounded onMouseEnter={handleMouseEnter}>
          <AiOutlinePlus/>
          Primary button</Button>
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
  )
}

export default ButtonPage;
