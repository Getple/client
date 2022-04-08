import { useState } from 'react';
import PostFormPresenter from './postFormPresenter';

const PostFormContainer = () => {
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

  return (
    <PostFormPresenter
      setSeletctedSport={setSeletctedSport}
      setSeletctedLocation={setSeletctedLocation}
      isShow={isShow}
      selectedLocation={selectedLocation}
      selectedSport={selectedSport}
      handleDropdown={handleDropdown}
    />
  );
};

export default PostFormContainer;
