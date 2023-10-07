import { useEffect } from 'react';
import css from './Modal.module.css';
import { RxCross1 } from 'react-icons/rx';

export const Modal = ({ car, onClose }) => {
  let rentalConditions = car.rentalConditions.split('\n');
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: '1200',
      }}
      onClick={handleBackdropClick}
    >
      <div className={css.modal}>
        <button
          onClick={() => onClose()}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <RxCross1 style={{ width: 24, height: 24 }}></RxCross1>
        </button>
        <div
          style={{
            backgroundImage: `url(${car.img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            minHeight: 248,
            borderRadius: 14,
          }}
        ></div>
        <div className={css.infoContainer}>
          <h1 className={css.title}>
            {car.make} <span className={css.span}>{car.model}</span>, {car.year}
          </h1>
          <div className={css.text}>
            <p style={{ margin: 0 }}>
              {car.address.split(',').slice(1, 2)} |{' '}
              {car.address.split(',').slice(2, 3)} | Id: {car.id} | Type:
              {car.type}
            </p>
            <p style={{ marginTop: 7 }}>
              Fuel consumption: {car.fuelConsumption} | Engine size:{' '}
              {car.engineSize}
            </p>
          </div>
          <p className={css.description}>{car.description}</p>
          <div className={css.functions}>
            <h2 className={css.description}>
              Accessories and functionalities:
            </h2>
            {/* <p>
              {car.accessories.map(item => (
                <span key={item} className={css.accessoriesAndFunctionalities}>
                  {item} |
                </span>
              ))}
            </p> */}
            <p className={css.accessoriesAndFunctionalities}>
              {car.accessories.slice(0, 1)} | {car.accessories.slice(1, 2)} |{' '}
              {car.accessories.slice(2, 3)}
            </p>
            <p
              className={css.accessoriesAndFunctionalities}
              style={{ marginTop: 4 }}
            >
              {car.functionalities.slice(0, 1)} |{' '}
              {car.functionalities.slice(1, 2)} |{' '}
              {car.functionalities.slice(2, 3)}
            </p>
          </div>
          <div className={css.rentalContainer}>
            <h2 className={css.description}>Rental Conditions:</h2>
            <ul className={css.rentalConditions}>
              {rentalConditions.map(item => (
                <li key={item} className={css.rentalItem}>
                  {item}
                </li>
              ))}
              <li className={css.rentalItem}>
                Mileage:{' '}
                <span style={{ color: '#3470FF' }}> {car.mileage}</span>
              </li>
              <li className={css.rentalItem}>
                Price:{' '}
                <span style={{ color: '#3470FF' }}>{car.rentalPrice}</span>
              </li>
            </ul>
          </div>
        </div>
        <button className={css.button}>Rental car</button>
      </div>
    </div>
  );
};
