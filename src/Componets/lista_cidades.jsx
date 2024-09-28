function City(props) {
    return <li>{ props.name } is a great place to visit!</li>;
  }
  
  function TravelList() {
    const cities = ['Paris', 'Tokyo', 'New York'];
    return (
      <>
        <h1>Top Travel Destinations</h1>
        <ul>
          {cities.map((city) => <City name={city} key={city} />)}
        </ul>
      </>
    );
  }

  export default  TravelList