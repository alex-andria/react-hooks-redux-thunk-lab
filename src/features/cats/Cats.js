import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCats} from "./catsSlice";
import CatList from "./CatList";

function Cats() {

  const catPics = useSelector((state) => state.entities)
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.entities.status);

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  console.log(catPics);

  return (
    <div>
      <h1>CatBook</h1>
      {/* add CatList component here */}
      <CatList catPics={catPics}/>
    </div>
  );
}

export default Cats;
