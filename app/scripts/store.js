import Session from './Models/session';
import Results from './Collections/Results';
import SavedPlaces from './Collections/SavedPlaces';
import Users from './Collections/Users';

export default {
    session: new Session(),
    results: new Results(),
    savedPlaces: new SavedPlaces(),
    users: new Users()
}