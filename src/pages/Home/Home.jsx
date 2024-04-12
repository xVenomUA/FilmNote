import { useEffect} from "react";

import { useDispatch } from "react-redux";
import { getFilms } from "../../redux/Films/operation";

import { FilmList } from "../../components/FilmList/FilmList";

const Home = () => {
  const dispatch = useDispatch(); 

  useEffect(()=> { 
    dispatch(getFilms()); 
  }, [dispatch])

  return (
    <main className="">
      <div className="container"><FilmList /></div>
       
    </main>
  );
};
export default Home;
