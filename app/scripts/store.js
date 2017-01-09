import Session from './Models/session';
import Results from './Collections/Results';
import SavedPlaces from './Collections/SavedPlaces';

export default {
    session: new Session(),
    results: new Results(),
    savedPlaces: new SavedPlaces()
}