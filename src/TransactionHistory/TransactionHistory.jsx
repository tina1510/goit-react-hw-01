import css from "./TransactionHistory.module.css"
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.headerItem}>Type</th>
          <th className={css.headerItem}>Amount</th>
          <th className={css.headerItem}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.line} key={id}>
            <td className={css.lineItem}>{type}</td>
            <td className={css.lineItem}>{amount}</td>
            <td className={css.lineItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;