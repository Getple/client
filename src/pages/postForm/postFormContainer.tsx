import { useRef, useState } from 'react';
import PostFormPresenter from './postFormPresenter';

const PostFormContainer = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const countRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const sportRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const [isShow, setIsShow] = useState({ sport: false, location: false });
  const [selectedSport, setSeletctedSport] = useState<string>('');
  const [selectedLocation, setSeletctedLocation] = useState<string>('');

  // const handleSelectbox = (el: any) => {
  //   if (el === 'sport') {
  //     setSeletctedSport(el);
  //     setIsShow({ ...isShow, sport: false });
  //   } else if (el === 'location') {
  //     setSeletctedLocation(el);
  //     setIsShow({ ...isShow, location: false });
  //   }
  // };

  const handleDropdown = (type: string) => {
    if (type === 'sport') {
      setIsShow({ ...isShow, sport: !isShow.sport });
    } else if (type === 'location') {
      setIsShow({ ...isShow, location: !isShow.location });
    }
  };

  const handleSubmit = () => {
    const post = {
      id: Date.now(),
      title: titleRef.current?.value,
      count: countRef.current?.value,
      phone: phoneRef.current?.value,
      sport: sportRef.current?.value,
      location: locationRef.current?.value,
      content: contentRef.current?.value,
    };
    console.log(post);
  };

  return (
    <PostFormPresenter
      setSeletctedSport={setSeletctedSport}
      setSeletctedLocation={setSeletctedLocation}
      isShow={isShow}
      selectedLocation={selectedLocation}
      selectedSport={selectedSport}
      handleDropdown={handleDropdown}
      titleRef={titleRef}
      countRef={countRef}
      phoneRef={phoneRef}
      sportRef={sportRef}
      locationRef={locationRef}
      contentRef={contentRef}
      handleSubmit={handleSubmit}
    />
  );
};

export default PostFormContainer;
