import { useState, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { User } from '../interfaces';

const FindUser: React.FC = () => {

    const [term, setTerm] = useState('');
    const [user, setUser] = useState<User>({});
    const { findUser } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.findUser);

    useEffect(() => {
        setUser(data);
    }, [data]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        findUser(term);
    };

    const renderUser = (user: User) => {

        const { id, firstName, lastName } = user;
        return (
            <div>
                <h3>User Details</h3>
                <p>Name: {firstName} {lastName}</p>
                <p>ID: {id}</p>
            </div>
        );
    };

    if (error) {
        return <h3>{error}</h3>;
    }

    if (loading) {
        return <h3>Loading...</h3>;
    }

    
    return (
        <div>
            <h2>Find User</h2>
            <form onSubmit={handleSubmit}>
                <input value={term} type="text" onChange={e => setTerm(e.target.value)}/>
                <button>Find</button>
            </form>
            <div>
                {user && renderUser(user)}
            </div>
        </div>
    );
};

export default FindUser;