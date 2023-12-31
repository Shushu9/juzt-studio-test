import React, { useEffect, useRef } from 'react';

import qs from "qs";

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { selectFilter } from '../redux/filter/selectors';
import {
    setCurrentPage,
    setFilters
} from '../redux/filter/slice'
import { fetchCars } from '../redux/cars/asyncActions'
import { SearchCarParams } from '../redux/cars/types';
import { selectCarData } from '../redux/cars/selectors';
import { useAppDispatch } from '../redux/store';

import Categories from '../components/Categories';
import SortPopup, { LIST } from '../components/Sort';
import CarBlock from '../components/car-block';
import Skeleton from '../components/car-block/Skeleton';
import Pagination from '../components/pagination';

const Home: React.FC = () => {
    const isSearch = useRef(false);
    const isMounted = useRef(false);
    const { items, status } = useSelector(selectCarData)
    const { categoryId, sortType, currentPage, searchValue } = useSelector(selectFilter)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onChangePage = (num: number) => {
        dispatch(setCurrentPage(num))
    }

    const getCars = async () => {
        const order = sortType.sort.includes('-') ? 'asc' : 'desc';
        const sortBy = sortType.sort.replace('-', '');
        const category = categoryId > 0 ? 'category=' + categoryId : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        dispatch(
            fetchCars({
                order,
                sortBy,
                category,
                search,
                currentPage,
            }));
    }

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1)) as unknown as SearchCarParams;
            const sort = LIST.find(obj => obj.sort === params.sortBy);
            dispatch(
                setFilters({
                    searchValue: params.search || '',
                    categoryId: Number(params.category) || 0,
                    currentPage: Number(params.currentPage),
                    sortType: sort || LIST[0],
                })
            )
            isSearch.current = true;
        }
    }, [dispatch])

    useEffect(() => {
        window.scrollTo(0, 0)

        if (!isSearch.current) {
            getCars()
        }

        isSearch.current = false;
        // eslint-disable-next-line
    }, [categoryId, sortType, searchValue, currentPage])

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortType: sortType.sort,
                categoryId,
                currentPage,
            });

            navigate(`?${queryString}`)
        }

        isMounted.current = true;
    }, [categoryId, currentPage, navigate, sortType, searchValue])

    const pizzas = items.map((data) => (
        <CarBlock
            {...data}
            key={data.id} />
    ))

    const skeletons = [...new Array(10)].map((_, i) => <Skeleton key={i} />);

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <SortPopup />
            </div>
            <h2 className="content__title">Все автомобили</h2>
            {status === 'error' ? (
                <div className="content__error-info">
                    <h2>Произошла ошибка 😕</h2>
                    <p>К сожалению, не удалось получить данные. Попробуйте повторить попытку позже.</p>
                </div>
            ) : (
                <div className="content__items">
                    {status === 'loading' ? skeletons : pizzas}
                </div>
            )}

            < Pagination currentPage={currentPage} setCurrentPage={(i: number) => onChangePage(i)} />
        </div>
    )
}

export default Home;