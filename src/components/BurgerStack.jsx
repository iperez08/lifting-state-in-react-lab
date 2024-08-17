// see a stack of the ingredients that make up my burger

// *** click a ‘+’ button on an ingredient *** <APP> add it <APP> to my burger stack. 
// This action will place the ingredient on the stack

// click an ‘X’ button on an ingredient in my burger stack to remove it

import '../App'

import Ingredient from './Ingredient'


// const IngredientButton = ({ ingredient, removeFromBurger }) => {

//     const handleClick = () => {
//         removeFromBurger(ingredient)
//     }

//     return (
//         <button onClick={handleClick}>X</button>
//     )
// }


const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
        <ul>
            {stack.map((ingredient) => {
                return (
                    // <li key={ingredient.id} style={{ backgroundColor: ingredient.color }}>
                    //     <p>{ingredient.name}</p>
                    //     <IngredientButton
                    //         ingredient={ingredient}
                    //         removeFromBurger={removeFromBurger}
                    //     />
                    // </li>
                    <Ingredient
                        ingredient={ingredient}
                        ingredientMethod={removeFromBurger}
                    />
                )
            })}
        </ul>
    )
}

export default BurgerStack;


