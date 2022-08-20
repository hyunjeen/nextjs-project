import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  async function addMeetupHandler(entereddata) {
    const result = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(entereddata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resData = await result.json();
    console.log(resData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
};

export default NewMeetupPage;
