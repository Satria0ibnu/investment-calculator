import InputForm from './InputForm'
import { useState } from 'react';
import ResultTable from './ResultTable';

export default function Main() {
    const [inputData, setInputData] = useState(
        {   initialInvestment: 0,
            annualInvestment: 0,
            expectedReturn: 0,
            duration: 1,
         })
    
        
        // my initial solution
        // function inputChangeHandler (event) {
        //     const {name, value} = event.target;
        //     const updatedInfo = {
        //         ...inputData,
        //         [name] : Number(value) 
        //     };
            
        //     setInputData(updatedInfo);
        // }

        // AI solution
        function inputChangeHandler(event) {
            const { name, value } = event.target;
        
            setInputData((prevState) => ({
                ...prevState,
                [name]: Number(value),
            }));
        }



    return (
        <>
        <section id="user-input">        	
            <div className="input-group">
                <InputForm info={inputData} name='initialInvestment' changeHandler={inputChangeHandler}/>
                <InputForm info={inputData} name='annualInvestment'changeHandler={inputChangeHandler}/>
            </div>
            <div className="input-group">
                <InputForm info={inputData} name='expectedReturn'changeHandler={inputChangeHandler}/>
                <InputForm info={inputData} name='duration'changeHandler={inputChangeHandler}/>
            </div>   
        </section>
        <ResultTable info={inputData}/>
        </>
    );

}