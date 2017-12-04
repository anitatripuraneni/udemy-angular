import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListAction from './shopping-list.actions';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export interface AppState {
    shoppingList: State
}


export interface State {
    ingredients: Ingredient[];
    editedingredient: Ingredient;
    editedIngredientIndex: number;
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ],
    editedingredient: null,
    editedIngredientIndex: -1
};

export function shoppingListReducer(state = initialState, action: ShoppingListAction.ShoppingListAction) {
    switch (action.type) {
        case ShoppingListAction.ADD_INGREDIENT:
            return {
                ...state, ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListAction.ADD_INGREDIENTS:
            return { ...state, ingredients: [...state.ingredients, ...action.payload] };

        case ShoppingListAction.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updateIngredient = {
                ...ingredient, ...action.payload.ingredient
            };
            const ingredients = [...state.ingredients];
            ingredients[state.editedIngredientIndex] = updateIngredient;
            return {
                ...state, ingredients: ingredients,
                editedingredient: null,
                editedIngredientIndex: -1
            };

        case ShoppingListAction.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            oldIngredients.splice(state.editedIngredientIndex, 1);
            return {
                ...state, ingredients: oldIngredients,
                editedingredient: null,
                editedIngredientIndex: -1
            };
        case ShoppingListAction.START_EDIT:
            const editedingredient = { ...state.ingredients[action.payload] };
            return {
                ...state,
                editedingredient: editedingredient,
                editedIngredientIndex: action.payload
            };
        case ShoppingListAction.STOP_EDIT:
            return {
                ...state,
                editedingredient: null,
                editedIngredientIndex: -1
            };
        default:
            return state;
    }
}