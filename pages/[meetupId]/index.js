import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return <MeetupDetail></MeetupDetail>;
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback: false,
  };
}
export async function getStaticProps(context) {
  console.log(context.params);
  //fetched from
  return {
    props: {
      meetupData: {
        id: "1",
        image: "",
        title: "Hello",
        address: "http",
        description: "This is a description",
      },
    },
  };
}
export default MeetupDetails;
