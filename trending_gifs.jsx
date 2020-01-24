import React from 'react';

class TrendingGifs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gifs: [],
            limit: 10
        }
    }

    componentDidMount() {
        this.fetchGifs();
    }

    fetchGifs() {
        fetch(`https://api.giphy.com/v1/gifs/trending?limit=${this.state.limit}&api_key=OMxGuLvUi86EfSlroz3hUEtB5kocntyz`)
            .then(response => response.json())
            .then(data => this.setState({ gifs: data.data }));
    }

    fetchNextGifs() {
        this.setState({
            limit: this.state.limit + 10
        }, () => this.fetchGifs());
    }


    render () {
        return (
            <div>
                {this.state.gifs.map(gif => {
                    console.log(gif)
                    return (
                        <img src={ gif.images.fixed_height_small_still.url } key={ gif.id } />

                    )
                })}
            </div>
        )
    }
}

export default TrendingGifs;