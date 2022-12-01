import { useEffect, useState } from 'react';
import { getPokedexEntry } from './lib/api';
import { useParams } from 'react-router-dom';
import CheckForHabitat from './CheckForHabitat';

function PokeDexEntry() {
  const { id } = useParams();
  const [pokeDex, setPokeDex] = useState(null);
  useEffect(() => {
    getPokedexEntry(id)
      .then((res) => setPokeDex(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (pokeDex === null) {
    return <p>Loading PokéData</p>;
  }

  return (
    <>
      <CheckForHabitat {...pokeDex} />
      <hr />
      <div className="column">
        <h4 className="title is-4">PokéDex Entry:</h4>
      </div>
      <p>{pokeDex.flavor_text_entries[4].flavor_text}</p>
    </>
  );
}
export default PokeDexEntry;