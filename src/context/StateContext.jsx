import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "../components/reducer";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCT", payload: productList });
    const filterProducts = productList.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    dispatch({ type: "GET_PRODUCT", payload: filterProducts });
  }, [productList, search]);

  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const products = await api.json();
    setProductList(products);
  };

  const initialState = {
    products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { state, dispatch, search, setSearch };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const customProvider = () => useContext(StateContext);
