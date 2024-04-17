import { Props } from "./BrickProgressBarType";
import "./BrickProgressBar.css"; 

const BrickProgressBar: React.FC<Props> = ({ tasksCompleted}) => {
  

  const bricks = [];
  for (let i = 0; i < 14; i++) {
    bricks.push(
      <div
        key={i}
        className={`brick ${i < tasksCompleted ? 'filled' : ''} ${i === tasksCompleted ? 'current' : ''}`}
      ></div>
    );
  }

  return (
    <div className="brick-progress-bar-container">
      <div className="brick-progress-bar">
        {bricks}
      </div>
      <span>{tasksCompleted}/14</span>
    </div>
  );
};

export default BrickProgressBar;
