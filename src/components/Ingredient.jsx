// display the name of a single ingredient
// conditionally render the add or remove button based on its parent.

const IngredientButton = (props) => {
    const { ingredient } = props
    const handleClick = () => {
        props.ingredientMethod(ingredient)
    }

    return (
        <button onClick={handleClick}>X</button>
    )
}

const Ingredient = (props) => {
    const { ingredient, ingredientMethod } = props
    return (
        <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
            <p>{ingredient.name}</p>
            <IngredientButton
                ingredient={ingredient}
                ingredientMethod={ingredientMethod}
            />
        </li>
    )
}

export default Ingredient