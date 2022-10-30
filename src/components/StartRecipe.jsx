import PropTypes from 'prop-types';
import '../styles/startRecipe.css';

function StartRecipe(props) {
  const { id, local } = props;

  // localStorage.setItem('inProgressRecipes', JSON.stringify({ meals: {}, drinks: {} }));

  const inProgressStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));

  return (
    <button
      type="button"
      data-testid="start-recipe-btn"
      className="btn_startRecife"
    >
      {inProgressStorage && (inProgressStorage[local][id])
        ? <p>Continue Recipe</p>
        : <p>Start Recipe</p>}
    </button>
  );
}

StartRecipe.propTypes = {
  id: PropTypes.string.isRequired,
  local: PropTypes.string.isRequired,
};

export default StartRecipe;
