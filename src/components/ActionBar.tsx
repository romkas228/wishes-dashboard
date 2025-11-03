import type { priceFilterOption } from '../types/priceFilterOptions';
import { Container } from './Container';
import { DropDown, type DropdownOption } from './UI/DropDown';
import type { dateFilterOption } from '../types/dateFilterOption';
import { CiCirclePlus } from 'react-icons/ci';
import { useModal } from '../hooks/useModal';
import { useFilters } from '../hooks/useFilters';

export const ActionBar = () => {
  const {
    price: priceFilter,
    date: dateFilter,
    setDateFilter,
    setPriceFilter,
  } = useFilters();
  const { openAddModal } = useModal();

  const priceOptions: DropdownOption<priceFilterOption>[] = [
    {
      title: 'High',
      value: 'high',
    },
    {
      title: 'Low',
      value: 'low',
    },
  ];
  const dateOptions: DropdownOption<dateFilterOption>[] = [
    {
      title: 'Oldest',
      value: 'oldest',
    },
    {
      title: 'Newest',
      value: 'newest',
    },
  ];
  return (
    <nav className="w-full bg-gray-400 px-0 ">
      <Container>
        <div className="flex gap-7 justify-between items-center h-full py-2">
          <ul className="flex gap-2">
            <li>
              <DropDown
                label="Price"
                value={priceFilter}
                options={priceOptions}
                onChange={setPriceFilter}
              />
            </li>
            <li>
              <DropDown
                label="Date"
                value={dateFilter}
                options={dateOptions}
                onChange={(val: dateFilterOption) => {
                  setDateFilter(val);
                }}
              />
            </li>
          </ul>
          <button
            type="button"
            className=""
            onClick={openAddModal}
          >
            <CiCirclePlus className="size-7  duration-200 hover:text-blue-600" />
          </button>
        </div>
      </Container>
    </nav>
  );
};
