import React, { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Paginate, PaginationProps } from '../../components/Paginate';

import {
  Container,
  PeopleContainer,
  PeopleInfo,
  PeopleInfoContainer,
  PeopleInfoType,
  PeopleName,
} from './styles';

interface PeopleProps {
  [key: string]:
    | 'birth_year'
    | 'eye_color'
    | 'gender'
    | 'hair_color'
    | 'height'
    | 'mass'
    | 'name'
    | 'skin_color';
}

export const Home: React.FC = () => {
  const [peoples, setPeoples] = useState<PeopleProps[]>([]);
  const [paginate, setPaginate] = useState<PaginationProps>({
    active_page: 1,
    per_page: 10,
    total_items_count: 0,
  });

  const peopleKeysInfo = useMemo(() => {
    return [
      'birth_year',
      'eye_color',
      'gender',
      'hair_color',
      'height',
      'mass',
      'skin_color',
    ];
  }, []);

  const getSwapiPeople = useCallback(async () => {
    const { data: swapiPeople } = await axios.get(
      `https://swapi.dev/api/people?page=${paginate.active_page}`,
    );

    const { results, count } = swapiPeople;

    setPeoples(results);

    setPaginate(page => ({ ...page, total_items_count: count }));
  }, [paginate.active_page]);

  useEffect(() => {
    getSwapiPeople();
  }, [getSwapiPeople]);

  return (
    <Container>
      {peoples.map(people => (
        <PeopleContainer key={people.name}>
          <PeopleName>{people.name}</PeopleName>
          {peopleKeysInfo.map(peopleKeyInfo => (
            <PeopleInfoContainer key={peopleKeyInfo}>
              <PeopleInfoType>{`${peopleKeyInfo}: `}</PeopleInfoType>
              <PeopleInfo>{people[peopleKeyInfo]}</PeopleInfo>
            </PeopleInfoContainer>
          ))}
        </PeopleContainer>
      ))}

      <Paginate paginate={paginate} setPaginate={setPaginate} />
    </Container>
  );
};
