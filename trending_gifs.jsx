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
            console.log("reached 100")
        }
    }


    render () {

        const { gifs } = this.state;

        if (!gifs) {
            return "Loading"
        }

        return (
            <div className="contain-all">
                <p className="heading" >Top Trending Gifs!</p>
                <div className="gif-images">
                    {gifs.map(gif => {
                        console.log(gif)
                        return (
                            <img
                                src={ gif.images.fixed_height_small.url }
                                key={ gif.id }
                            />
                        )
                    })}
                </div>
                <br />
                <button onClick={ this.fetchNextGifs } >Load More Gifs</button>
            </div>
        )
    }
}

export default TrendingGifs;