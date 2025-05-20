import Header from '../components/Header'
import Logotypes from '../components/Logotypes'
import CardList from '../components/CardList'
import { TagDescription } from '../components/Heading'

const Home = () => {
    return (
        <>
            <Header />
            <Logotypes />
            <div className="mt-[140px]">
                <TagDescription />
            </div>
            <div className="mt-[85px]">
                <CardList />
            </div>
        </>
    )
}

export default Home
