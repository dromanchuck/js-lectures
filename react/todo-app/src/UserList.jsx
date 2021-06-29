import { useEffect, useState, memo } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Modal } from './components/Modal';
import { ACTIONS } from './redux/constants';

export const UserList = memo(() => {
  const history = useHistory();
  const dispatch = useDispatch();

  const photos = useSelector(
    (state) => state.photosReducer.photos,
  );

  const error = useSelector(
    (state) => state.photosReducer.error,
  );

  const [isModalOpened, setIsModalOpened] =
    useState(false);

  const [selectedUrl, setSelectedUrl] =
    useState('');

  useEffect(() => {
    dispatch({
      type: ACTIONS.GET_PHOTOS_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const onClickImage = (url) => {
    setSelectedUrl(url);
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const onClickGoToTodoList = () => {
    history.push('/todolist/jack');
  };

  return (
    <>
      {isModalOpened ? (
        <Modal closeModal={closeModal}>
          <Img urlec={selectedUrl} />
          <Img urlec={selectedUrl} />
          <Img urlec={selectedUrl} />
        </Modal>
      ) : null}
      <button onClick={onClickGoToTodoList}>
        Open todo list
      </button>
      <ol>
        {photos.length > 0 ? (
          photos.map((item, index) => (
            <Img
              key={index}
              urlec={item.url}
              onClick={onClickImage}
              id={item.id}
            />
          ))
        ) : (
          <Preloader />
        )}
      </ol>
    </>
  );
});

const Img = ({ urlec, onClick, id }) => {
  const history = useHistory();

  const onClickImage = () => {
    history.push(`/photos/${id}`);
  };

  return (
    <img
      onClick={onClickImage}
      style={{
        width: '100px',
        height: '100px',
        transition: 'all 0.3s linear',
      }}
      src={urlec}
    />
  );
};

const Preloader = styled.div`
  width: 100px;
  height: 100px;
  background: black;
`;
