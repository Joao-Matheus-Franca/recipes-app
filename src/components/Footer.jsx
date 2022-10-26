import { Link } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import '../styles/footer.css';

function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/drinks">
        <button type="button">
          <img src={ drinkIcon } alt="mealIcon" data-testid="drinks-bottom-btn" />
        </button>
      </Link>
      <Link to="/meals">
        <button type="button">
          <img src={ mealIcon } alt="drinkIcon" data-testid="meals-bottom-btn" />
        </button>
      </Link>
    </footer>
  );
}

export default Footer;
