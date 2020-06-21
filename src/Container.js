import React from 'react';
import Chart from "./Chart"
import Data from "./Data";
import NavBar from "./NavBar"



class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            studentenData: Data.studentData,
            gemScores: Data.scores,
            visibleChart: Data.scores,
            studenten: Data.students

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = event => {
        const dataPerStudent = this.state.studentenData.filter((student) => {
            return student.naam === event
        })
        this.setState({
            visibleChart: dataPerStudent
        })
    }

    render() {
        return (
            <div>
                <NavBar handleClick={this.handleClick}
                    studentenData={this.state.studentenData}
                    studenten={this.state.studenten}
                />
                <Chart Scores={this.state.visibleChart} />
            </div>

        )
    }
}

export default Container;