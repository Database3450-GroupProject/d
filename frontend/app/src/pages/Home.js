import ListAll from '../Home/ListAll.js'
import HomeByOwner from '../Home/HomeByOwner.js';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <HomeByOwner />
            <ListAll />
        </div>
    );
}

export default Home;