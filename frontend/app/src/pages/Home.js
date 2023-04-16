import ListHome from '../Home/ListHome.js'
import HomeByOwner from '../Home/HomeByOwner.js';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <ListHome />
            <HomeByOwner />
        </div>
    );
}

export default Home;