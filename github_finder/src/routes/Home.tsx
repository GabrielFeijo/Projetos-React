import React, { useState } from 'react'
import Error from '../components/Error';
import Loading from '../components/Loading';
import Search from '../components/Search'
import User from '../components/User';
import { UserProps } from '../types/User';

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const loadUser = async (userName: string) => {
        setLoading(true)
        setError(false)
        setUser(null)
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();

        if (res.status == 404) {
            setError(true);
            setLoading(false)
            return;
        }

        const { avatar_url, bio, login, location, followers, following, public_repos, created_at } = data

        const userData: UserProps = {
            avatar_url,
            bio,
            login,
            location,
            followers,
            following,
            public_repos,
            created_at
        }
        setLoading(false)
        setUser(userData)
    }

    return (
        <div>
            <Search loadUser={loadUser} />
            {loading && <Loading />}
            {user && <User {...user} />}
            {error && <Error />}

        </div>
    )
}

export default Home