import axios from 'axios';
import { useState, useEffect } from 'react';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { ALL_PAINTINGS } from '../config';

export const Paintings = ({ setPaintings, paintings }) => {
  const [filtredPaintings, setFilteredPaintings] = useState(paintings);


  const handleSearch = (search, created) => {
    let data = [...paintings];

    if (created) {
      data = data.filter((c) => c.created.includes(created));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredPaintings(data);
  };

  useEffect(() => {
    if (!paintings.length)
      axios.get(ALL_PAINTINGS).then(({ data }) => setPaintings(data));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [paintings]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filtredPaintings.map((c) => {
          const paintInfo = {
            img: c.imageUrl,
            name: c.name,
            info: [
              {
                title: 'Author',
                description: c.authorId.toLocaleString(),
              },
              {
                title: 'Created',
                description: c.created,
              },
              {
                title: 'Location',
                description: c.locationId,
              },
            ],
          };

          return (
            <Card
              key={c.name}
              
              {...paintInfo}
            />
          );
        })}
      </List>
    </>
  );
};
