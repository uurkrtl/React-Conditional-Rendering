import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

export default class CharacterService {
    getCharacters() {
        return axios.get('https://rickandmortyapi.com/api/character/');
    }
}