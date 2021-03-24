import Head from 'next/head'

const Meta = ({title, keywords,description}) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'promiseQ',
  keywords: 'IoT Camera Analytics,False Alarm Filtering Solution',
  description: 'Our mission is to reduce false alarms in video-based intruder detection systems. With our hybrid approach of artificial intelligence and humans in the loop We Make AI Human.',
}

export default Meta

