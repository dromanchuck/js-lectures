import { useEffect, useState, memo } from 'react';

import { Modal } from './components/Modal';

export const UserList = memo(() => {
  const [users, setUsers] = useState([]);

  const [isModalOpened, setIsModalOpened] =
    useState(false);

  const [selectedUrl, setSelectedUrl] =
    useState('');

  useEffect(async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/photos',
    );
    const usersResponse = await response.json();

    setUsers(usersResponse);
  }, []);

  const onClickImage = (url) => () => {
    setSelectedUrl(url);
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <>
      {isModalOpened ? (
        <Modal closeModal={closeModal}>
          <Img urlec={selectedUrl} />
        </Modal>
      ) : null}
      <ol>
        {users.map((item, index) => (
          <Img
            key={index}
            urlec={item.url}
            onClick={onClickImage(item.url)}
          />
        ))}
      </ol>
    </>
  );
});

const Img = ({ urlec, onClick }) => {
  const onClickImage = () => {
    onClick();
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
