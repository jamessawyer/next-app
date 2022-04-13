import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  const { id, title, date, contentHtml } = postData
  return <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  </Layout>
}

export async function getStaticPaths() {
  const paths = getAllPostIds()

  return {
    // 包含下面数据格式
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // params.id中的id 来自 `[id].js` 中的id
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}