import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import { CarItem } from '../../redux/cars/types';

import FullCarSkeleton from './full-car-skeleton/FullCarSkeleton';

import styles from './full-car-block.module.scss'

const FullCarBlock: React.FC = () => {
    const [carInfo, setCarInfo] = useState<CarItem>();

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCar() {
            try {
                if (id) {
                    const { data } = await axios.get(`https://651701c309e3260018ca9138.mockapi.io/elements/?${id}`);
                    setCarInfo(data[id]);
                }
            } catch (error) {
                alert('Ошибка при получении данных!');
                navigate('/');
            }
        }
        fetchCar();
    }, [id, navigate]);

    if (!carInfo) {
        return <FullCarSkeleton />;
    }
    return (
        <div className={styles.root}>
            <div className={styles.imgBlock}>
                <img src={carInfo.imageUrl} alt='pizza' />
            </div>
            <div className={styles.info}>
                <h2>Бренд: {carInfo.brand}</h2>
                <div>Модель: {carInfo.model}</div>
                <div>Цвет: {carInfo.color}</div>
                <div>Год выпуска: {carInfo.year}</div>
                <div>Тип двигателя: {carInfo.engine}</div>
                {carInfo.year && <div>Запас хода: {carInfo.year} км.</div>}
                {carInfo.transmission && <div>Трансмиссия: {carInfo.transmission}</div>}
                <div className={styles.price}>Стоимость: {carInfo.price} $</div>
                <Link to="/">
                    <button className="button button--outline button--add">
                        <span>Назад</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FullCarBlock;