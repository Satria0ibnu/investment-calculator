import { calculateInvestmentResults, formatter} from '../util/investment'
export default function ResultTable({info}){

    const results = calculateInvestmentResults(info);


    const error = <div className="center-flex"> <p>Invalid Duration</p></div>

    return (
        <>
        {info.duration <= 0? error : 

        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                  {results.map((result, index) => (
                    <tr key={index}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(result.totalInterest)}</td>
                        <td>{formatter.format(result.annualInvestment)}</td>
                    </tr>
                ))}
            </tbody>


        </table>
        }
        </>


    );
}