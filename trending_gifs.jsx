import React from 'react';

class TrendingGifs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gifs: [],
            limit: 10
        }

        this.fetchNextGifs = this.fetchNextGifs.bind(this);
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
                        <img src={ gif.images.fixed_width_small.url } key={ gif.id } />

                    )
                })}
                <br />
                <button onClick={ this.fetchNextGifs } >Load More Gifs</button>
            </div>
        )
    }
}

export default TrendingGifs;