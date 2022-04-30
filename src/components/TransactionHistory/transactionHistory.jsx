import style from './transactionHistory.module.css'

export const TransactionHistory = ({ items }) => { 
    return <section>
    <table className={style.transaction_history}>
        <thead>
            <tr>
            <th className={style.cell}>Type</th>
            <th className={style.cell}>Amount</th>
            <th className={style.cell}>Currency</th>
            </tr>
        </thead>
        {items.map(({ id, type, amount, currency }) => (
            <tbody key={id } className = {style.tbody}>
                < tr>
                    <td className = {style.cell}>{ type}</td>
                    <td className = {style.cell}>{ amount}</td>
                    <td className = {style.cell}>{ currency}</td>
                </tr>
            </tbody>
        ))}
        </table>
        </section>
}