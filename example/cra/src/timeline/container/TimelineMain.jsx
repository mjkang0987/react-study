import React, { useEffect, useReducer } from 'react';
import { addTimeline, removeTimeline } from '../state';
import store from '../../common/store';
import Timelines from '../component/Timeline';
import { getNextTimeline } from '../../common/mocData';

const TimelineMain = () => {
  const [, forceUpdate] = useReducer(v => v + 1, 0);
  useEffect(() => {
    let prevTimelines = store.getState().timeline.timelines;
    const unsubscribe = store.subscribe(() => {
      const currentTimelines = store.getState().timeline.timelines;
      if (currentTimelines === prevTimelines) return;
      forceUpdate();
      prevTimelines = currentTimelines;
    });
    return () => unsubscribe();
  }, []);

  const onAdd = _ => {
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline));
  };

  console.log('TimelineMain Render');
  const timelines = store.getState().timeline.timelines;
  return (
    <div>
      <button
        onClick={onAdd}>
        타임라인 추가
      </button>
      <Timelines timelines={timelines}/>
    </div>
  );
};

export default TimelineMain;
