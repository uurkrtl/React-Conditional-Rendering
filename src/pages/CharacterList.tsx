import {useState, useEffect} from 'react';
import CharacterService from "../services/characterService.ts";

function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const characterService = new CharacterService();
        characterService.getCharacters().then((result) => setCharacters(result.data.results));
    })

    const filteredCharacters = characters.filter(
        (character) =>
            character.name.toLowerCase().includes(filter.toLowerCase()) ||
            character.status.toLowerCase().includes(filter.toLowerCase()) ||
            character.species.toLowerCase().includes(filter.toLowerCase()) ||
            character.gender.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="container">
            <div className="input-group">
                <span className="input-group-text" id="basic-addon3">Write a filter</span>
                <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3 basic-addon4"
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>

            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Species</th>
                    <th scope="col">Gender</th>
                </tr>
                </thead>
                <tbody>
                {filteredCharacters.map((character) => (
                    <tr key={character.id}>
                        <td>{character.name}</td>
                        <td>{character.status}</td>
                        <td>{character.species}</td>
                        <td>{character.gender}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default CharacterList;
