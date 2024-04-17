import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../store/countDownSlice/countDownSlice";
import { RootState } from "./CountDownType";



const CountDown = () => {
  const dispatch = useDispatch();
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [h, m, s] = useSelector((state: RootState) => state.countDown.count);
  const count = useSelector((state: RootState) => state.counter.count);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused && !over) {

        if (s === 0) {
          if (m === 0) {
            if (h === 0) {
              setOver(true);
              localStorage.removeItem("time");
            } else {
              dispatch(update({ hours: h - 1, minutes: 59, seconds: 59 }));
            }
          } else {
            dispatch(update({ hours: h, minutes: m - 1, seconds: 59 }));
          }
        } else {
          dispatch(update({ hours: h, minutes: m, seconds: s - 1 }));
        }
      } if (count === 14) {
        setPaused(true)
      } else {
        setPaused(false)
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, paused, over, h, m, s, count]);


  return (
    <div>
      <p>{`${h.toString().padStart(2, '0')}:${m
        .toString()
        .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
      <div>{over ? "Time's up!" : ''}</div>
    </div>
  );
};

export default CountDown