import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "광화문",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/%EA%B4%91%ED%99%94%EB%AC%B8_Gwanghwamun_%E5%85%89%E5%8C%96%E9%96%80_-_panoramio.jpg/1280px-%EA%B4%91%ED%99%94%EB%AC%B8_Gwanghwamun_%E5%85%89%E5%8C%96%E9%96%80_-_panoramio.jpg",
    address: "대한민국 서울특별시 종로구 사직로 161",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "숭례문",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/%EA%B4%91%ED%99%94%EB%AC%B8_Gwanghwamun_%E5%85%89%E5%8C%96%E9%96%80_-_panoramio.jpg/1280px-%EA%B4%91%ED%99%94%EB%AC%B8_Gwanghwamun_%E5%85%89%E5%8C%96%E9%96%80_-_panoramio.jpg",
    address: "대한민국 서울특별시 종로구 사직로 162",
    description: "This is a first 3p",
  },
];
const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  console.log(loadedMeetups);
  useEffect(() => {
    console.log("1");
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return <MeetupList meetups={loadedMeetups}></MeetupList>;
};

export default HomePage;
