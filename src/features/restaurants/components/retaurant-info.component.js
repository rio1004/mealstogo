import React from "react";
import { SvgXml } from 'react-native-svg';
import star  from '../../../../assets/star';
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Icon, Open, Title, RestaurantCard, RestaurantCardCover, Address, Info, Rating, SpaceBetween } from "./restaurant-info-card.styles";
import { ActivityIndicator, Colors } from 'react-native-paper';

export const RestaurantInfo = ({restaurant = {}}) => {
    <ActivityIndicator animating={true} color={Colors.red800} />
    const{
        name = 'Some Restaurant', 
        icon =  "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
          ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 1.2,
        isCloseTemporarily =true,
        placeId
    } = restaurant; 

    const ratingArray = Array.from (new Array(Math.floor(rating)));
 
    return (
        <RestaurantCard elevation={5} >
            <RestaurantCardCover source={{ uri:photos[0] }} />
            <Info>
                <Text variant = "label" >{name}</Text>
                <SpaceBetween>
                    <Rating>
                        {ratingArray.map((_, i)=> (
                            <SvgXml key={`star-${placeId}-${i}`}xml={star} width={20} height={20}/>
                        ))}
                    </Rating>
                    <Open>
                    {isCloseTemporarily && (
                        <Text variant="error">
                            CLOSED TEMPORARILY
                        </Text>
                        )}
                        <Spacer position = "left" size ="large">
                            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position = "left" size ="large">
                            <Icon source={{ uri: icon }} />
                        </Spacer>
                    </Open>
                </SpaceBetween>
                
                <Address >{address}</Address>
            </Info>
        </RestaurantCard>
    );
};

