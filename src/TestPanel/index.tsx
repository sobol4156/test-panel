import CountDown from './CountDown'
import BrickProgressBar from './BrickProgressBar'
import Questions from './Questions'
import { useSelector } from 'react-redux'
import { RootState } from '../store'


const TestPanel = () => {
  const bar = useSelector((state: RootState) => state.counter.count)
  return (
    <div className=''>
      <div className='header'>
        <div className='title'>
          <h2>Тестирование</h2>
          <CountDown />

        </div>
        <BrickProgressBar tasksCompleted={bar} />
      </div>

      <div className='questions'>
        <Questions />
      </div>
    </div>
  )
}

export default TestPanel
