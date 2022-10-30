import { useState,
  useEffect,
  // useRef
} from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProfileBtn from '../components/ProfileBtn';
import DetailsMeal from '../components/DetailsMeal';
import DetailsDrink from '../components/DetailsDrink';

function Details(props) {
  console.log(props);
  const { match: { params: { id } } } = props;
  const { location: { pathname } } = props;
  // const data = useRef([]);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [recomendedData, setRecomendedData] = useState();

  const fetchData = async () => {
    if (pathname.includes('drink')) {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    } else {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    }
  };

  const fetchRecommended = async () => {
    if (pathname.includes('drink')) {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const json = await response.json();
      setRecomendedData(json);
    } else {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const json = await response.json();
      setRecomendedData(json);
    }
  };

  useEffect(() => {
    fetchData();
    fetchRecommended();
  }, []);

  if (isLoading) return <p>Carregando...</p>;
  return (
    <div>
      <Header>
        <h1> Details </h1>
        <ProfileBtn />
      </Header>
      <section>
        {
          (pathname.includes('drinks') && data) ? (
            <DetailsDrink data={ data } recomendedData={ recomendedData } />
          ) : (<DetailsMeal data={ data } recomendedData={ recomendedData } />)
        }
      </section>
      <Footer />
    </div>
  );
}

Details.propTypes = {
  history: PropTypes.shape({ location: PropTypes.shape({ pathname: PropTypes.string }) }),
}.isRequired;

export default Details;
