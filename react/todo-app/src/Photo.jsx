import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ACTIONS } from './redux/constants';

export const Photo = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: ACTIONS.GET_ONE_PHOTO_REQUEST,
      id: params.id,
    });
  }, []);

  return <div></div>;
};
