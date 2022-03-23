//action createors
export function fetchCats(cats) {

    //dispatch initial action to set up as loading state
    return function (dispatch){
    dispatch({type: "cats/catsLoading"});

    //initiate network request with fetch
    fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
        .then((r) => r.json())
        .then((cats) => 
            dispatch({
                type: "cats/catsLoaded",
                payload: cats.images,
            })
        );
    };
}

const initialState = {
    entities: [], //array of cats
    status: "idle", //loading state
}

export default function catsReducer(state = initialState, action) {
    switch(action.type){
        case "cats/catsLoading":
            return{
                ...state,
                status: "loading",
            };
        case "cats/catsLoaded":
            return{
                ...state,
                entities: action.payload,
                status: "idle",
            };
        default:
            return state;
    }
}
