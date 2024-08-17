// list of the ingredients that can be added to my burger

//  click a ‘+’ button on an ingredient to *** <APP> add it to my burger stack <APP> ***

import '../App'

const IngredientButton = ({ ingredient, addToBurger }) => {

    const handleClick = () => {
        addToBurger(ingredient)
    }

    return (
        <button onClick={handleClick}>+</button>
    )
}

const IngredientList = (props) => {
    const { ingredients, addToBurger } = props

    return (
        <ul>
            {ingredients.map((ingredient) => {
                return (
                    <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
                        <p>{ingredient.name}</p>
                        <IngredientButton
                            ingredient={ingredient}
                            addToBurger={addToBurger}
                        />
                    </li>
                )
            })}
        </ul>
    )
};

export default IngredientList;