import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { pic1 } from '../constants/constants';
import { pic2 } from '../constants/constants';

const About = () => {
  return (
    <div className='about-container'>
      <h1 className='about-title' contentEditable="true ">Welcome to Tasty Bites!</h1>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}>
            <img src={pic2} alt="Image 1" className="image2" width={700}/>
          </Grid.Column>
          <Grid.Column width={13}>
            <div className="text-container2">
              <p>
                At Tasty Bites, we believe that the joy of cooking and sharing delicious food brings people together. Our mission is to inspire and empower both seasoned cooks and kitchen novices to explore the world of culinary delights.
              </p>
              <p>
                Here, you'll find a diverse collection of mouthwatering recipes from various cuisines across the globe. Whether you're looking for quick and easy weeknight meals, impressive dishes to impress your guests, or delightful treats for your sweet tooth, Tasty Bites has got you covered.
              </p>
              <p>
                Our team of passionate food enthusiasts is dedicated to curating and creating recipes that are not only delectable but also easy to follow. Each recipe on our platform is thoroughly tested to ensure that your cooking experience is enjoyable and rewarding.
              </p>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={10}>
            <div className="text-container2">
              <p>
                We understand that food preferences and dietary requirements vary, so you'll discover a wide range of options, including vegetarian, vegan, gluten-free, and more. Our goal is to cater to every palate and help you discover your inner chef.
              </p>
              <p>
                Don't worry if you're a novice in the kitchen; we've got helpful tips, cooking hacks, and step-by-step instructions to guide you through each recipe. We want to make cooking an enjoyable adventure for everyone, no matter their skill level.
              </p>
              <p>
                Tasty Bites is not just a recipe website; it's a community of food lovers. We encourage you to join our vibrant community, share your cooking experiences, and connect with fellow food enthusiasts. Together, let's explore the incredible world of flavors and create unforgettable memories around the dining table.
              </p>
              <p>
                So, whether you're a seasoned chef looking to try something new or a complete beginner taking your first steps into the culinary world, Tasty Bites is here to be your kitchen companion. Get ready to embark on a delicious journey with us and make every meal a Tasty Bite!
              </p>
              <p>
                Happy cooking and bon appétit!
              </p>
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <img src={pic1} alt="Image 2" className="image1" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default About;
