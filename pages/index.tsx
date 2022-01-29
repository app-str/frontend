import type {GetStaticProps} from 'next'
import Head from 'next/head'
import {client} from '../contentful/contenful'
import {IHomePage, IHomePageFields} from "../contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


type Props = {
    home: IHomePage
}
const Home = ({home}: Props) => {
    const {title, description} = home.fields
    return (
        <div>
            <Head>
                <title>Best store</title>
            </Head>
            <header>
                {title}
                {documentToReactComponents(description!)}
            </header>

            <main>
            </main>

            <footer>
            </footer>
        </div>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
    const home = await client.getEntries<IHomePageFields>({
        content_type: 'homePage',
        limit: 1
    })

    const homePage = home.items[0]
    
    return {
        props: {
            home: homePage
        }
    }
}