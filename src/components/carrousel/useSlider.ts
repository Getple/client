import { useCallback, useEffect, useRef, useState } from 'react';
import Color from '../../constant/palette';
import { FacilityInfo } from './type';

interface UserSliderProps {
  array: FacilityInfo[];
}

const useSlider = (props: UserSliderProps) => {
  const arrayLen = props.array.length;
  const addDataAtBothEnds = [...props.array];
  const firstData = {
    ...addDataAtBothEnds[0],
    id: `first_${addDataAtBothEnds[0].id}`,
  };
  const lastData = {
    ...addDataAtBothEnds[addDataAtBothEnds.length - 1],
    id: `last_${addDataAtBothEnds[addDataAtBothEnds.length - 1].id}`,
  };
  addDataAtBothEnds.unshift(lastData);
  addDataAtBothEnds.push(firstData);

  const sliderRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState<number>(1);
  const [width, setWidth] = useState<number>(
    window.innerWidth >= 0 && window.innerWidth <= 425
      ? 250
      : window.innerWidth > 425 && window.innerWidth <= 1024
      ? 450
      : 900,
  );

  useEffect(() => {
    const target = sliderRef.current;
    for (let i = 1; i <= arrayLen; i++) {
      const dotElem = document.getElementById(`dot_${i}`);
      if (i === idx && dotElem) {
        dotElem.style.backgroundColor = `${Color.GRAY}`;
      } else if (i !== idx && dotElem) {
        dotElem.style.backgroundColor = `${Color.LIGHTGRAY}`;
      }
    }

    const updateWidth = () => {
      if (window.innerWidth >= 0 && window.innerWidth <= 425) {
        setWidth(250);
      } else if (window.innerWidth > 425 && window.innerWidth <= 1024) {
        setWidth(450);
      } else setWidth(900);
    };

    if (target && width)
      target.style.transform = `translateX(-${width * idx}px)`;

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [idx, width]);

  const goNext = useCallback(() => {
    const target = sliderRef.current;
    if (idx === arrayLen) {
      setTimeout(() => {
        if (target) target.style.transitionDuration = '0ms';
        setIdx(1);
      }, 500);
    }
    setIdx((prev) => prev + 1);
    if (target) target.style.transitionDuration = '500ms';
  }, [idx]);

  const goPrev = useCallback(() => {
    const target = sliderRef.current;
    if (idx === 1) {
      setTimeout(() => {
        if (target) target.style.transitionDuration = '0ms';
        setIdx(arrayLen);
      }, 500);
    }
    setIdx((prev) => prev - 1);
    if (target) target.style.transitionDuration = '500ms';
  }, [idx]);

  const handleDot = useCallback(
    (idx: number) => {
      const target = sliderRef.current;
      setIdx(idx);
      if (target) target.style.transitionDuration = '500ms';
    },
    [idx],
  );
  return {
    goPrev,
    goNext,
    width,
    addDataAtBothEnds,
    handleDot,
    sliderRef,
  };
};

export default useSlider;
