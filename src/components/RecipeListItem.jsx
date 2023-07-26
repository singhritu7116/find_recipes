import { Button, Card } from 'semantic-ui-react';

const RecipeListItem = ({ recipe }) => {

    return (
        <Card>
            <img src={recipe.image_url} alt="thumbnail" style={{ height: 170 }} />
            <Card.Content>
                <Card.Header content={recipe.title} />
                <Card.Description>
                    <h4>{recipe.publisher}</h4>
                </Card.Description>
            </Card.Content>
            <Card.Content>
                <Button 
                    href={recipe.source_url}
                    target="_blank"
                    content="Cook"
                    color="yellow"
                    size="tiny"
                />
            </Card.Content>
        </Card>
    )
}

export default RecipeListItem;