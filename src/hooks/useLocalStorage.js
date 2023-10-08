import { useSelector, useDispatch } from 'react-redux';

export default function useLocalStorage() {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.cars.entities);
  const status = useSelector(state => state.cars.status);

  return {
    dispatch,
    cars,
    status,
  };
}
