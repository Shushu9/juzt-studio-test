import React, { useState, useRef } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { setSortType } from '../redux/filter/slice'
import { selectFilter } from "../redux/filter/selectors";

import { SortType } from "../redux/filter/types";
import { SortPropertyEnum } from "../redux/filter/types";

export const LIST: SortType[] = [
  { name: 'бренду (DESC)', sort: SortPropertyEnum.BRAND_DESC },
  { name: 'бренду (ASC)', sort: SortPropertyEnum.BRAND_ASC },
  { name: 'цене (DESC)', sort: SortPropertyEnum.PRICE_DESC },
  { name: 'цене (ASC)', sort: SortPropertyEnum.PRICE_ASC },
  { name: 'году выпуска (DESC)', sort: SortPropertyEnum.YEAR_DESC },
  { name: 'году выпуска (ASC)', sort: SortPropertyEnum.YEAR_ASC },
];

const SortPopup: React.FC = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const sortRef = useRef<HTMLDivElement>(null);
  const sortType = useSelector(selectFilter).sortType;
  const dispatch = useDispatch()

  const selectActiveItem = (el: SortType) => {
    dispatch(setSortType(el))
    setIsOpen(() => false)
  }

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg
          className={isOpen ? 'rotated' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsOpen((el) => !el)}>{sortType.name}</span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {LIST.map((item) => {
              return (
                <li
                  onClick={() => selectActiveItem(item)}
                  className={sortType.name === item.name ? 'active' : ''}
                  key={item.name}
                >
                  {item.name}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
})

export default SortPopup;