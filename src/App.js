import { Component, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';


const getData = async (url) => {
    const res = await fetch(url)
    return await res.json()
}

const App = () => {

    const [counter, setCounter] = useState(0);
    const [data, setData] = useState({});
    const [res, setRes] = useState('');
    const [valute, setValute] = useState(null)

    const onReset = () => {
        setCounter(0);
        setRes(0);
        if (valute) {
            setValute(valute => valute = '___');
        }
    };

    useEffect(() => {
        const getExchangeData = async () => {
            const { Valute } = await getData('https://www.cbr-xml-daily.ru/daily_json.js')
            setData(Valute)
        }
        getExchangeData()
        setValute(valute => valute = '___')

    }, []);

    const exchange = (cur) => {

        let res = (counter / Math.round(data[cur].Value)).toFixed(2);
        let fromApi = Math.round(data[cur].Value);

        console.log(fromApi);
        setRes(res);
        setValute(cur)

    }

    const handleChange = (event) => {
        setCounter(counter => counter = event.target.value);
    }

    return (
        <div className='container'>

            <h1>
                Введите cумму в рублях!</h1>
            <input type="number" value={counter} onChange={handleChange} className='input' />
            
            <div className="btns">
                <button className='btn' onClick={() => exchange('USD')}>USD</button>
                <button className='btn' onClick={() => exchange("EUR")}>EUR</button>
                <button className='btn' onClick={onReset}>Reset </button>
            </div>
            <div className='result'>Result: {res} 
            <h2> {valute} </h2>
            </div>

        </div>
    )
}

export default App;
/* class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autoplay: false,
            slide: 0
        }
    }

    changeSlide = (i) => {
        this.setState(({slide}) => ({
            slide: slide + i
        }))
    }

    toggleAutoplay = () => {
        this.setState(({autoplay}) => ({
            autoplay: !autoplay
        }))
    }

    render() {
        return (
            <Container>
                <div className="slider w-50 m-auto">
                    <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                    <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
                    <div className="buttons mt-3">
                        <button 
                            className="btn btn-primary me-2"
                            onClick={() => this.changeSlide(-1)}>-1</button>
                        <button 
                            className="btn btn-primary me-2"
                            onClick={() => this.changeSlide(1)}>+1</button>
                        <button 
                            className="btn btn-primary me-2"
                            onClick={this.toggleAutoplay}>toggle autoplay</button>
                    </div>
                </div>
            </Container>
        )
    }
}
 */

/* const Slider = (props) => {

    const [slide, setSlide] = useState(0);

    function logging () {
        console.log('log!')
    }

    useEffect(() => {
        console.log('effect')
        document.title = `Slide: ${slide}`;
        window.addEventListener('click', logging);

        return () => {
            window.removeEventListener('click', logging);
        }
    }, [slide])
   
    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    const [autoplay, setAutoplay] = useState(false);
    
    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay)
    }
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} 
                 <br /> 
                 
                  {autoplay ? 'auto' : null} 
                 
                 </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                   {  <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button> }
                </div>
            </div>
        </Container>
    )
}


function App() {
    const [slider, setSlider] = useState(true)
  return (
    <>
    <button onClick={() => {setSlider(false)}}>Click</button>
   {slider ? <Slider/> : null}  
    </>
        
  );
}

export default App;
 */