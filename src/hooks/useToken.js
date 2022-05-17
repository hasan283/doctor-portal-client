import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://dry-bastion-96276.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('Data Inside useToken:', data);
                    const accessToken = data.token;
                    localStorage.setItem('Access Token', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user]);
    return [token];
};

export default useToken;