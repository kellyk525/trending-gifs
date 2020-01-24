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
            .then(gifs => this.setState({ gifs: gifs.data }))
            .catch(error => console.log(error))

    }

    fetchNextGifs() {

        if (this.state.limit < 91) {
            this.setState({
                limit: this.state.limit + 10
            }, () => this.fetchGifs());
        } else {
            console.log("already 100")
        }
    }


    render () {

        const { gifs } = this.state;

        if (!gifs) {
            return "Loading"
        }

        return (
            <div>
                {gifs.map(gif => {
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