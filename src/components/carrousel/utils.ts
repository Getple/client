import Color from '../../constant/palette';
import { FacilityInfo } from './type';

const dotMarking = (initialNum: number, arr: FacilityInfo[]) => {
  const dotNum = Math.abs(initialNum) / 900;
  for (let idx = 1; idx <= arr.length; idx++) {
    const elem = window.document.getElementById(`dot_${idx}`);
    if (idx === dotNum && elem) {
      elem.style.backgroundColor = `${Color.GRAY}`;
    } else if (idx !== dotNum && elem) {
      elem.style.backgroundColor = `${Color.LIGHTGRAY}`;
    }
  }
};

const handleDot = (
  idx: number,
  initialNum: number,
  array: FacilityInfo[],
  cardListRef: React.MutableRefObject<HTMLDivElement | null>,
) => {
  for (let i = 1; i <= array.length; i++) {
    const elem = document.getElementById(`dot_${i}`);
    if (i === idx && elem) {
      elem.style.backgroundColor = `${Color.GRAY}`;
      initialNum = i * -900;
      if (cardListRef.current) {
        cardListRef.current.style.transform = `translateX(${initialNum}px)`;
        cardListRef.current.style.transitionDuration = '500ms';
      }
    } else if (i !== idx && elem) {
      elem.style.backgroundColor = `${Color.LIGHTGRAY}`;
    }
  }
};

const addDataAtBothEnds = (array: FacilityInfo[]) => {
  const copyArray = [...array];
  const firstData = { ...copyArray[0], id: `first_${copyArray[0].id}` };
  const lastData = {
    ...copyArray[copyArray.length - 1],
    id: `last_${copyArray[copyArray.length - 1].id}`,
  };
  copyArray.unshift(lastData);
  copyArray.push(firstData);
  return copyArray;
};

export { dotMarking, handleDot, addDataAtBothEnds };
