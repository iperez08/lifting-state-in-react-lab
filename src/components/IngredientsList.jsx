// list of the ingredients that can be added to my burger

//  click a ‘+’ button on an ingredient to *** <APP> add it to my burger stack <APP> ***

import '../App'

import Ingredient from './Ingredient'

// const IngredientButton = ({ ingredient, addToBurger }) => {

//     const handleClick = () => {
//         addToBurger(ingredient)
//     }

//     return (
//         <button onClick={handleClick}>+</button>
//     )
// }

const IngredientList = (props) => {
    const { ingredients, addToBurger } = props

    return (
        <ul>
            {ingredients.map((ingredient) => {
                return (
                    // <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
                    //     <p>{ingredient.name}</p>
                    //     <IngredientButton
                    //         ingredient={ingredient}
                    //         addToBurger={addToBurger}
                    //     />
                    // </li>
                    <Ingredient
                        ingredient={ingredient}
                        ingredientMethod={addToBurger}
                    />
                )
            })}
        </ul>
    )
};

export default IngredientList;

