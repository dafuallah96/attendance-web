import React from 'react'
import * as firebase from 'firebase';

class List extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const users = await firebase.database().ref('/Data').once('value');
        const response = users.val();

        let firebaseUsers = [];

        Object.entries(response).forEach(([key, value]) => {
            firebaseUsers.push({
                [key]: value
            });
        });

        this.setState({
            users: firebaseUsers
        });

        firebaseUsers.forEach((item) => {
            console.log(Object.keys(item)[0]);
            console.log(Object.values(item)[0]);
        });
    }

    // downloadAudio = async (userId, fileName) => {
    //     const storage = firebase.storage();
    //     const storageRef = storage.ref();
    //     const url = await storageRef.child(`audios/${userId}/${fileName}`).getDownloadURL();

    //     window.open(url, "_blank");
    // }

    render() {
        return (
            <div style={{ paddingBottom: '24px' }}>
                <h1>Students Attendance</h1>
                <div style={{ width: 'calc(100vw *0.5)', margin: '0 auto', backgroundColor: '#e3e3e3e3' }}>
                    {this.state.users.map((item, key) =>
                        <div key={key} style={{ textAlign: 'left', padding: '8px 16px' }}>
                            <table>
                                <tr>
                            <h1>{key + 1}. {Object.values(item)[0].firstName} {Object.values(item)[0].lastName}</h1>
                                </tr>
                                <table>
                            <ul style={{ listStyle: 'none', marginLeft: '-38px' }}>
                                <li>ID: {Object.values(item)[0].ID}</li>
                                <li>Name: {Object.values(item)[0].Name}</li>
                                <li>Time: {Object.values(item)[0].Time}</li>
                            </ul>
                            {/* <h2>Emergencies</h2> */}

                            {/* <ol>
                                {Object.values(item)[0].emergencies.map((emergency, key) =>
                                    <li key={key}>Location: <pre>{emergency.name}</pre>
                                        <button onClick={() => this.downloadAudio(Object.keys(item)[0], emergency.file_name)}
                                            style={{
                                                background: '#fff',
                                                border: 'none',
                                                padding: '8px 24px',
                                                cursor: 'pointer'
                                            }}>Download Audio Recording</button>
                                    </li>
                                )}
                            </ol> */}
                        </div>
                    )}
                </div>
            </div >
        );
    }
}

export default List;