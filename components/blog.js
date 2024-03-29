
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'


export default function Blog({ allPostsData }) {
  return (
    <div className={styles.container}>
     
<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
<h2 className={utilStyles.headingLg}>Blog</h2>
<ul className={utilStyles.list}>
  {allPostsData.map(({ id, date, title }) => (
    <li className={utilStyles.listItem} key={id}>
      <Link href={`/posts/${id}`}>{title}</Link>
      <br />
      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
    </li>
  ))}
</ul>
</section>
    </div>
  )
}



