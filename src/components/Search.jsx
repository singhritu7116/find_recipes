import { useState } from 'react';
import { Grid, Form, Input } from 'semantic-ui-react';

const Search = ({ setSearchedQuery }) => {
    const [value, setValue] = useState("");

    const onFormSubmit = () => {
        setSearchedQuery(value);
    }

    return (
        <Grid column={2} textAlign="center" className='search-box'>
            <Grid.Column>
                <h1 className='search-heading'>
                    Recipes from <span style={{ color: '#2185D0' }}>Tasty Bites</span>
                </h1>
                <h4>Search for your favorite recipe</h4>
                <Form onSubmit={onFormSubmit}>
                    <Input 
                        placeholder="Search for recipes"
                        action={{ icon: 'search', color: 'blue' }}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default Search;