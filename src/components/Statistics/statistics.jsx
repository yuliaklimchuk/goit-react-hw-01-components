import style from './statistics.module.css';

export const Statistics = ({ title, stats }) => { 
    return <section className={style.statistics}>
        <h2 className={style.title}>{ title }</h2>
                    <ul className={style.stat_list}>
                    {stats.map(({ id, label, percentage }) => (
                    <li
                        key={id}
                        style={{
                        backgroundColor: getRandomHexColor(),
                        }}
                        className={style.item}
                    >
                        <span className={style.label}>{label}</span>
                        <span className={style.percentage}>{ percentage}%</span>
                    </li>
                    ))}
                </ul>
        </section>
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}