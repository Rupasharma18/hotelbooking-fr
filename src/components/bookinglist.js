import Axios from 'axios';
import React from 'react';


class Bookinglist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],

        };
    }

    componentDidMount() {
        Axios.get('http://localhost:8000/user')
            .then(res => {
                this.setState({
                    data: res.data
                })
                console.log(res.data, "ressssssssssssssss")
            })
            .catch(err => {
                console.log(err, "errrrrrrrrrrrrrrr")
            })
    }

    render() {
        console.log(this.state.data, "satae")
        return (
            <div className="container text-center">
                <h1>Welcome to booklist</h1>
                <table>

                    <thead>
                        <tr>
                            <th scope="col ">Name</th>
                            <th scope="col">Entry Date</th>
                            <th scope="col">Phone no.</th>
                            <th scope="col">Exit Date</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.state.data.map((item, i) => {
                            return (<tr key={i}>
                                <td data-label="Name">{item.name}</td>
                                <td data-label="Entry Date">{item.enterDate}</td>
                                <td data-label="Phone no.">{item.mobile_number}</td>
                                <td data-label="Exit Date">{item.exitDate}</td>
                            </tr>
                            )

                        })}
                    </tbody>
                </table>

            </div>
        );
    }

}

export default Bookinglist;