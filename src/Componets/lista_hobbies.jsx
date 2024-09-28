function Hobby(props) {
    return <li>I enjoy { props.hobby }</li>;
  }
  
  function HobbiesList() {
    const hobbies = ['Reading', 'Traveling', 'Photography'];
    return (
      <>
        <h1>My Favorite Hobbies</h1>
        <ul>
          {hobbies.map((hobby) => <Hobby hobby={hobby} key={hobby} />)}
        </ul>
      </>
    );
  }
export default HobbiesList