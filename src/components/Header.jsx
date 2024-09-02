import bagMoney from '../assets/investment-calculator-logo.png'

export default function Header() {
    
    return (
        <header id="header">
            <img src={bagMoney} alt="a bag of money and gold" />
            <h1>React Investment Calculator</h1>
        </header>
       

    );
}