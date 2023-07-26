
import { Button } from "semantic-ui-react";
import Header from "../components/common/Header";
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <Header  title="" bgClass="bg-image" >
            <h2 className="hello">Confused what to do with your vegetables and fruits?? Go for-</h2>
            <Button 
                className="searchButton"
                content="SEARCH RECIPES"
               //color="primary"
                as={Link}
                to="/recipes"
                size="big"
            />
            
        </Header>
    )
}

export default Home;