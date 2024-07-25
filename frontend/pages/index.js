import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Link from 'next/link';

const Home = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return (
            <div>
                <h1>Hola mundo</h1>
                <p>Tenes que <Link href="/login">loguearte</Link> para ver tu perfil.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Bienvenido, {user.first_name} {user.last_name}</h1>
            {user.image_url && <img src={user.image_url} alt="imagen de usuario" />}
        </div>
    );
};

export default Home;
